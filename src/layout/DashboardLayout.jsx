import ScrollToTop from "@/components/common/ScrollToTop";
import DashboardHeader from "@/components/DashboardComponent/DashboardHeader";
import Sidebar from "@/components/DashboardComponent/Sidebar";
import Modals from "@/components/Modal";
import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";

export default function DashboardLayout() {
  const { pathname } = useLocation();
  console.log("Current Pathname:", pathname); // Debugging line to check the current pathname
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
      setIsSidebarOpen(!mobile);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  const sidebarWidth =
    isMobile || pathname === "/admin"
      ? "0px"
      : isSidebarOpen
        ? "256px"
        : "80px";

  return (
    <>
      <ScrollToTop />
      <div className="min-h-screen bg-[#050505] text-gray-200">
        {/* FIXED SIDEBAR */}
        <div
          className={`fixed top-0 left-0 h-full z-50 ${pathname === "/admin" && "hidden"}`}
        >
          <Sidebar
            isOpen={isSidebarOpen}
            isMobile={isMobile}
            toggleSidebar={toggleSidebar}
          />
        </div>

        {/* MAIN CONTENT (IMPORTANT FIX) */}
        <div
          className="min-h-screen flex flex-col transition-all duration-300"
          style={{
            paddingLeft: isMobile ? "0px" : sidebarWidth,
          }}
        >
          {pathname !== "/admin" && (
            <DashboardHeader
              isMobile={isMobile}
              isSidebarOpen={isSidebarOpen}
              toggleSidebar={toggleSidebar}
            />
          )}

          <main
            className={`${pathname === "/admin" ? "" : "flex-1 p-3 md:p-6 min-w-0 overflow-x-hidden"}`}
          >
            <Outlet />
          </main>
        </div>

        <Modals />
      </div>
    </>
  );
}
