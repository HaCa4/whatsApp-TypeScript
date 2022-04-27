//CONTACTLIST
export const contactGrid = {
  display: "flex",
  flexDirection: "column",
  width: "408px",
};
//CHATLIST
export const chatListBox = {
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
};
//PERSONCARD
export const mainGrid = {
  paddingLeft: "0.85rem",
  minHeight: "4.5rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "102%",
  marginBottom: "0.5rem",
  "&:hover": {
    cursor: "pointer",
    backgroundColor: "rgb(245,246,246)",
  },
};
export const gridAvatar = { width: "3.2rem", height: "3.2rem" };
export const gridItem = {
  display: "flex",
  flexDirection: "column",
  textAlign: "left",
  paddingRight: "1rem",
  borderBottom: "1px solid rgb(102,119,129,0.1)",
  height: "100%",
};
export const gridContainer = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  paddingTop: "0.7rem",
};
export const secondTypo = { color: "#667781", alignSelf: "flex-end" };
export const lastBox = {
  display: "flex",
  width: "100%",
  color: "#667781",
};
//PROFILEBAR
export const profileGridContainer = {
  displayContent: "center",
  paddingX: "1rem",
  alignItems: "center",
  backgroundColor: "#f0f2f5",
  paddingY: "0.6rem",
};
export const profileIcon = {
  height: "1.5rem",
  width: "1.5rem",
  color: "rgb(84,101,111)",
};
export const profileAvatar = { width: "2.5rem", height: "2.5rem" };
export const secondGrid = { textAlign: "left", paddingRight: "1rem" };
export const secondGridBox = {
  display: "flex",
  justifyContent: "space-between",
};
//SEARCHBAR
export const searchBox = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "10rem",
  borderBottom: "1px solid rgb(102,119,129,0.1)",
};
export const searchInput = {
  backgroundColor: "rgb(240,242,245)",
  border: "none",
  borderRadius: "6px",
  width: "95%",
  height: "70%",
  paddingLeft:"2rem"
};
