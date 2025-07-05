import { Router } from 'express';
import { IRoute } from '../routes.interface';
import {TYPES} from "../../container/types";
import {inject, injectable} from "inversify";
import {InventoryController} from "../../controllers/InventoryController";
import {InfoController} from "../../controllers/InfoController";
import {AgentController} from "../../controllers/AgentController";
import {FindController} from "../../controllers/FindController";


@injectable()
export class FindMapping implements IRoute {
    public path = '/find';
    public router = Router();

    constructor(
        @inject(TYPES.Controller.FindController) private controller: FindController
    ) {
        this.router.get("/item", this.controller.item.bind(this.controller));
    }

}