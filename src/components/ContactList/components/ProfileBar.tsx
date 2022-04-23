import React from "react";

//MUI-COMPONENTS
import { Grid, Avatar, Box } from "@mui/material";

//MUI/ICONS
import AutorenewRoundedIcon from "@mui/icons-material/AutorenewRounded";
import ChatSharpIcon from "@mui/icons-material/ChatSharp";
import MoreVertSharpIcon from "@mui/icons-material/MoreVertSharp";

const ProfileBar = () => {
  return (
    <Grid
      container
      sx={{
        displayContent: "center",
        paddingX: "1rem",
        alignItems: "center",
        backgroundColor: "#f0f2f5",
        paddingY: "0.6rem",
      }}
      spacing={2}
    >
      <Grid item xs={7}>
        <Avatar
          sx={{ width: "2.5rem", height: "2.5rem" }}
          alt="random"
          src="https://ychef.files.bbci.co.uk/1376x774/p07phq4b.jpg"
        />
      </Grid>
      <Grid item xs={5} sx={{ textAlign: "left", paddingRight: "1rem" }}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <AutorenewRoundedIcon
            sx={{ height: "1.5rem", width: "1.5rem", color: "rgb(84,101,111)" }}
          />
          <ChatSharpIcon
            sx={{ height: "1.5rem", width: "1.5rem", color: "rgb(84,101,111)" }}
          />
          <MoreVertSharpIcon
            sx={{ height: "1.5rem", width: "1.5rem", color: "rgb(84,101,111)" }}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default ProfileBar;
