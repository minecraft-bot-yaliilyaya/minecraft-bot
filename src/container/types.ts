import {MineflayerBotBuilder} from "../builder/MineflayerBotBuilder";

const TYPES = {
    BotService: Symbol.for("MineflayerBotService"),
    MineflayerBotBuilder: Symbol.for("MineflayerBotBuilder"),
    UserController: Symbol.for("UserController"),
    UserService: Symbol.for("UserService"),
    UserRepository: Symbol.for("UserRepository")
};

export { TYPES };