import {inject, injectable} from 'inversify';
import { Request, Response } from 'express';
import axios from 'axios';
import {TYPES} from "../container/types";
import {WorldItemRepository} from "../repository/WorldItemRepository";
import {Vec3} from "vec3";
import {DigService} from "../services/DigService";


@injectable()
export class DigController {

    constructor(
        @inject(TYPES.Repository.WorldItemRepository) private worldItemRepository: WorldItemRepository,
        @inject(TYPES.Service.DigService) private digService: DigService
    ) {}

    async item(req: Request, res: Response) {

        const point:Vec3 = new Vec3(
            req.body.point.x,
            req.body.point.y,
            req.body.point.z);

        const itemPosition = this.worldItemRepository.findFirstByArea(point, req.body.items);

        if (!itemPosition) {
            res.json({
                error: "ERR_INVALID_TARGET",
            });
            return;
        }

        const canDigBlock = await this.digService.canDigBlock(itemPosition);
        if (!canDigBlock) {
            res.json({
                error: "ERR_NOT_IN_RANGE",
                position: itemPosition
            });
            return;
        }
        await this.digService.digBlock(itemPosition);
        res.json({
            success: true,
            position: itemPosition
        });
    }
}
