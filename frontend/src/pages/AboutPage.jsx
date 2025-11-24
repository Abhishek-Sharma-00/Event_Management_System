import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Target, Heart, Award, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";
import "@/styles/AboutPage.css";
import logo from "../assets/EventUs-logo.png";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";

export default function AboutPage() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [open, setOpen] = React.useState(false);

  return (
    <div className="about-container">
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

          {user ? (
            <div className="profile-dropdown-wrapper">
              <div className="profile-info" onClick={() => setOpen(!open)}>
                <div className="profile-text">
                  <span className="profile-name">{user.name || "User"}</span>

                  {/* ADMIN BADGE */}
                  {user.role === "admin" && (
                    <span className="user-badge">Admin</span>
                  )}
                  {user.role === "attendee" && (
                    <span className="user-badge">Attendee</span>
                  )}
                </div>
              </div>

              {/* DROPDOWN MENU */}
              {open && (
                <div className="dropdown-menu">
                  <p
                    onClick={() =>
                      navigate(user.role === "admin" ? "/admin" : "/attendee")
                    }
                  >
                    Dashboard
                  </p>

                  <p onClick={() => navigate("/profile")}>Manage Profile</p>
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

      <section className="section-center">
        <h1 className="text-title mb-6">About EventUS</h1>
        <p className="text-body max-width-text">
          EventUS was founded with a simple mission: to make event management
          accessible, efficient, and enjoyable for everyone. Whether you're
          organizing a small workshop or a large conference, we provide the
          tools you need to succeed.
        </p>
      </section>

      <section className="section-padding">
        <div className="info-grid">
          <Card className="card-custom">
            <CardHeader className="card-header-center">
              <Target className="icon-space h-12 w-12 text-blue-600" />
              <h3 className="text-title">Our Mission</h3>
            </CardHeader>
            <CardContent className="card-body">
              <p className="text-body">
                To simplify event management and help organizers create
                memorable experiences.
              </p>
            </CardContent>
          </Card>

          <Card className="card-custom">
            <CardHeader className="card-header-center">
              <Heart className="icon-space h-12 w-12 text-red-600" />
              <h3 className="text-title">Our Values</h3>
            </CardHeader>
            <CardContent className="card-body">
              <p className="text-body">
                Innovation, reliability, and customer satisfaction drive
                everything we do.
              </p>
            </CardContent>
          </Card>

          <Card className="card-custom">
            <CardHeader className="card-header-center">
              <Award className="icon-space h-12 w-12 text-yellow-600" />
              <h3 className="text-title">Our Excellence</h3>
            </CardHeader>
            <CardContent className="card-body">
              <p className="text-body">
                Award-winning platform trusted by event professionals worldwide.
              </p>
            </CardContent>
          </Card>

          <Card className="card-custom">
            <CardHeader className="card-header-center">
              <Users className="icon-space h-12 w-12 text-green-600" />
              <h3 className="text-title">Our Community</h3>
            </CardHeader>
            <CardContent className="card-body">
              <p className="text-body">
                Join thousands of organizers who trust EventUS for their events.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="gray-bg-section">
        <div className="story-text">
          <h2 className="text-title mb-8 text-center">Our Story</h2>
          <div className="story-content">
            <p>
              EventUS began in 2025 when a group of event professionals
              recognized the need for a more intuitive and comprehensive event
              management solution...
            </p>
            <p>
              We continue to innovate and improve, driven by feedback from our
              community of users...
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="join-wrapper">
          <h2 className="text-title join-title">Join Our Journey</h2>
          <p className="text-body">
            Be part of our growing community and help shape the future of event
            management.
          </p>
        </div>
      </section>
      {/* FOOTER */}
      <footer className="homepage-footer">
        <div className="footer-grid">
          <div>
            <div className="footer-logo">
              <img src={logo} alt="EventUS-logo" className="nav-logo" />
              <span>EventUS</span>
            </div>
            <p>
              Your complete event management solution. Create, organize, and
              manage events with ease.
            </p>
            <div className="flex gap-3">
              <a href="#" className="hover:text-blue-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-blue-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-blue-500 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-blue-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="#" className="hover:text-blue-500 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500 transition-colors">
                  Events
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4>Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-blue-500 transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500 transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500 transition-colors">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4>Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">
                  Sarala Birla University
                  <br />
                  Ranchi, Jharkhand, India
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-blue-500 flex-shrink-0" />
                <a
                  href="tel:+919876543210"
                  className="text-gray-400 hover:text-blue-500 transition-colors"
                >
                  +91 9876543210
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-blue-500 flex-shrink-0" />
                <a
                  href="mailto:info@eventhub.com"
                  className="text-gray-400 hover:text-blue-500 transition-colors"
                >
                  info@eventhub.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="copyrgt">
          <p className="copyright">© 2025 EventUS. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
