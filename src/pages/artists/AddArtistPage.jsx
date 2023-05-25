import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { SessionContext } from "../../contexts/SessionContext";
import ArtistForm from "../../components/ArtistForm/ArtistForm";

const AddArtistPage = () => {
  const { token } = useContext(SessionContext);
  const navigate = useNavigate();
  const [artistName, setArtistName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [artistPicUrl, setArtistPicUrl] = useState("");
  const [soundCloudUrl, setSoundCloudUrl] = useState("");
  const [beatPortUrl, setBeatPortUrl] = useState("");
  const [instagramUrl, setInstagramUrl] = useState("");
  const [facebookUrl, setFacebookUrl] = useState("");
  const [webPage, setWebPage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newArtist = {
      artistName,
      firstName,
      lastName,
      artistPicUrl,
      soundCloudUrl,
      beatPortUrl,
      instagramUrl,
      facebookUrl,
      webPage,
    };
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BASE_API_URL}/artists/add`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(newArtist),
        }
      );

      console.log("Artist created:", response.json());
      navigate(`/artists`);
    } catch (error) {
      console.log(error);
    }
  };
  return <ArtistForm />;
};
export default AddArtistPage;
