import { useEffect, useState, useContext } from "react";
import Avatar from "@mui/material/Avatar";
import { useParams } from "react-router-dom";
import { SessionContext } from "../../contexts/SessionContext";
import { useNavigate } from "react-router-dom";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import "./events.css";
import EventCard from "../../components/EventCard/EventCard";

export default function OneEventPage() {
  const [event, setEvent] = useState({});
  const { id } = useParams();
  const { token, isLoggedIn } = useContext(SessionContext);
  const navigate = useNavigate();

  const deleteEvent = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BASE_API_URL}/events/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status === 204) {
        navigate(`/events`);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const fetchEventId = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BASE_API_URL}/events/${id}`
      );
      if (response.status === 200) {
        const data = await response.json();
        setEvent(data);
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchEventId();
  }, [id]);

  return (
    <EventCard event={event}>
      {isLoggedIn && (
        <ButtonGroup variant="contained" sx={{ marginLeft: "30px" }}>
          <Button
            color="error"
            startIcon={<DeleteOutlineIcon />}
            onClick={deleteEvent}
          >
            Delete
          </Button>
          <Button
            onClick={() => navigate(`/events/update/${event._id}`)}
            startIcon={<ModeEditOutlineIcon />}
          >
            Edit
          </Button>
        </ButtonGroup>
      )}
    </EventCard>
  );
}
