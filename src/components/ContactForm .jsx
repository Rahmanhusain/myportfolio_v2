import React, { useState } from "react";
import CrossIcon from "./CrossIcon";
import EmailCrossButton from "./EmailCrossButton";
import { MiniloadIcon } from "@/icons/icon";

const ContactForm = ({ setIsOpen, isOpen }) => {
  const [closeanim, setcloseanim] = useState(false);
  const [issending, setissending] = useState(false);
  return (
    <div className="w-full h-dvh lg:px-24 md:px-20 sm:px-10 px-5 flex flex-col gap-3 items-center justify-center fixed top-0 left-0 bg-transparent backdrop-filter backdrop-blur-lg z-50">
      <h2 className="text-xl font-bold text-center">Send Me an Email</h2>

      <form
        onSubmit={async (e) => {
          e.preventDefault();
          setissending(true);
          const formData = new FormData(e.target);
          const data = {
            name: formData.get("name"),
            email: formData.get("email"),
            message: formData.get("message"),
          };

          try {
            const response = await fetch("/api/sendmail", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(data),
            });

            if (response.ok) {
              alert("Email sent successfully!");
              e.target.reset();
              setissending(false);
            } else {
              alert("Failed to send Email");
              setissending(false);
            }
          } catch (error) {
            console.error("Error:", error);
            alert("Failed to send Email");
            setissending(false);
          }
        }}
        className={`w-[25rem] max-w-full mx-auto p-3 rounded-lg sm:p-5 overflow-y-auto max-h-[80vh] ${
          !closeanim ? "animate-popInSimple" : "animate-popOutSimple"
        } ${closeanim && "scale-0"}`}
      >
        <div className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="bg-[#333] text-[#fff] p-3 rounded-xl"
            autoComplete="name"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            autoComplete="email"
            className="bg-[#333] text-[#fff] p-3 rounded-xl"
            required
          />
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            placeholder="Message"
            className="bg-[#333] text-[#fff] p-3 rounded-xl"
            required
          ></textarea>
          <button type="submit" className="bg-[#E1306C] text-white py-3 rounded-xl flex gap-2 items-center justify-center">
            {issending ? (<><MiniloadIcon className="w-5 h-5 animate-spin-fast" /> Sending Email</>) : "Send"}
          </button>
        </div>
      </form>
      <EmailCrossButton
        className="top-3 right-3 z-50"
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        setcloseanim={setcloseanim}
        closeanim={closeanim}
      />
    </div>
  );
};

export default ContactForm;
