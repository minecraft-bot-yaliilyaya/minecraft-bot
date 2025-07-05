import {MineflayerBotBuilder} from "../builder/MineflayerBotBuilder";
import {InfoController} from "../controllers/InfoController";
import {InfoMapping} from "../routes/mapping/InfoMapping";

const TYPES = {
    BotService: Symbol.for("MineflayerBotService"),
    MineflayerBotBuilder: Symbol.for("MineflayerBotBuilder"),
    UserService: Symbol.for("UserService"),
    UserRepository: Symbol.for("UserRepository"),
    RouteBuilder: Symbol.for("RouteBuilder"),

    Routes: {
        UserRoutes: Symbol.for("RoutesUserRoutes"),
        DefaultRoutes: Symbol.for("RoutesDefaultRoutes"),
        InventoryMapping: Symbol.for("RoutesInventoryMapping"),
        InfoMapping: Symbol.for("InfoMapping"),
        AgentMapping: Symbol.for("AgentMapping"),
    },
    Controller: {
        DefaultController: Symbol.for("ControllerDefaultController"),
        UserController: Symbol.for("UserController"),
        InventoryController: Symbol.for("InventoryController"),
        InfoController: Symbol.for("InfoController"),
        AgentController: Symbol.for("AgentController"),
    },
    Repository: {
        InventoryRepository: Symbol.for("InventoryRepository"),
    },
    Service: {
        AgentService: Symbol.for("AgentService"),
    }
};

export { TYPES };