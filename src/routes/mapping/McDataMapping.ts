import { Router } from 'express';
import { IRoute } from '../routes.interface';
import {TYPES} from "../../container/types";
import {inject, injectable} from "inversify";
import {InventoryController} from "../../controllers/InventoryController";
import {InfoController} from "../../controllers/InfoController";
import {McDataController} from "../../controllers/McDataController";


@injectable()
export class McDataMapping implements IRoute {
    public path = '/mc-data';
    public router = Router();

    constructor(
        @inject(TYPES.Controller.McDataController) private controller: McDataController
    ) {
        this.router.get("/recipes", this.controller.recipes.bind(this.controller));
        this.router.get("/blocks", this.controller.blocks.bind(this.controller));
        this.router.get("/items", this.controller.items.bind(this.controller));
    }

}