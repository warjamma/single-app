import { createBrowserRouter } from 'react-router-dom';
import { HomePage, LoginPage, RegisterPage, ProfilePage, GatePage, NotFoundPage, NotificationPage } from '../pages';

/* your routes here */
export const RouterLinks = createBrowserRouter([
  {
    path: '/',
    Component: HomePage,
  },
  {
    path: '/account/login',
    Component: LoginPage,
  },
  {
    path: '/account/register',
    Component: RegisterPage,
  },
  {
    path: '/profile',
    Component: ProfilePage,
  },
  {
    path: '/gate',
    Component: GatePage,
  },
  {
    path: '/notifications',
    Component: NotificationPage,
  },
  {
    path: '*',
    Component: NotFoundPage,
  },
]);
