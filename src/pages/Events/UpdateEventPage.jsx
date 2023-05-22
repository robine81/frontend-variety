import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { SessionContext } from "../../contexts/SessionContext";
import EventForm from "../../components/EventForm/EventForm";
import "./events.css";

export default function UpdateEventPage() {
  const [event, setEvent] = useState({});
  const { token } = useContext(SessionContext);
  const navigate = useNavigate();
  const { id } = useParams();

  const fetchEventId = async () => {
    try {
      const response = await fetch(`http://localhost:5005/events/${id}`);
      if (response.status === 200) {
        const data = await response.json();
        setEvent(data);
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchEventId();
  }, [id]);

  const handleSubmit = async (payload) => {
    try {
      const response = await fetch(`http://localhost:5005/events/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });
      if (response.status === 200) {
        navigate(`/events/${id}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <EventForm
      handleSubmit={handleSubmit}
      isUpdate={true}
      key={event._id}
      {...event}
    />
  );
}
