import HomePage from "../../pages/home";
import { createBrowserRouter } from "react-router-dom";

/* your routes here */
export const routes = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
  },
]);
