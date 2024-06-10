import express from "express";
import { authorizeRoles, isAuthenticated } from "../middleware/auth";
import {
  getNotifications,
  updateNotifications,
} from "../controllers/notification.controller";
const notificationRoute = express.Router();

notificationRoute.get(
  "/get-all-notifications",
  isAuthenticated,
  authorizeRoles("admin"),
  getNotifications
);

notificationRoute.put(
  "/get-notification/:id",
  isAuthenticated,
  authorizeRoles("admin"),
  updateNotifications
);

export default notificationRoute;
