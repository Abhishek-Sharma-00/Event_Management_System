import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import "@/styles/RegistrationConfirmation.css";

export default function RegistrationConfirmation() {
  const navigate = useNavigate();

  return (
    <div className="confirmation-container">
      <Card className="confirmation-card" data-testid="confirmation-card">
        <CardContent className="confirmation-content">
          <div className="success-icon" data-testid="success-icon">✓</div>
          <h1 className="confirmation-title" data-testid="confirmation-title">Registration Successful!</h1>
          <p className="confirmation-message" data-testid="confirmation-message">
            Thank you for registering! A confirmation email has been sent to your email address with all the event details.
          </p>
          <div className="confirmation-actions">
            <Button onClick={() => navigate("/events")} data-testid="confirmation-browse-btn">
              Browse More Events
            </Button>
            <Button variant="outline" onClick={() => navigate("/")} data-testid="confirmation-home-btn">
              Go to Home
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}