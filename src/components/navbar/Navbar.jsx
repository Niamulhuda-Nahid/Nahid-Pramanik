import { useState } from "react";

import useActiveSection from "@/hooks/useActiveSection";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

export default function Navbar({ setShowCvModal }) {
  const { activeSection, scrollToSection } = useActiveSection();

  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#7ed5cf]/20 bg-[#050B14] backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 xl:px-0">
        {/* LOGO */}
        <div
          onClick={() => scrollToSection("home")}
          className="cursor-pointer select-none text-2xl font-black tracking-wider text-[#4FD1C5] font-mono"
        >
          DEV<span className="animate-pulse">_</span>CORE
        </div>

        {/* DESKTOP NAV */}
        <DesktopNav
          activeSection={activeSection}
          scrollToSection={scrollToSection}
          setShowCvModal={setShowCvModal}
        />

        {/* MOBILE NAV */}
        <MobileNav
          open={mobileOpen}
          setOpen={setMobileOpen}
          activeSection={activeSection}
          scrollToSection={scrollToSection}
          setShowCvModal={setShowCvModal}
        />
      </div>
    </header>
  );
}
