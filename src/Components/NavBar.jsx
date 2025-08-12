import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Home as HomeIcon } from 'lucide-react';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md px-4 py-4 sticky top-0 z-50">
      <div className="flex justify-between items-center w-full px-4 md:px-6 lg:px-8"> {/* Changed from max-w-7xl mx-auto */}
        
        <div className="hidden md:flex space-x-6 items-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center gap-1 text-gray-700 hover:text-black font-medium pb-1 ${
                isActive ? 'border-b-2 border-yellow-400' : ''
              }`
            }
          >
            <HomeIcon size={17} />
          </NavLink>
          <NavLink
            to="/books"
            className={({ isActive }) =>
              `text-gray-700 hover:text-black font-medium pb-1 ${
                isActive ? 'border-b-2 border-yellow-400' : ''
              }`
            }
          >
            Books
          </NavLink>
          <NavLink
            to="/quotes"
            className={({ isActive }) =>
              `text-gray-700 hover:text-black font-medium pb-1 ${
                isActive ? 'border-b-2 border-yellow-400' : ''
              }`
            }
          >
            Quotes
          </NavLink>
          <NavLink
            to="/blogs"
            className={({ isActive }) =>
              `text-gray-700 hover:text-black font-medium pb-1 ${
                isActive ? 'border-b-2 border-yellow-400' : ''
              }`
            }
          >
            Blog
          </NavLink>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-700 focus:outline-none"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div className="hidden md:flex space-x-4">
          <Link
            to="/login"
            className="px-4 py-2 border border-gray-400 rounded-md text-gray-800 hover:bg-gray-100"
          >
            Sign In
          </Link>
          <Link
            to="/signup"
            className="px-4 py-2 bg-yellow-400 hover:bg-yellow-500 rounded-md text-white font-semibold shadow-md"
          >
            Sign Up
          </Link>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden mt-4 px-4 space-y-3">
          <NavLink
            to="/"
            className="flex items-center gap-2 text-gray-700 font-medium"
          >
            <HomeIcon size={18} />
          </NavLink>
          <NavLink to="/books" className="block text-gray-700 font-medium">
            Books
          </NavLink>
          <NavLink to="/quotes" className="block text-gray-700 font-medium">
            Quotes
          </NavLink>
          <NavLink to="/blog" className="block text-gray-700 font-medium">
            Blog
          </NavLink>
          <NavLink to="/author" className="block text-gray-700 font-medium">
            Author Program
          </NavLink>
          <Link
            to="/login"
            className="block w-full text-center px-4 py-2 border border-gray-400 rounded-md text-gray-800 hover:bg-gray-100"
          >
            Sign In
          </Link>
          <Link
            to="/signup"
            className="block w-full text-center px-4 py-2 
             bg-gradient-to-r from-slate-50 to-yellow-100 
             hover:from-yellow-200 hover:to-yellow-400 
             rounded-md text-gray-800 font-semibold shadow-md"
          >
            Sign Up
          </Link>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
