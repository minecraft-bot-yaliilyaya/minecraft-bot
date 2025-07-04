import { inject, injectable } from "inversify";
import {Request, Response} from "express";
import {TYPES} from "../container/types";
import {InventoryRepository} from "../repository/InventoryRepository";


@injectable()
export class InventoryController {
    constructor(
        @inject(TYPES.Repository.InventoryRepository) private inventoryRepository: InventoryRepository
    ) {}

    async findAll(req: Request, res: Response) {
        const items = this.inventoryRepository.findAll();
        res.json(items);
    }
}