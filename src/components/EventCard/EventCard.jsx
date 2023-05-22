import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

export default function EventCard({ event }) {
  return (
    <div className="event-card">
      <div
        className="event-img"
        style={{ backgroundImage: `url(${event.artworkUrl})` }}
      ></div>
      <div>
        <h2>
          <Link to={`/events/${event._id}`}>{event.eventName}</Link>
        </h2>
        <p>
          {event.lineUp &&
            event.lineUp.map((artist) => <span>{artist.artistName}</span>)}
        </p>
        <p>{event.location}</p>
        <p>{event.ticketPrice}€</p>
      </div>
    </div>
  );
}
