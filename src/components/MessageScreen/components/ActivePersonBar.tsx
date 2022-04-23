import React from "react";

//MUI-COMPONENTS
import { Grid, Avatar } from "@mui/material";
//MUI-ICONS
import SearchIcon from "@mui/icons-material/Search";
import MoreVertSharpIcon from "@mui/icons-material/MoreVertSharp";

const ActivePersonBar = () => {
  return (
    <Grid
      container
      sx={{
        displayContent: "center",
        alignItems: "center",
        backgroundColor: "#f0f2f5",
        paddingY: "0.6rem",
        borderLeft: "1px solid rgb(102,119,129,0.3)",
      }}
    >
      <Grid item xs={1.5} sx={{ paddingLeft: "1rem" }}>
        <Avatar
          sx={{ width: "2.5rem", height: "2.5rem" }}
          alt="random"
          src="https://ychef.files.bbci.co.uk/1376x774/p07phq4b.jpg"
        />
      </Grid>
      <Grid item xs={9.5} sx={{ textAlign: "left" }}>
        PersonName
      </Grid>
      <Grid item xs={1}>
        <SearchIcon />
        <MoreVertSharpIcon />
      </Grid>
    </Grid>
  );
};

export default ActivePersonBar;
