import { Router } from 'express';
import { IRoute } from '../routes.interface';
import {TYPES} from "../../container/types";
import {inject, injectable} from "inversify";
import {FindController} from "../../controllers/FindController";


@injectable()
export class FindMapping implements IRoute {
    public path = '/find';
    public router = Router();

    constructor(
        @inject(TYPES.Controller.FindController) private controller: FindController
    ) {
        this.router.post("/item", this.controller.item.bind(this.controller));
        this.router.post("/material", this.controller.material.bind(this.controller));
        this.router.post("/aria", this.controller.aria.bind(this.controller));
    }

}