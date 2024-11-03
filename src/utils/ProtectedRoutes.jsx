import { Navigate } from "react-router-dom";
const userInfo = { role: "admin" };

const ProtectedRoutes = ({ children, allowedRoles }) => {
  const userHasRequireRole =
    userInfo &&
    Array.isArray(allowedRoles) &&
    allowedRoles.includes(userInfo.role.toUpperCase());
  //if no user is authenticated, navigate to login page
  if (!userInfo) {
    return <Navigate to="/login" />;
  }

  if (userInfo && !userHasRequireRole) {
    return <h1>Error 403</h1>;
  }

  return children;
};

export default ProtectedRoutes;
