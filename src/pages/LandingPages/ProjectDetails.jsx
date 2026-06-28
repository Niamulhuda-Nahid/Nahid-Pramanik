import { projects } from "@/lib/projects";
import { useGetProjectBySlugQuery } from "@/Redux/endpoints/projectsApi";
import { ExternalLink } from "lucide-react";
import React from "react";
import { FaGithub } from "react-icons/fa6";
import { useParams } from "react-router-dom";

export default function ProjectDetails() {
  const { slug } = useParams();

  const { data, isLoading } = useGetProjectBySlugQuery(slug);
  const project = data?.data;

  if (!project) {
    return (
      <div className="text-white flex items-center justify-center h-[calc(100vh-218px)] text-xl">
        Project Not Found
      </div>
    );
  }

  return (
    <section className="py-20 text-white">
      <div className="px-4 mx-auto max-w-7xl">
        <img
          src={project.banner.url}
          alt={project.title}
          className="w-full rounded-3xl mb-10"
        />
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-7 text-transparent bg-clip-text bg-linear-to-r from-cyan-300 via-teal-400 to-cyan-300">
          {project.title}
        </h1>

        <div className="flex flex-wrap gap-4 mb-7">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-lg group"
            >
              <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-[#7ed5cf] opacity-3"></span>
              <span className="absolute top-0 left-0 w-52 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-[#7ed5cf] opacity-100 group-hover:-translate-x-8"></span>
              <span className="relative w-full text-left text-[#7ed5cf] transition-colors duration-200 ease-in-out group-hover:text-gray-900 px-4 flex items-center justify-center gap-1.5">
                <ExternalLink size={18} />
                Live Demo
              </span>
              <span className="absolute inset-0 border-2 border-[#7ed5cf] rounded-lg"></span>
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-lg group"
            >
              <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-[#7ed5cf] opacity-3"></span>
              <span className="absolute top-0 left-0 w-52 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-[#7ed5cf] opacity-100 group-hover:-translate-x-8"></span>
              <span className="relative w-full text-left text-[#7ed5cf] transition-colors duration-200 ease-in-out group-hover:text-gray-900 px-4 flex items-center justify-center gap-1.5">
                <FaGithub size={18} />
                GitHub
              </span>
              <span className="absolute inset-0 border-2 border-[#7ed5cf] rounded-lg"></span>
            </a>
          )}
        </div>

        <p className="text-xl text-gray-300 mb-10">{project.description}</p>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div>
            <h4 className="font-semibold text-[#5ce1e6]">Role</h4>
            <p>{project.role}</p>
          </div>

          <div>
            <h4 className="font-semibold text-[#5ce1e6]">Duration</h4>
            <p>{project.duration}</p>
          </div>

          <div>
            <h4 className="font-semibold text-[#5ce1e6]">Status</h4>
            <p>{project.status}</p>
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-5 text-[#5ce1e6]">Key Features</h2>

        <ul className="grid md:grid-cols-2 gap-4 mb-12">
          {project.features.map((feature) => (
            <li
              key={feature}
              className="p-4 rounded-xl bg-[#111827]/30 border border-slate-700/90"
            >
              <span className="text-[#5ce1e6]">✓</span> {feature}
            </li>
          ))}
        </ul>

        <h2 className="text-3xl font-bold mb-5 text-[#5ce1e6]">Tech Stack</h2>

        <div className="flex flex-wrap gap-3 mb-12">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 rounded-full bg-[#5ce1e6]/90 text-[#050B14] font-medium text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        <h2 className="text-3xl font-bold mb-5 text-[#5ce1e6]">Gallery</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {project.gallery.map((data) => (
            <img
              key={data?.public_id}
              src={data?.url}
              alt={"Project Gallery"}
              className="rounded-2xl overflow-hidden border border-slate-700/90"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
