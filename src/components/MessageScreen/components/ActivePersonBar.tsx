import React, { useContext } from "react";
//MUI-COMPONENTS
import { Grid, Avatar } from "@mui/material";
//MUI SX PROPS AS CONSTANTS
import {
  activeAvatar,
  activeGridContainer,
} from "../../../Constants/StylingConstants/MessageScreen";
//MUI-ICONS
import SearchIcon from "@mui/icons-material/Search";
import MoreVertSharpIcon from "@mui/icons-material/MoreVertSharp";
//CONTEXT
import { DisplayActivePerson } from "../../../context/DisplayActivePerson";

const ActivePersonBar: React.FC = () => {
  const { selectedPerson } = useContext(DisplayActivePerson);

  return (
    <Grid container sx={activeGridContainer}>
      <Grid item xs={1.5} sx={{ paddingLeft: "1rem" }}>
        <Avatar sx={activeAvatar} src={selectedPerson.photo} />
      </Grid>
      <Grid item xs={9.5} sx={{ textAlign: "left" }}>
        {selectedPerson.title}
      </Grid>
      <Grid item xs={1}>
        <SearchIcon />
        <MoreVertSharpIcon />
      </Grid>
    </Grid>
  );
};

export default ActivePersonBar;
