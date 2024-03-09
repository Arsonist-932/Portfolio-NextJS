import socialsLink from "@/data/socialsLink";
import Logo from "../../public/images/logo.png";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const currently = new Date().getFullYear();

  return (
    <>
      <div className="border border-t-[#33353F] text-white py-6">
        <div className=" flex flex-col items-center">
          <Image
            src={Logo}
            alt="Logo"
            height={80}
            width={60}
            className="lg:w-40"
            priority
          />

          <div className="flex gap-3 py-4">
            {socialsLink.map((item, index) => (
              <li key={index} className="list-none">
                <Link href={item.Url} target="_blank">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    width={40}
                    height={40}
                    className="lg:w-14"
                  />
                </Link>
              </li>
            ))}
          </div>

          <p className="lg:text-xl">{currently} All rights reserved.</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
