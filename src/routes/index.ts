import express from "express";
import userRoutes from "./user.routes";
import bannerRouter from "./banner.routes";
import ourTeamRouter from "./ourTeam.router";

const router = express.Router();

router.use("/user", userRoutes);
router.use("/admin", bannerRouter);
router.use("/admin", ourTeamRouter);

export default router;
