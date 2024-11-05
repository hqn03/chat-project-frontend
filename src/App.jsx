import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import Home from "./pages/Home/Home";
import Users from "./pages/Admin/Users/Users";
import Dashboard from "./pages/Admin/Dashboard";
import Chatbox from "./components/Chatbox/Chatbox";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const { user } = useSelector((state) => state.auth);

  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route
          path="/"
          element={
            user ? (
              user.role === "admin" ? (
                <Navigate to="/admin" />
              ) : (
                <Navigate to="chat" />
              )
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot" element={<ForgotPassword />} />

        <Route
          path="/chat"
          element={
            <ProtectedRoutes allowedRoles={["normal", "moderate"]}>
              <Home />
            </ProtectedRoutes>
          }
        >
          <Route path="/chat/:id" element={<Chatbox />} />
        </Route>

        <Route
          path="/admin"
          element={
            <ProtectedRoutes allowedRoles={["admin"]}>
              <Dashboard />
            </ProtectedRoutes>
          }
        >
          <Route path="/admin/users" element={<Users />} />
          <Route path="/admin/groups" element={<h1>groups</h1>} />
        </Route>

        <Route path="*" element={<h1>404 not found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
