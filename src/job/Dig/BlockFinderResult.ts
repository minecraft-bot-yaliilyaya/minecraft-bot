import {Vec3} from "vec3";
import Enumerable from "node-enumerable";

/**
 * Выносим запрос в конфигурацтию конфигурация должна настраиваться относительно стратегии добычи или поиска
 * TODO:: исключать блоки из поиска если они контактируют с водой, и лавой. проблемы возникнут с песком, и др сыпусими материалами
 * @param resource
 * @constructor
 */
export class BlockFinderResult {

    resource = null;
    public result = [];
    //TODO:: вообще нужно внедрить поиск по названиям и по группе блоков
    public blockIds = [];
    public range = [128];
    public startPosition = null;
    public botPosition = null;
    public count = 100;
    public applyfilterFloorBlock = false;

    constructor(resource) {
        this.resource = resource;
    }


    public find() {
        for (const maxDistance of Enumerable.from(this.range)) {
            console.log(`find block ${this.blockIds} in range ${maxDistance}`)
            this.result = this.resource({
                matching: this.blockIds,
                maxDistance: maxDistance,
                count: this.count,
                point: this.startPosition
            })
            if (this.applyfilterFloorBlock) {
                this.filterDigBlock()
            }
            if (this.result.length > 0) {
                return this;
            }
        }
        this.result = []
        return this;
    }

    public filterDigBlock() {
        const floorBlock = new Vec3(
            Math.floor(this.botPosition.x),
            Math.floor(this.botPosition.y),
            Math.floor(this.botPosition.z)
        )

        return this.result.filter((block) => {
            return !(
                floorBlock.x === block.x &&
                floorBlock.y <= block.y + 2 &&
                floorBlock.z === block.z
            )
        })
    }

    public sortByBotPosition() {
        this.result.sort((a, b) => {
            const aDepth = Math.round(this.botPosition.y - a.y)
            const aDist = a.distanceTo(this.botPosition) + (aDepth > 0 ? 5 : 0)

            const bDepth = Math.round(this.botPosition.y - b.y)
            const bDist = b.distanceTo(this.botPosition) + (bDepth > 0 ? 5 : 0)

            return aDist - bDist
        })
        return this;
    }

    public first = () => this.result ? this.result.shift() : null
}