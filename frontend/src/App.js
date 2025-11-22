import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "@/context/AuthContext";
import { Toaster } from "@/components/ui/sonner";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import EventList from "@/pages/EventList";
import EventDetails from "@/pages/EventDetails";
import AdminDashboard from "@/pages/AdminDashboard";
import RegistrationConfirmation from "@/pages/RegistrationConfirmation";
import UpdateProfile from "@/pages/UpdateProfile";
import AboutPage from "@/pages/AboutPage";
import AttendeeDashboard from "@/pages/AttendeeDashboard";
import "@/App.css";

const ProtectedRoute = ({
  children,
  adminOnly = false,
  attendeeOnly = false,
}) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/" />;
  }

  if (adminOnly && user.role !== "admin") {
    return <Navigate to="/" />;
  }

  if (attendeeOnly && user.role !== "attendee") {
    return <Navigate to="/" />;
  }

  return children;
};

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/events" element={<EventList />} />
            <Route path="/events/:id" element={<EventDetails />} />
            <Route
              path="/admin"
              element={
                <ProtectedRoute adminOnly={true}>
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/attendee"
              element={
                <ProtectedRoute attendeeOnly={true}>
                  <AttendeeDashboard />
                </ProtectedRoute>
              }
            />
            <Route path="/profile" element={<UpdateProfile />} />
            <Route
              path="/registration-success"
              element={<RegistrationConfirmation />}
            />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
          <Toaster position="bottom-right" />
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
