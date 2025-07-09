import { inject, injectable } from "inversify";
import { UserRepository } from "../repositories/UserRepository";
import { User } from "../entities/User";
import { TYPES } from "../container/types";
import {MineflayerBotService} from "./MineflayerBotService";
import {Request, Response} from "express";
import {Item} from "prismarine-item";
import {Vec3} from "vec3";
import {Block} from "prismarine-block";

@injectable()
export class FindService {
    constructor(
        @inject(TYPES.BotService) private botService: MineflayerBotService
    ) {}

    async canDigBlock(blockPosition: Vec3): Promise<boolean>
    {
    }
}
