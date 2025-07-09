import { inject, injectable } from 'inversify';
import { Request, Response } from 'express';
import {TYPES} from "../container/types";
import {WorldItemRepository} from "../repository/WorldItemRepository";

@injectable()
export class FindController {

    constructor(
        @inject(TYPES.Repository.WorldItemRepository) private worldItemRepository: WorldItemRepository
    ) {}

    async item(req: Request, res: Response) {

        const item = this.worldItemRepository.findByName(req.body.items);

        res.json(item);
    }

    async material(req: Request, res: Response) {

        const item = this.worldItemRepository.findByMaterial(req.body.material);

        res.json(item);
    }
}
