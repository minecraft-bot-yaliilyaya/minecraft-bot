import { inject, injectable } from "inversify";
import { TYPES } from "../container/types";
import {MineflayerBotService} from "./MineflayerBotService";
import {Vec3} from "vec3";
import {Block} from "prismarine-block";

@injectable()
export class DigService {
    constructor(
        @inject(TYPES.BotService) private botService: MineflayerBotService
    ) {}

    async canDigBlock(blockPosition: Vec3): Promise<boolean>
    {
        const bot = this.botService.getBot();

        const block: Block|null = bot?.blockAt(blockPosition) ?? null;
        return block ? bot?.canDigBlock(block) ?? false : false;
    }

    async digBlock(itemPosition: Vec3) {
        const bot = this.botService.getBot();
        const block: Block|null = bot?.blockAt(itemPosition) ?? null;

        if (block !== null) {
            await bot?.dig(block);
        }
    }
}
