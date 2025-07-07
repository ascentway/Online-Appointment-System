// src/components/Header.js
import React, { useState, useRef, useEffect } from 'react';
import { useAuth } from '../pages/Context';
import { CgProfile } from "react-icons/cg";

const Header = () => {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);
  const profileBtnRef = useRef(null);

  // Close menu if clicked outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        profileBtnRef.current &&
        !profileBtnRef.current.contains(event.target)
      ) {
        setShowMenu(false);
      }
    }
    if (showMenu) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showMenu]);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('role');
    window.location.href = '/login';
  };

  return (
    <header className="bg-black shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-semi-bold text-white" style={{fontFamily:'sans-serif'}}>Doctor Appointment System</div>
        <nav>
          <ul className="flex space-x-4 items-center">
            <li><a href="/" className="text-white hover:text-blue-300">Home</a></li>
            <li><a href="/appointments" className="text-white hover:text-blue-300">Appointments</a></li>
            <li><a href="/records" className="text-white hover:text-blue-300">Health Records</a></li>
            <li><a href="/doctors" className="text-white hover:text-blue-300">Doctors</a></li>
            {isLoggedIn && (
              <li className="relative">
                <button ref={profileBtnRef} onClick={() => setShowMenu((prev) => !prev)} className="focus:outline-none">
                  <CgProfile color="white" size={30} style={{width: '30px', height: '30px'}} />
                </button>
                {showMenu && (
                  <div ref={menuRef} className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50">
                    <ul className="py-1">
                      <li>
                        <a href="/profile" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">My Profile</a>
                      </li>
                      <li>
                        <button onClick={handleLogout} className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200">Logout</button>
                      </li>
                      <li>
                        <a href="/help" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Help &amp; Support</a>
                      </li>
                    </ul>
                  </div>
                )}
              </li>
            )}
            {!isLoggedIn && (
              <li><a href="/login" className="text-white hover:text-blue-300">Login</a></li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
