import express, { Request, Response, Router, NextFunction } from "express";
import prisma from "../config/prisma";
import { hashPassword, comparePassword, generateToken } from "../utils/auth";
import { z } from "zod";
import { protect } from "../middleware/authMiddleware";
import { loginUser, registerUser } from '../controllers/auth.controller';
const { login } = require('../controllers/auth.controller');

interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
    name: string;
    email: string;
    role: string;
  };
}
const router: Router = express.Router();

const registerSchema = z.object({
  name: z.string().min(2, "Name is too short"),
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const loginSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

router.post("/register", async (req: Request, res: Response): Promise<void> => {
  try {
    console.log("🧪 req.body:", req.body);
    const { name, email, password } = registerSchema.parse(req.body);

    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      console.log("❌ User already exists:", existingUser);
      res.status(400).json({ error: "User already exists" });
      return;
    }

    const hashedPassword = await hashPassword(password);

    const newUser = await prisma.user.create({
      data: { name, email, password: hashedPassword },
    });

    const token = generateToken(newUser.id, newUser.role);

    console.log("✅ New User Registered:", newUser);
    res.status(201).json({
      message: "User registered successfully",
      token,
      user: {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        role: newUser.role,
      },
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({ error: error.errors[0].message });
    } else {
      console.error("❌ Error during registration:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  }
});

router.post("/login", async (req: Request, res: Response): Promise<void> => {
  try {
    console.log("🧪 req.body:", req.body);
    const { email, password } = loginSchema.parse(req.body);

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      console.log("❌ No user found with email:", email);
      res.status(401).json({ error: "Invalid credentials" });
      return;
    }

    const isMatch = await comparePassword(password, user.password);
    if (!isMatch) {
      console.log("❌ Password mismatch for user:", email);
      res.status(401).json({ error: "Invalid credentials" });
      return;
    }

    const token = generateToken(user.id, user.role);

    console.log("✅ Login successful for user:", email);
    res.json({
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({ error: error.errors[0].message });
    } else {
      console.error("❌ Error during login:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  }
});

router.get(
  "/me",
  protect,
  async (req: Request, res: Response): Promise<void> => {
    const user = (req as AuthenticatedRequest).user;
    try {
      res.json({
        message: "✅ You are authorized",
        user,
      });
    } catch (error) {
      console.error("❌ Error in /me route:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  }
);

export { router as authRoutes };
