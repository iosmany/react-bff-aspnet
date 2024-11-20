
import React from 'react';
import Navbar from './components/layout/Navbar';
import Sidebar from './components/layout/Sidebar';


export default function Home() {
  return (
    <>
      <div className="flex flex-col">
          <Navbar />
          <div className="flex-row">
              <Sidebar />
              <div className="flex-1 p-6">
                  <h1 className="text-2xl">Main Content</h1>
                  {/* You can add the rest of your content here */}
              </div>
          </div>
      </div>
    </>
  );
}
