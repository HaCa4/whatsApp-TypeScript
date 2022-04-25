import React from "react";
//MUI COMPONENTS
import { Box } from "@mui/material";
//MUI SX PROPS AS CONSTANTS
import {
  searchBox,
  searchInput,
} from "../../../Constants/StylingConstants/ContactList";
const SearchBar = () => {
  return (
    <Box sx={searchBox}>
      <input
        style={searchInput}
        placeholder={"    Aratın veya yeni sohbet başlatın"}
      />
    </Box>
  );
};

export default SearchBar;
