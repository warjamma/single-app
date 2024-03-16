import { createBrowserRouter } from 'react-router-dom';
import {
  HomePage,
  LoginPage,
  RegisterPage,
  ProfilePage,
  GatePage,
  NotFoundPage,
  NotificationPage,
  CreatorsPage,
} from '../pages';
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
        path: '/profile/:id',
        Component: ProfilePage,
      },
      {
        path: '/notifications',
        Component: NotificationPage,
      },
      {
        path: '/creators/:id',
        Component: CreatorsPage,
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
