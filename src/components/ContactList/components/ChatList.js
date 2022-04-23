import React, { useEffect, useState } from "react";

//API
import randomUser from "../../../apis/randomUser";
//MUI-COMPONENTS
import { Box } from "@mui/material";
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
          text="Hello there, how is it going today? etc. etc. etc."
        />
      );
    });
  };
  return (
    <Box
      overflow="auto"
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        "&::-webkit-scrollbar": {
          width: "6px",
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "#CED0D1",
          height: "10px", //çalışmıyor
        },
      }}
    >
      {renderRandomPersonList()}
    </Box>
  );
};

export default ChatList;
