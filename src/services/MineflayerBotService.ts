import { inject, injectable } from "inversify";
import {TYPES} from "../container/types";
import {MineflayerBotBuilder} from "../builder/MineflayerBotBuilder";
import {Bot} from "mineflayer";

@injectable()
export class MineflayerBotService {

    private bot: Bot|null = null;

    constructor(
        @inject(TYPES.MineflayerBotBuilder) private mineflayerBotBuilder: MineflayerBotBuilder
    ) {
    }

    async init () {
        if (!!this.bot) {
            return;
        }

        const that = this;
        this.bot = this.mineflayerBotBuilder.createBot()

        this.bot.on('chat', (username, message) => {
            if (username === that.bot?.username) return
            that.bot?.chat(message)
        })

// Log errors and kick reasons:
        this.bot.on('kicked', console.log)
        this.bot.on('error', console.log)
    }

    public getBot(): Bot|null {
        this.init();
        return this.bot;
    }

    public includeThat45Slot() {
        return require('minecraft-data')(this.bot?.version).isNewerOrEqualTo('1.9') &&
            this.bot?.inventory?.slots[45]
    }
}
