import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectUser } from "~/redux/selector";
const userInfo = { role: "admin" };

const ProtectedRoutes = ({ children, allowedRoles }) => {
  const user = useSelector(selectUser);
  const userHasRequireRole = user && allowedRoles.includes(user.role);
  //if no user is authenticated, navigate to login page
  if (!user) {
    return <Navigate to="/login" />;
  }

  if (userInfo && !userHasRequireRole) {
    return <h1>Error 403</h1>;
  }

  return children;
};

export default ProtectedRoutes;
