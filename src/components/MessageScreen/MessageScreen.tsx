import React, { useState } from "react";

//MUI-COMPONENTS
import { Grid } from "@mui/material";
//MUI SX PROPS AS CONSTANTS
import { screenGrid } from "../../Constants/StylingConstants/MessageScreen";
//COMPONENTS
import ActivePersonBar from "./components/ActivePersonBar";
import MessageInput from "./components/MessageInput";
import MessageFlowWindow from "./components/MessageFlowWindow";
//CONTEXT
import { DisplayMessageContext } from "../../context/DisplayMessageContext";

const MessageScreen = () => {
  const [messageList, setMessageList] = useState<any[]>([]);

  return (
    <Grid item sx={screenGrid}>
      <ActivePersonBar />
      <DisplayMessageContext.Provider value={{ messageList, setMessageList }}>
        <MessageFlowWindow />
        <MessageInput />
      </DisplayMessageContext.Provider>
    </Grid>
  );
};

export default MessageScreen;
