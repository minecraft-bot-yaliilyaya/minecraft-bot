
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
        FindMapping: Symbol.for("FindMapping"),
    },
    Controller: {
        DefaultController: Symbol.for("ControllerDefaultController"),
        UserController: Symbol.for("UserController"),
        InventoryController: Symbol.for("InventoryController"),
        InfoController: Symbol.for("InfoController"),
        AgentController: Symbol.for("AgentController"),
        FindController: Symbol.for("FindController"),
    },
    Repository: {
        InventoryRepository: Symbol.for("InventoryRepository"),
    },
    Service: {
        AgentService: Symbol.for("AgentService"),
    }
};

export { TYPES };