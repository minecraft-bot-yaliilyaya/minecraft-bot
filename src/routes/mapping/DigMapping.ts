import { Router } from 'express';
import { IRoute } from '../routes.interface';
import {TYPES} from "../../container/types";
import {inject, injectable} from "inversify";
import {InventoryController} from "../../controllers/InventoryController";
import {InfoController} from "../../controllers/InfoController";
import {AgentController} from "../../controllers/AgentController";
import {FindController} from "../../controllers/FindController";
import {DigController} from "../../controllers/DigController";


@injectable()
export class DigMapping implements IRoute {
    public path = '/dig';
    public router = Router();

    constructor(
        @inject(TYPES.Controller.DigController) private controller: DigController
    ) {
        this.router.get("/item", this.controller.item.bind(this.controller));
    }

}