import { Router } from 'express';
import {AppRoutes, IRoute} from './routes.interface';

import {TYPES} from "../container/types";
import {inject, injectable} from "inversify";

import { UserRoutes } from './mapping/UserRoutes';

import {DefaultRoutes} from "./mapping/DefaultRoutes";
import {InventoryMapping} from "./mapping/InventoryMapping";
import {InfoMapping} from "./mapping/InfoMapping";
import {AgentMapping} from "./mapping/AgentMapping";
import {FindMapping} from "./mapping/FindMapping";
import {DigMapping} from "./mapping/DigMapping";
import {MoveMapping} from "./mapping/MoveMapping";
import {McDataMapping} from "./mapping/McDataMapping";

@injectable()
export class RouteBuilder {
    private routes: AppRoutes

    constructor(
        @inject(TYPES.Routes.UserRoutes) private userRoutes: UserRoutes,
        @inject(TYPES.Routes.DefaultRoutes) private defaultRoutes: DefaultRoutes,
        @inject(TYPES.Routes.InventoryMapping) private inventoryRoutes: InventoryMapping,
        @inject(TYPES.Routes.InfoMapping) private infoMapping: InfoMapping,
        @inject(TYPES.Routes.AgentMapping) private agentMapping: AgentMapping,
        @inject(TYPES.Routes.FindMapping) private findMapping: FindMapping,
        @inject(TYPES.Routes.DigMapping) private digMapping: DigMapping,
        @inject(TYPES.Routes.MoveMapping) private moveMapping: MoveMapping,
        @inject(TYPES.Routes.McDataMapping) private mcDataMapping: McDataMapping
    ) {
        this.routes = [
            this.userRoutes,
            this.defaultRoutes,
            this.inventoryRoutes,
            this.infoMapping,
            this.agentMapping,
            this.findMapping,
            this.digMapping,
            this.moveMapping,
            this.mcDataMapping,
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

