import { Router } from 'express';
import { IRoute } from '../routes.interface';
import {TYPES} from "../../container/types";
import {inject, injectable} from "inversify";
import {MoveController} from "../../controllers/MoveController";


@injectable()
export class MoveMapping implements IRoute {
    public path = '/move';
    public router = Router();

    constructor(
        @inject(TYPES.Controller.MoveController) private controller: MoveController
    ) {
        this.router.post("/to", this.controller.to.bind(this.controller));
    }

}