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
    <>
    <AdminHeader />
      <aside
        className="flex transition-all duration-300 ease-in-out "     
      >
         <AdminSidebar />
        <main className="p-4">{children}</main>
      </aside>
    </>
  );
}
