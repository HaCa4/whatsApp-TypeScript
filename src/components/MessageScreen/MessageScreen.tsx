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
import { DisplayMessageContextProvider } from "../../context/DisplayMessageContext";

const MessageScreen = () => {
  return (
    <Grid item sx={screenGrid}>
      <ActivePersonBar />
      <DisplayMessageContextProvider>
        <MessageFlowWindow />
        <MessageInput />
      </DisplayMessageContextProvider>
    </Grid>
  );
};

export default MessageScreen;
