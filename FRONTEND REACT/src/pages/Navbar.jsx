import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <Link to="/" className="text-white font-bold text-xl">Your Logo</Link>
          </div>
          <div className="hidden md:block">
            <ul className="flex space-x-4">
              <li><Link to="/" className="text-white hover:text-gray-300">Home</Link></li>
              <li><Link to="/about" className="text-white hover:text-gray-300">About</Link></li>
              <li><Link to="/contact" className="text-white hover:text-gray-300">Contact</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;