import React, { useEffect, useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { SessionContext } from "../../contexts/SessionContext";
import { useNavigate } from "react-router-dom";
import "./events.css";

export default function OneEventPage() {
  const [event, setEvent] = useState({});
  const { id } = useParams();
  const { token } = useContext(SessionContext);
  const navigate = useNavigate();

  const deleteEvent = async () => {
    try {
      const response = await fetch(`http://localhost:5005/events/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.status === 204) {
        navigate(`/events`);
      }
    } catch (error) {
      console.error(error);
    }
  };

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

  return (
    <div className="event-card">
      <div
        className="event-img"
        style={{ backgroundImage: `url(${event.artworkUrl})` }}
      ></div>
      <div>
        <h2>{event.eventName}</h2>
        <p>
          {event.lineUp &&
            event.lineUp.map((artist) => <span>{artist.artistName}</span>)}
        </p>
        <p>{event.location}</p>
        <p>{event.ticketPrice}€</p>
      </div>
      <button onClick={deleteEvent}>Delete</button>
      <Link to={`/events/update/${event._id}`}>Edit</Link>
    </div>
  );
}
