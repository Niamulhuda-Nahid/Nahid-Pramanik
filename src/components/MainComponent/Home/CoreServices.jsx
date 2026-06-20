import React from 'react'
import { Laptop, Compass, Palette, Layers, Zap, Globe, Settings } from 'lucide-react';

export default function CoreServices() {

    const renderIcon = (type, className) => {
        switch (type) {
            case 'laptop': return <Laptop className={className} />;
            case 'compass': return <Compass className={className} />;
            case 'palette': return <Palette className={className} />;
            case 'layers': return <Layers className={className} />;
            case 'zap': return <Zap className={className} />;
            case 'globe': return <Globe className={className} />;
            default: return <Settings className={className} />;
        }
    };

    return (
        <section className=" text-slate-100 py-20 px-6 md:px-12">
            <div className="max-w-6xl mx-auto">

                {/* Header Section */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                        Core <span className="bg-linear-to-r from-[#5ce1e6] to-[#2dd4bf] bg-clip-text text-transparent">Services</span>
                    </h2>
                    <p className="text-slate-400 mt-4 text-sm md:text-base max-w-xl mx-auto">
                        How I can help bring your next digital project to life.
                    </p>
                </div>

                {/* Dynamic Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="bg-[#111827]/30 border border-slate-800/90 rounded-[28px] p-8 md:p-10 backdrop-blur-md shadow-2xl relative transition-all duration-300 hover:border-slate-700/60 hover:-translate-y-1 group"
                        >
                            <div className="absolute top-0 left-10 right-10 h-px bg-linear-to-r from-transparent via-[#5ce1e6]/30 to-transparent group-hover:via-[#5ce1e6]/60 transition-all duration-500" />

                            <div>
                                {/* Gradient Squircle Icon Wrapper */}
                                <div className="w-12 h-12 rounded-xl bg-linear-to-br from-teal-400 to-cyan-300 flex items-center justify-center mb-6 shadow-md">
                                    {renderIcon(service.iconType, "w-6 h-6 text-slate-950")}
                                </div>

                                {/* Service Metadata */}
                                <h3 className="text-2xl font-bold text-white mb-4 tracking-wide leading-tight">
                                    {service.title}
                                </h3>
                                <p className="text-base text-slate-400 leading-relaxed mb-6 font-light">
                                    {service.description}
                                </p>
                            </div>

                            {/* Highlight Bullet Points list */}
                            {service.bullets && service.bullets.length > 0 && (
                                <div className="border-t border-slate-800/80 pt-6 mt-auto">
                                    <ul className="space-y-3 text-sm text-slate-300">
                                        {service.bullets.map((bullet, idx) => bullet.trim() && (
                                            <li key={idx} className="flex items-center gap-2">
                                                <span className="w-1.5 h-1.5 rounded-full bg-[#5ce1e6] inline-block opacity-90" />
                                                <span>{bullet}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

const services = [
    {
        "id": "s1",
        "title": "Frontend Development",
        "description": "Building highly interactive, responsive, and performance-optimized web applications using modern frameworks.",
        "bullets": [
            "React & Next.js Ecosystems",
            "Animations & Interactivity",
            "Speed Optimization"
        ],
        "iconType": "laptop"
    },
    {
        "id": "s2",
        "title": "React Architecture",
        "description": "Designing scalable, maintainable application structures with robust state management and clean code patterns.",
        "bullets": [
            "Component Libraries",
            "State Management (Redux/Zustand)",
            "Custom Hook Architectures"
        ],
        "iconType": "compass"
    },
    {
        "id": "s3",
        "title": "UI/UX Implementation",
        "description": "Transforming high-fidelity designs into pixel-perfect reality while ensuring absolute accessibility and UX flow.",
        "bullets": [
            "Figma to React translation",
            "Accessible (a11y) Interfaces",
            "Design System Engineering"
        ],
        "iconType": "palette"
    }
];

