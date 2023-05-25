import React from "react";
import { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { SessionContext } from "../../contexts/SessionContext";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function ArtistForm(props) {
  const { handleSubmit, isUpdate } = props;
  const { token } = useContext(SessionContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    artistName: "",
    firstName: "",
    lastName: "",
    artistPicUrl: "",
    soundCloudUrl: "",
    beatPortUrl: "",
    instagramUrl: "",
    facebookUrl: "",
    webPage: "",
  });
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
    if (isUpdate) {
      fetchArtist();
    }
  }, [isUpdate, id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  return (
    <form className="add-new-form" onSubmit={handleSubmit}>
      <TextField
        label="Artist Name"
        variant="outlined"
        value={inputs.artistName}
        name="artistName"
        onChange={handleChange}
      />
      <TextField
        label="First Name"
        variant="outlined"
        value={inputs.firstName}
        name="firstName"
        onChange={handleChange}
      />
      <TextField
        label="Last Name"
        variant="outlined"
        value={inputs.lastName}
        name="lastName"
        onChange={handleChange}
      />
      <TextField
        label="Artist Picture"
        variant="outlined"
        value={inputs.artistPicUrl}
        name="artistPicUrl"
        onChange={handleChange}
      />
      <TextField
        label="Soundcloud"
        variant="outlined"
        value={inputs.soundCloudUrl}
        name="soundCloudUrl"
        onChange={handleChange}
      />
      <TextField
        label="Beatport"
        variant="outlined"
        value={inputs.beatPortUrl}
        name="beatPortUrl"
        onChange={handleChange}
      />
      <TextField
        label="Instagram"
        variant="outlined"
        value={inputs.instagramUrl}
        name="instagramUrl"
        onChange={handleChange}
      />
      <TextField
        label="Facebook"
        variant="outlined"
        value={inputs.facebookUrl}
        name="facebookUrl"
        onChange={handleChange}
      />
      <TextField
        label="Web Page"
        variant="outlined"
        value={inputs.webPage}
        name="webPage"
        onChange={handleChange}
      />
      <div className="button-style">
      <Button variant="contained" type="submit">
        {isUpdate ? "UPDATE" : "ADD NEW"}
      </Button>
      </div>
    </form>
  );
}
