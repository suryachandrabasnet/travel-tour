import BannerInterface from "../interfaces/banner.interface";
import { Request, Response } from "express";
import Banner from "../models/banner";

async function createBanner(req: Request, res: Response): Promise<void> {
  try {
    const { title, image, description, url, status }: BannerInterface =
      req.body;

    await Banner.create({
      title,
      image,
      description,
      url,
      status,
    });
    res.status(400).json({ message: "Banner added successfully!" });
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
}

async function updateBanner(req: Request, res: Response): Promise<void> {
  try {
    const { title, image, description, url, status }: BannerInterface =
      req.body;

    await Banner.update(
      {
        title,
        image,
        description,
        url,
        status,
      },
      {
        where: { uuid: req.params.uuid },
      }
    );
    res.status(200).json({ message: "Banner updated successfully!" });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong!" });
  }
}

async function deleteBanner(req: Request, res: Response): Promise<void> {
  try {
    await Banner.destroy({
      where: { uuid: req.params.uuid },
    });
    res.status(200).json({ message: "Banner deleted successfully!" });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong!" });
  }
}

export { createBanner, updateBanner, deleteBanner };
