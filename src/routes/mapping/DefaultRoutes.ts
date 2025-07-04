import { Router } from 'express';
import { IRoute } from '../routes.interface';
import {TYPES} from "../../container/types";
import {inject, injectable} from "inversify";
import {DefaultController} from "../../controllers/DefaultController";

@injectable()
export class DefaultRoutes implements IRoute {
    public path = '';
    public router = Router();

    constructor(
        @inject(TYPES.Controller.DefaultController) private controller: DefaultController
    ) {
        this.router.get("", this.controller.mainPage.bind(this.controller));
    }
}