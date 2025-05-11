import { inject, injectable } from "inversify";
import { Request, Response } from "express";
import { UserService } from "../services/UserService";
import { TYPES } from "../container/types";
import { User } from "../entities/User";

@injectable()
export class UserController {
    constructor(
        @inject(TYPES.UserService) private userService: UserService
    ) {}

    async getAllUsers(req: Request, res: Response) {
        const users = await this.userService.getUsers();
        res.json(users);
    }

    async getUserById(req: Request, res: Response) {
        const user = await this.userService.getUserById(req.params.id);
        if (!user) {
            res.status(404).json({ message: "User not found" });
            return
        }
        res.json(user);
    }

    async addNextUser(req: Request, res: Response) {
        try {
            const user = {
                name: "Test User",
                email: "test@example.com"
            };
            const newUser = await this.userService.createUser(user);
            res.status(201).json(newUser);
        } catch (error) {
            res.status(400).json({ message: "Error creating user" });
        }
    }

    async createUser(req: Request, res: Response) {
        try {
            const newUser = await this.userService.createUser(req.body);
            res.status(201).json(newUser);
        } catch (error) {
            res.status(400).json({ message: "Error creating user" });
        }
    }
}