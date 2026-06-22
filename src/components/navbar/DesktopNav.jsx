import NavItem from "./NavItem";
import { navLinks } from "./navLinks";

export default function DesktopNav({
  activeSection,
  scrollToSection,
}) {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/Niamulhuda-Nahid.pdf";
    link.download = "Niamulhuda-Nahid.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
        onClick={handleDownloadCV}
        className="relative overflow-hidden rounded-full bg-[#4FD1C5] px-5 py-2 text-sm font-bold text-[#0B0F17] shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#3ec3b7] hover:shadow-[#4FD1C5]/20 active:translate-y-0 cursor-pointer"
      >
        Download CV
      </button>
    </div>
  );
}
