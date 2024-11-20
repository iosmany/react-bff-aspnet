'use client'

import React, { useState } from 'react';
import useUser from '../../features/authentication/hooks/userUser';
import NavLinks from './NavLinks';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [loadingStatus ,claims, userNameClaim, isAuthenticated, login, logout] = useUser();  

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className={`${ isOpen ? 'w-64' : 'w-20' } bg-gray-800 text-white transition-all duration-300 ease-in-out`} >
        <div className="p-4">
          {/* Toggle button */}
          <button className="text-white" onClick={toggleSidebar} >
            {isOpen ? '<' : '>'}
          </button>
        </div>
        {/* Sidebar Links */}
        <div className="mt-6">
          <NavLinks />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <h1 className="text-2xl">Main Content</h1>
        {/* You can add the rest of your content here */}
      </div>
    </div>
  );
};

export default Sidebar;