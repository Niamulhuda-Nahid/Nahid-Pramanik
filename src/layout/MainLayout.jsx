import Footer from "@/components/common/Footer";
import ScrollToTop from "@/components/common/ScrollToTop";
import Navbar from "@/components/navbar/Navbar";
import React from "react";
import { Outlet } from "react-router-dom";

export default function MainLayout() {

  return (
    <>
       <ScrollToTop />
      <Navbar />
      <div className="min-h-[calc(100vh-218px)] bg-[#050B14]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
