import { Router } from 'express';
import { IRoute } from '../routes.interface';
import {TYPES} from "../../container/types";
import {inject, injectable} from "inversify";
import {InventoryController} from "../../controllers/InventoryController";
import {InfoController} from "../../controllers/InfoController";
import {AgentController} from "../../controllers/AgentController";


@injectable()
export class AgentMapping implements IRoute {
    public path = '/agent';
    public router = Router();

    constructor(
        @inject(TYPES.Controller.AgentController) private controller: AgentController
    ) {
        this.router.get("/equip/:foodName", this.controller.equip.bind(this.controller));
        this.router.get("/activateItem", this.controller.activateItem.bind(this.controller));
        this.router.get("/eatFood/:foodName", this.controller.eatFood.bind(this.controller));
    }

}