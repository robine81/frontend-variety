import { Container, InputAdornment, TextField } from "@mui/material";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBar({ onChange }) {
  return (
    <Container maxWidth="md">
      <TextField
        fullWidth
        id="search"
        type="search"
        label="Search Events"
        onChange={onChange}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </Container>
  );
}
