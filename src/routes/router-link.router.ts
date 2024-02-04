import { GatePage } from "@pages/gate";
import { HomePage } from "@pages/home";
import { LoginPage } from "@pages/login";
import { NotFoundPage } from "@pages/not-found";
import { ProfilePage } from "@pages/profile";
import { RegisterPage } from "@pages/register";
import { createBrowserRouter } from "react-router-dom";

/* your routes here */
export const RouterLinks = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/account/login",
    Component: LoginPage,
  },
  {
    path: "/account/register",
    Component: RegisterPage,
  },
  {
    path: "/profile",
    Component: ProfilePage,
  },
  {
    path: "/gate",
    Component: GatePage,
  },
  {
    path: "*",
    Component: NotFoundPage,
  },
]);
