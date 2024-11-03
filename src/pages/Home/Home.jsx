import { Box, Typography } from "@mui/material";
import Sidebar from "~/components/Sidebar/Sidebar";

import { Outlet, useParams } from "react-router-dom";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

function Home() {
  const { id } = useParams();

  return (
    <Box height={"100vh"}>
      <Box display={"flex"} height={"100%"}>
        <Sidebar />

        {/* chat site */}
        {id ? (
          <Outlet />
        ) : (
          <Box
            sx={{
              display: "flex",
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <ChatBubbleOutlineIcon sx={{ width: 95, height: 95 }} />
            <Typography variant="h6">No chats here yet...</Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default Home;
