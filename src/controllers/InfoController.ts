import { inject, injectable } from "inversify";
import {Request, Response} from "express";
import {TYPES} from "../container/types";
import {MineflayerBotService} from "../services/MineflayerBotService";


@injectable()
export class InfoController {
    constructor(
        @inject(TYPES.BotService) private botService: MineflayerBotService
    ) {}

    async all(req: Request, res: Response) {

        const bot = this.botService.getBot();
        if (!bot) {
            res.json({});
            return;
        }

        //TODO:: Заменить healthMax, foodMax
        res.json({
            health: bot.health,  // Возвращает текущее здоровье бота (от 0 до 20)
            healthMax: 20,
            food: bot.food,             // Уровень голода (0-20)
            saturation: bot.foodSaturation,  // Уровень насыщения (0.0 - 20.0)
            foodMax: 20,
            isHungry: bot.food < 3     // Проверка, голоден ли бот
        });
    }
}