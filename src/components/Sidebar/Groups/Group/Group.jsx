import { Avatar, Box, Typography } from "@mui/material";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import { memo } from "react";
import { formatDateTime } from "~/utils/datetime";
import { useNavigate } from "react-router-dom";

function Group({ selected, unread, muted, data, onClick }) {
  return (
    <Box
      p={2.875}
      display={"flex"}
      gap={2}
      justifyContent={"space-between"}
      alignItems={"center"}
      bgcolor={selected && "border"}
      position={"relative"}
      onClick={onClick}
      sx={{
        cursor: "pointer",
        ":hover": {
          bgcolor: (theme) => theme.palette.background.input,
        },
      }}
    >
      <Avatar
        sx={{ height: "49px", width: "49px" }}
        src={data.avatar}
        alt="Name"
      />
      <Box sx={{ flex: 1, maxWidth: 216 }}>
        <Typography fontWeight={selected ? 500 : muted || 500} noWrap>
          {data.name}
        </Typography>
        <Typography
          variant="body2"
          noWrap
          color={!selected ? "text.secondary" : ""}
        >
          {data.lastMessage}
        </Typography>
      </Box>
      <Typography
        variant="body2"
        alignSelf={"end"}
        color={!selected ? "text.secondary" : ""}
      >
        {formatDateTime(data.timeLastMessage)}
      </Typography>
      <Box position={"absolute"} right={8} top={8}>
        {}
        {(muted && <VolumeOffIcon />) ||
          (unread && (
            <Box
              fontSize={12}
              bgcolor={"error.main"}
              color={"white"}
              px={2}
              borderRadius={10}
            >
              {unread}
            </Box>
          ))}
      </Box>
    </Box>
  );
}

export default memo(Group);
