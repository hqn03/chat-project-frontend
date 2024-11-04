import { Avatar, Box, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import Search from "~/components/Search/Search";
import { debounce } from "lodash";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "~/redux/selector";
import useShow from "~/hooks/useShow";
import { logout } from "~/redux/actions/authActions";

function Header() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const [show, toggleShow] = useShow();

  const searchChat = debounce(async (value) => {
    console.log("call api search chat: ", value);
  }, 500);

  const handleLogout = () => {
    logout(dispatch);
  };

  return (
    <Box display={"flex"} py={2.25} px={2.5} gap={1} alignItems={"center"}>
      <IconButton sx={{ p: 2.25 }} onClick={toggleShow}>
        <MenuIcon />
      </IconButton>
      <Search handleSearch={searchChat} />
      <Box
        display={show ? "block" : "none"}
        sx={{
          border: "1px solid black",
          borderRadius: 2,
          bgcolor: "white",
          width: 300,
          position: "absolute",
          top: 60,
          zIndex: 10,
          padding: 4,
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: 4,
            alignItems: "center",
            p: 2,
            borderBottom: "1px #555 solid",
          }}
        >
          <Avatar alt={user.name} />
          <Typography variant="h6">{user.name}</Typography>
        </Box>
        <Box>
          {user.role === "moderate" && <Box>New group</Box>}
          <Box
            sx={{ p: 2, ":hover": { cursor: "pointer" } }}
            onClick={handleLogout}
          >
            Logout
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Header;
