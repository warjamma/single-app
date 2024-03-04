import { createBrowserRouter } from 'react-router-dom';
import { HomePage, LoginPage, RegisterPage, ProfilePage, GatePage, NotFoundPage, NotificationPage } from '../pages';
import RootLayout from '../layout.component';

export const RouterLinks = createBrowserRouter([
  {
    Component: RootLayout,
    children: [
      {
        path: '/',
        Component: HomePage,
      },
      {
        path: '/profile',
        Component: ProfilePage,
      },
      {
        path: '/notifications',
        Component: NotificationPage,
      },
      {
        path: '*',
        Component: NotFoundPage,
      },
    ],
  },
  {
    path: '/gate',
    Component: GatePage,
  },
  {
    path: '/account/register',
    Component: RegisterPage,
  },
  {
    path: '/account/login',
    Component: LoginPage,
  },
]);
