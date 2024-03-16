import React from 'react';
import { Outlet } from 'react-router-dom';
import { TopNav } from './views';
import { GoogleAnalytics } from './components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RootLayout = () => {
  return (
    <>
      <TopNav />
      <Outlet />
      <GoogleAnalytics />
      <ToastContainer
        closeButton={false}
        hideProgressBar
        className="my-toast-container"
        autoClose={3000}
        position="bottom-left"
        theme="light"
      />
    </>
  );
};

export default RootLayout;
