import { Box, IconButton, OutlinedInput } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import Search from "~/components/Search/Search";
import { debounce } from "lodash";

function Header() {
  const searchChat = debounce(async (value) => {
    console.log("call api search chat: ", value);
  }, 500);

  return (
    <Box display={"flex"} py={2.25} px={2.5} gap={1} alignItems={"center"}>
      <IconButton
        sx={{ p: 2.25 }}
        onClick={() => {
          console.log("clicked");
        }}
      >
        <MenuIcon sx={{ color: "#080707" }} />
      </IconButton>
      <Search handleSearch={searchChat} />
    </Box>
  );
}

export default Header;
