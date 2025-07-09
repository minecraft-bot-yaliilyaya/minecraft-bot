
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
        DigMapping: Symbol.for("DigMapping"),
        MoveMapping: Symbol.for("MoveMapping"),
    },
    Controller: {
        DefaultController: Symbol.for("ControllerDefaultController"),
        UserController: Symbol.for("UserController"),
        InventoryController: Symbol.for("InventoryController"),
        InfoController: Symbol.for("InfoController"),
        AgentController: Symbol.for("AgentController"),
        FindController: Symbol.for("FindController"),
        DigController: Symbol.for("DigController"),
        MoveController: Symbol.for("MoveController"),
    },
    Repository: {
        InventoryRepository: Symbol.for("InventoryRepository"),
        WorldItemRepository: Symbol.for("WorldItemRepository"),
    },
    Service: {
        AgentService: Symbol.for("AgentService"),
    }
};

export { TYPES };