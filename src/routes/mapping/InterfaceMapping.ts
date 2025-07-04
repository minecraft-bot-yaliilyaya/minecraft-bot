import { Router } from 'express';
import { IRoute } from '../routes.interface';
import {TYPES} from "../../container/types";
import {inject, injectable} from "inversify";
import {InterfaceController} from "../../controllers/InterfaceController";

@injectable()
export class InterfaceMapping implements IRoute {
    public path = '/interface';
    public router = Router();

    constructor(
        @inject(TYPES.Controller.InterfaceController) private controller: InterfaceController
    ) {
        // this.router.get("", this.controller.getAllUsers.bind(this.controller));
        // this.router.get("/add", this.controller.addNextUser.bind(this.controller));
        // this.router.get("/:id", this.controller.getUserById.bind(this.controller));
        // this.router.post("", this.controller.createUser.bind(this.controller));
    }

}