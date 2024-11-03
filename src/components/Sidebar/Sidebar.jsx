import { Box } from "@mui/material";
import Header from "./Header/Header";
import Groups from "./Groups/Groups";

function Sidebar() {
  return (
    <Box
      flexBasis={"370px"}
      sx={{ borderRight: (theme) => `2px solid ${theme.palette.border}` }}
    >
      <Header />
      <Groups />
    </Box>
  );
}

export default Sidebar;
