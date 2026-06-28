import React from "react";
import {
  LayoutDashboard,
  Users,
  QrCode,
  LogOut,
  X,
  Loader,
} from "lucide-react";
import logo from "@/assets/Images/brand-logo.png";
import logo2 from "/np.png";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import SidebarItem from "./SidebarItem";

export default function Sidebar({ isOpen, isMobile, toggleSidebar }) {
  
  return (
    <>
      {/* Overlay */}
      {isMobile && isOpen && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
          onClick={toggleSidebar}
        />
      )}

      <aside
        className={`fixed top-0 left-0 h-full bg-[#050505] border-r border-[#22272D] transition-all duration-300 z-50 flex flex-col
        ${isOpen ? "w-64" : "w-20"}
        ${isMobile && !isOpen ? "-translate-x-full" : "translate-x-0"}`}
      >
        <X
          size={20}
          className="text-primary absolute top-3 right-3 cursor-pointer lg:hidden"
          onClick={toggleSidebar}
        />
        {/* Logo */}
        <Link
          to="/"
          className={`flex items-center gap-3 justify-center mb-7 ${isMobile ? "pt-10" : "pt-5"}`}
        >
          {isOpen && (
            <img
              src={logo}
              alt="Logo"
              className="h-12 object-cover "
            />
          )}
          {!isOpen && (
            <img
              src={logo2}
              alt="Logo"
              className="h-12 object-cover"
            />
          )}
        </Link>

        {/* Nav */}
        <nav className="flex-1 px-3 space-y-1 mt-2">
          {sidebarItems.map((item) => (
            <SidebarItem
              key={item.to}
              item={item}
              collapsed={!isOpen}
              toggleSidebar={toggleSidebar}
              isMobile={isMobile}
            />
          ))}
        </nav>
      </aside>
    </>
  );
}

const sidebarItems = [
  {
    label: "Projects",
    icon: LayoutDashboard,
    to: "/admin/projects",
  },
  {
    label: "Skills",
    icon: Users,
    to: "/admin/skills",
  },
  {
    label: "Education",
    icon: QrCode,
    to: "/admin/education&experience",
  },
  // {
  //   label: "Campaigns",
  //   icon: Megaphone,
  //   to: "/dashboard/campaigns-generator",
  //   premiumOnly: true,
  // },
  // {
  //   label: "Analytics",
  //   icon: BarChart3,
  //   to: "/dashboard/analytics",
  //   premiumOnly: true,
  // },
  // {
  //   label: "Settings",
  //   icon: Settings,
  //   to: "/dashboard/settings",
  //   premiumOnly: false,
  // },
];
