import React, { useContext, useState } from "react";

//MUI_COMPONENTS
import { Grid, Box, TextField } from "@mui/material";

//MUI_ICONS
import MoodSharpIcon from "@mui/icons-material/MoodSharp";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import SendIcon from "@mui/icons-material/Send";
//CONTEXT
import { DisplayMessageContext } from "../../context/DisplayMessageContext";

const MessageInput = () => {
  const [message, setMessage] = useState("");

  const { messageList, setMessageList } = useContext(DisplayMessageContext);

  const onTextSubmit = (event) => {
    setMessageList([...messageList, message]);
    console.log(messageList);
  };
  return (
    <Grid
      container
      sx={{
        displayContent: "center",
        alignItems: "center",
        backgroundColor: "#f0f2f5",
        bottom: "0",
        paddingY: "0.5rem",
        paddingX: "0.5rem",
        minHeight: "4rem",
      }}
    >
      <Grid item xs={1}>
        <Box sx={{ display: "flex", justifyContent: "space-around" }}>
          <MoodSharpIcon
            sx={{ height: "2rem", width: "2rem", color: "#54656f" }}
          />
          <AttachFileIcon
            sx={{ height: "2rem", width: "2rem", color: "#54656f" }}
          />
        </Box>
      </Grid>
      <Grid
        item
        xs={10}
        sx={{
          backgroundColor: "blue",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <TextField
          onChange={(e) => setMessage(e.target.value)}
          name="text"
          value={message.text}
          multiline
          rows={1}
          size="small"
          sx={{
            width: "100%",
            border: "none",
            inline: "none",
            outline: "none",
            background: "white",
          }}
        />
      </Grid>

      <Grid
        onClick={onTextSubmit}
        item
        xs={1}
        sx={{ textAlign: "right", paddingRight: "1rem" }}
      >
        <SendIcon
          sx={{ height: "1.5rem", width: "1.5rem", color: "#54656f" }}
        />
      </Grid>
    </Grid>
  );
};

export default MessageInput;
