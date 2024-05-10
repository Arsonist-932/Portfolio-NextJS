import "./Contact.scss";

import Form from "./Form";

const ContactSection = () => {
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
          </div>

          <div>
            <Form />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactSection;
