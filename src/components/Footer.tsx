import Image from "next/image";
import React from "react";

const Footer = () => {
  const MonthCurrently = new Date().getFullYear();

  return (
    <>
      <div className="border border-t-[#33353F] border-l-transparent border-r-transparent border-b-transparent text-white py-4">
        <div className=" flex flex-col items-center gap-3">
          <Image
            src={"/images/logo.png"}
            alt="Logo"
            width={40}
            height={40}
            priority
          />

          <p className="text-sm">
            © Copyright {MonthCurrently} | Tous droits réservés
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
