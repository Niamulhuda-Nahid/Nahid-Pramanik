import NavItem from "./NavItem";
import { navLinks } from "./navLinks";

export default function DesktopNav({
  activeSection,
  scrollToSection,
  setShowCvModal,
}) {
  return (
    <div className="hidden md:flex items-center gap-10">
      {/* NAV LINKS */}
      <nav className="flex items-center gap-8">
        {navLinks.map((item) => (
          <NavItem
            key={item.id}
            item={item}
            activeSection={activeSection}
            onNavigate={scrollToSection}
          />
        ))}
      </nav>

      {/* CTA BUTTON */}
      <button
        onClick={() => setShowCvModal(true)}
        className="relative overflow-hidden rounded-full bg-[#4FD1C5] px-5 py-2 text-sm font-bold text-[#0B0F17] shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#3ec3b7] hover:shadow-[#4FD1C5]/20 active:translate-y-0"
      >
        Download CV
      </button>
    </div>
  );
}
