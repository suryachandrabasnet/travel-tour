import { Request, Response } from "express";
import ourTeamInterface from "../interfaces/ourTeam.interface";
import OurTeam from "../models/ourteam";
import multer from "multer";
import path from "path";

//store image
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = path.resolve(__dirname, "../uploads/teamImages");
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

async function createOurTeam(req: Request, res: Response): Promise<void> {
  try {
    const { name, email, phone_number, position, status }: ourTeamInterface =
      req.body;

    const imagePath = req.file?.path;

    const existingMember = await OurTeam.findOne({
      where: { email },
    });

    if (!existingMember) {
      res.status(400).json({ message: "Team member already exists" });
      return;
    }

    await OurTeam.create({
      name,
      image: imagePath,
      email,
      phone_number,
      position,
      status,
    });
    res.status(201).json({ message: "Team member added successfully!" });
  } catch (err) {
    res.status(500).json({ message: "Internal server error", err });
  }
}

async function updateOurTeam(req: Request, res: Response): Promise<void> {
  try {
    const {
      name,
      image,
      email,
      phone_number,
      position,
      status,
    }: ourTeamInterface = req.body;

    await OurTeam.update(
      {
        name,
        image,
        email,
        phone_number,
        position,
        status,
      },
      {
        where: { uuid: req.params.uuid },
      }
    );
    res.status(200).json({ message: "Team member updated successfully!" });
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
  }
}

async function deleteOurTeam(req: Request, res: Response): Promise<void> {
  try {
    await OurTeam.destroy({
      where: { uuid: req.params.uuid },
    });
    res.status(200).json({ message: "Member deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
}

export { upload, createOurTeam, updateOurTeam, deleteOurTeam };
