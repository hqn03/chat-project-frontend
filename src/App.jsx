import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import Home from "./pages/Home/Home";
import Users from "./pages/Admin/Users/Users";
import Dashboard from "./pages/Admin/Dashboard";
import Chatbox from "./components/Chatbox/Chatbox";
function App() {
  const currentUser = { isAdmin: true };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot" element={<ForgotPassword />} />

        <Route
          path="/chat"
          element={
            <ProtectedRoutes allowedRoles={["ADMIN", "USER"]}>
              <Home />
            </ProtectedRoutes>
          }
        >
          <Route path="/chat/:id" element={<Chatbox />} />
        </Route>

        <Route
          path="/admin"
          element={
            <ProtectedRoutes allowedRoles={["ADMIN"]}>
              <Dashboard />
            </ProtectedRoutes>
          }
        >
          <Route path="/admin/users" element={<Users />} />
          <Route path="/admin/groups" element={<h1>groups</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
