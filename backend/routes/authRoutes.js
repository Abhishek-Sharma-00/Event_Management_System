import express from "express";
import { registerUser, loginUser } from "../controllers/authController.js";
import authMiddleware from "../middleware/authMiddleware.js";
import User from "../models/User.js";
import bcrypt from "bcryptjs";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

router.get("/me", authMiddleware, async (req, res) => {
  res.json(req.user);
});

router.put("/update", authMiddleware, async (req, res) => {
  try {
    const userId = req.user.id;

    const updates = {
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
    };

    const user = await User.findByIdAndUpdate(userId, updates, { new: true });

    res.json({
      success: true,
      message: "Profile updated",
      user,
    });
  } catch (err) {
    res.status(500).json({ message: "Update failed", error: err.message });
  }
});

// CHANGE PASSWORD
router.put("/change-password", authMiddleware, async (req, res) => {
  try {
    const userId = req.user.id;
    const { oldPassword, newPassword } = req.body;

    const user = await User.findById(userId);

    const match = await bcrypt.compare(oldPassword, user.password);
    if (!match) return res.status(400).json({ message: "Wrong old password" });

    const hashed = await bcrypt.hash(newPassword, 10);
    user.password = hashed;
    await user.save();

    res.json({ success: true, message: "Password changed" });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Password update failed", error: err.message });
  }
});

// DELETE ACCOUNT
router.delete("/delete", authMiddleware, async (req, res) => {
  try {
    const userId = req.user.id;

    await User.findByIdAndDelete(userId);

    res.json({ success: true, message: "Account deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Delete failed", error: err.message });
  }
});

export default router;
