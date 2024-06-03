import TestimonialInterface from "../interfaces/testimonial.interface";
import { Request, Response } from "express";
import Testimonial from "../models/testimonial";
import multer from "multer";
import path from "path";

//store image
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = path.resolve(__dirname, "../uploads/testimonialImages");
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

async function createTestimonial(req: Request, res: Response): Promise<void> {
  try {
    const { name, address, description, status }: TestimonialInterface =
      req.body;

    const imagePath = req.file?.path;

    await Testimonial.create({
      name,
      image: imagePath,
      address,
      description,
      status,
    });
    res.status(400).json({ message: "Testimonial added successfully" });
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error!!", err });
  }
}

export { upload, createTestimonial };
