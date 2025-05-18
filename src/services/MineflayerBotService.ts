import { inject, injectable } from "inversify";
import { createBot } from 'mineflayer'
import { MINEFLAYER_CONFIG } from "../../config/mineflayer";
import {TYPES} from "../container/types";
import {MineflayerBotBuilder} from "../builder/MineflayerBotBuilder";

@injectable()
export class MineflayerBotService {
    constructor(
        @inject(TYPES.MineflayerBotBuilder) private mineflayerBotBuilder: MineflayerBotBuilder
    ) {
    }

    async init () {
        const bot = this.mineflayerBotBuilder.createBot()

        bot.on('chat', (username, message) => {
            if (username === bot.username) return
            bot.chat(message)
        })

// Log errors and kick reasons:
        bot.on('kicked', console.log)
        bot.on('error', console.log)
    }
}
