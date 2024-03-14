"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "../../public/images/logo.png";
import Image from "next/image";
import navLinks from "@/data/navLinks";
import IconSocials from "./IconSocials";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [showBackground, setShowBackground] = useState(false);

  const handleScroll = () => {
    if (window.scrollY < 550) {
      setShowBackground(true);
    } else {
      setShowBackground(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] opacity-0 transition-opacity ${
          showBackground ? "opacity-0" : "opacity-100"
        }`}
        style={{ transitionDuration: "0.3s" }}
      >
        <div className="flex items-center justify-between px-6 py-2 lg:py-3">
          {/* GESTION LOGO */}
          <Link
            href={"/"}
            className="text-2xl md:text-5xl text-white font-semibold"
          >
            <Image src={Logo} alt="Logo" className="w-10 lg:w-12" />
          </Link>

          {/* GESTION NAVLINKS */}
          <div className="mobile-menu block md:hidden">
            {!navbarOpen ? (
              <button
                onClick={() => setNavbarOpen(true)}
                className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
              >
                <span className="sr-only">Ouvrir le menu</span>
                <Bars3Icon className="h-5 w-5" aria-label="Ouvrir le menu" />
              </button>
            ) : (
              <button
                onClick={() => setNavbarOpen(false)}
                className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
              >
                <span className="sr-only">Ferme le menu</span>
                <XMarkIcon className="h-5 w-5" aria-label="Fermer le menu" />
              </button>
            )}
          </div>

          {/* GESTION MOBILE NAVLINKS */}
          <div className="menu hidden md:block md:w-auto" id="navbar">
            <ul className="flex p-4 md:p-0 md:flex-row md:space-x-6 mt-0">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.path}
                    className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}

              <IconSocials width={29} height={25} />
            </ul>
          </div>
        </div>
        {navbarOpen ? (
          <ul className="flex flex-col py-4 items-center">
            {navLinks.map((link, index) => (
              <li
                key={index}
                className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
              >
                <Link href={link.path} onClick={() => setNavbarOpen(false)}>
                  {link.title}
                </Link>
              </li>
            ))}
            <IconSocials width={29} height={25} />
          </ul>
        ) : null}
      </nav>
    </>
  );
};

export default Navbar;
