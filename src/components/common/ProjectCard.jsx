import React from "react";
import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  return (
    <div className="bg-[#111827]/30 border border-slate-800/90 rounded-[28px] backdrop-blur-md shadow-2xl relative transition-all duration-300 hover:border-slate-700/60 overflow-hidden">
      {/* Top border glowing highlight effect */}
      <div className="absolute top-0 left-10 right-10 h-px bg-linear-to-r from-transparent via-[#5ce1e6]/30 to-transparent group-hover:via-[#5ce1e6]/60 transition-all duration-500" />

      <div className="overflow-hidden">
        <img
          src={project?.thumbnail?.url}
          alt={project?.title}
          className="h-72 w-full object-cover"
        />
      </div>

      <div className="p-4">
        <h3 className="mt-2 text-2xl font-bold">{project?.title}</h3>

        <p className="mt-3 text-gray-300 line-clamp-3">
          {project?.shortDescription}
        </p>

        <Link
          to={`/projects/${project?.slug}`}
          className="relative items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-lg group w-full mt-6"
        >
          <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-[#7ed5cf] opacity-3"></span>
          <span className="absolute top-0 left-0 w-95 h-110 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-105 -translate-y-56 bg-[#7ed5cf] opacity-100 group-hover:-translate-x-8"></span>
          <span className="relative w-full text-center text-[#7ed5cf] transition-colors duration-200 ease-in-out group-hover:text-gray-900 px-4 flex items-center justify-center">
            View Case Study →
          </span>
          <span className="absolute inset-0 border-2 border-[#7ed5cf] rounded-lg"></span>
        </Link>
      </div>
    </div>
  );
}
