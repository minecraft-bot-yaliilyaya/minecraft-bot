import { Router } from 'express';
import { IRoute } from './routes.interface';
import { UserController } from '../controllers/UserController';
import {TYPES} from "../container/types";
import {inject, injectable} from "inversify";

@injectable()
export class UserRoutes implements IRoute {
    public path = '/users';
    public router = Router();

    constructor(
        @inject(TYPES.Controller.UserController) private controller: UserController
    ) {
        this.router.get("", this.controller.getAllUsers.bind(this.controller));
        this.router.get("/add", this.controller.addNextUser.bind(this.controller));
        this.router.get("/:id", this.controller.getUserById.bind(this.controller));
        this.router.post("", this.controller.createUser.bind(this.controller));
    }

}