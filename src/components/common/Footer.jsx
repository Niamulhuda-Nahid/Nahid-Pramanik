import React from "react";
import { Mail, } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import brand_logo from "@/assets/Images/brand-logo.png"

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-[#7ed5cf]/20 bg-[#050B14] py-8 md:py-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between gap-8">
        {/* Left Side */}
        <div className="flex flex-col space-y-2">
          <Link
            to="/"
            className="text-2xl font-bold tracking-wider text-[#5ce1e6] text-center md:text-left"
          >
           <img src={brand_logo} alt="Brand Logo" className="h-12" />
          </Link>

          <p className="text-xs text-zinc-300 tracking-wide">
            © {currentYear} Nahid Pramanik. All rights reserved.
          </p>
        </div>

        {/* Center Navigation */}
        <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-zinc-400">
          <a
            href="#about"
            className="hover:text-zinc-100 transition-colors duration-200 font-medium"
          >
            About
          </a>

          <a
            href="#projects"
            className="hover:text-zinc-100 transition-colors duration-200 font-medium"
          >
            Projects
          </a>

          <a
            href="#contact"
            className="hover:text-zinc-100 transition-colors duration-200 font-medium"
          >
            Blog
          </a>
        </nav>

        {/* Right Side Social Links */}
        <div className="flex items-center gap-4 text-zinc-400">
          <a
            href="mailto:niamilhuda6046@email.com"
            aria-label="Email"
            className="p-3 rounded-full bg-teal-950/60 text-cyan-400"
          >
            <Mail size={20} />
          </a>

          <a
            href="https://github.com/Niamulhuda-Nahid"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="p-3 rounded-full bg-teal-950/60 text-cyan-400"
          >
            <SiGithub className="size-5" />
          </a>

          <a
            href="https://www.linkedin.com/in/md-niamulhuda-nahid-084a22334"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="p-3 rounded-full bg-teal-950/60 text-cyan-400"
          >
            <FaLinkedinIn className="size-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
