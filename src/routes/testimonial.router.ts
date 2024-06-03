import express from "express";
import {
  upload,
  createTestimonial,
} from "../controllers/testimonial.controller";

const router = express.Router();
router.post("/testimonial", upload.single("image"), createTestimonial);

export default router;
