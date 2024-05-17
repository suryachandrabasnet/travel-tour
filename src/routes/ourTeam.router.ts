import express from "express";
import {
  createOurTeam,
  deleteOurTeam,
  updateOurTeam,
} from "../controllers/ourTeam.controller";

const router = express.Router();

router.post("/our-team", createOurTeam);
router.put("/our-team/:uuid", updateOurTeam);
router.delete("/our-team/:uuid", deleteOurTeam);

export default router;
