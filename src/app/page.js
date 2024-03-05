"use client";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main className="">
        <div className="">
          <section className="bg-bg-hero bg-cover min-h-screen flex flex-col justify-center items-center lg:items-start">
            <HeroSection />
          </section>
        </div>

        <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
          <Footer />
        </footer>
      </main>
    </>
  );
}
