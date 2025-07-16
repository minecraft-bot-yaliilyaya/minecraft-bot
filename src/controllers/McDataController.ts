import {inject, injectable} from 'inversify';
import { Request, Response } from 'express';
import {TYPES} from "../container/types";
import {MineflayerBotService} from "../services/MineflayerBotService";
import { goals } from 'mineflayer-pathfinder'
import {McDataRepository} from "../repository/McDataRepository";

@injectable()
export class McDataController {

    constructor(
        @inject(TYPES.Repository.McDataRepository) private mcDataRepository: McDataRepository
    ) {}

    async recipes(req: Request, res: Response)
    {
        res.json(this.mcDataRepository.getMcData().recipes);
    }

    async blocks(req: Request, res: Response)
    {
        //blocksByName
        res.json(this.mcDataRepository.getMcData().blocksByName);
    }

    async items(req: Request, res: Response)
    {
        res.json(this.mcDataRepository.getMcData().itemsByName);
    }
}
