import express from "express";
import {
  registerUser,
  getRegistrations,
} from "../controllers/registrationController.js";

const router = express.Router();

router.post("/", registerUser);
router.get("/", getRegistrations);

export default router;
