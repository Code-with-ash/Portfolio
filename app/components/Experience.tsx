"use client";
import { motion } from "motion/react";
import { useRef } from "react";
import { useInView } from "motion/react";

interface ExperienceEntry {
  role: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
}

const experiences: ExperienceEntry[] = [
  {
    role: "Full-Stack Developer",
    company: "Personal Projects & Freelance",
    period: "2024 — Present",
    description:
      "Building production-grade web applications with modern tech stack, focusing on scalable architecture and clean code practices.",
    highlights: [
      "Architected and shipped multiple full-stack applications using Next.js and PostgreSQL",
      "Implemented real-time features using WebSockets and Redis"
    ],
  },
  {
    role: "Open Source Contributor",
    company: "Various Projects",
    period: "2023 — Present",
    description:
      "Contributing to open source projects and building developer tools that solve real problems.",
    highlights: [
      "Active contributor to web development tools and libraries",
      "Built and maintained reusable component libraries",
      "Collaborated with developers globally on code reviews and feature implementations",
    ],
  },
  {
    role: "Electronics and Communication Engineering Student",
    company: "",
    period: "2024 — Present",
    description:
      "Pursuing a degree in Electronics and Communication Engineering with focus on algorithms, system design, and software engineering.",
    highlights: [
      "Strong foundation in Data Structures & Algorithms using C++",
      "Coursework in Database Systems, Operating Systems, and Computer Networks",
      "Built multiple academic and personal projects applying theoretical knowledge",
    ],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="experience"
      className="relative py-24 md:py-32"
      aria-label="Experience"
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
            04 — Experience
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
          Where I&apos;ve{" "}
          <span className="gradient-text">been</span>
        </motion.h2>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div
            className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-white/[0.06]"
            aria-hidden="true"
          />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={`${exp.company}-${exp.period}`}
                initial={{ opacity: 0, x: -24 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 0.7,
                  delay: 0.2 + i * 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative pl-8 md:pl-20"
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-0 md:left-8 top-1.5 w-2 h-2 rounded-full bg-cyan-400 -translate-x-[3px]"
                  aria-hidden="true"
                >
                  <div className="absolute inset-0 rounded-full bg-cyan-400 animate-ping opacity-20" />
                </div>

                {/* Content */}
                <div className="glass-card p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-3 gap-2">
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        {exp.role}
                      </h3>
                      <p className="text-sm text-cyan-400">{exp.company}</p>
                    </div>
                    <span className="text-sm font-mono text-zinc-500">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, j) => (
                      <li
                        key={j}
                        className="text-sm text-zinc-500 flex items-start gap-2"
                      >
                        <span
                          className="text-cyan-400/60 mt-1.5 shrink-0"
                          aria-hidden="true"
                        >
                          ▹
                        </span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
