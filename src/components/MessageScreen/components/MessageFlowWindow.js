import React, { useContext } from "react";

//COMPONENTS
import Message from "./Message";

//MUI_COMPONENTS
import { Container, Stack } from "@mui/material";

//CONTEXT
import { DisplayMessageContext } from "../../context/DisplayMessageContext";

const MessageFlowWindow = () => {
  const { messageList } = useContext(DisplayMessageContext);
  if (messageList !== 0)
    return (
      <Container
        sx={{
          height: "81vh",
          width: "90%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          justifyContent: "flex-end",
        }}
        overflow="auto"
      >
        <Stack sx={{ width: "max-content" }} spacing={2} mb={2}>
          {messageList.map((message, index) => (
            <Message key={index} text={message} />
          ))}
        </Stack>
      </Container>
    );
};

export default MessageFlowWindow;
