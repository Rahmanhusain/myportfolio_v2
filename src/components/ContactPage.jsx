"use client";
import React, { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import {
  EmailIcon,
  GitHubIcon,
  Instagram,
  LinkedInIcon,
  ShareIcon,
  WhatsAppIcon,
  Xlogo,
} from "@/icons/icon";
import ContactForm from "./ContactForm ";

function ContactPage() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    Aos.init({
      duration: 800, // Animation duration
    });
    Aos.refresh();
  }, []);

  const socialLinks = [
    {
      icon: <Instagram className="h-7 w-7 text-[#E1306C]" />,
      href: "https://www.instagram.com/_rahmanhusain?utm_source=qr&igsh=MXVmNGN1cm42OHRpeQ==",
      label: "GitHub",
    },
    {
      icon: <Xlogo className="h-7 w-7" />,
      href: "https://x.com/_rahmanhusain?t=gNyQXtVLwaSkzcSFVZp9bw&s=08",
      label: "X",
    },
    {
      icon: <LinkedInIcon className="h-7 w-7 text-[#0A66C2]" />,
      href: "https://www.linkedin.com/in/rahman-husain-45bb60237/",
      label: "Dribbble",
    },
    {
      icon: <GitHubIcon className="h-7 w-7 text-[#ffffff]" />,
      href: "https://github.com/Rahmanhusain",
      label: "Facebook",
    },
  ];

  return (
    <section
      id="contact"
      className="relative lg:px-24 md:px-20 sm:px-10 px-5  bg-[#000000]"
    >
      <span className="contactbg absolute inset-0 -z-0 opacity-40"></span>
      <div className="mx-auto mt-14 py-16 overflow-hidden">
        <div className="grid grid-cols-1 gap-14 lg:gap-3 lg:grid-cols-2 ">
          <div className="flex flex-col gap-4 w-full mx-auto  relative">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold ">
              LET'S
            </h1>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold  ">
              WORK
            </h1>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold  ">
              TOGETHER
            </h1>
            {/*  <button className="sm:hidden absolute right-4 top-4 flex items-center gap-2 bg-[#E1306C] text-base p-3 w-fit rounded-full">
              <EmailIcon className="w-5 h-5" /> Email Me
            </button> */}
            <button
              onClick={() => {
                setIsOpen(true);
              }}
              className="  right-4 top-4 flex items-center gap-2 bg-[#E1306C] text-base p-3 w-fit rounded-full"
            >
              <EmailIcon className="w-5 h-5" /> Email Me
            </button>
          </div>

          <div className="relative max-w-full w-96 h-44 lg:w-96 lg:h-fit bg-gray-800/50 rounded-xl p-8 mx-auto my-auto content-center">
            {/* Share Button */}
            <div className="absolute left-1/2 -top-5 -translate-x-1/2">
              <div className="bg-gray-800 ring-4 ring-[#0b0b0b] rounded-full p-2">
                <ShareIcon className="w-7 h-7 lg:w-6 lg:h-6 text-[var(--coloredtext)]" />
              </div>
            </div>

            {/* Title */}
            <h2 className="text-gray-300 text-lg font-medium text-center mb-6">
              Follow Me On
            </h2>

            {/* Social Icons */}
            <div className="flex justify-center items-center gap-6">
              {socialLinks.map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  aria-label={label}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="flex  gap-x-7 gap-y-2 text-sm flex-wrap mt-6">
          <a
            href="https://wa.me/919205582846?text=Hello%2C%20I%20came%20across%20your%20portfolio%20and%20I%27m%20interested%20in%20discussing%20a%20potential%20project%20with%20you.%20Let%27s%20connect%20and%20explore%20how%20we%20can%20collaborate%21%20"
            target="_blank"
            rel="noreferrer"
            className="flex gap-2 items-center z-10"
          >
            <WhatsAppIcon className="w-6 h-6 text-green-400" />
            +91 9205582846
          </a>
          <a
            href="mailto:rahmanhusain899@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="flex gap-2 items-center z-10"
          >
            <EmailIcon className="w-6 h-6 text-[#E1306C]" />
            rahmanhusain899@gmail.com
          </a>
          <a
            href="https://github.com/Rahmanhusain"
            target="_blank"
            rel="noreferrer"
            className="flex gap-2 items-center z-10"
          >
            <GitHubIcon className="w-6 h-6" />
            Rahmanhusain
          </a>
          <a
            href="https://www.linkedin.com/in/rahman-husain-45bb60237/"
            target="_blank"
            rel="noreferrer"
            className="flex gap-2 items-center z-10"
          >
            <LinkedInIcon className="w-5 h-5 text-[#0A66C2]" />
            Rahman Husain
          </a>
        </div>
      </div>

      {isOpen && <ContactForm setIsOpen={setIsOpen} isOpen={isOpen} />}
    </section>
  );
}

export default ContactPage;
