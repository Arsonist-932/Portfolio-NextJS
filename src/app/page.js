"use client";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";
import Skills from "@/components/Skills";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main>
        <div>
          <section className="bg-bg-hero bg-cover min-h-screen flex flex-col justify-center items-center lg:items-start">
            <HeroSection />
          </section>

          <section id="about">
            <AboutSection />
          </section>

          <section id="skills">
            <Skills />
          </section>

          <section id="projects">
            <ProjectsSection />
          </section>

          <section id="contact">
            <ContactSection />
          </section>
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}
