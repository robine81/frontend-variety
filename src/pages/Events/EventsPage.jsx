import { useEffect, useState } from "react";
import EventCard from "../../components/EventCard/EventCard";
import { Link } from "react-router-dom";
import "./events.css";

export default function EventsPage() {
  const [events, setEvents] = useState([]);
  const [page, setPage] = useState(0);
  const [filtered, setFiltered] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_BASE_API_URL}/events`);
      if (response.status === 200) {
        const data = await response.json();
        setEvents(data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const changePage = (pageNum) => {
    setPage(pageNum);
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
        <input
          type="search"
          placeholder="Search Event"
          onChange={searchEvent}
        />
      </div>
      {eventSource.length > 0 &&
        eventSource.slice(page * 5, page * 5 + 5).map((event) => {
          return <EventCard key={event._id} event={event} />;
        })}
      <div className="event-page-pagination">
        {[...Array(pageCount)].map((val, index) => {
          return (
            <button
              key={`page-${index}`}
              style={{ fontWeight: page === index ? "bold" : "normal" }}
              type="button"
              onClick={() => {
                changePage(index);
              }}
            >
              {index + 1}
            </button>
          );
        })}
      </div>
      <Link to="/events/add"> Add Event</Link>
    </div>
  );
}
