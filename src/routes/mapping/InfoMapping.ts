import { Router } from 'express';
import { IRoute } from '../routes.interface';
import {TYPES} from "../../container/types";
import {inject, injectable} from "inversify";
import {InventoryController} from "../../controllers/InventoryController";
import {InfoController} from "../../controllers/InfoController";


@injectable()
export class InfoMapping implements IRoute {
    public path = '/info';
    public router = Router();

    constructor(
        @inject(TYPES.Controller.InfoController) private controller: InfoController
    ) {
        this.router.get("/all", this.controller.all.bind(this.controller));
    }

}