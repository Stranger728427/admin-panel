"use client"

import AdminHeader from "@/components/AdminHeader";
import AdminSidebar from "@/components/AdminSidebar";
import { useState, useEffect } from "react";

export default function AdminLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleResize = () => {
    setIsSidebarOpen(window.innerWidth > 768);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex">
      <AdminSidebar />

      <div
        className={`flex-1 transition-all duration-300 ease-in-out ${
          isSidebarOpen ? "ml-60" : "ml-16"
        }`}       
      >
        <AdminHeader />
        <main className="p-4">{children}</main>
      </div>
    </div>
  );
}
