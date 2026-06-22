"use client";
import { motion } from "motion/react";

export default function HeroSection() {
  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-20 bg-[#0a0a0f]" />

      {/* Grid pattern */}
      <div className="absolute inset-0 -z-10 grid-bg opacity-60" />

      {/* Gradient orbs */}
      <div
        className="absolute top-1/4 -left-32 w-96 h-96 rounded-full opacity-20 blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, rgba(34,211,238,0.6) 0%, transparent 70%)",
          animation: "pulse-glow 6s ease-in-out infinite",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full opacity-15 blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, rgba(139,92,246,0.5) 0%, transparent 70%)",
          animation: "pulse-glow 8s ease-in-out infinite 2s",
        }}
        aria-hidden="true"
      />

      {/* Radial fade at top */}
      <div
        className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#0a0a0f] to-transparent -z-10"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative max-w-4xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-white/[0.08] bg-white/[0.03] text-sm text-zinc-400"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Available for opportunities
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-[1.05]"
        >
          Ashmit Mishra
        </motion.h1>

        {/* Role */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 text-xl sm:text-2xl md:text-3xl font-light text-zinc-400"
        >
          Full-Stack Developer{" "}
          <span className="gradient-text font-medium">building products</span>{" "}
          that scale
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 max-w-xl mx-auto text-base sm:text-lg text-zinc-500 leading-relaxed"
        >
          I craft fast, reliable web applications with Next.js, TypeScript, and
          modern backend technologies. Focused on clean code and great user
          experiences.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={scrollToProjects}
            className="group px-6 py-3 text-sm font-medium text-black bg-cyan-400 rounded-lg hover:bg-cyan-300 transition-all duration-300 flex items-center gap-2"
          >
            View My Work
            <svg
              className="w-4 h-4 group-hover:translate-x-0.5 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
          <button
            onClick={scrollToContact}
            className="px-6 py-3 text-sm font-medium text-zinc-300 border border-white/[0.1] rounded-lg hover:bg-white/[0.05] hover:text-white hover:border-white/[0.2] transition-all duration-300"
          >
            Contact Me
          </button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-5 h-8 rounded-full border border-white/[0.15] flex items-start justify-center p-1.5"
          >
            <div className="w-1 h-1.5 bg-white/40 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}