import { useContext, useState } from "react";
import { SessionContext } from "../contexts/SessionContext";
import { Link, useNavigate } from "react-router-dom";
import Layout from "../components/Layout";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setToken, setIsLoggedIn, setUser } = useContext(SessionContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch(`${import.meta.env.VITE_BASE_API_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    if (response.status === 200) {
      const { authToken, user } = await response.json();
      console.log("Token: ", authToken);
      setToken(authToken);
      setUser(user);
      setIsLoggedIn(true);
      navigate("/profile");
    }
  };

  return (
    <Layout>
      <h1>Login Page</h1>
      <Link to="/profile">GO TO PROFILE</Link>
      <form onSubmit={handleSubmit}>
        <label>
          Email
          <input
            type="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <button type="submit">Log In</button>
      </form>
    </Layout>
  );
};

export default LoginPage;

//TBC!!!!!!!
