import { Menu } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

import NavItem from "./NavItem";
import { navLinks } from "./navLinks";

export default function MobileNav({
  open,
  setOpen,
  activeSection,
  scrollToSection,
}) {
  const handleNavigate = (id) => {
    scrollToSection(id);
    setOpen(false); // auto close drawer
  };

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/Niamulhuda-Nahid.pdf";
    link.download = "Niamulhuda-Nahid.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setOpen(false);
  };

  return (
    <div className="md:hidden flex items-center gap-3">

      {/* SHEET MENU */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <button
            className="rounded-lg p-2 hover:bg-slate-800/50 text-[#5ce1e6] transition"
            aria-label="Open Menu"
          >
            <Menu size={22} />
          </button>
        </SheetTrigger>

        <SheetContent
          side="right"
          className="w-70 bg-[#0B0F17] border-slate-800 px-4"
        >
          {/* NAV ITEMS */}
          <div className="mt-10 flex flex-col gap-3">
            {navLinks.map((item) => (
              <NavItem
                key={item.id}
                item={item}
                activeSection={activeSection}
                mobile={true}
                onNavigate={handleNavigate}
              />
            ))}

            {/* CV BUTTON INSIDE DRAWER */}
            <button
              onClick={handleDownloadCV}
              className="mt-6 w-full rounded-xl bg-[#4FD1C5] py-3 text-sm font-bold text-[#0B0F17] shadow-md transition hover:bg-[#3ec3b7]"
            >
              Download CV
            </button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}