"use client";
import { useEffect } from "react";
import Lenis from "lenis";
import Navbar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/Aboutme";
import SkillsSection from "./components/TopSkills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Page() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const frameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frameId);
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-cyan-400 focus:text-black focus:rounded-lg focus:text-sm focus:font-medium"
      >
        Skip to content
      </a>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}