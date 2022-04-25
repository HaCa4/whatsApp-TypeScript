import React from "react";

//MUI-COMPONENTS
import { Grid, Avatar, Box } from "@mui/material";
//MUI SX PROPS AS CONSTANTS
import {
  profileAvatar,
  profileGridContainer,
  profileIcon,
  secondGrid,
  secondGridBox,
} from "../../../Constants/StylingConstants/ContactList";
//MUI/ICONS
import AutorenewRoundedIcon from "@mui/icons-material/AutorenewRounded";
import ChatSharpIcon from "@mui/icons-material/ChatSharp";
import MoreVertSharpIcon from "@mui/icons-material/MoreVertSharp";

const ProfileBar = () => {
  return (
    <Grid container sx={profileGridContainer} spacing={2}>
      <Grid item xs={7}>
        <Avatar
          sx={profileAvatar}
          alt="random"
          src="https://ychef.files.bbci.co.uk/1376x774/p07phq4b.jpg"
        />
      </Grid>
      <Grid item xs={5} sx={secondGrid}>
        <Box sx={secondGridBox}>
          <AutorenewRoundedIcon sx={profileIcon} />
          <ChatSharpIcon sx={profileIcon} />
          <MoreVertSharpIcon sx={profileIcon} />
        </Box>
      </Grid>
    </Grid>
  );
};

export default ProfileBar;
