import { inject, injectable } from "inversify";
import {TYPES} from "../container/types";
import {MineflayerBotService} from "../services/MineflayerBotService";
import {Item} from "prismarine-item";

@injectable()
export class InventoryRepository {

    constructor(
        @inject(TYPES.BotService) private botService: MineflayerBotService
    ) {}

    findAll() {
        let items: Array<Item> = this.botService.getBot()?.inventory.items() ?? new Array<Item>;
        if (this.botService.includeThat45Slot()) {
            const item:Item | null | undefined  = this.botService.getBot()?.inventory.slots[45];
            if (item) {
                items.push(item);
            }
        }
        return items;
    }
}