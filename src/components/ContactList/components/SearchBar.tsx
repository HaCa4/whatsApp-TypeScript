import React from "react";
//MUI COMPONENTS
import { Box } from "@mui/material";
//MUI SX PROPS AS CONSTANTS
import {
  searchBox,
  searchInput,
} from "../../../Constants/StylingConstants/ContactList";
import { searchBarPlaceholder } from "../../../Constants/AppConstants";
const SearchBar: React.FC = () => {
  return (
    <Box sx={searchBox}>
      <input style={searchInput} placeholder={searchBarPlaceholder} />
    </Box>
  );
};

export default SearchBar;
