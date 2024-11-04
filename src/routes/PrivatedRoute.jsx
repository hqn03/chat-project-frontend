import { Outlet } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivatedRoute = ({ allowedRoles }) => {
  const { user } = useSelector((state) => state.auth);
  console.log(user);
  const userHasRequireRole =
    user && allowedRoles.includes(user.role.toUpperCase());
  //if no user is authenticated, navigate to login page
  if (!user) {
    return <Navigate to="/login" />;
  }

  if (user && !userHasRequireRole) {
    return <h1>Error 403asdasd</h1>;
  }

  return <Outlet />;
};

export default PrivatedRoute;
