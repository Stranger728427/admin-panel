"use client";
import { FaArrowLeft, FaArrowRight, FaTachometerAlt, FaUser } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";

const AdminSidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <main
      className={`bg-slate-900 h-screen flex flex-col relative ${
        collapsed ? "w-16" : "w-60"
      } transition-all duration-300 ease-in-out`}
    >
      <div className="p-4 flex flex-col justify-between h-full">
        <ul className="text-slate-300">
          <li className="flex items-center mb-4 group">
            <FaTachometerAlt className="mr-2 text-xl transition-transform transform group-hover:scale-110" />
            {!collapsed && (
              <Link href="/admin/dashboard">
                <span className="transition-all duration-300 ease-in-out group-hover:text-white">
                  Dashboard
                </span>
              </Link>
            )}
            {collapsed && (
              <span className="absolute left-16 bg-black text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Dashboard
              </span>
            )}
          </li>
          <li className="flex items-center group">
            <FaUser className="mr-2 text-xl transition-transform transform group-hover:scale-110" />
            {!collapsed && (
              <Link href="/admin/profile">
                <span className="transition-all duration-300 ease-in-out group-hover:text-white">
                  Profile
                </span>
              </Link>
            )}
            {collapsed && (
              <span className="absolute left-16 bg-black text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Profile
              </span>
            )}
          </li>
        </ul>
      </div>

      <div
        onClick={toggleSidebar}
        className="text-slate-100 cursor-pointer absolute right-3 mt-3 transition-transform transform hover:scale-110"
      >
        {collapsed ? <FaArrowRight /> : <FaArrowLeft />}
      </div>
    </main>
  );
};

export default AdminSidebar;
