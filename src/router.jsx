// import { createBrowserRouter } from "react-router-dom";
// import Home from "./pages/Home/Home";
// import Login from "./pages/Login/Login";
// import Register from "./pages/Register/Register";
// import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
// import Dashboard from "./pages/Dashboard/Dashboard";
// import Users from "./pages/Dashboard/Users/Users";
// import ProtectedRoutes from "./utils/ProtectedRoutes";

// const router = createBrowserRouter([
//   // Public path
//   { path: "/login", element: <Login /> },
//   { path: "/register", element: <Register /> },
//   { path: "/forgot", element: <ForgotPassword /> },

//   //   User path
//   {
//     path: "/",
//     element: <ProtectedRoutes />,
//     children: [
//       { path: "/chat", element: <Home /> },
//       {
//         path: "/dashboard",
//         element: <Dashboard />,
//         children: [
//           { path: "/dashboard/users", element: <Users /> },
//           { path: "/dashboard/groups", element: <p>Groups</p> },
//         ],
//       },
//     ],
//   },

//   //   Admin path

//   ,
// ]);

// export default router;
