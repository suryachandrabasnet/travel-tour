import express, { Router } from "express";
import {
  createBanner,
  updateBanner,
  deleteBanner,
} from "../controllers/banner.controller";

const router = express.Router();

router.post("/banner", createBanner);
router.put("/banner/:uuid", updateBanner);
router.delete("/banner/:uuid", deleteBanner);

export default router;
