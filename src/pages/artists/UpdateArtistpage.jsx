import { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { SessionContext } from "../../contexts/SessionContext";
import ArtistForm from "../../components/ArtistForm/ArtistForm";

const UpdateArtistPage = () => {
  const { token } = useContext(SessionContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchArtist = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BASE_API_URL}/artists/${id}`
      );
      const artist = await response.json();
      delete artist.id;
      //console.log(artist)
      //console.log(inputs)
      setIsLoading(false);
      setInputs(artist);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchArtist();
  }, [id]);

  const handleSubmit = async (updatedArtist) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BASE_API_URL}/artists/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(updatedArtist),
        }
      );
      if (response.status === 200) {
        console.log("All good");
        // Navigate to the details page
        navigate(`/artists/${id}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <ArtistForm isUpdate={true} handleSubmit={handleSubmit} artist={inputs} />
  );
};

export default UpdateArtistPage;
