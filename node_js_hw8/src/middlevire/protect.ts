import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

import { myDataSource } from "../app-data-source.ts";
import { User } from "../entities/User.ts";

export const protect = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let token: string;
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    } else if (req.cookies.access) {
      token = req.cookies.access;
    }

    if (!token) {
      return res.status(401).json({
        status: "fail",
        message: "You are not logged in",
      });
    }

    // 2) Verification token
    const decoded = await jwt.verify(token, "SOME_SECRET_PASSWORD");

    const currentUser = await myDataSource
      .getRepository(User)
      .findOneBy({ email: decoded.email });
    if (!currentUser) {
      return res.status(401).json({
        status: "fail",
        message: "User doesn't exsists",
      });
    }

    //@ts-ignore
    req.user = currentUser;

    next();
  } catch (error) {
    return res.status(401).json({
      status: "fail",
      message: "Unauthorized",
    });
  }
};
