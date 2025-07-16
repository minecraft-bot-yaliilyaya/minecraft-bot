import {inject, injectable} from 'inversify';
import { Request, Response } from 'express';
import {TYPES} from "../container/types";
import {MineflayerBotService} from "../services/MineflayerBotService";
import { goals } from 'mineflayer-pathfinder'

@injectable()
export class MoveController {

    constructor(
        @inject(TYPES.BotService) private botService: MineflayerBotService
    ) {}

    async to(req: Request, res: Response) {

        const bot = this.botService.getBot();

        try {
            await bot?.pathfinder?.goto(new goals.GoalNear(req.body.point.x, req.body.point.y, req.body.point.z, 2));
        } catch (e: any) {
            res.json([e?.message]);
            return;
        }

        res.json(['to']);
    }
}
