import { Router } from 'express';
import {AppRoutes, IRoute} from './routes.interface';

import {TYPES} from "../container/types";
import {inject, injectable} from "inversify";

import { UserRoutes } from './mapping/UserRoutes';
import {InterfaceMapping} from "./mapping/InterfaceMapping";
import {DefaultRoutes} from "./mapping/DefaultRoutes";

@injectable()
export class RouteBuilder {
    private routes: AppRoutes

    constructor(
        @inject(TYPES.Routes.UserRoutes) private userRoutes: UserRoutes,
        @inject(TYPES.Routes.DefaultRoutes) private defaultRoutes: DefaultRoutes,
        @inject(TYPES.Routes.InterfaceMapping) private interfaceRoutes: InterfaceMapping
    ) {
        this.routes = [
            this.userRoutes,
            this.defaultRoutes,
            this.interfaceRoutes,
        ];
    }

    public registerRoutes(app: Router): void {
        this.routes.forEach((route) => {

            // console.log(`bind "${route.path}"`);
            app.use(route.path, route.router);
        });

        // app.use((req, res, next) => {
        //     console.log(`[${req.method}] ${req.url}`);
        //     next();
        // });
    }
}

