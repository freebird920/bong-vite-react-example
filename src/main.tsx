import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import HomePage from "./app/page.tsx";
import App241010 from "./app/App241010/page.tsx";
import App241008 from "./app/App241008/page.tsx";
import App241009 from "./app/App241009/page.tsx";
import AppFinal from "./app/AppFinal/page.tsx";
import App241017 from "./app/App241017/page.tsx";
import Homework241010 from "./app/Homework241010/page.tsx";
import App241024 from "./app/App241024/page.tsx";
import App241011 from "./app/App241011/page.tsx";
import App241012 from "./app/App241012/page.tsx";
import Bong001 from "./app/bong001/page.tsx";
import App241107 from "./app/App241107/page.tsx";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "bong001",
    element: <Bong001 />,
  },
  {
    path: "/241008",
    element: <App241008 />,
  },
  {
    path: "/241009",
    element: <App241009 />,
  },
  {
    path: "/241010",
    element: <App241010 />,
  },
  {
    path: "/241011",
    element: <App241011 />,
  },
  {
    path: "/241012",
    element: <App241012 />,
  },
  {
    path: "/241017",
    element: <App241017 />,
  },
  {
    path: "/241024",
    element: <App241024 />,
  },
  { path: "/241107", element: <App241107 /> },

  {
    path: "/hw241010",
    element: <Homework241010 />,
  },
  {
    path: "/final",
    element: <AppFinal />,
  },
];
const router = createBrowserRouter(routes);
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
