import { inject, injectable } from "inversify";
import {TYPES} from "../container/types";
import {MineflayerBotService} from "../services/MineflayerBotService";
import {FindBlockOptions} from "mineflayer";
import {Vec3} from "vec3";
import {Block} from "prismarine-block";

@injectable()
export class WorldItemRepository {

    constructor(
        @inject(TYPES.BotService) private botService: MineflayerBotService
    ) {}

    public findByName(names: string[]) {
        const bot = this.botService.getBot();

        const options: FindBlockOptions = {
            count: 1,
            maxDistance: 252,
            matching: (block) => (names.some((name) => name == block.name))
        };

        return bot?.findBlock(options);
    }

    public findByMaterial(material: string) {
        const bot = this.botService.getBot();

        const options: FindBlockOptions = {
            count: 100,
            maxDistance: 252,
            matching: (block) => material == block.material
        };

        return bot?.findBlock(options);
    }

    findAllByArea(point: Vec3)
    {
        const bot = this.botService.getBot();

        const options: FindBlockOptions = {
            count: 500,
            maxDistance: 5,
            point: point,
            matching: (block) => block.name !== "air"
        };

        const blockPositions:Vec3[] = bot?.findBlocks(options) ?? [];

        // let blocks: Block[] = [];
        let blocks:{name: string, material: string, count: number}[] = [];

        blockPositions.forEach((point) => {
            const block: Block | null = bot?.blockAt(point) ?? null
            if (!block) {
                return;
            }

            let storeBlock = blocks.find(storeItem2 => storeItem2.name === block.name);
            if (!storeBlock) {
                blocks.push({
                    name: block.name ?? "",
                    material: block.material ?? "",
                    count: 1
                });
            } else {
                storeBlock.count++;
            }
        });

        return blocks;
    }
}