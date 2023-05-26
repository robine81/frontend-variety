import { useContext, useState } from "react";
import { SessionContext } from "../contexts/SessionContext";
import { useNavigate, useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const ProfilePage = () => {
  const { logout } = useContext(SessionContext);
  const { user } = useContext(SessionContext);

  const navigate = useNavigate();

  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BASE_API_URL}/profile/edit`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, firstName, lastName }),
        }
      );
      if (response.status === 201) {
        navigate("/profile");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1>My Profile</h1>
      <form className="login-signup-form" onSubmit={handleSubmit}>
        <TextField
          label="First Name"
          variant="outlined"
          type="text"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
        />
        <TextField
          label="Last Name"
          variant="outlined"
          type="text"
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
        />
        <TextField
          label="Email"
          variant="outlined"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <TextField
          label="Password"
          variant="outlined"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <div className="profile-button-group">
          <Button variant="contained" type="submit">
            Edit
          </Button>
          <Button
            variant="contained"
            type="button"
            color="error"
            onClick={logout}
          >
            Logout
          </Button>
        </div>
      </form>
    </>
  );
};

export default ProfilePage;
