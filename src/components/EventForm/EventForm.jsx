import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import dayjs, { Dayjs } from "dayjs";
import Button from "@mui/material/Button";
import Autocomplete from "@mui/material/Autocomplete";

export default function EventForm(props) {
  const { handleSubmit, isUpdate } = props;

  const [eventName, setEventName] = useState(props.eventName || "");
  const [date, setDate] = useState(props.date || "");
  const [location, setLocation] = useState(props.location || "");
  const [ticketPrice, setTicketPrice] = useState(props.ticketPrice);
  const [artworkUrl, setArtWorkUrl] = useState(props.artworkUrl || "");
  const [lineUp, setLineUp] = useState(
    (Array.isArray(props.lineUp) && props.lineUp) || []
  );
  const [artists, setArtists] = useState([]);

  const fetchArtists = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BASE_API_URL}/artists`
      );
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
      lineUp: lineUp.map((artist) => artist._id), // just send ids
      ticketPrice,
    };
    handleSubmit(payload);
  };

  return (
    <form className="add-new-form" onSubmit={onSubmit}>
      <TextField
        label="Event Name"
        variant="outlined"
        value={eventName}
        onChange={(event) => {
          setEventName(event.target.value);
        }}
      />
      <TextField
        label="Location"
        variant="outlined"
        value={location}
        onChange={(event) => {
          setLocation(event.target.value);
        }}
      />
      <TextField
        type="url"
        label="Artwork Url"
        variant="outlined"
        value={artworkUrl}
        onChange={(event) => {
          setArtWorkUrl(event.target.value);
        }}
      />
      <DateTimePicker
        label="Date & Time"
        value={dayjs(date)}
        onChange={(val) => setDate(val.toISOString())}
      />
      <Autocomplete
        multiple
        value={lineUp}
        label="Line Up"
        id="tags-outlined"
        onChange={(event, newValue) => {
          setLineUp(newValue);
        }}
        options={artists}
        getOptionLabel={(option) => option.artistName}
        filterSelectedOptions
        renderInput={(params) => <TextField {...params} label="Line Up" />}
        isOptionEqualToValue={(option, value) => option._id === value._id}
      />
      <TextField
        type="number"
        label="Ticket Price"
        variant="outlined"
        value={ticketPrice}
        onChange={(event) => {
          setTicketPrice(event.target.value);
        }}
      />
      <Button variant="contained" type="submit">
        {isUpdate ? "UPDATE" : "ADD NEW"}
      </Button>
    </form>
  );
}
