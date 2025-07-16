import { inject, injectable } from "inversify";
import {Request, Response} from "express";
import {TYPES} from "../container/types";
import {MineflayerBotService} from "../services/MineflayerBotService";
import {Entity, EntityType} from "prismarine-entity";
import {McDataRepository} from "../repository/McDataRepository";


@injectable()
export class InfoController {
    constructor(
        @inject(TYPES.BotService) private botService: MineflayerBotService,
        @inject(TYPES.Repository.McDataRepository) private mcDataRepository: McDataRepository
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

    async entities(req: Request, res: Response) {
        const bot = this.botService.getBot();
        if (!bot) {
            res.json({});
            return;
        }
        const entities:any[] = [];

        const items = this.mcDataRepository.getMcData().items;

        for (const entityId in bot.entities) {
            const entity:Entity = bot.entities[entityId];
            if (entity.kind === 'Drops'
                && bot.entity.position.distanceTo(entity.position) < 10
            ) {
                const metadata:any = entity.metadata[7];
                if (metadata?.itemId) {
                    entities.push({
                        item: items[metadata.itemId],
                        metadata: entity.metadata,
                        position: entity.position,
                    });
                }
            }
        }

        res.json(entities);
    }
}