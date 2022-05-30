import React, { useContext, useState } from "react";

//MUI_COMPONENTS
import { Grid, Box, TextField } from "@mui/material";

//MUI SX PROPS AS CONSTANTS
import {
  inputGrid,
  inputGridItem2,
  inputIcons,
  inputSendIcon,
  inputSubmitGrid,
  inputText,
} from "../../../Constants/StylingConstants/MessageScreen";

//MUI_ICONS
import MoodSharpIcon from "@mui/icons-material/MoodSharp";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import SendIcon from "@mui/icons-material/Send";

//CONTEXT
import { DisplayMessageContext } from "../../../context/DisplayMessageContext";

const MessageInput: React.FC = () => {
  const [message, setMessage] = useState<string>("");

  const list = useContext(DisplayMessageContext);

  const onTextSubmit = () => {
    list.messageList !== null &&
      list.setMessageList !== null &&
      list.setMessageList([...list.messageList, message]);
  };
  return (
    <Grid container sx={inputGrid}>
      <Grid item xs={1}>
        <Box sx={{ display: "flex", justifyContent: "space-around" }}>
          <MoodSharpIcon sx={inputIcons} />
          <AttachFileIcon sx={inputIcons} />
        </Box>
      </Grid>
      <Grid item xs={10} sx={inputGridItem2}>
        <TextField
          onChange={(e) => setMessage(e.target.value)}
          name="text"
          value={message}
          multiline
          rows={1}
          size="small"
          sx={inputText}
        />
      </Grid>

      <Grid onClick={onTextSubmit} item xs={1} sx={inputSubmitGrid}>
        <SendIcon sx={inputSendIcon} />
      </Grid>
    </Grid>
  );
};

export default MessageInput;
