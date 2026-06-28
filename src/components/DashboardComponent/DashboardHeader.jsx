import React from "react";
import {
  Menu,
  ChevronLeft,
  ChevronRight,
  LogOut,
} from "lucide-react";
import HeaderAvatar from "./HeaderAvatar";
import { useNavigate } from "react-router-dom";
import { useUserLogoutMutation } from "@/Redux/endpoints/authApi";
import toast from "react-hot-toast";

export default function DashboardHeader({
  isMobile,
  isSidebarOpen,
  toggleSidebar,
}) {
  const navigate = useNavigate();
  const [userLogout] = useUserLogoutMutation();

  const handleLogout = async () => {
    toast.loading("Logging out...");
    try {
      const response = await userLogout().unwrap();
    //   console.log("Logout response:", response);
      toast.dismiss();
      toast.success("Logout successful!");
      navigate("/admin");
    } catch (error) {
      console.error("Logout failed:", error);
      toast.dismiss();
      toast.error("Logout failed.");
    }
  };

  return (
    <header className="h-20 border-b border-[#22272D] bg-[#050505] sticky top-0 z-30 pl-3 pr-6 flex items-center justify-between">
      <div>
        {isMobile ? (
          <button onClick={toggleSidebar}>
            <Menu className="text-primary size-8 cursor-pointer" />
          </button>
        ) : (
          <button
            onClick={toggleSidebar}
            className="cursor-pointer text-primary bg-primary/20 p-1.5 rounded-full"
          >
            {isSidebarOpen ? <ChevronLeft /> : <ChevronRight />}
          </button>
        )}
      </div>

      <div className="flex items-center gap-6">
        {/* <HeaderAvatar /> */}
        <div className="p-4 border-t border-[#151515]">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-1 px-4 py-3 text-black bg-primary rounded-lg font-semibold cursor-pointer ease-in-out duration-200"
          >
            <LogOut size={20} />
            <span className="text-sm">Logout</span>
          </button>
        </div>
      </div>
    </header>
  );
}
