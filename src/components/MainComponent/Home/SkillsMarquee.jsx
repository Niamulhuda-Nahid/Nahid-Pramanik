import React from 'react'
import Marquee from "react-fast-marquee";
import {
    Atom,
    Braces,
    Code2,
    Palette,
    Database,
    Sparkles,
    Network,
    Boxes,
    Container,
    TestTube2,
    Wifi,
    Globe,
} from "lucide-react";

export default function SkillsMarquee() {
    return (
        <section className="bg-[#050B14] text-slate-100 py-16">
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

            <div className="">
                <Marquee
                    speed={45}
                    pauseOnHover
                    autoFill
                    gradient={true}
                    gradientColor="#050B14"
                    className="py-2"
                >
                    {skills.map((skill) => {
                        const Icon = skill.icon;

                        return (
                            <div key={skill.id} className="mx-8 flex flex-col items-center border border-slate-800/90 p-6 rounded-lg w-48 bg-[#111827]/30">
                                <div className="rounded-xl bg-teal-950/40 border border-teal-500/20 text-[#5ce1e6]  p-4">
                                    <Icon
                                        size={36}
                                        className="text-cyan-400 transition-colors duration-300 group-hover:text-white"
                                    />
                                </div>

                                <h3 className="mt-3 font-semibold">{skill.name}</h3>
                                <p className="text-xs text-slate-400">{skill.category}</p>
                            </div>
                        );
                    })}
                </Marquee>
            </div>
        </section>
    )
}

const skills = [
    {
        id: "sk1",
        name: "Next.js",
        category: "Frameworks",
        rating: "95%",
        icon: Code2,
    },
    {
        id: "sk2",
        name: "TypeScript",
        category: "Languages",
        rating: "92%",
        icon: Braces,
    },
    {
        id: "sk3",
        name: "React",
        category: "Frameworks",
        rating: "98%",
        icon: Atom,
    },
    {
        id: "sk4",
        name: "Tailwind CSS",
        category: "Styling",
        rating: "95%",
        icon: Palette,
    },
    {
        id: "sk5",
        name: "Supabase",
        category: "Backend / APIs",
        rating: "85%",
        icon: Database,
    },
    {
        id: "sk6",
        name: "Framer Motion",
        category: "Animation",
        rating: "90%",
        icon: Sparkles,
    },
    {
        id: "sk7",
        name: "GraphQL",
        category: "Backend / APIs",
        rating: "88%",
        icon: Network,
    },
    {
        id: "sk8",
        name: "Zustand / Redux",
        category: "State Management",
        rating: "94%",
        icon: Boxes,
    },
    {
        id: "sk9",
        name: "Docker",
        category: "DevOps",
        rating: "80%",
        icon: Container,
    },
    {
        id: "sk10",
        name: "Vitest / Cypress",
        category: "Testing",
        rating: "87%",
        icon: TestTube2,
    },
    {
        id: "sk11",
        name: "WebSockets",
        category: "Realtime",
        rating: "90%",
        icon: Wifi,
    },
    {
        id: "sk12",
        name: "REST API",
        category: "Backend / APIs",
        rating: "96%",
        icon: Globe,
    },
];