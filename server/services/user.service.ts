import { Response } from "express";
import { redis } from "../utils/redis";
import userModel from "../models/user.model";

export const getUserById = async (id: string, res: Response) => {
  const userJson = await redis.get(id);

  if (userJson) {
    const user = JSON.parse(userJson);
    res.status(201).json({
      success: true,
      user,
    });
  }
};

export const geAllUsersService = async (res: Response) => {
  const users = await userModel.find().sort({ created: -1 });

  res.status(201).json({
    success: true,
    users,
  });
};
