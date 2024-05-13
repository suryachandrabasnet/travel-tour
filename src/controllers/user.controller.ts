import UserInterface from "../interfaces/user.interface";
import bcrypt from "bcrypt";
import { Request, Response } from "express";
import User from "../models/user";
import jwt, { Secret } from "jsonwebtoken";

class userController {
  static register(arg0: string, register: any) {
    throw new Error("Method not implemented.");
  }
  //user register
  public async register(req: Request, res: Response): Promise<void> {
    try {
      const {
        first_name,
        last_name,
        email,
        phone_number,
        password,
      }: UserInterface = req.body;

      //Check user exists
      const existingUser = await User.findOne({
        where: { email },
      });
      if (existingUser) {
        res.status(400).json({ message: "User already exists" });
        return;
      }

      //Hash password
      const hashedPassword: string = await bcrypt.hash(password, 10);

      //create user
      await User.create({
        first_name,
        last_name,
        email,
        phone_number,
        password: hashedPassword,
        user_type: "user",
      });
      res.status(201).json({ message: "User Registered Successfully" });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }

  //Login
  public async login(req: Request, res: Response): Promise<void> {
    try {
      const { email, password }: UserInterface = req.body;

      //Check if user exists
      const existingUser = await User.findOne({ where: { email } });
      if (!existingUser) {
        res.status(400).json({ message: "Invalid credentials" });
        return;
      }

      //check password
      const isMatch = await bcrypt.compare(password, existingUser.password);
      if (!isMatch) {
        res.status(400).json({ message: "Invalid credentials" });
      }

      //access the jwt token
      const jwtSecret: Secret | undefined = process.env.JWT_SECRET_KEY;

      if (!jwtSecret) {
        throw new Error("JWT secret key is not found");
      }

      //Generate jwt token
      const jwtToken = jwt.sign(
        {
          userId: existingUser.id,
          user_type: existingUser.user_type,
        },
        jwtSecret,
        {
          expiresIn: "1hr",
        }
      );

      res.status(200).json({ message: "Login Successfully", jwtToken });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal Server error!!!" });
    }
  }
}

export default new userController();
