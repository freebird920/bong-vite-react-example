import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import HomePage from './app/page.tsx';
import App241010 from './app/App241010/page.tsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/241010",
    element: <App241010 />,
  }

]);
createRoot(document.getElementById('root')!).render(
  <StrictMode>
       <RouterProvider router={router} />
  </StrictMode>,
)
