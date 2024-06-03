import { Request, Response } from "express";
import ourTeamInterface from "../interfaces/ourTeam.interface";
import OurTeam from "../models/ourteam";

async function createOurTeam(req: Request, res: Response): Promise<void> {
  try {
    const {
      name,
      image,
      email,
      phone_number,
      position,
      status,
    }: ourTeamInterface = req.body;

    const existingMember = await OurTeam.findOne({
      where: { email },
    });

    if (!existingMember) {
      res.status(400).json({ message: "Team member already exists" });
    }

    await OurTeam.create({
      name,
      image,
      email,
      phone_number,
      position,
      status,
    });
    res.status(201).json({ message: "Team member added successfully!" });
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
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

export { createOurTeam, updateOurTeam, deleteOurTeam };
