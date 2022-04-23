import React, { useState } from "react";

//MUI-COMPONENTS
import { Grid } from "@mui/material";

//COMPONENTS
import ActivePersonBar from "./components/ActivePersonBar";
import MessageInput from "./components/MessageInput";
import MessageFlowWindow from "./components/MessageFlowWindow";

//CONTEXT
import { DisplayMessageContext } from "../context/DisplayMessageContext";

const MessageScreen = () => {
  const [messageList, setMessageList] = useState([]);

  return (
    <Grid
      item
      xs={8.4}
      sx={{
        height: "100vh",
        backgroundImage:
          "url(https://preview.redd.it/qwd83nc4xxf41.jpg?auto=webp&s=172adf428061ec1b71c0d43b7ba870f85d46a816)",
      }}
    >
      <ActivePersonBar />
      <DisplayMessageContext.Provider value={{ messageList, setMessageList }}>
        <MessageFlowWindow />
        <MessageInput />
      </DisplayMessageContext.Provider>
    </Grid>
  );
};

export default MessageScreen;
