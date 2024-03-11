import Logo from "../../public/images/logo.png";
import Image from "next/image";
import React from "react";

const Footer = () => {
  const MonthCurrently = new Date().getFullYear();

  return (
    <>
      <div className="border border-t-[#33353F] border-l-transparent border-r-transparent border-b-transparent text-white py-4">
        <div className=" flex flex-col items-center">
          <Image src={Logo} alt="Logo" className="w-16 py-4" priority />

          <p className="">
            ©{MonthCurrently}-{MonthCurrently + 1} All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
