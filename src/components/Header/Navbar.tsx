"use client";
import "./Navbar.scss";

import Image from "next/image";
import Link from "next/link";
import NavLinks from "./NavLinks";
import { useEffect, useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";

const Navbar = () => {
  const [navbarIsOpen, setNavbarIsOpen] = useState(false);
  const [showBackground, setShowBackground] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 550) {
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
      <nav className={showBackground ? "opacity-100" : "opacity-0"}>
        <div className="navbar-container">
          <Link href={"/"}>
            <Image
              src={"/images/logo.png"}
              alt="LOGO"
              width={45}
              height={45}
              priority
            />
          </Link>

          <div className="button-container flex md:hidden">
            <button
              aria-label={navbarIsOpen ? "Fermer le menu" : "Ouvrir le menu"}
              onClick={() => {
                setNavbarIsOpen(!navbarIsOpen);
              }}
            >
              <span className="sr-only">
                {navbarIsOpen ? "Fermer le menu" : "Ouvrir le menu"}
              </span>

              {navbarIsOpen ? <FaXmark size={30} /> : <FaBars size={30} />}
            </button>
          </div>

          <div className="desktop-menu hidden md:block">
            <NavLinks Links={LinksMenu} />
          </div>
        </div>

        {navbarIsOpen ? (
          <div className="mobile-menu block md:hidden">
            <NavLinks
              Links={LinksMenu}
              ModifyState={() => {
                setNavbarIsOpen(false);
              }}
            />
          </div>
        ) : null}
      </nav>
    </>
  );
};

export default Navbar;

const LinksMenu = [
  {
    title: "A Propos",
    path: "/#about",
  },
  {
    title: "Compétences",
    path: "/#skills",
  },
  {
    title: "Projets",
    path: "/#projects",
  },

  {
    title: "Contact",
    path: "/#contact",
  },
];
export type LinkMenuType = LinksMenuProps;
interface LinksMenuProps {
  path: string;
  title: string;
}
