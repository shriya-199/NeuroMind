import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="w-full fixed top-0 left-0 z-50 backdrop-blur-md 
                    bg-gradient-to-b from-[#009ffd] to-[#0000]">
      <div className="w-full px-6 py-4 flex justify-between items-center">


        {/* ✅ Left: Logo on extreme left */}
        <Link to="/" className="text-2xl font-bold tracking-wide">
          NeuroMind
        </Link>

        {/* ✅ Right: All links on extreme right */}
        <div className="space-x-4 flex items-center">
          <Link to="/about" className="hover:text-blue-200 transition">About</Link>
          <Link to="/contact" className="hover:text-blue-200 transition">Contact Us</Link>

          {/* Show only if NOT on Home page */}
          {location.pathname !== "/" && (
            <Link
              to="/"
              className="bg-white text-blue-700 px-4 py-2 rounded-full font-semibold hover:bg-blue-100 transition"
            >
              Back to Home
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
