import { Avatar, Box, ButtonBase, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";
import GroupAddIcon from "@mui/icons-material/GroupAdd";

import Search from "~/components/Search/Search";
import { debounce } from "lodash";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "~/redux/selector";
import useShow from "~/hooks/useShow";
import { logout } from "~/redux/actions/authActions";
import { apiFetchUser } from "~/api";

function Header() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const [show, toggleShow] = useShow();

  const searchChat = debounce(async (value) => {
    console.log("call api search chat: ", value);
  }, 500);

  const handleProfile = async () => {
    const test = await apiFetchUser(1);
    console.log(test);
  };

  const handleLogout = () => {
    logout(dispatch);
  };

  let menus = [
    {
      icon: <LogoutIcon />,
      label: "Logout",
      onClick: handleLogout,
    },
  ];

  if (user.role === "moderate") {
    menus = [
      {
        icon: <GroupAddIcon />,
        label: "Add group",
        onClick: () => {
          console.log("add group");
        },
      },
      ...menus,
    ];
  }

  return (
    <Box display={"flex"} py={2.25} px={2.5} gap={1} alignItems={"center"}>
      <IconButton sx={{ p: 2.25 }} onClick={toggleShow}>
        <MenuIcon />
      </IconButton>
      <Search handleSearch={searchChat} />
      <Box
        display={show ? "flex" : "none"}
        sx={{
          border: "1px solid black",
          bgcolor: "white",
          position: "absolute",
          top: 60,
          zIndex: 10,
          padding: 4,
          flexDirection: "column",
          gap: 2,
        }}
      >
        <ButtonBase
          sx={{ justifyContent: "start", gap: 4 }}
          onClick={handleProfile}
        >
          <Avatar alt={user.name || user.email} src={user.avatar || "none"} />
          <Typography variant="h6">{user.name || user.email}</Typography>
        </ButtonBase>

        {menus.map((menu, index) => (
          <ButtonBase
            key={index}
            sx={{
              justifyContent: "start",
              p: 2,
              gap: 4,
              ":hover": { bgcolor: "grey.200" },
            }}
            onClick={menu.onClick}
          >
            {menu.icon}
            <Typography>{menu.label}</Typography>
          </ButtonBase>
        ))}
      </Box>
    </Box>
  );
}

export default Header;
