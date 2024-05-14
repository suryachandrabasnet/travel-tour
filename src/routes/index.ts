import express from "express";
import userRoutes from "./user.routes";
import bannerRouter from "./banner.routes";

const router = express.Router();

router.use("/user", userRoutes);
router.use("/admin", bannerRouter);

export default router;
