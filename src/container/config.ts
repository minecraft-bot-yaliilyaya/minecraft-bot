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
import {AgentController} from "../controllers/AgentController";
import {AgentMapping} from "../routes/mapping/AgentMapping";
import {AgentService} from "../services/AgentService";
import {FindController} from "../controllers/FindController";
import {FindMapping} from "../routes/mapping/FindMapping";

const container = new Container();

container.bind<MineflayerBotBuilder>(TYPES.MineflayerBotBuilder).to(MineflayerBotBuilder).inSingletonScope();

// Service
container.bind<UserService>(TYPES.UserService).to(UserService).inSingletonScope();
container.bind<AgentService>(TYPES.Service.AgentService).to(AgentService).inSingletonScope();
container.bind<MineflayerBotService>(TYPES.BotService).to(MineflayerBotService).inSingletonScope();

// Route
container.bind<RouteBuilder>(TYPES.RouteBuilder).to(RouteBuilder).inSingletonScope();
container.bind<DefaultRoutes>(TYPES.Routes.DefaultRoutes).to(DefaultRoutes).inSingletonScope();
container.bind<UserRoutes>(TYPES.Routes.UserRoutes).to(UserRoutes).inSingletonScope();
container.bind<InventoryMapping>(TYPES.Routes.InventoryMapping).to(InventoryMapping).inSingletonScope();
container.bind<InfoMapping>(TYPES.Routes.InfoMapping).to(InfoMapping).inSingletonScope();
container.bind<AgentMapping>(TYPES.Routes.AgentMapping).to(AgentMapping).inSingletonScope();
container.bind<FindMapping>(TYPES.Routes.FindMapping).to(FindMapping).inSingletonScope();

// Controller
container.bind<DefaultController>(TYPES.Controller.DefaultController).to(DefaultController).inSingletonScope();
container.bind<UserController>(TYPES.Controller.UserController).to(UserController).inSingletonScope();
container.bind<InventoryController>(TYPES.Controller.InventoryController).to(InventoryController).inSingletonScope();
container.bind<InfoController>(TYPES.Controller.InfoController).to(InfoController).inSingletonScope();
container.bind<AgentController>(TYPES.Controller.AgentController).to(AgentController).inSingletonScope();
container.bind<FindController>(TYPES.Controller.FindController).to(FindController).inSingletonScope();

// Repository
container.bind<UserRepository>(TYPES.UserRepository).to(UserRepository).inSingletonScope();
container.bind<InventoryRepository>(TYPES.Repository.InventoryRepository).to(InventoryRepository).inSingletonScope();

export { container };