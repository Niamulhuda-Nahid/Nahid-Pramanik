import Navbar from "@/components/navbar/Navbar";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
    const [showCvModal, setShowCvModal] = useState(false);

  return (
    <div>
      <Navbar setShowCvModal={setShowCvModal} />
      <Outlet />
    </div>
  );
}
