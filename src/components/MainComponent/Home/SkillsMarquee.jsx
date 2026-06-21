import React from "react";
import Marquee from "react-fast-marquee";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiSupabase,
  SiFramer,
  SiGraphql,
  SiRedux,
  SiDocker,
  SiVitest,
  SiSocketdotio,
} from "react-icons/si";
import { FaGlobe } from "react-icons/fa6";

export default function SkillsMarquee() {
  return (
    <section className="bg-[#050B14] text-slate-100 py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-10 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
          Mastered{" "}
          <span className="bg-linear-to-r from-[#5ce1e6] to-[#2dd4bf] bg-clip-text text-transparent">
            Skills
          </span>
        </h2>

        <p className="text-slate-400 text-lg font-light tracking-wide max-w-xl mx-auto">
          A comprehensive toolkit curated over years of dedicated practice and
          real-world deployment.
        </p>
      </div>

      <div className="relative overflow-hidden">
        {/* Left Gradient */}
        <div className="absolute left-0 top-0 z-10 h-full md:w-50 bg-linear-to-r from-[#050B14] to-transparent pointer-events-none" />

        {/* Right Gradient */}
        <div className="absolute right-0 top-0 z-10 h-full md:w-50 bg-linear-to-l from-[#050B14] to-transparent pointer-events-none" />

        <Marquee speed={45} pauseOnHover autoFill className="py-2">
          {skills.map((skill) => {
            const Icon = skill.icon;

            return (
              <div
                key={skill.id}
                className="mx-8 flex flex-col items-center border border-slate-800/90 py-6 rounded-2xl w-44 bg-[#111827]/30"
              >
                <div className="rounded-xl bg-teal-950/40 border border-teal-500/20 p-3">
                  <Icon className="size-7 text-cyan-400" />
                </div>

                <h3 className="mt-3 font-semibold">{skill.name}</h3>
                <p className="text-xs text-slate-400">{skill.category}</p>
              </div>
            );
          })}
        </Marquee>
      </div>
    </section>
  );
}

const skills = [
  {
    id: "sk1",
    name: "Next.js",
    category: "Frameworks",
    rating: "95%",
    icon: SiNextdotjs,
  },
  {
    id: "sk2",
    name: "TypeScript",
    category: "Languages",
    rating: "92%",
    icon: SiTypescript,
  },
  {
    id: "sk3",
    name: "React",
    category: "Frameworks",
    rating: "98%",
    icon: SiReact,
  },
  {
    id: "sk4",
    name: "Tailwind CSS",
    category: "Styling",
    rating: "95%",
    icon: SiTailwindcss,
  },
  {
    id: "sk5",
    name: "Supabase",
    category: "Backend / APIs",
    rating: "85%",
    icon: SiSupabase,
  },
  {
    id: "sk6",
    name: "Framer Motion",
    category: "Animation",
    rating: "90%",
    icon: SiFramer,
  },
  {
    id: "sk7",
    name: "GraphQL",
    category: "Backend / APIs",
    rating: "88%",
    icon: SiGraphql,
  },
  {
    id: "sk8",
    name: "Zustand / Redux",
    category: "State Management",
    rating: "94%",
    icon: SiRedux,
  },
  {
    id: "sk9",
    name: "Docker",
    category: "DevOps",
    rating: "80%",
    icon: SiDocker,
  },
  {
    id: "sk10",
    name: "Vitest / Cypress",
    category: "Testing",
    rating: "87%",
    icon: SiVitest,
  },
  {
    id: "sk11",
    name: "WebSockets",
    category: "Realtime",
    rating: "90%",
    icon: SiSocketdotio,
  },
  {
    id: "sk12",
    name: "REST API",
    category: "Backend / APIs",
    rating: "96%",
    icon: FaGlobe,
  },
];
