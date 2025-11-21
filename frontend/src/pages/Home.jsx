import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Calendar,
  Users,
  CheckCircle,
  TrendingUp,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";
import "../styles/Home.css";
import { useAuth } from "@/context/AuthContext";

import logo from "../assets/EventUs-logo.png";

export default function Home() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [open, setOpen] = React.useState(false);

  return (
    <div className="home-wrapper">
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

      {/* HERO SECTION */}
      <section className="hero-section-new">
        <h2>Welcome to EventUS</h2>
        <p>
          Create, manage, and organize events seamlessly. From conferences to
          workshops, handle everything in one powerful platform.
        </p>
        <div className="hero-buttons-new">
          <Button onClick={() => navigate("/admin")}>Create Your Event</Button>
          <Button variant="outline" onClick={() => navigate("/events")}>
            Browse Events
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* WHY CHOOSE EVENTUS */}
      <section className="features-section">
        <h3>Why Choose EventUS?</h3>
        <div className="features-grid">
          <Card className="feature-card">
            <CardContent>
              <Calendar className="h-12 w-12 text-blue-600 mb-4" />
              <h4>Easy Event Creation</h4>
              <p>
                Create and customize events in minutes with our intuitive
                interface.
              </p>
            </CardContent>
          </Card>

          <Card className="feature-card">
            <CardContent>
              <Users className="h-12 w-12 text-green-600 mb-4" />
              <h4>Attendee Management</h4>
              <p>
                Track registrations and manage attendees with comprehensive
                tools.
              </p>
            </CardContent>
          </Card>

          <Card className="feature-card">
            <CardContent>
              <CheckCircle className="h-12 w-12 text-purple-600 mb-4" />
              <h4>Real-time Updates</h4>
              <p>
                Keep everyone informed with instant notifications and updates.
              </p>
            </CardContent>
          </Card>

          <Card className="feature-card">
            <CardContent>
              <TrendingUp className="h-12 w-12 text-orange-600 mb-4" />
              <h4>Analytics & Insights</h4>
              <p>
                Get valuable insights about your events and attendee engagement.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta-section">
        <h3>Ready to Get Started?</h3>
        <p>
          Join thousands of event organizers who trust EventUS for their event
          management needs.
        </p>
        <Button onClick={() => navigate("/admin")}>
          Create Your First Event
        </Button>
      </section>

      {/* FOOTER */}
      <footer className="homepage-footer">
        <div className="footer-grid">
          <div>
            <div className="footer-logo">
              <img src={logo} alt="EVENTUS" className="nav-logo" />
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