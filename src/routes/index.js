import { Navigate } from "react-router-dom";
import Login from "../Pages/Login";
import PrivateRoutes from "../Components/PrivateRoutes";

import Register from "../Pages/Register";
import LayoutMain from "../Layout";
import Home from "../Pages/Home";
import AddStudents from "../Pages/AddStudents";
import AddClass from "../Pages/AddClass";
import ClassManagement from "../Pages/ClassManagement";
import StudentsManagement from "../Pages/StudentsManagement";

export const routes = [
  {
    path: "/",
    element: <LayoutMain />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "*",
        element: <Navigate to="/" />,
      },
      {
        element: <PrivateRoutes />,
        children: [
          {
            path: "add-students",
            element: <AddStudents />,
          },
          {
            path: "add-class",
            element: <AddClass />,
          },
          {
            path: "class-management",
            element: <ClassManagement/>,
          },
          {
            path: "students-management",
            element: <StudentsManagement/>,
          },
        ],
      },
    ],
  },
];
