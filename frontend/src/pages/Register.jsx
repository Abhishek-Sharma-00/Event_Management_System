import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Eye, EyeOff } from "lucide-react";
import { toast } from "sonner";
import "@/styles/Auth.css";
import logo from "../assets/EventUs-logo.png";

export default function Register() {
  const navigate = useNavigate();
  const { register } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState("attendee");
  const [loading, setLoading] = useState(false);
  const { user, logout } = useAuth();
  const [open, setOpen] = React.useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await register(name, email, password, role);
      toast.success("Registration successful!");
      navigate("/");
    } catch (error) {
      toast.error(error.response?.data?.detail || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* NAVBAR */}
      <nav className="homepage-navbar">
        <div className="nav-left">
          <img src={logo} alt="Eventus" className="nav-logo" />
          <h1 className="nav-title">EventUS</h1>
        </div>

        <div className="nav-links">
          <Button variant="ghost" onClick={() => navigate("/")}>
            Home
          </Button>
          <Button variant="ghost" onClick={() => navigate("/events")}>
            Events
          </Button>
          <Button variant="ghost" onClick={() => navigate("/about")}>
            About Us
          </Button>
          <Button variant="ghost" onClick={() => navigate("/contact")}>
            Contact
          </Button>

          {user ? (
            <div className="profile-dropdown-wrapper">
              <div className="profile-info" onClick={() => setOpen(!open)}>
                <div className="profile-text">
                  <span className="profile-name">{user.name || "User"}</span>

                  {/* ADMIN BADGE */}
                  {user.role === "admin" && (
                    <span className="user-badge">Admin</span>
                  )}
                  {user.role === "ateendee" && (
                    <span className="user-badge">Attendee</span>
                  )}
                </div>
              </div>

              {/* DROPDOWN MENU */}
              {open && (
                <div className="dropdown-menu">
                  <p onClick={() => navigate("/admin") || "/attendee"}>
                    Admin Dashboard
                  </p>
                  <p onClick={() => navigate("/events")}>My Events</p>
                  <p onClick={() => navigate("/admin/profile")}>Settings</p>
                  <hr />
                  <p className="logout-btn" onClick={logout}>
                    Logout
                  </p>
                </div>
              )}
            </div>
          ) : (
            <>
              <Button variant="outline" onClick={() => navigate("/login")}>
                Login
              </Button>
              <Button onClick={() => navigate("/register")}>Register</Button>
            </>
          )}
        </div>
      </nav>

      <div className="auth-container">
        <Card className="auth-card" data-testid="register-card">
          <CardHeader>
            <CardTitle className="auth-title" data-testid="register-title">
              Create Account
            </CardTitle>
            <p className="auth-subtitle" data-testid="register-subtitle">
              Register to get started
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="auth-form">
              <div className="form-field">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  data-testid="register-name-input"
                />
              </div>
              <div className="form-field">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  data-testid="register-email-input"
                />
              </div>
              <div className="form-field">
                <Label htmlFor="password">Password</Label>
                <div className="password-input-wrapper">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    minLength={6}
                    data-testid="register-password-input"
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                    data-testid="register-password-toggle"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>
              <div className="form-field">
                <Label>Register as</Label>
                <RadioGroup
                  value={role}
                  onValueChange={setRole}
                  data-testid="register-role-group"
                >
                  <div className="radio-item">
                    <RadioGroupItem
                      value="attendee"
                      id="attendee"
                      data-testid="register-role-attendee"
                    />
                    <Label htmlFor="attendee" className="radio-label">
                      Attendee
                    </Label>
                  </div>
                  <div className="radio-item">
                    <RadioGroupItem
                      value="admin"
                      id="admin"
                      data-testid="register-role-admin"
                    />
                    <Label htmlFor="admin" className="radio-label">
                      Admin
                    </Label>
                  </div>
                </RadioGroup>
              </div>
              <Button
                type="submit"
                className="auth-button"
                disabled={loading}
                data-testid="register-submit-btn"
              >
                {loading ? "Registering..." : "Register"}
              </Button>
            </form>
            <div className="auth-footer">
              <p data-testid="register-login-link">
                Already have an account?{" "}
                <Link to="/login" className="auth-link">
                  Login here
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
