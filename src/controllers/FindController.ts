import { inject, injectable } from 'inversify';
import { Request, Response } from 'express';
import {TYPES} from "../container/types";
import {WorldItemRepository} from "../repository/WorldItemRepository";
import {Vec3} from "vec3";

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

    async aria(req: Request, res: Response) {

        const point:Vec3 = new Vec3(
            req.body.point.x,
            req.body.point.y,
            req.body.point.z);

        const item = this.worldItemRepository.findAllByArea(point);

        res.json(item);
    }
}
