import { Box, Typography } from "@mui/material";
import Header from "./Header/Header";
import Input from "./Input/Input";
import Message from "./Message/Message";
import { useParams } from "react-router-dom";

function Chatbox() {
  const { id } = useParams();
  return (
    <Box
      flex={1}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
    >
      <Box width={"100%"}>
        <Header />
        <Box height={"calc(100vh - 60px - 56px)"} overflow={"auto"}>
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message mine />
          <Message mine />
          <Message mine />
          <Message mine />
          <Message mine />
          <Message mine />
        </Box>
        <Input />
      </Box>
    </Box>
  );
}

export default Chatbox;
