import { CheckCircle2 } from "lucide-react";
import React from "react";
import CountUp from "react-countup";

export default function BridgingTheGap() {

return (
    <section
      className="relative w-full py-16 px-6 md:py-24 text-white overflow-hidden"
    >
      {/* Optional decorative background ambient glows */}
      <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-teal-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-cyan-500/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column - Intro & Stats */}
        <div
          className="lg:col-span-7 flex flex-col space-y-8"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.15] text-slate-100">
            Bridging the gap <span className="block sm:inline">between</span>{" "}
            <span className="text-[#5ce1e6] font-extrabold relative inline-block">
              Design
            </span>{" "}
            and{" "}
            <span className="text-[#5ce1e6] font-extrabold relative inline-block">
              Code.
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-light">
            With over 5 years of experience in the digital trenches, I've
            mastered the art of transforming complex requirements into elegant,
            accessible, and high-performance web applications. My philosophy is
            simple: clean code is the foundation, but exceptional user
            experience is the goal.
          </p>

          {/* Stats Cards */}
          <div className="grid grid-cols-3 gap-4 max-w-xl pt-4">
            {[
              { end: 2, suffix: "+", label: "YEARS EXP." },
              { end: 50, suffix: "+", label: "PROJECTS" },
              { end: 30, suffix: "+", label: "CLIENTS" },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="bg-[#111827]/40 border border-slate-800/80 rounded-2xl p-5 md:p-6 flex flex-col justify-center items-center text-center backdrop-blur-sm transition-all duration-300 hover:border-slate-700/60 hover:bg-[#111827]/60"
              >
                <span className="text-3xl md:text-4xl font-extrabold text-[#5ce1e6] tracking-tight mb-2">
                  <CountUp
                    end={stat.end}
                    duration={2}
                    suffix={stat.suffix}
                    enableScrollSpy
                    scrollSpyOnce
                  />
                </span>

                <span className="text-[10px] md:text-xs font-bold tracking-wider text-slate-400 uppercase">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Mission Card */}
        <div className="lg:col-span-5">
          <div className="bg-[#111827]/30 border border-slate-800/90 rounded-3xl p-8 md:p-10 backdrop-blur-md shadow-2xl relative transition-all duration-300 hover:border-slate-700/50">
            {/* Top highlight line */}
            <div className="absolute top-0 left-10 right-10 h-px bg-linear-to-r from-transparent via-[#5ce1e6]/30 to-transparent" />

            <h3 className="text-2xl md:text-3xl font-bold text-[#5ce1e6] tracking-tight mb-6">
              My Mission
            </h3>

            <p className="text-slate-300 text-base md:text-lg italic font-light leading-relaxed mb-8 relative">
              <span className="text-2xl text-[#5ce1e6]/40 absolute -top-3 -left-4 font-serif">
                "
              </span>
              To empower brands through technical excellence and
              forward-thinking design architectures that set new standards for
              the modern web.
              <span className="text-2xl text-[#5ce1e6]/40 font-serif ml-1">
                "
              </span>
            </p>

            {/* Checklist */}
            <ul className="space-y-4">
              {[
                "High-performance React Ecosystems",
                "Accessible UI/UX Architectures",
                "Seamless API Integrations",
              ].map((point, idx) => (
                <li
                  key={idx}
                  className="flex items-center space-x-3.5 group"
                >
                  <div className="shrink-0 text-[#5ce1e6] transition-transform duration-300 group-hover:scale-110">
                    <CheckCircle2 className="w-5 h-5 stroke-[2.2]" />
                  </div>
                  <span className="text-slate-200 text-sm md:text-base font-medium leading-relaxed">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
