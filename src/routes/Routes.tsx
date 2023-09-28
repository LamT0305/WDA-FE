import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import Admin from "../pages/Admin";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/admin",
    element: <Admin />,
  },
]);

const Routes: React.FC = () => {
  return <RouterProvider router={routes} />;
};

export default Routes;
