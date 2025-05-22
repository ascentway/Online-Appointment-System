// src/components/Header.js
import React from 'react';

const Header = () => {
  return (
    <header className="bg-black shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-semi-bold text-white" style={{fontFamily:'sans-serif'}}>Doctor Appointment System</div>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="/" className="text-white hover:text-blue-300">Home</a></li>
            <li><a href="/appointments" className="text-white hover:text-blue-300">Appointments</a></li>
            <li><a href="/records" className="text-white hover:text-blue-300">Health Records</a></li>
            <li><a href="/doctors" className="text-white hover:text-blue-300">Doctors</a></li>
            <li><a href="/login" className="text-white hover:text-blue-300">Login</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
