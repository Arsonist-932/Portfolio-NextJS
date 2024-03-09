import Image from "next/image";
import Link from "next/link";
import socialsLink from "@/data/socialsLink";
import { useState } from "react";
import Form from "./Form";

const ContactSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState();

  const handleSubmit = () => {};
  return (
    <>
      <div className="mx-6 my-4 py-16">
        <h2 className="text-center text-3xl sm:text-4xl font-bold text-white">
          Me Contacter
        </h2>

        <div className="flex flex-col items-center gap-4 justify-center">
          <div className=" my-8">
            <p className="text-[#ADB7BE] mb-4 max-w-lg text-center text-lg md:text-2xl">
              Envie de démarrer votre prochain projet avec moi ? Envoyez-moi un
              message et je vous répondrais dans les plus brefs délais !
            </p>

            <div className="socials flex flex-row justify-center gap-2">
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
                <div className="flex gap-4">
                  <Form
                    htmlFor="lastname"
                    labelName="Nom *"
                    type="text"
                    placeholder="Nom..."
                    required
                  />

                  <Form
                    htmlFor="firstname"
                    labelName="Prénom *"
                    placeholder="Prénom..."
                    type="text"
                    required
                  />
                </div>

                <div className="flex flex-col gap-3">
                  <Form
                    htmlFor="email"
                    labelName="Email *"
                    type="email"
                    placeholder="email@domaine.com"
                    required
                  />

                  <Form
                    htmlFor="object"
                    labelName="Object *"
                    type="text"
                    placeholder="Objet..."
                    required
                  />

                  <label
                    htmlFor="message"
                    className="text-white block text-sm font-medium"
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
                  className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full mt-10"
                >
                  Envoyer
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
