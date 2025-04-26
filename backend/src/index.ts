import express from "express";
import cors from "cors";
import { Sequelize } from "sequelize";
import { authRoutes } from "./routes/authRoutes";
import protectedRoutes from "./routes/protectedRoutes";


const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use("/api/protected", protectedRoutes);
app.use(express.json());

app.use((req, res, next) => {
    console.log("🧾 Incoming Request Headers:", req.headers);
    next();
  });

app.use("/api/auth", authRoutes);

const sequelize = new Sequelize(process.env.DATABASE_URL || "sqlite::memory:", {
  dialect: "sqlite",
  logging: false,
});

const startServer = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log("✅ Database connected");

    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("❌ DB connection failed:", error);
  }
};

startServer();
