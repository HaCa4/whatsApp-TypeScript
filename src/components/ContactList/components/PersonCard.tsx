import React, { useContext } from "react";

//MUI-COMPONENTS
import { Grid, Avatar, Typography, Box } from "@mui/material";

//MUI SX PROPS AS CONSTANTS
import {
  mainGrid,
  gridAvatar,
  gridItem,
  gridContainer,
  secondTypo,
  lastBox,
} from "../../../Constants/StylingConstants/ContactList";

//CONTEXT
import { DisplayActivePerson } from "../../../context/DisplayActivePerson";
import { PersonCardProps } from "../../../Constants/Types";

const PersonCard: React.FC<PersonCardProps> = ({ avatar, name, text }) => {
  const { selectedPerson, setSelectedPerson } = useContext(DisplayActivePerson);
  return (
    <Grid
      onClick={() =>
        setSelectedPerson({ ...selectedPerson, photo: avatar, title: name })
      }
      container
      sx={mainGrid}
      spacing={1}
    >
      <Grid item xs={2} pb={1}>
        <Avatar sx={gridAvatar} src={avatar} />
      </Grid>

      <Grid item xs={10} sx={gridItem}>
        <Grid container sx={gridContainer}>
          <Grid item xs={11}>
            <Typography>{name}</Typography>
          </Grid>
          <Grid item xs={1}>
            <Typography variant="caption" sx={secondTypo}>
              Dün
            </Typography>
          </Grid>
        </Grid>

        <Box sx={lastBox}>
          <Typography variant="caption">{text}</Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default PersonCard;
