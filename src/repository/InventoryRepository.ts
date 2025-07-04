import { inject, injectable } from "inversify";
import {TYPES} from "../container/types";
import {MineflayerBotService} from "../services/MineflayerBotService";

@injectable()
export class InventoryRepository {

    constructor(
        @inject(TYPES.BotService) private botService: MineflayerBotService
    ) {}

    findAll() {
        return this.botService.getBot()?.inventory.items();
    }
}