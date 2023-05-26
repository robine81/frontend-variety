import React from "react";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function ArtistForm(props) {
  const { handleSubmit, isUpdate, artist } = props;
  const [inputs, setInputs] = useState(
    artist || {
      artistName: "",
      firstName: "",
      lastName: "",
      artistPicUrl: "",
      soundCloudUrl: "",
      beatPortUrl: "",
      instagramUrl: "",
      facebookUrl: "",
      webPage: "",
    }
  );

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  const onSubmit = (ev) => {
    ev.preventDefault();

    handleSubmit(inputs);
  };

  return (
    <form className="add-new-form" onSubmit={onSubmit}>
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
