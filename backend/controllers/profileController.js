import User from "../models/User.js";

export const getProfile = async (req, res) => {
  res.json(req.user);
};

export const updateProfile = async (req, res) => {
  const updated = await User.findByIdAndUpdate(req.user._id, req.body, {
    new: true,
  });
  res.json(updated);
};

export const changePassword = async (req, res) => {
  const { oldPassword, newPassword } = req.body;
  const user = await User.findById(req.user._id);

  if (!(await user.comparePassword(oldPassword))) {
    return res.status(400).json({ message: "Old password is incorrect" });
  }
  user.password = newPassword;
  await user.save();
  res.json({ message: "Password changed successfully" });
};

export const deleteAccount = async (req, res) => {
  await User.findByIdAndDelete(req.user._id);
  res.json({ message: "Account deleted" });
};
