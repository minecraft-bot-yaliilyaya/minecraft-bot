import { inject, injectable } from "inversify";
import {Request, Response} from "express";
import {TYPES} from "../container/types";
import {InventoryRepository} from "../repository/InventoryRepository";
import {MineflayerBotService} from "../services/MineflayerBotService";
import {Item} from "prismarine-item";
import {AgentService} from "../services/AgentService";


@injectable()
export class AgentController {
    constructor(
        @inject(TYPES.Service.AgentService) private agentService: AgentService
    ) {}

    async equip(req: Request, res: Response) {
        const foodName = req.params.foodName;

        await this.agentService.equip(foodName);

        res.json(['ok']);
    }

    async activateItem(req: Request, res: Response) {
        await this.agentService.activateItem();

        res.json(['ok']);
    }

    async eatFood(req: Request, res: Response) {
        const foodName = req.params.foodName;

        await this.agentService.equip(foodName);
        await this.agentService.activateItem();

        res.json(['ok']);
    }


}