import { inject, injectable } from "inversify";
import {TYPES} from "../container/types";
import {MineflayerBotService} from "../services/MineflayerBotService";
import {MINEFLAYER_CONFIG} from "../../config/mineflayer";
import {IndexedData} from "minecraft-data";

@injectable()
export class McDataRepository {
    private mcData: IndexedData | null = null;

    constructor(
        @inject(TYPES.BotService) private botService: MineflayerBotService
    ) {}

    public getMcData():IndexedData
    {
        return this.mcData = this.mcData ?? require('minecraft-data')(MINEFLAYER_CONFIG.version);
    }

}