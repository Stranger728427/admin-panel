"use client";
import { CgProfile } from "react-icons/cg";
import { AiOutlineHome } from "react-icons/ai";
import { useState } from "react";

const AdminHeader = () => {
  const [isProfileHovered, setProfileHovered] = useState(false);
  const [isHomeHovered, setHomeHovered] = useState(false);

  return (
    <div className="flex justify-between items-center py-4 px-6 bg-gradient-to-r from-blue-500 to-purple-600 shadow-md">
      <div className="flex items-center">
        {/* <img src="logo.png" alt="LyFt" className="w-10 h-10" /> */}
        <span className="ml-3 text-2xl font-bold text-white">LyFt</span>
      </div>
      <div className="flex items-center space-x-6">
        {/* Home Icon with Tooltip */}
        <div
          className="relative group"
          onMouseEnter={() => setHomeHovered(true)}
          onMouseLeave={() => setHomeHovered(false)}
        >
          <AiOutlineHome
            className="text-3xl text-white cursor-pointer transition-transform transform hover:scale-110"
            aria-label="Home"
          />
          {isHomeHovered && (
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-sm rounded px-2 py-1 opacity-90">
              Home
            </div>
          )}
        </div>

        {/* Profile Icon with Tooltip */}
        <div
          className="relative group"
          onMouseEnter={() => setProfileHovered(true)}
          onMouseLeave={() => setProfileHovered(false)}
        >
          <CgProfile
            className="text-3xl text-white cursor-pointer transition-transform transform hover:scale-110"
            aria-label="Profile"
          />
          {isProfileHovered && (
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-sm rounded px-2 py-1 opacity-90">
              Profile
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;
