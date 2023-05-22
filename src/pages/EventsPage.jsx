import React, { useEffect, useState } from "react";
import EventCard from "../components/EventCard/EventCard";

export default function EventsPage() {
  const [events, setEvents] = useState([]);
  const [page, setPage] = useState(0);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:5005/events");
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

  useEffect(() => {
    fetchData();
  }, []);

  const pageCount = Math.ceil(events.length / 5);

  return (
    <div className="event-page">
      {events.slice(page * 5, page * 5 + 5).map((event) => {
        return <EventCard event={event} />;
      })}
      <div className="page">
        {[...Array(pageCount)].map((val, index) => {
          return (
            <button
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
      <a href="/events/add"> Add Event</a>
    </div>
  );
}
