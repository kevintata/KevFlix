import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { HomePage } from "./pages/HomePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SelectProfilePage } from "./pages/ProfilesPage";
import { NotFoundPage } from "./pages/NotFoundPage";

// TODO -> Create routes file
const router = createBrowserRouter([
  {
    path: "/",
    element: <SelectProfilePage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/profiles",
    element: <SelectProfilePage />,
  },
  {
    path: "/browse",
    element: <HomePage />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
