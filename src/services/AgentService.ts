import { inject, injectable } from "inversify";
import { UserRepository } from "../repositories/UserRepository";
import { User } from "../entities/User";
import { TYPES } from "../container/types";
import {MineflayerBotService} from "./MineflayerBotService";
import {Request, Response} from "express";
import {Item} from "prismarine-item";

@injectable()
export class AgentService {
    constructor(
        @inject(TYPES.BotService) private botService: MineflayerBotService
    ) {}

    async equip(foodName: string) {
        const bot = this.botService.getBot();
        const food: Item | null = bot?.inventory?.items()?.find(item => item.name === foodName) ?? null;

        if (food) {
            await bot?.equip(food, 'hand');
            await new Promise(resolve => setTimeout(resolve, 500));
        } else {
            console.log('В инвентаре нет ' + foodName);
        }
    }

    async activateItem() {
        const bot = this.botService.getBot();
        try {
            bot?.activateItem(); // Правый клик (еда)
            console.log('Бот ест хлеб...');

            // Ждём окончания анимации (примерно 2 секунды для хлеба)
            await new Promise(resolve => setTimeout(resolve, 2000));
            console.log('Бот закончил есть хлеб!');
            return true;
        } catch (err) {
            console.error('Ошибка при поедании еды:', err);
            return false;
        } finally {
        }
    }
}
