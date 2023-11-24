import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import PersonDetails from "./pages/PersonDetails";
import "./index.css";
import Characters from "./pages/Characters";
import Locations from "./pages/Locations";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/details/:characterID",
    element: <PersonDetails />,
  },
  {
    path: "/characters",
    element: <Characters />,
  },
  {
    path: "/locations",
    element: <Locations />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
