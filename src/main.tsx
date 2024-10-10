import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import HomePage from "./app/page.tsx";
import App241010 from "./app/App241010/page.tsx";
import App241008 from "./app/App241008/page.tsx";
import App241009 from "./app/App241009/page.tsx";
import AppFinal from "./app/AppFinal/page.tsx";
import App241017 from "./app/App241017/page.tsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
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
    path: "/241017",
    element: <App241017 />,
  },
  {
    path: "/final",
    element: <AppFinal />,
  },
]);
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
