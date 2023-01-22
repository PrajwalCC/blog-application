import express from "express";
import { getAllUser, login, signup, getUserById } from "../controllers/user-controller.js";

const router = express.Router();

router.get("/", getAllUser);
router.get("/:id", getUserById);
router.post("/signup", signup);
router.post("/login", login);
export default router;