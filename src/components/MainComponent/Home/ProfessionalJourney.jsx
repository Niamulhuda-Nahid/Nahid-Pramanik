import React from 'react'

export default function ProfessionalJourney() {
    return (
        <section className=" text-slate-100 py-20 px-4 md:px-8 overflow-hidden">
            <div className="max-w-6xl mx-auto">

                {/* Header */}
                <div className="text-center mb-16 md:mb-24">
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                        Professional <span className="bg-linear-to-r from-[#5ce1e6] to-[#2dd4bf] bg-clip-text text-transparent">Journey</span>
                    </h2>
                </div>

                {/* Timeline Section */}
                <div className="relative">

                    {/* Central Vertical Line (hidden on small mobile, custom absolute positioned) */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-cyan-500 via-teal-400 to-blue-600 transform md:-translate-x-1/2 hidden sm:block" />

                    <div className="space-y-12 md:space-y-0 relative">
                        {milestones.map((item, index) => {
                            const isEven = index % 2 === 0;
                            return (
                                <div
                                    key={item.id}
                                    className="flex flex-col md:flex-row items-stretch md:min-h-40 relative"
                                >
                                    {/* Left Column */}
                                    <div className="w-full md:w-1/2 flex items-center pl-8 xs:pl-12 md:pl-0 md:pr-16 md:justify-end text-left md:text-right order-2 md:order-1">
                                        {isEven ? (
                                            <div className="space-y-1.5 py-2">
                                                <span className="text-2xl md:text-3xl font-bold tracking-tight text-[#5ce1e6]">
                                                    {item.year}
                                                </span>
                                                <h3 className="text-xl font-bold text-white tracking-wide">
                                                    {item.role}
                                                </h3>
                                                <p className="text-sm font-semibold text-[#5ce1e6] tracking-wider uppercase">
                                                    {item.company}
                                                </p>
                                            </div>
                                        ) : (
                                            <div className="text-slate-400 text-[15px] leading-relaxed max-w-md py-2">
                                                {item.description}
                                            </div>
                                        )}
                                    </div>

                                    {/* Central Node Dot (aligned properly with line) */}
                                    <div className="absolute left-4 md:left-1/2 top-4 md:top-1/2 transform -translate-x-1/2 md:-translate-y-1/2 z-10 hidden sm:flex items-center justify-center text-white">
                                        <div className="w-4 h-4 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.5)] ring-4 ring-[#080E1A] transition-all duration-300 hover:scale-125" />
                                    </div>

                                    {/* Right Column */}
                                    <div className="w-full md:w-1/2 flex items-center pl-8 xs:pl-12 md:pl-16 text-left order-3 md:order-2">
                                        {!isEven ? (
                                            <div className="space-y-1.5 py-2">
                                                <span className="text-2xl md:text-3xl font-bold tracking-tight text-[#5ce1e6]">
                                                    {item.year}
                                                </span>
                                                <h3 className="text-xl font-bold text-white tracking-wide">
                                                    {item.role}
                                                </h3>
                                                <p className="text-sm font-semibold text-[#5ce1e6] tracking-wider uppercase">
                                                    {item.company}
                                                </p>
                                            </div>
                                        ) : (
                                            <div className="text-slate-400 text-[15px] leading-relaxed max-w-md py-2">
                                                {item.description}
                                            </div>
                                        )}
                                    </div>

                                </div>
                            );
                        })}
                    </div>

                </div>
            </div>
        </section>
    )
}

const milestones = [
    {
        "id": "1",
        "year": "2024 — Present",
        "role": "Frontend Engineer",
        "company": "Softvence Agency",
        "description": "Leading the architecture of core React applications, improving performance metrics by 40% and mentoring a team of 10+ junior developers."
    },
    // {
    //     "id": "2",
    //     "year": "2019 — 2021",
    //     "role": "UI/UX Developer",
    //     "company": "Pixel & Vector",
    //     "description": "Started the journey by building responsive web pages and mastering the fundamentals of JavaScript and CSS architectures."
    // },
    // {
    //     "id": "3",
    //     "year": "2017 — 2019",
    //     "role": "Junior Frontend Developer",
    //     "company": "DevLabs Inc",
    //     "description": "Developed pixel-perfect interfaces for Fortune 500 clients, implementing robust CI/CD pipelines and automated testing suites."
    // }
];
