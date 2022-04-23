import React from "react";

//MUI-COMPONENTS
import { Grid } from "@mui/material";

//COMPONENTS
import ProfileBar from "./components/ProfileBar";
import ChatList from "./components/ChatList";

const ContactList = () => {
  return (
    <Grid item xs={3.6} sx={{ display: "flex", flexDirection: "column" }}>
      <ProfileBar />
      <ChatList />
    </Grid>
  );
};

export default ContactList;
