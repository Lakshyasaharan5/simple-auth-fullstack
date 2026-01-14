import { Router } from "express";
import { LoginRequest, User } from "../types";
import { randomUUID } from "crypto";
import { signToken } from "../utils/jwt";

const router = Router();

export const users: User[] = [];

router.post("/login", (req, res) => {
    const { username, password } = req.body as LoginRequest;

    if (!username || !password) {
        return res.status(400).json({
            error: "Username and password required",
        });
    }

    const user = users.find((u) => u.username === username);

    if (!user) {
        return res.status(401).json({
            error: "Invalid username or password",
        });
    }

    if (user.password !== password) {
        return res.status(401).json({
            error: "Invalid username or password",
        });
    }

    const token = signToken({
        id: user.id,
        username: user.username,
    });

    res.json({
        token,
        user: {
            id: user.id,
            username: user.username,
        },
    });

});

router.post("/register", (req, res) => {
    const { username, password } = req.body as LoginRequest;

    if (!username || !password) {
        return res.status(400).json({
            error: "Username and password required",
        });
    }

    const existingUser = users.find(
        (u) => u.username === username
    );

    if (existingUser) {
        return res.status(409).json({
            error: "User already exists",
        });
    }

    const newUser: User = {
        id: randomUUID(),
        username,
        password, 
    };

    users.push(newUser);

    console.log("Registered user:", newUser);

    res.status(201).json({
        message: "User registered successfully",
    });
});


export default router;
