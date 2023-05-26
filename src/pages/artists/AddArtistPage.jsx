import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { SessionContext } from "../../contexts/SessionContext";
import ArtistForm from "../../components/ArtistForm/ArtistForm";

const AddArtistPage = () => {
  const { token } = useContext(SessionContext);
  const navigate = useNavigate();

  const handleSubmit = async (newArtist) => {
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
      if (response.status === 201) {
        console.log("Artist created:", response.json());
        navigate(`/artists`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return <ArtistForm isUpdate={false} handleSubmit={handleSubmit} />;
};
export default AddArtistPage;
