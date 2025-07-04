import {MineflayerBotBuilder} from "../builder/MineflayerBotBuilder";
import {InterfaceController} from "../controllers/InterfaceController";

const TYPES = {
    BotService: Symbol.for("MineflayerBotService"),
    MineflayerBotBuilder: Symbol.for("MineflayerBotBuilder"),
    UserService: Symbol.for("UserService"),
    UserRepository: Symbol.for("UserRepository"),
    RouteBuilder: Symbol.for("RouteBuilder"),

    Routes: {
        UserRoutes: Symbol.for("RoutesUserRoutes"),
        DefaultRoutes: Symbol.for("RoutesDefaultRoutes"),
        InterfaceMapping: Symbol.for("RoutesInterfaceMapping"),
    },
    Controller: {
        DefaultController: Symbol.for("ControllerDefaultController"),
        UserController: Symbol.for("UserController"),
        InterfaceController: Symbol.for("InterfaceController"),
    }
};

export { TYPES };