import React, { useState, useEffect } from "react";

export default function EventForm(props) {
  const { handleSubmit, isUpdate } = props;

  const [eventName, setEventName] = useState(props.eventName || "");
  const [date, setDate] = useState(props.date || "");
  const [location, setLocation] = useState(props.location || "");
  const [ticketPrice, setTicketPrice] = useState(props.ticketPrice);
  const [artworkUrl, setArtWorkUrl] = useState(props.artworkUrl || "");
  const [lineUp, setLineUp] = useState(props.lineUp || []);
  const [artists, setArtists] = useState([]);

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

  const onSubmit = (ev) => {
    ev.preventDefault();

    const payload = {
      eventName,
      date,
      location,
      artworkUrl,
      lineUp,
      ticketPrice,
    };
    handleSubmit(payload);
  };

  return (
    <form className="add-new-form" onSubmit={onSubmit}>
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
          value={date.replace("Z", "")} //https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/datetime-local#value
          onChange={(event) => {
            setDate(event.target.value);
          }}
        />
      </label>
      <label>
        Line Up
        <select
          value={lineUp.map((lp) => lp._id)}
          required
          multiple
          onChange={(event) => {
            setLineUp(event.target.value);
          }}
        >
          {artists.map((artist) => (
            <option key={artist._id} value={artist._id}>
              {artist.artistName}
            </option>
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
      <button type="submit">{isUpdate ? "UPDATE" : "ADD NEW"}</button>
    </form>
  );
}
