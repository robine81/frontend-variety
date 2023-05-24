import React from "react";
import dayjs from "dayjs";
import "./style.css";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";

export default function EventCard({ event, children }) {
  return (
    <div className="event-card">
      <Avatar
        alt={event.eventName}
        src={event.artworkUrl}
        sx={{ width: 150, height: 150, marginRight: "30px" }}
      />
      <div className="event-card-info">
        <h2 className="event-card-link">
          <Link to={`/events/${event._id}`}>{event.eventName}</Link>
        </h2>
        <p>
          <strong>Date: </strong>
          {dayjs(event.date).format("DD/MM/YYYY HH:mm")}
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
      {children}
    </div>
  );
}
