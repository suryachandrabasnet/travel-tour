import express from "express";
import {
  upload,
  createOurTeam,
  deleteOurTeam,
  updateOurTeam,
} from "../controllers/ourTeam.controller";

const router = express.Router();

router.post("/our-team", upload.single("image"), createOurTeam);
router.put("/our-team/:uuid", updateOurTeam);
router.delete("/our-team/:uuid", deleteOurTeam);

export default router;
