import { injectable } from "inversify";
import { User } from "../entities/User";

@injectable()
export class UserRepository {
    private users: User[] = [
        { id: "1", name: "John Doe", email: "john@example.com" },
        { id: "2", name: "Jane Doe", email: "jane@example.com" }
    ];

    async findAll(): Promise<User[]> {
        return this.users;
    }

    async findById(id: string): Promise<User | undefined> {
        return this.users.find(user => user.id === id);
    }

    async create(user: Omit<User, 'id'>): Promise<User> {
        const newUser = { ...user, id: (this.users.length + 1).toString() };
        this.users.push(newUser);
        return newUser;
    }
}