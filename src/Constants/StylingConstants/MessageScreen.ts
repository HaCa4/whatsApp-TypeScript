//MESSAGE SCREEN
export const screenGrid = {
  height: "100vh",
  flexGrow: "1",
  flexFlow: "auto",
  backgroundImage:
    "url(https://i.pinimg.com/originals/b1/ab/64/b1ab6417bc9fe6b614959594ce1d8e8d.jpg)",
};
//ACTIVE PERSON
export const activeGridContainer = {
  displayContent: "center",
  alignItems: "center",
  backgroundColor: "#f0f2f5",
  paddingY: "0.6rem",
  borderLeft: "1px solid rgb(102,119,129,0.3)",
};
export const activeAvatar = { width: "2.5rem", height: "2.5rem" };
//MESSAGE

export const messageBox = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  height: "2.5rem",
  minWidth: "20vw",
  paddingX: "0.5rem",
  backgroundColor: "rgba(217,253,211)",
  borderRadius: "4px",
  flexWrap: "no-wrap",
};
export const messageTypo1 = { color: "black", fontWeight: "lighter" };
export const messageTypo2 = { color: "#667781" };
export const innerBox = {
  alignSelf: "flex-end",
  textAlign: "right",
  marginRight: "0.5rem",
};
//MESSAGE FLOW WINDOW
export const flowContainer = {
  height: "80.3vh",
  width: "90%",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  justifyContent: "flex-end",
};
export const flowStack = {
  width: "max-content",
  "&::-webkit-scrollbar": {
    width: "6px",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "#CED0D1",
    height: "10px",
  },
};
//MESSAGE INPUT
export const inputGrid = {
  displayContent: "center",
  alignItems: "center",
  backgroundColor: "#f0f2f5",
  bottom: "0",
  paddingY: "0.5rem",
  paddingX: "0.5rem",
  minHeight: "4rem",
};
export const inputIcons = { height: "2rem", width: "2rem", color: "#54656f" };
export const inputGridItem2 = {
  backgroundColor: "blue",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
};
export const inputText = {
  width: "100%",
  border: "none",
  inline: "none",
  outline: "none",
  background: "white",
};
export const inputSubmitGrid = { textAlign: "right", paddingRight: "1rem" };
export const inputSendIcon = {
  height: "1.5rem",
  width: "1.5rem",
  color: "#54656f",
};
