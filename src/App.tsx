import React from "react";

import { DisplayActivePersonProvider } from "./context/DisplayActivePerson";

//MUI-COMPONENTS
import Grid from "@mui/material/Grid";

//COMPONENTS
import ContactList from "./components/ContactList/ContactList";
import MessageScreen from "./components/MessageScreen/MessageScreen";

const App: React.FC = () => {
  return (
    <Grid container sx={{ flexWrap: "no-wrap" }}>
      <DisplayActivePersonProvider>
        <ContactList />
        <MessageScreen />
      </DisplayActivePersonProvider>
    </Grid>
  );
};

export default App;
