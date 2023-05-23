import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SessionContext } from "../../contexts/SessionContext";
import EventForm from "../../components/EventForm/EventForm";
import "./events.css";

export default function AddEventPage() {
  const { token } = useContext(SessionContext);
  const navigate = useNavigate();

  const handleSubmit = async (payload) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_BASE_API_URL}/events`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });
      if (response.status === 201) {
        const newEvent = await response.json();
        console.log(newEvent);
        navigate(`/events/${newEvent._id}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return <EventForm handleSubmit={handleSubmit} isUpdate={false} />;
}
