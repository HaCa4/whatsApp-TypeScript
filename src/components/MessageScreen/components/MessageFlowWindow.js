import React, { useContext } from "react";

//COMPONENTS
import Message from "./Message";

//MUI_COMPONENTS
import { Container, Stack } from "@mui/material";
//MUI SX PROPS AS CONSTANTS
import {
  flowContainer,
  flowStack,
} from "../../../Constants/StylingConstants/MessageScreen";

//CONTEXT
import { DisplayMessageContext } from "../../../context/DisplayMessageContext";

const MessageFlowWindow = () => {
  const { messageList } = useContext(DisplayMessageContext);

  const renderMessageList = () => {
    return messageList.map((message, index) => (
      <Message key={index} text={message} />
    ));
  };

  if (messageList !== 0)
    return (
      <Container sx={flowContainer}>
        <Stack overflow="auto" sx={flowStack} spacing={2} mb={2}>
          {renderMessageList()}
        </Stack>
      </Container>
    );
};

export default MessageFlowWindow;
