import React from "react";
import ProjectCard from "@/components/common/ProjectCard";
import { useGetAllFeaturedProjectsQuery } from "@/Redux/endpoints/projectsApi";

export default function SelectedWork() {
  const { data: featuredProjects } = useGetAllFeaturedProjectsQuery();
  const projects = featuredProjects?.data || [];
  return (
    <section className='className="bg-[#050B14] text-slate-100 py-16 overflow-hidden"'>
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="text-center mb-10 md:mb-14 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Selected{" "}
            <span className="bg-linear-to-r from-[#5ce1e6] to-[#2dd4bf] bg-clip-text text-transparent">
              Works
            </span>
          </h2>

          <p className="text-slate-400 text-lg font-light tracking-wide max-w-xl mx-auto mt-2.5">
            A showcase of projects where performance meets aesthetic excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
