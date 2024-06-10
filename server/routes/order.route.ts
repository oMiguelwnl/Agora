import express from "express";
import { authorizeRoles, isAuthenticated } from "../middleware/auth";
import { createOrder } from "../controllers/order.controller";
import { getAllCourses } from "../controllers/course.controller";

const orderRouter = express.Router();

orderRouter.post("/create-order", isAuthenticated, createOrder);

orderRouter.get(
  "/get-orders",
  isAuthenticated,
  authorizeRoles("admin"),
  getAllCourses
);

export default orderRouter;
