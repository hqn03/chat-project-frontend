import { Box, Button, Divider, IconButton, Tooltip } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ChatIcon from "@mui/icons-material/Chat";
import ContactsIcon from "@mui/icons-material/Contacts";
import GroupIcon from "@mui/icons-material/Group";
import React, { memo, useMemo } from "react";

function Menubar({ toggleDrawer }) {
  return (
    <Box
      width={"70px"}
      display={"flex"}
      flexDirection="column"
      border={"1px solid black"}
    >
      <IconButton onClick={toggleDrawer(true)}>
        <MenuIcon />
      </IconButton>
      <Divider />
      <Tooltip title="All chat">
        <IconButton onClick={() => {}}>
          <ChatIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Contact">
        <IconButton onClick={() => {}}>
          <ContactsIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Group">
        <IconButton onClick={() => {}}>
          <GroupIcon />
        </IconButton>
      </Tooltip>
    </Box>
  );
}

export default memo(Menubar);
