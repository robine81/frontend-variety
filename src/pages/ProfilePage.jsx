import { useContext, useState } from "react";
import { SessionContext } from "../contexts/SessionContext";
import Layout from "../components/Layout";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const { logout } = useContext(SessionContext);
  const { isLoggedIn } = useContext(SessionContext);
  const { user } = useContext(SessionContext);

  console.log("Profile logged in? ", isLoggedIn);

  const navigate = useNavigate();

  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch(`${import.meta.env.VITE_BASE_API_URL}/profile/edit`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    if (response.status === 201) {
      navigate("/login");
    }
  };

  return (
    <Layout>
      <h1>My Profile</h1>
      <form onSubmit={handleSubmit}>
        <label>
          First Name
          <input
            type="text"
            required
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          />
        </label>
        <label>
          Last Name
          <input
            type="text"
            required
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />
        </label>
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
        <button type="submit">Edit</button>
        <button type="button" onClick={logout}>
          Logout
        </button>
      </form>
    </Layout>
  );
};

export default ProfilePage;
