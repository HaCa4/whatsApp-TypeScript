import React from "react";

//MUI-COMPONENTS
import { Grid, Avatar, Typography, Box } from "@mui/material";

const PersonCard = ({ avatar, name, text }) => {
  return (
    <Grid
      container
      sx={{
        paddingLeft: "0.85rem",
        minHeight: "5rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "102%" /*NEDEN? */,
        marginBottom: "0.5rem",
      }}
      spacing={1}
    >
      <Grid item xs={2} pb={1}>
        <Avatar sx={{ width: "3.2rem", height: "3.2rem" }} src={avatar} />
      </Grid>

      <Grid
        item
        xs={10}
        sx={{
          display: "flex",
          flexDirection: "column",
          textAlign: "left",
          paddingRight: "1rem",
          borderBottom: "1px solid rgb(102,119,129,0.1)",
          height: "100%",
        }}
      >
        <Grid
          container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: "0.7rem",
          }}
        >
          <Grid item xs={11}>
            <Typography>{name}</Typography>
          </Grid>
          <Grid item xs={1}>
            <Typography
              variant="caption"
              sx={{ color: "#667781", alignSelf: "flex-end" }}
            >
              Dün
            </Typography>
          </Grid>
        </Grid>

        <Box
          sx={{
            display: "flex",
            width: "100%",
            color: "#667781",
          }}
        >
          <Typography variant="caption">{text}</Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default PersonCard;
