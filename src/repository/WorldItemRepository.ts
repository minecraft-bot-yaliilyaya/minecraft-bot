import { inject, injectable } from "inversify";
import {TYPES} from "../container/types";
import {MineflayerBotService} from "../services/MineflayerBotService";
import {Item} from "prismarine-item";
import {FindBlockOptions} from "mineflayer";

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
}