"use client";
import { motion } from "motion/react";
import { useRef } from "react";
import { useInView } from "motion/react";
import Image from "next/image";

const stats = [
  { label: "Projects Built", value: "10+" },
  { label: "Technologies", value: "15+" },
  { label: "Open Source", value: "Active" },
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      className="relative py-24 md:py-32"
      aria-label="About me"
    >
      {/* Section divider */}
      <div className="section-divider" aria-hidden="true" />

      <div ref={ref} className="max-w-6xl mx-auto px-6 lg:px-8 pt-16">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <span className="text-sm font-mono text-cyan-400 tracking-wider uppercase">
            01 — About
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative"
          >
            <div className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0 rounded-2xl overflow-hidden">
              <Image
                src="/pexels-thisisengineering-3861951.jpg"
                alt="Ashmit Mishra - Full-Stack Developer"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={false}
              />
              {/* Overlay gradient */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/60 via-transparent to-transparent"
                aria-hidden="true"
              />
            </div>

            {/* Decorative border */}
            <div
              className="absolute -inset-1 rounded-2xl border border-white/[0.06] -z-10 max-w-md mx-auto lg:mx-0"
              aria-hidden="true"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
              Building digital products that{" "}
              <span className="gradient-text">make an impact</span>
            </h2>

            <div className="space-y-4 text-zinc-400 leading-relaxed">
              <p>
                I&apos;m Ashmit, a Full-Stack Developer who transforms complex
                problems into elegant, scalable solutions. I specialize in the
                modern JavaScript ecosystem — Next.js, TypeScript, Node.js, and
                PostgreSQL.
              </p>
              <p>
                My approach prioritizes clean architecture, performance, and
                exceptional user experience. I believe great software should be
                both powerful under the hood and delightful to use.
              </p>
              <p>
                When I&apos;m not shipping features, I&apos;m diving into system
                design, contributing to open source, or sharpening my DSA skills
                with C++.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: 0.5 + i * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="text-center lg:text-left"
                >
                  <div className="text-2xl md:text-3xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-xs text-zinc-500 mt-1 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}