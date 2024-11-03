import { Box, Typography } from "@mui/material";
import { NavLink, Outlet } from "react-router-dom";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import GroupsIcon from "@mui/icons-material/Groups";
const links = [
  { label: "Users", to: "users", icon: <ManageAccountsIcon /> },
  { label: "Group", to: "groups", icon: <GroupsIcon /> },
];

function Dashboard() {
  return (
    <Box sx={{ height: "100vh", display: "flex" }}>
      <Box sx={{ minWidth: 240 }}>
        <Typography variant="h2" textAlign={"center"} p={6}>
          logo
        </Typography>
        <Box>
          {links.map((item) => (
            <Box
              key={item.label}
              sx={{
                a: {
                  textDecoration: "none",
                  color: "text.secondary",
                  display: "flex",
                  px: 8,
                  py: 2,
                },
                svg: { width: 32, height: 32 },
                "&:hover": {
                  bgcolor: "grey.100",
                },
                ".active": {
                  bgcolor: "primary.main",
                },
                ".active > *": {
                  color: "white",
                },
              }}
            >
              <NavLink to={item.to}>
                {item.icon}
                <Typography variant="h6" display={"inline"} marginLeft={2}>
                  {item.label}
                </Typography>
              </NavLink>
            </Box>
          ))}
        </Box>
      </Box>
      <Box sx={{ flex: 1 }} padding={4} bgcolor={"background.main"}>
        <Outlet />
      </Box>
    </Box>
  );
}

export default Dashboard;
