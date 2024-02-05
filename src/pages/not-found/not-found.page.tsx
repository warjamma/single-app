import React from 'react';
import { Helmet } from 'react-helmet-async';

export const NotFoundPage = () => {
  return (
    <div className="toto-not-found">
      <Helmet>
        <title>404 Page Not Found</title>
        <meta name="description" content="Page not found" />
      </Helmet>
      <div>
        <h1>Not Found</h1>
      </div>
    </div>
  );
};
