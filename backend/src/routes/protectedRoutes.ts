import express from "express";
import { protect, authorize, AuthenticatedRequest } from "../middleware/authMiddleware";

const router = express.Router();

router.get("/admin-only", protect, authorize("admin"), (req: AuthenticatedRequest, res) => {
  res.json({ message: "Welcome Admin 👑" });
});

router.get("/user-only", protect, authorize("user"), (req: AuthenticatedRequest, res) => {
  res.json({ message: "Welcome User 🙌" });
});

router.get("/me", protect, (req: AuthenticatedRequest, res) => {
    res.json({ message: "Welcome User 🙌", user: req.user });
});

router.get("/any-auth", protect, (req: AuthenticatedRequest, res) => {
  res.json({ message: `Hello ${req.user?.role || "Guest"}` });
});

export default router;
