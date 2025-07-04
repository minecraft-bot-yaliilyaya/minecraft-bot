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
import {InventoryController} from "../controllers/InventoryController";
import {InventoryMapping} from "../routes/mapping/InventoryMapping";
import {InfoController} from "../controllers/InfoController";
import {InfoMapping} from "../routes/mapping/InfoMapping";

import {InventoryRepository} from "../repository/InventoryRepository";

const container = new Container();

container.bind<MineflayerBotService>(TYPES.BotService).to(MineflayerBotService);
container.bind<MineflayerBotBuilder>(TYPES.MineflayerBotBuilder).to(MineflayerBotBuilder);

container.bind<UserService>(TYPES.UserService).to(UserService);
container.bind<UserRepository>(TYPES.UserRepository).to(UserRepository);

// Route
container.bind<RouteBuilder>(TYPES.RouteBuilder).to(RouteBuilder);
container.bind<DefaultRoutes>(TYPES.Routes.DefaultRoutes).to(DefaultRoutes);
container.bind<UserRoutes>(TYPES.Routes.UserRoutes).to(UserRoutes);
container.bind<InventoryMapping>(TYPES.Routes.InventoryMapping).to(InventoryMapping);
container.bind<InfoMapping>(TYPES.Routes.InfoMapping).to(InfoMapping);

// Controller
container.bind<DefaultController>(TYPES.Controller.DefaultController).to(DefaultController);
container.bind<UserController>(TYPES.Controller.UserController).to(UserController);
container.bind<InventoryController>(TYPES.Controller.InventoryController).to(InventoryController);
container.bind<InfoController>(TYPES.Controller.InfoController).to(InfoController);

// Repository
container.bind<InventoryRepository>(TYPES.Repository.InventoryRepository).to(InventoryRepository);

export { container };