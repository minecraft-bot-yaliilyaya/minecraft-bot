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

const container = new Container();

container.bind<MineflayerBotBuilder>(TYPES.MineflayerBotBuilder).to(MineflayerBotBuilder);

// Service
container.bind<UserService>(TYPES.UserService).to(UserService);
container.bind<AgentService>(TYPES.Service.AgentService).to(AgentService);
container.bind<MineflayerBotService>(TYPES.BotService).to(MineflayerBotService);

// Route
container.bind<RouteBuilder>(TYPES.RouteBuilder).to(RouteBuilder);
container.bind<DefaultRoutes>(TYPES.Routes.DefaultRoutes).to(DefaultRoutes);
container.bind<UserRoutes>(TYPES.Routes.UserRoutes).to(UserRoutes);
container.bind<InventoryMapping>(TYPES.Routes.InventoryMapping).to(InventoryMapping);
container.bind<InfoMapping>(TYPES.Routes.InfoMapping).to(InfoMapping);
container.bind<AgentMapping>(TYPES.Routes.AgentMapping).to(AgentMapping);

// Controller
container.bind<DefaultController>(TYPES.Controller.DefaultController).to(DefaultController);
container.bind<UserController>(TYPES.Controller.UserController).to(UserController);
container.bind<InventoryController>(TYPES.Controller.InventoryController).to(InventoryController);
container.bind<InfoController>(TYPES.Controller.InfoController).to(InfoController);
container.bind<AgentController>(TYPES.Controller.AgentController).to(AgentController);

// Repository
container.bind<UserRepository>(TYPES.UserRepository).to(UserRepository);
container.bind<InventoryRepository>(TYPES.Repository.InventoryRepository).to(InventoryRepository);

export { container };