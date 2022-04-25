import React, { useEffect, useState } from "react";

//API
import randomUser from "../../../apis/randomUser";
//MUI-COMPONENTS
import { Box } from "@mui/material";
//MUI SX PROPS AS CONSTANTS
import { chatListBox } from "../../../Constants/StylingConstants/ContactList";
//COMPONENTS
import PersonCard from "./PersonCard";

const ChatList = () => {
  const [randomPersonList, setRandomPersonList] = useState([]);

  const fetchRandomPersonList = async () => {
    await randomUser
      .get("/?results=20")
      .then((response) => setRandomPersonList(response.data.results))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchRandomPersonList();
  }, []);

  const renderRandomPersonList = () => {
    return randomPersonList.map((person, index) => {
      return (
        <PersonCard
          key={index}
          avatar={person.picture.thumbnail}
          name={person.name.first}
          text="Hello there, how is it going today?"
        />
      );
    });
  };

  return (
    <Box overflow="auto" sx={chatListBox}>
      {renderRandomPersonList()}
    </Box>
  );
};

export default ChatList;
