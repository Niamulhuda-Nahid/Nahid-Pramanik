import React from "react";
import { Layers, Database, Wrench } from "lucide-react";

export default function TechnicalMastery() {
  // Map icons safely
  const getIcon = (iconName) => {
    switch (iconName) {
      case "layers":
        return <Layers className="w-5 h-5" />;
      case "database":
        return <Database className="w-5 h-5" />;
      case "wrench":
        return <Wrench className="w-5 h-5" />;
      default:
        return <Layers className="w-5 h-5" />;
    }
  };

  return (
    <section className="relative w-full py-16 px-6 md:py-24 text-white overflow-hidden">
      {/* Structural ambient decorative background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-cyan-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Header Block */}
        <div className="text-center mb-16 md:mb-20 max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-100 mb-4">
            Technical{" "}
            <span className="bg-linear-to-r from-[#5ce1e6] to-[#2dd4bf] bg-clip-text text-transparent">
              Mastery
            </span>
          </h2>
          <p className="text-slate-400 text-lg font-light tracking-wide">
            The tools I use to bring visions to life.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {masteryCards.map((card, idx) => (
            <div
              key={card.id}
              className="bg-[#111827]/30 border border-slate-800/90 rounded-[28px] p-8 md:p-10 backdrop-blur-md shadow-2xl relative transition-all duration-300 hover:border-slate-700/60 hover:-translate-y-1 group"
            >
              {/* Top border glowing highlight effect */}
              <div className="absolute top-0 left-10 right-10 h-px bg-linear-to-r from-transparent via-[#5ce1e6]/30 to-transparent group-hover:via-[#5ce1e6]/60 transition-all duration-500" />

              {/* Custom SVG Icon Container matches theme */}
              <div className="inline-flex items-center justify-center p-4 bg-teal-950/40 border border-teal-500/20 text-[#5ce1e6] rounded-2xl mb-8 shadow-inner">
                {getIcon(card.icon)}
              </div>

              {/* Category Header */}
              <h3 className="text-3xl font-bold text-white tracking-tight mb-8">
                {card.category}
              </h3>

              {/* Skills Progress list */}
              <div className="space-y-7">
                {card.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="space-y-2">
                    <div className="flex justify-between items-center text-sm">
                      <span className="font-semibold text-slate-300 tracking-wide">
                        {skill.name}
                      </span>
                      <span className="font-bold text-[#5ce1e6]">
                        {skill.value}%
                      </span>
                    </div>
                    {/* Mastery Custom Progress Bar */}
                    <div className="h-0.75 bg-slate-800/80 rounded-full w-full overflow-hidden">
                      <div
                        className="bg-linear-to-r from-[#5ce1e6] to-[#2dd4bf] h-full rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const masteryCards = [
  {
    id: "frontend",
    category: "Frontend",
    icon: "layers",
    skills: [
      {
        name: "React / Next.js",
        value: 95,
      },
      {
        name: "TypeScript",
        value: 90,
      },
      {
        name: "Tailwind / CSS3",
        value: 98,
      },
    ],
  },
  {
    id: "backend",
    category: "Backend",
    icon: "database",
    skills: [
      {
        name: "Node.js",
        value: 60,
      },
      {
        name: "PostgreSQL / Supabase",
        value: 75,
      },
      {
        name: "GraphQL",
        value: 85,
      },
    ],
  },
  {
    id: "tools",
    category: "Tools",
    icon: "wrench",
    skills: [
      {
        name: "Figma",
        value: 90,
      },
      {
        name: "Docker",
        value: 70,
      },
      {
        name: "Git / CI/CD",
        value: 92,
      },
    ],
  },
];
