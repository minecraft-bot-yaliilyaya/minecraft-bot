import { inject, injectable } from 'inversify';
import { Request, Response } from 'express';
import axios from "axios";
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
    async itemTest(req: Request, res: Response) {
        const response = await axios.post('http://localhost:3000/find/item', {'items': ["oak_log"]}, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        res.json(response.data);
    }
}
