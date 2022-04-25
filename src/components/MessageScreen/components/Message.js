//MUI-COMPONENTS
import { Box, Typography } from "@mui/material";
//MUI SX PROPS AS CONSTANTS
import {
  innerBox,
  messageBox,
  messageTypo1,
  messageTypo2,
} from "../../../Constants/StylingConstants/MessageScreen";

const Message = ({ text }) => {
  const textTime = new Date();
  return (
    <Box sx={messageBox}>
      <Box>
        <Typography variant="subtitle2" sx={messageTypo1}>
          {text}
        </Typography>
      </Box>
      <Box sx={innerBox}>
        <Typography variant="caption" sx={messageTypo2}>
          {textTime.getHours() + "." + textTime.getMinutes()}
        </Typography>
      </Box>
    </Box>
  );
};
export default Message;
