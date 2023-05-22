import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SessionContext } from "../contexts/SessionContext";

export default function AddEventPage() {
  const [eventName, setEventName] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [ticketPrice, setTicketPrice] = useState();
  const [artworkUrl, setArtWorkUrl] = useState();
  const [lineUp, setLineUp] = useState([]);
  const [artists, setArtists] = useState([]);
  const { token } = useContext(SessionContext);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const payload = {
      eventName,
      date,
      location,
      artworkUrl,
      lineUp,
      ticketPrice,
    };
    try {
      const response = await fetch("http://localhost:5005/events", {
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

  const fetchArtists = async () => {
    try {
      const response = await fetch("http://localhost:5005/artists");
      if (response.status === 200) {
        const data = await response.json();
        setArtists(data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchArtists();
  }, []);

  return (
    <form className="add-new-form" onSubmit={handleSubmit}>
      <label>
        Event Name
        <input
          type="text"
          value={eventName}
          onChange={(event) => {
            setEventName(event.target.value);
          }}
        />
      </label>
      <label>
        Location
        <input
          type="text"
          value={location}
          onChange={(event) => {
            setLocation(event.target.value);
          }}
        />
      </label>
      <label>
        Artwork Url
        <input
          type="text"
          value={artworkUrl}
          onChange={(event) => {
            setArtWorkUrl(event.target.value);
          }}
        />
      </label>
      <label>
        Date
        <input
          type="datetime-local"
          value={date}
          onChange={(event) => {
            setDate(event.target.value);
          }}
        />
      </label>
      <label>
        Line Up
        <select
          multiple
          onChange={(event) => {
            setLineUp(event.target.value);
          }}
        >
          {artists.map((artist) => (
            <option value={artist._id}>{artist.artistName}</option>
          ))}
        </select>
      </label>
      <label>
        Ticket Price
        <input
          type="number"
          value={ticketPrice}
          onChange={(event) => {
            setTicketPrice(event.target.value);
          }}
        />
      </label>
      <button type="submit">ADD NEW</button>
    </form>
  );
}
