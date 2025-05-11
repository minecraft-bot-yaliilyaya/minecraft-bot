import "reflect-metadata";
import express from "express";
import { TYPES } from "./container/types";
import { container } from "./container/config";
import { UserController } from "./controllers/UserController";

const app = express();
app.use(express.json());

const userController = container.get<UserController>(TYPES.UserController);

app.get("/users", (req, res) => userController.getAllUsers(req, res));
app.get("/users/:id", (req, res) => userController.getUserById(req, res));
app.post("/users", (req, res) => userController.createUser(req, res));
app.get("/addNextUser", (req, res) => userController.addNextUser(req, res));

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});