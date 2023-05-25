import { useContext, useEffect, useState } from "react";
import EventCard from "../../components/EventCard/EventCard";
import { Link, useNavigate } from "react-router-dom";
import "./events.css";
import Button from "@mui/material/Button";
import SearchBar from "../../components/SearchBar";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Pagination from "@mui/material/Pagination";
import { SessionContext } from "../../contexts/SessionContext";

export default function EventsPage() {
  const { isLoggedIn } = useContext(SessionContext);
  const [events, setEvents] = useState([]);
  const [page, setPage] = useState(0);
  const [filtered, setFiltered] = useState([]);
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BASE_API_URL}/events`
      );
      if (response.status === 200) {
        const data = await response.json();
        setEvents(data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const searchEvent = (ev) => {
    const keyword = ev.target.value;
    const eventNameRegex = new RegExp(keyword, "i");
    const filteredEvents = events.filter((oneevent) => {
      return eventNameRegex.test(oneevent.eventName);
    });
    setFiltered(filteredEvents);
  };

  useEffect(() => {
    fetchData();
  }, []);

  let eventSource = events;
  if (filtered.length > 0) {
    eventSource = filtered;
  }

  const pageCount = Math.ceil(eventSource.length / 5);

  return (
    <div className="event-page">
      <div className="event-filter">
        <SearchBar onChange={searchEvent} />
        {isLoggedIn && (
          <Button
            sx={{ height: "56px" }}
            variant="contained"
            color="primary"
            startIcon={<AddCircleOutlineIcon />}
            onClick={() => navigate("/events/add")}
          >
            New Event
          </Button>
        )}
      </div>
      {eventSource.length > 0 &&
        eventSource.slice(page * 5, page * 5 + 5).map((event) => {
          return <EventCard key={event._id} event={event} />;
        })}
      <div className="event-page-pagination">
        <Pagination
          count={pageCount}
          onChange={(ev, selectedpage) => setPage(selectedpage - 1)}
          page={page + 1}
          variant="outlined"
          color="primary"
        />
      </div>
    </div>
  );
}
