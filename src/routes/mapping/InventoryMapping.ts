import { Router } from 'express';
import { IRoute } from '../routes.interface';
import {TYPES} from "../../container/types";
import {inject, injectable} from "inversify";
import {InventoryController} from "../../controllers/InventoryController";


@injectable()
export class InventoryMapping implements IRoute {
    public path = '/inventory';
    public router = Router();

    constructor(
        @inject(TYPES.Controller.InventoryController) private controller: InventoryController
    ) {
        // this.router.get("", this.controller.getAllUsers.bind(this.controller));
        // this.router.get("/add", this.controller.addNextUser.bind(this.controller));
        // this.router.get("/:id", this.controller.getUserById.bind(this.controller));
        // this.router.post("", this.controller.createUser.bind(this.controller));
    }

}