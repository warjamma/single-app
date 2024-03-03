import React from 'react';
import { Outlet } from 'react-router-dom';
import { TopNav } from './views';

const RootLayout = () => {
  return (
    <>
      <TopNav />
      <Outlet />
    </>
  );
};

export default RootLayout;
