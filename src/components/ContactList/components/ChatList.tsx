import React, { useEffect, useState } from "react";

//API
import randomUser from "../../../apis/randomUser";
//MUI-COMPONENTS
import { Box } from "@mui/material";
//MUI SX PROPS AS CONSTANTS
import { chatListBox } from "../../../Constants/StylingConstants/ContactList";
//COMPONENTS
import PersonCard from "./PersonCard";
//CONSTANTS
import { Person } from "../../../Constants/Types";

const ChatList: React.FC = () => {
  const [randomPersonList, setRandomPersonList] = useState<Person[]>([]);

  const fetchRandomPersonList: Function = async () => {
      const response = await randomUser.get("/?results=20");
      setRandomPersonList(response.data.results)
  };

  useEffect(() => {
    fetchRandomPersonList();
  }, []);

  const renderRandomPersonList = () => {
    return randomPersonList.map((person: Person, index: number) => {
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
  )
};

export default ChatList;
