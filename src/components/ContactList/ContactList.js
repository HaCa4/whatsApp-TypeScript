import React from "react";

//MUI-COMPONENTS
import { Grid } from "@mui/material";
//MUI SX PROPS AS CONSTANTS
import { contactGrid } from "../../Constants/StylingConstants/ContactList";

//COMPONENTS
import ProfileBar from "./components/ProfileBar";
import ChatList from "./components/ChatList";
import SearchBar from "./components/SearchBar";

const ContactList = () => {
  return (
    <Grid item sx={contactGrid}>
      <ProfileBar />
      <SearchBar />
      <ChatList />
    </Grid>
  );
};
export default ContactList;
