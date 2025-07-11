import { Router } from 'express';
import { IRoute } from '../routes.interface';
import {TYPES} from "../../container/types";
import {inject, injectable} from "inversify";
import {DigController} from "../../controllers/DigController";


@injectable()
export class DigMapping implements IRoute {
    public path = '/dig';
    public router = Router();

    constructor(
        @inject(TYPES.Controller.DigController) private controller: DigController
    ) {
        this.router.post("/item", this.controller.item.bind(this.controller));
    }

}