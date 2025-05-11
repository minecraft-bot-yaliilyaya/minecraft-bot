import { inject, injectable } from "inversify";
import { UserRepository } from "../repositories/UserRepository";
import { User } from "../entities/User";
import { TYPES } from "../container/types";

@injectable()
export class UserService {
    constructor(
        @inject(TYPES.UserRepository) private userRepository: UserRepository
    ) {}

    async getUsers(): Promise<User[]> {
        return this.userRepository.findAll();
    }

    async getUserById(id: string): Promise<User | undefined> {
        return this.userRepository.findById(id);
    }

    async createUser(userData: Omit<User, 'id'>): Promise<User> {
        return this.userRepository.create(userData);
    }
}
