import { injectable } from 'inversify';
import {inject} from "inversify/lib/esm";
import {TYPES} from "../../container/types";
import {MineflayerBotService} from "../../services/MineflayerBotService";
import { goals } from 'mineflayer-pathfinder'
import Enumerable from 'node-enumerable';
import {BlockFinderResult} from "./BlockFinderResult";

/** @see DigJob */
@injectable()
export class DigController {

    constructor(
        @inject(TYPES.BotService) private botService: MineflayerBotService,
    ) {}
    //TODO:: только перенес и очистил код от лишних действий
    // нужна отладка!!!
    async digBlocks(blockIds, strategyConfig, count = 1) {
        const bot = this.botService.getBot();
        const startPosition = bot.entity.position

        if (blockIds.length > 0) {
            //После перевого цикла позиця агента меняется поэтому нам нужно сохранять истинную позицию старта
            for (const number of Enumerable.range(0, count)) {
                console.log(`run dig block number ${number}`)

                const finderResult = this.findAllIdById(blockIds)
                finderResult.startPosition = startPosition
                const blockPosition = finderResult.first();

                console.log(blockPosition)
                const block = blockPosition != null ? bot.blockAt(blockPosition) : null
                if (block) {
                    console.log(`I found ${block.name} blocks`)
                    await this.moveToDigTarget(block.position)
                    await this.digTarget(block.position)
                }
            }
        }
    }

    private findAllIdById (blockIds) {
        const bot = this.botService.getBot();
        const botPosition = bot.entity.position
        let finderResult = new BlockFinderResult(bot.findBlocks);
        finderResult.botPosition = botPosition;
        finderResult.blockIds = blockIds;

        return finderResult
    }

    private async moveToDigTarget(block) {
        const bot = this.botService.getBot();
        // TODO:: ставит блоки земли если не дотягивается
        // TODO:: может не найти путь до места или упасть
        // TODO:: уничтожает листву если мешает
        await bot.pathfinder.goto(new goals.GoalNear(block.x, block.y, block.z, 2))
    }

    private async digTarget(blockPosition) {
        const bot = this.botService.getBot();
        if (bot.targetDigBlock) {
            console.log(`already digging ${bot.targetDigBlock.name}`)
        } else {
            const block = bot.blockAt(blockPosition)
            if (block && bot.canDigBlock(block)) {
                console.log(`starting to dig ${block.name}`)
                try {
                    await bot.dig(block)
                    console.log(`finished digging ${block.name}`)
                } catch (err) {
                    console.log(err.stack)
                }
            } else {
                console.log(`cannot dig ${blockPosition} - ${bot.entity.position}`)
                // bot.chat('cannot dig')
            }
        }
    }

    // async digBlocksOld(blockIds, strategyConfig, count = 1) {
    //     const bot = this.botService.getBot();
    //
    //     console.log(blockIds)
    //     const startPosition = bot.entity.position
    //     const strategy = this.agentFinder.findStrategy(blockName)
    //
    //     if (blockIds.length > 0) {
    //         //После перевого цикла позиця агента меняется поэтому нам нужно сохранять истинную позицию старта
    //         for (const number of Enumerable.range(0, count)) {
    //             console.log(`run dig block number ${number}`)
    //
    //             const finderResult = this.agentFinder.findAllIdById(blockIds)
    //             finderResult.startPosition = startPosition
    //             strategy.apply(finderResult)
    //             const blockPosition = finderResult.first();
    //
    //             console.log(blockPosition)
    //             const block = blockPosition != null ? this.bot.blockAt(blockPosition) : null
    //             if (block) {
    //                 console.log(`I found ${block.name} blocks`)
    //                 await this.agentDig.moveToDigTarget(block.position)
    //
    //                 const tool = this.agentToolsInfo.findToolByBlock(block.name)
    //                 if (tool) {
    //                     await this.agentInventory.equipTool(tool)
    //                 }
    //                 // TODO:: нужно подбирать упавший добытый блок или же все блоки в радиусе 2х клеток
    //                 await this.agentDig.digTarget(block.position)
    //             }
    //         }
    //     }
    // }
}
