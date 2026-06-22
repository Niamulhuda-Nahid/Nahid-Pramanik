import { Button } from "@/components/ui/button";
import React from "react";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <div className="min-h-[calc(100vh-81px)] text-slate-100 selection:bg-teal-500 selection:text-slate-900 relative overflow-hidden flex flex-col justify-between">
      {/* Background Glows */}
      <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-teal-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-cyan-500/5 blur-[150px] pointer-events-none" />

      {/* MAIN */}
      <div className="w-full max-w-7xl mx-auto px-6 py-12 md:py-20 lg:py-24 flex flex-col md:flex-row gap-12 items-center z-10 grow">
        {/* LEFT SIDE */}
        <div className="flex-1 flex flex-col justify-center items-start text-left space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-teal-500/20 bg-teal-500/5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-400"></span>
            </span>
            <span className="text-xs font-semibold tracking-wider text-teal-400 uppercase">
              Available for Hire
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1]">
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-teal-400 to-cyan-300">
              Nahid Pramanik
            </span>
            <br />
            <span className="text-slate-100">
              <TypeAnimation
                className="typewriter"
                sequence={[
                  "Frontend Developer",
                  2000,
                  "React Developer",
                  2000,
                  "Next.js Developer",
                  2000,
                ]}
                // wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </span>
          </h1>

          <p className="text-slate-400 text-base sm:text-lg max-w-xl">
            I build modern, responsive, and high-performance web applications
            with React, Next.js, and Tailwind CSS, focusing on clean
            architecture and exceptional user experiences.
          </p>

          {/* CTA Button */}
          <div>
            <a
              href="#_"
              className="relative items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-lg group"
            >
              <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-[#7ed5cf] opacity-3"></span>
              <span className="absolute top-0 left-0 w-52 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-[#7ed5cf] opacity-100 group-hover:-translate-x-8"></span>
              <span className="relative w-full text-left text-[#7ed5cf] transition-colors duration-200 ease-in-out group-hover:text-gray-900 px-4">
                All Projects
              </span>
              <span className="absolute inset-0 border-2 border-[#7ed5cf] rounded-lg"></span>
            </a>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex-1 flex items-center justify-center relative w-full aspect-square max-w-125 mx-auto">
          {/* Glow */}
          {/* <div className="absolute w-[80%] h-[80%] rounded-full bg-linear-to-tr from-teal-500/10 to-transparent blur-2xl animate-pulse-glow" /> */}
          <img
            src="https://i.ibb.co.com/qB0rY0d/IMG-5683.jpg"
            alt="Profile"
            className="w-full h-full object-cover rounded-3xl"
          />

          {/* Floating code block (STATIC ONLY) */}
          <div className="absolute left-5 -bottom-10 md:left-[-15%] md:bottom-[8%] z-20 max-w-52.5 animate-float-3">
            <div className="p-4 rounded-2xl bg-slate-950/90 border-l-3 border border-teal-500/50 backdrop-blur-sm shadow-lg">
              <pre className="text-[11px] text-teal-300">
                {`const portfolio = () => {        
    return (
        <CreatePortfolio />        
    );
};`}
              </pre>
            </div>
          </div>
          <div className="absolute left-[-5%] bottom-[50%] z-20 max-w-52.5 animate-float-3">
            <div className="p-4 rounded-md bg-slate-950/90 border-l-3 border border-teal-500/50 backdrop-blur-sm shadow-lg">
              <pre className="text-[11px] text-teal-300">HTML</pre>
            </div>
          </div>
          <div className="absolute -right-5 -top-5 z-20 max-w-52.5 animate-float-3">
            <div className="p-4 rounded-md bg-slate-950/90 border-l-3 border border-teal-500 backdrop-blur-sm shadow-lg">
              <pre className="text-xs text-teal-300">JS</pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
