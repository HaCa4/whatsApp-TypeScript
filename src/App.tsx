import React, { useState } from "react";

import { DisplayActivePerson } from "./context/DisplayActivePerson";

//MUI-COMPONENTS
import Grid from "@mui/material/Grid";

//COMPONENTS
import ContactList from "./components/ContactList/ContactList";
import MessageScreen from "./components/MessageScreen/MessageScreen";

//CONSTANTS
import { initialSelectedPerson } from "./Constants/AppConstants";

const App: React.FC = () => {
  const [selectedPerson, setSelectedPerson] = useState<object>(
    initialSelectedPerson
  );
  return (
    <Grid container sx={{ flexWrap: "no-wrap" }}>
      <DisplayActivePerson.Provider
        value={{ selectedPerson, setSelectedPerson }}
      >
        <ContactList />
        <MessageScreen />
      </DisplayActivePerson.Provider>
    </Grid>
  );
};

export default App;
