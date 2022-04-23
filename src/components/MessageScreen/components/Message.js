//MUI-COMPONENTS
import { Box, Typography } from "@mui/material";

const Message = ({ text }) => {
  const textTime = new Date();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "2.5rem",
        minWidth: "20vw",
        paddingX: "0.5rem",
        backgroundColor: "rgba(217,253,211)",
        borderRadius: "4px",
        flexWrap: "no-wrap",
      }}
    >
      <Box>
        <Typography
          variant="subtitle2"
          sx={{ color: "black", fontWeight: "lighter" }}
        >
          {text}
        </Typography>
      </Box>
      <Box
        sx={{
          alignSelf: "flex-end",
          textAlign: "right",
          marginRight: "0.5rem",
        }}
      >
        <Typography
          variant="caption"
          sx={{
            color: "#667781",
          }}
        >
          Dün {""}
          {textTime.getHours() + "." + textTime.getMinutes()}
        </Typography>
      </Box>
    </Box>
  );
};
export default Message;
