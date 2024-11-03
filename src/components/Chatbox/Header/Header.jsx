import { Avatar, Badge, Box, Typography } from "@mui/material";

function Header() {
  return (
    <Box display={"flex"} gap={4} py={1.5} px={4} alignItems={"center"}>
      <Badge
        color="success"
        badgeContent=" "
        variant="dot"
        overlap="circular"
        sx={{
          "& .MuiBadge-badge": {
            width: 9,
            height: 9,
            outlineColor: "white",
            outlineStyle: "solid",
            outlineWidth: "2px",
          },
        }}
      >
        <Avatar />
      </Badge>
      <Box flex={1}>
        <Typography>Name</Typography>
        <Typography>Online</Typography>
      </Box>
      <Box display={"flex"} gap={4}>
        <div>call</div>
        <div>detail</div>
      </Box>
    </Box>
  );
}

export default Header;
