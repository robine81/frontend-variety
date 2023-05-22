import React from "react";
import "./style.css";

export default function EventCard({ event }) {
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
    </div>
  );
}
