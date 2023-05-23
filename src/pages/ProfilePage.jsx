import { useContext, useState } from "react";
import { SessionContext } from "../contexts/SessionContext";
import { useNavigate, useParams } from "react-router-dom";

const ProfilePage = () => {
  const { logout } = useContext(SessionContext);
  const { isLoggedIn } = useContext(SessionContext);
  const { user } = useContext(SessionContext);
  const [isLoading, setIsLoading] = useState(true)

  const navigate = useNavigate();

  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try 
    {    
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
  } catch (error){
    console.log(error)
  }
  };

  return (
    <>
      <h1>My Profile</h1>
      <form onSubmit={handleSubmit}>
        <label>
          First Name
          <input
            type="text"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          />
        </label>
        <label>
          Last Name
          <input
            type="text"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />
        </label>
        <label>
          Email
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
        <button type="submit">Edit</button>
        <button type="button" onClick={logout}>
          Logout
        </button>
      </form>
    </>
  );
};

export default ProfilePage;
