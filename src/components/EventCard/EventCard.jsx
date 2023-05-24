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
      <div className="event-card-info">
        <h2 className="event-card-link">
          <Link to={`/events/${event._id}`}>{event.eventName}</Link>
        </h2>
        <p>
          <strong>Date: </strong>
          {new Date(event.date).toLocaleString()}
        </p>
        <p>
          {event.lineUp && <strong>Line Up: </strong>}
          {event.lineUp &&
            event.lineUp.map((artist) => (
              <span key={artist._id}>{artist.artistName}</span>
            ))}
        </p>
        <p>
          <strong>Location: </strong>
          {event.location}
        </p>
        <p>
          <strong>Price: </strong>
          {event.ticketPrice}€
        </p>
      </div>
    </div>
  );
}
