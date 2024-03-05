import React from 'react';
import { Outlet } from 'react-router-dom';
import { TopNav } from './views';
import { GoogleAnalytics } from './components';

const RootLayout = () => {
  return (
    <>
      <TopNav />
      <Outlet />
      <GoogleAnalytics />
    </>
  );
};

export default RootLayout;
