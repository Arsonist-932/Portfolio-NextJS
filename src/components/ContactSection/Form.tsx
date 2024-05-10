"use client";

import FormFields from "./FormFields";
import { sendData } from "@/app/api/send/send";
import { useState } from "react";

const Form = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    lastname: "",
    firstname: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: FormChange) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: FormSubmit) => {
    e.preventDefault();
    // console.log(formData);
    setEmailSubmitted(true);
    sendData(formData);

    setTimeout(() => {
      setEmailSubmitted(false);
      setFormData({
        lastname: "",
        firstname: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 3000);
  };

  return (
    <>
      {emailSubmitted ? (
        <p className="text-green-500 text-sm mt-2">Email envoyé!</p>
      ) : (
        <form action={""} onSubmit={handleSubmit}>
          <div className="input-username">
            <FormFields
              htmlFor="lastname"
              labelName="Nom *"
              type="text"
              placeholder="Nom..."
              value={formData.lastname}
              onChanged={handleChange}
            />

            <FormFields
              htmlFor="firstname"
              labelName="Prénom *"
              placeholder="Prénom..."
              type="text"
              value={formData.firstname}
              onChanged={handleChange}
            />
          </div>

          <div className="other-input">
            <FormFields
              htmlFor="email"
              labelName="Email *"
              type="email"
              placeholder="email@domaine.com"
              value={formData.email}
              onChanged={handleChange}
            />

            <FormFields
              htmlFor="subject"
              labelName="Object *"
              type="text"
              placeholder="Objet..."
              value={formData.subject}
              onChanged={handleChange}
            />

            <label htmlFor="message">Message *</label>

            <textarea
              name="message"
              id="message"
              className="textarea placeholder-[#9CA2A9] text-gray-100"
              placeholder="Votre message..."
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          <button type="submit">Envoyer</button>
        </form>
      )}
    </>
  );
};

export default Form;

type FormChange = React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

type FormSubmit = React.FormEvent<HTMLFormElement>;
