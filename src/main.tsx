import { StrictMode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createRoot } from "react-dom/client";
import "./index.css";
import { HomePage } from "./pages/HomePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SelectProfilePage } from "./pages/ProfilesPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { Search } from "./pages/Search";

const queryClient = new QueryClient();

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
  {
    path: "/search",
    element: <Search />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>
);
