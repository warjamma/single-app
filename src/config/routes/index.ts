import { createBrowserRouter } from "react-router-dom";
import HomePage from "@pages/home";
import NotFoundPage from "@pages/not-found";

/* your routes here */
export const routes = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "*",
    Component: NotFoundPage,
  },
]);
