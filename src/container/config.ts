import { Container } from "inversify";
import { TYPES } from "./types";
import { UserController } from "../controllers/UserController";
import { UserService } from "../services/UserService";
import { UserRepository } from "../repositories/UserRepository";
import {MineflayerBotService} from "../services/MineflayerBotService";
import {MineflayerBotBuilder} from "../builder/MineflayerBotBuilder";

import {RouteBuilder} from "../routes/RouteBuilder";
import {UserRoutes} from "../routes/mapping/UserRoutes";
import {DefaultController} from "../controllers/DefaultController";
import {DefaultRoutes} from "../routes/mapping/DefaultRoutes";
import {InterfaceController} from "../controllers/InterfaceController";
import {InterfaceMapping} from "../routes/mapping/InterfaceMapping";

const container = new Container();

container.bind<MineflayerBotService>(TYPES.BotService).to(MineflayerBotService);
container.bind<MineflayerBotBuilder>(TYPES.MineflayerBotBuilder).to(MineflayerBotBuilder);

container.bind<UserService>(TYPES.UserService).to(UserService);
container.bind<UserRepository>(TYPES.UserRepository).to(UserRepository);

// Route
container.bind<RouteBuilder>(TYPES.RouteBuilder).to(RouteBuilder);
container.bind<DefaultRoutes>(TYPES.Routes.DefaultRoutes).to(DefaultRoutes);
container.bind<UserRoutes>(TYPES.Routes.UserRoutes).to(UserRoutes);
container.bind<InterfaceMapping>(TYPES.Routes.InterfaceMapping).to(InterfaceMapping);

// Controller
container.bind<DefaultController>(TYPES.Controller.DefaultController).to(DefaultController);
container.bind<UserController>(TYPES.Controller.UserController).to(UserController);
container.bind<InterfaceController>(TYPES.Controller.InterfaceController).to(InterfaceController);

export { container };