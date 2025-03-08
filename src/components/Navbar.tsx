
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white bg-opacity-90 backdrop-blur-sm py-4 px-6 border-b shadow-sm sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <span role="img" aria-label="chef" className="text-2xl">👨‍🍳</span>
          <span className="text-2xl font-bold text-primary">eazyrecipes</span>
        </Link>
        
        <div className="flex gap-6">
          <Link to="/" className="text-gray-700 hover:text-primary font-medium transition-colors">
            Home
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-primary font-medium transition-colors">
            About
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
