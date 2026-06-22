"use client";
import { motion } from "motion/react";
import { useRef } from "react";
import { useInView } from "motion/react";

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "TypeScript", level: 90 },
      { name: "JavaScript", level: 92 },
      { name: "C++", level: 85 },
      { name: "SQL", level: 80 },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 92 },
      { name: "Next.js", level: 90 },
      { name: "Tailwind CSS", level: 88 },
      { name: "Framer Motion", level: 78 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 88 },
      { name: "Express", level: 85 },
      { name: "REST APIs", level: 90 },
      { name: "WebSockets", level: 75 },
    ],
  },
  {
    title: "Database & DevOps",
    skills: [
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 80 },
      { name: "Docker", level: 78 },
      { name: "Redis", level: 72 },
    ],
  },
];

const techStack = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "PostgreSQL",
  "MongoDB",
  "Prisma",
  "Redis",
  "Docker",
  "Kubernetes",
  "Tailwind CSS",
  "Framer Motion",
  "Git",
  "CI/CD",
  "WebSockets",
];

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="skills"
      className="relative py-24 md:py-32"
      aria-label="Skills"
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
            02 — Skills
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
          Technologies I{" "}
          <span className="gradient-text">work with</span>
        </motion.h2>

        {/* Skill categories grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.2 + catIdx * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="glass-card p-6"
            >
              <h3 className="text-lg font-semibold text-white mb-5">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-sm text-zinc-300">
                        {skill.name}
                      </span>
                      <span className="text-xs text-zinc-500 font-mono">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={
                          isInView ? { width: `${skill.level}%` } : {}
                        }
                        transition={{
                          duration: 1,
                          delay: 0.5 + catIdx * 0.1,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                        className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-cyan-500"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Full tech stack badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.6,
            delay: 0.6,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <h3 className="text-sm font-mono text-zinc-500 uppercase tracking-wider mb-4">
            Full Stack
          </h3>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{
                  duration: 0.3,
                  delay: 0.7 + i * 0.03,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="tech-tag"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
