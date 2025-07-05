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
        this.router.get("/equip", this.controller.equip.bind(this.controller));
    }

}