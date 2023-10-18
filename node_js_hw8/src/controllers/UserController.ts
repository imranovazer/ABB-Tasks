import { Request, Response } from "express";
import * as bcyrpt from "bcrypt";
import jwt from "jsonwebtoken";
import { myDataSource } from "../app-data-source.ts";
import { User } from "../entities/User.ts";

export const UserController = {
  login: async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;
      const user = await myDataSource.getRepository(User).findOneBy({ email });
      if (!user) {
        return res.status(401).json({
          status: "fail",
          message: "User with that email not found",
        });
      }
      const isPassMatch = await bcyrpt.compare(password, user.password);
      if (!isPassMatch) {
        return res.status(401).json({
          status: "fail",
          message: "Passwrod id wrong",
        });
      }

      const token = jwt.sign({ email: user.email }, "SOME_SECRET_PASSWORD", {
        expiresIn: "10h",
      });
      res.status(200).json({
        status: "sucess",
        data: {
          token,
        },
      });
    } catch (error) {
      console.log(error);

      res.status(500).json({
        status: "fail",
        error,
      });
    }
  },

  getAll: async (req: Request, res: Response) => {
    try {
      const users = await myDataSource.getRepository(User).find();

      res.status(200).json({
        status: "sucess",
        data: users,
      });
    } catch (error) {
      res.status(500).json({
        status: "fail",
        error,
      });
    }
  },
  register: async (req: Request, res: Response) => {
    try {
      const { username, email, password, repeatPass } = req.body;

      if (password !== repeatPass) {
        return res.status(401).json({
          status: "fail",
          message: "Passwords didn't match",
        });
      }
      const hashedPass = await bcyrpt.hash(password, 12);

      const newUser = await myDataSource.getRepository(User).create({
        username,
        email,
        password: hashedPass,
      });
      const result = await myDataSource.getRepository(User).save(newUser);

      return res.status(201).json({
        status: "sucess",
        data: result,
      });
    } catch (error) {
      res.status(500).json({
        status: "fail",
        error,
      });
    }
  },
};
