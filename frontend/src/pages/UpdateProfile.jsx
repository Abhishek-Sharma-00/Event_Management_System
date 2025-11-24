import React, { useEffect, useState } from "react";
import {
  fetchProfile,
  updateProfile,
  changePassword,
  deleteAccount,
} from "../api/userApi";
import "../styles/UpdateProfile.css";

const UpdateProfile = () => {
  const [usera, setUsera] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [passwordMode, setPasswordMode] = useState(false);
  const [passwords, setPasswords] = useState({
    oldPassword: "",
    newPassword: "",
  });
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = async () => {
    try {
      const res = await fetchProfile();
      setUsera(res.data);
      setForm({
        name: res.data.name,
        email: res.data.email,
        phone: res.data.phone,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const saveProfile = async () => {
    await updateProfile(form);
    setEditMode(false);
    loadProfile();
  };

  const updatePass = async () => {
    await changePassword(passwords);
    setPasswordMode(false);
    setPasswords({ oldPassword: "", newPassword: "" });
  };

  const deleteAcc = async () => {
    if (window.confirm("Are you sure you want to delete your account?")) {
      await deleteAccount();
      localStorage.removeItem("adminToken");
      window.location.href = "/login";
    }
  };

  if (!usera) return <h2>Loading...</h2>;

  return (
    <div className="main">
      <div className="profile-container">
        <h1>Update Your Profile</h1>

        {!editMode && !passwordMode && (
          <>
            <p>
              <strong>Name:</strong> {usera.name}
            </p>
            <p>
              <strong>Email:</strong> {usera.email}
            </p>
            <p>
              <strong>Role:</strong> {usera.role}
            </p>

            <button className="edit-btn" onClick={() => setEditMode(true)}>
              Edit Profile
            </button>
            <button
              className="password-btn"
              onClick={() => setPasswordMode(true)}
            >
              Change Password
            </button>
            <button className="delete-btn" onClick={deleteAcc}>
              Delete Account
            </button>
          </>
        )}

        {editMode && (
          <div className="edit-box">
            <input
              type="text"
              placeholder="Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <input
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            <input
              type="text"
              placeholder="Phone"
              value={form.phone || ""}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />

            <button onClick={saveProfile}>Save</button>
            <button onClick={() => setEditMode(false)}>Cancel</button>
          </div>
        )}

        {passwordMode && (
          <div className="edit-box">
            <input
              type="password"
              placeholder="Old Password"
              value={passwords.oldPassword}
              onChange={(e) =>
                setPasswords({ ...passwords, oldPassword: e.target.value })
              }
            />
            <input
              type="password"
              placeholder="New Password"
              value={passwords.newPassword}
              onChange={(e) =>
                setPasswords({ ...passwords, newPassword: e.target.value })
              }
            />

            <button onClick={updatePass}>Update Password</button>
            <button onClick={() => setPasswordMode(false)}>Cancel</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default UpdateProfile;
