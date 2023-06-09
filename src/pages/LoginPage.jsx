import { useContext, useState } from "react";
import { SessionContext } from "../contexts/SessionContext";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setToken, setIsLoggedIn, setUser } = useContext(SessionContext);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const response = await fetch(
        `${import.meta.env.VITE_BASE_API_URL}/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );
      if (response.status === 200) {
        const { authToken, user } = await response.json();
        setToken(authToken);
        setUser(user);
        setIsLoggedIn(true);
        navigate("/events");
      } else if (response.status === 401) {
        const data = await response.json();
        setErrorMessage(data.errorMessage);
      }
    } catch (err) {
      console.log("Error login: ", err);
    }
  };

  return (
    <>
      <h1>Login Page</h1>
      {/* <Link to="/profile">GO TO PROFILE</Link> */}
      <form className="login-signup-form" onSubmit={handleSubmit}>
        <TextField
          label="Email"
          variant="outlined"
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <TextField
          label="Password"
          variant="outlined"
          type="password"
          required
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <Button variant="contained" type="submit">
          Log In
        </Button>
        <p>{errorMessage}</p>
      </form>
    </>
  );
};

export default LoginPage;
