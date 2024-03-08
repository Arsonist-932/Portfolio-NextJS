import Image from "next/image";
import Link from "next/link";
import socialsLink from "@/data/socialsLink";
import { useState } from "react";

const ContactSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState();

  const handleSubmit = () => {};
  return (
    <>
      <div className="mx-6 my-4 py-16">
        <div className="grid md:grid-cols-2 gap-4 relative">
          <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
          <div className="z-10">
            <h5 className="text-xl font-bold text-white my-2">
              Let&apos;s Connect
            </h5>
            <p className="text-[#ADB7BE] mb-4 max-w-md">
              {" "}
              I&apos;m currently looking for new opportunities, my inbox is
              always open. Whether you have a question or just want to say hi,
              I&apos;ll try my best to get back to you!
            </p>

            <div className="socials flex flex-row gap-2">
              {socialsLink.map((item, index) => (
                <li key={index} className="list-none">
                  <Link href={item.Url} target="_blank">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      width={50}
                      height={50}
                    />
                  </Link>
                </li>
              ))}
            </div>
          </div>

          <div>
            {emailSubmitted ? (
              <p className="text-green-500 text-sm mt-2">Email envoyé!</p>
            ) : (
              <form className="flex flex-col" onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="text-white block mb-2 text-sm font-medium"
                  >
                    Email *
                  </label>
                  <input
                    name="email"
                    type="email"
                    id="email"
                    required
                    className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                    placeholder="email@domaine.com"
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="subject"
                    className="text-white block text-sm mb-2 font-medium"
                  >
                    Subject *
                  </label>
                  <input
                    name="subject"
                    type="text"
                    id="Object"
                    required
                    className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                    placeholder="Objet..."
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="text-white block text-sm mb-2 font-medium"
                  >
                    Message *
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                    placeholder="Votre message..."
                  />
                </div>
                <button
                  type="submit"
                  className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactSection;
