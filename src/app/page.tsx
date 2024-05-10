"use client";

import AboutSection from "@/components/AboutSection/AboutSection";
import Skills from "@/components/Skills/Skills";
import ProjectSection from "@/components/Projects/ProjectSection";
import ContactSection from "@/components/ContactSection/ContactSection";
import HeroSection from "@/components/HeroSection/HeroSection";

export default function Home() {
  return (
    <>
      <main>
        <div>
          <HeroSection />

          <section id="about">
            <AboutSection />
          </section>

          <section id="skills">
            <Skills />
          </section>

          <section id="projects">
            <ProjectSection />
          </section>

          <section id="contact">
            <ContactSection />
          </section>
        </div>
      </main>
    </>
  );
}
