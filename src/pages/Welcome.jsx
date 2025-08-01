import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <div className="container vh-100 d-flex flex-column justify-content-center align-items-center text-center">
      <h1 className="mb-4 display-4">Welcome to our store!</h1>
      <p className="lead mb-4">
        Discover the latest products and special offers now!
      </p>
      <Link to="/home" className="btn btn-primary btn-lg px-4 py-2">
        Enter the Store
      </Link>
    </div>
  );
};

export default Welcome;
