import { useCallback, useEffect, useState } from "react";
import { navLinks } from "@/components/navbar/navLinks";

const HEADER_HEIGHT = 80;

export default function useActiveSection() {
  const [activeSection, setActiveSection] = useState(navLinks[0].id);

  // Smooth scroll to a section
  const scrollToSection = useCallback((id) => {
    const element = document.getElementById(id);

    if (!element) return;

    const top =
      element.getBoundingClientRect().top +
      window.pageYOffset -
      HEADER_HEIGHT;

    window.scrollTo({
      top,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        // Find the section that's currently intersecting
        const visibleSection = entries.find(
          (entry) => entry.isIntersecting
        );

        if (visibleSection) {
          setActiveSection(visibleSection.target.id);
        }
      },
      {
        root: null,
        rootMargin: `-${HEADER_HEIGHT}px 0px -45% 0px`,
        threshold: 0.25,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return {
    activeSection,
    scrollToSection,
  };
}