import { inject, injectable } from "inversify";
import {TYPES} from "../container/types";
import {MineflayerBotService} from "../services/MineflayerBotService";
import {Item} from "prismarine-item";

@injectable()
export class InventoryRepository {

    private items: Array<Item> = new Array<Item>;

    constructor(
        @inject(TYPES.BotService) private botService: MineflayerBotService
    ) {}

    findAll() {

        // return this.findGroupBySlot();
        let items:{name: string, type: number, count: number}[] = [];
        this.findGroupBySlot().forEach(function(item) {
            let storeItem = items.find(storeItem2 => storeItem2.name === item.name);
            if (!storeItem) {
                items.push({
                    name: item.name,
                    type: item.type,
                    count: item.count
                });
            } else {
                storeItem.count += item.count;
            }
        })
        return items;
    }

    findGroupBySlot()
    {
        this.items = this.botService.getBot()?.inventory?.items() ?? new Array<Item>;
        if (this.botService.includeThat45Slot()) {
            const item:Item | null | undefined  = this.botService.getBot()?.inventory.slots[45];
            if (item) {
                this.items.push(item);
            }
        }
        return this.items;
    }
}