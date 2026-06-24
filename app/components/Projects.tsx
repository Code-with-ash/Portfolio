"use client";
import { motion } from "motion/react";
import { useRef } from "react";
import { useInView } from "motion/react";

interface Project {
  title: string;
  description: string;
  impact: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: "FinTrack",
    description:
      "A full-stack expense tracker that helps users monitor spending, set budgets, and visualize financial data with interactive charts and real-time updates.",
    impact: "Built with clean architecture and real-time sync capabilities",
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    title: "Real-Time Chat App",
    description:
      "Scalable messaging platform with WebSocket-powered real-time communication, supporting private messages, group channels, and message persistence.",
    impact: "Sub-100ms message delivery with Redis pub/sub architecture",
    techStack: ["Node.js", "Socket.io", "Redis", "MongoDB", "React"],
    githubUrl: "#",
  },
  {
  title: "AI-Powered Solar Rooftop Potential Analyzer for TPDDL",
  description:
    "An intelligent geospatial analytics platform built for Tata Power Delhi Distribution Limited (TPDDL) that leverages GeoJSON building footprint data and advanced solar irradiance modeling to assess rooftop solar installation viability across the Rohini district of Delhi. The system computes a multi-factor Solar Suitability Score (0–100) for every building by analyzing roof geometry via Turf.js spatial computations, usable roof area estimation, panel efficiency modeling, and solar capacity projections. Features an interactive Leaflet-powered map with color-coded building overlays (green/yellow/red) for instant visual assessment, click-to-inspect popups with detailed per-building analytics, a real-time aggregated dashboard summarizing total capacity, annual energy yield, and CO₂ offset across the entire district, and a comprehensive financial model estimating installation costs, annual savings, and payback periods.",
  impact:
    "Enables data-driven decision-making for urban solar adoption at scale — analyzing hundreds of buildings simultaneously, projecting aggregate energy generation capacity in kW, estimating annual CO₂ reduction in tons, and providing per-building ROI analysis with payback period calculations to accelerate India's clean energy transition.",
  techStack: [
    "React",
    "Leaflet",
    "React-Leaflet",
    "Turf.js",
    "GeoJSON",
    "OpenStreetMap",
    "Vite"
  ],
  featured: true
}
];

function ProjectCard({
  project,
  index,
  isInView,
}: {
  project: Project;
  index: number;
  isInView: boolean;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: 0.2 + index * 0.15,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={`glass-card group overflow-hidden ${
        project.featured ? "md:col-span-2" : ""
      }`}
    >
      {/* Gradient accent bar */}
      <div
        className="h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"
        aria-hidden="true"
      />

      <div className="p-6 md:p-8">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div>
            {project.featured && (
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2 block">
                Featured Project
              </span>
            )}
            <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
              {project.title}
            </h3>
          </div>

          {/* Links */}
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-500 hover:text-white transition-colors duration-300"
                aria-label={`View ${project.title} on GitHub`}
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-500 hover:text-white transition-colors duration-300"
                aria-label={`View ${project.title} live demo`}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
              </a>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-zinc-400 leading-relaxed mb-3">
          {project.description}
        </p>

        {/* Impact */}
        <p className="text-sm text-zinc-500 italic mb-6">
          ↳ {project.impact}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span key={tech} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="projects"
      className="relative py-24 md:py-32"
      aria-label="Projects"
    >
      <div className="section-divider" aria-hidden="true" />

      <div ref={ref} className="max-w-6xl mx-auto px-6 lg:px-8 pt-16">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-4"
        >
          <span className="text-sm font-mono text-cyan-400 tracking-wider uppercase">
            03 — Projects
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.6,
            delay: 0.1,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="text-3xl md:text-4xl font-bold text-white mb-16 tracking-tight"
        >
          Things I&apos;ve{" "}
          <span className="gradient-text">built</span>
        </motion.h2>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={i}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}