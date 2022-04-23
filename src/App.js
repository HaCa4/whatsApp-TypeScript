import React from "react";

//MUI-COMPONENTS
import Grid from "@mui/material/Grid";

//COMPONENTS
import ContactList from "./components/ContactList/ContactList";
import MessageScreen from "./components/MessageScreen/MessageScreen";

//GLOBAL CSS
import "./App.css";

const App = () => {
  return (
    <Grid container sx={{ flexWrap: "no-wrap" }}>
      <ContactList />
      <MessageScreen />
    </Grid>
  );
};

export default App;
