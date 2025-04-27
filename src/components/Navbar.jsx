import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-yellow-400 p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Online Shops</h1>
      <div className="space-x-4">
        <Link to="/" className="font-medium">Home</Link>
        <Link to="/welcome" className="font-medium">Welcome</Link>
        <Link to="/register" className="font-medium">Register</Link>
        <Link to="/shops" className="font-medium">Shops</Link>
      </div>
    </nav>
  );
};

export default Navbar;
