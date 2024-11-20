'use client'

import React, { useState } from 'react';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e: React.FormEvent<HTMLFormElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Searching for: ${searchQuery}`);
  };

  return (
    <div className="bg-gray-800 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo or Title */}
          <div className="flex-shrink-0 text-xl font-bold">
            MyApp
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-4">
            <a href="#home" className="hover:bg-gray-700 px-3 py-2 rounded-md">Home</a>
            <a href="#about" className="hover:bg-gray-700 px-3 py-2 rounded-md">About</a>
            <a href="#services" className="hover:bg-gray-700 px-3 py-2 rounded-md">Services</a>
            <a href="#contact" className="hover:bg-gray-700 px-3 py-2 rounded-md">Contact</a>
          </div>

          {/* Search Bar */}
          <div className="relative">
            <form onSubmit={handleSearchSubmit} className="flex items-center">
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search..."
                className="px-4 py-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button type="submit" className="absolute right-0 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none">
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
