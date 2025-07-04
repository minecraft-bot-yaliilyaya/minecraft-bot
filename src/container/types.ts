import {MineflayerBotBuilder} from "../builder/MineflayerBotBuilder";

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
    },
    Controller: {
        DefaultController: Symbol.for("ControllerDefaultController"),
        UserController: Symbol.for("UserController"),
        InventoryController: Symbol.for("InventoryController"),
    },
    Repository: {
        InventoryRepository: Symbol.for("InventoryRepository"),
    }
};

export { TYPES };