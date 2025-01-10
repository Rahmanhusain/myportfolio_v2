import React from "react";
import {
  AddressIcon,
  CalendarIcon,
  EmailIcon,
  IndianFlagIcon,
  Instagram,
  LaptopIcon,
  LinkedInIcon,
  PhoneIcon,
  WhatsAppIcon,
} from "@/icons/icon";

function AboutDetails() {
  return (
    <div className="text-4xl sm:text-5xl lg:text-6xl font-extrabold content-center overflow-hidden">
      <h1
        data-aos="fade-up"
        data-aos-duration="600"
        data-aos-delay="100"
        data-aos-easing="ease-in"
        className="text-[var(--coloredtext)] text-center lg:text-left"
      >
        Rahman
      </h1>
      <h2
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-delay="150"
        data-aos-easing="ease-in"
        className="text-center lg:text-left"
      >
        Husain
      </h2>

      <div
        data-aos="fade-left"
        data-aos-duration="500"
        data-aos-delay="600"
        data-aos-easing="ease-in"
        className="ml-2 sm:ml-10  grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 mt-8"
      >
        {/* Age */}
        <div className="flex gap-3 align-baseline text-base font-normal w-full sm:w-64 xl:w-72 h-10">
          <CalendarIcon className="w-5 h-5 shrink-0 text-[var(--coloredtext)]" />
          <p className="leading-4 flex gap-2">
            <span className="text-[#ffffffb3] block shrink-0">Age :</span>
            <span className="block">20 Years</span>
          </p>
        </div>
        {/* Age end*/}

        {/* Address */}
        <div className="flex gap-3 align-baseline text-base font-normal w-full sm:w-64 xl:w-72 h-10">
          <AddressIcon className="w-5 h-5 shrink-0 text-[var(--coloredtext)]" />
          <p className="leading-4 flex gap-2">
            <span className="text-[#ffffffb3] block shrink-0">Address :</span>
            <span className="block">Delhi, India</span>
          </p>
        </div>
        {/* Address end*/}

        {/* National*/}
        <div className="flex gap-3 align-baseline text-base font-normal w-full sm:w-64 xl:w-72 h-10">
          <IndianFlagIcon className="w-5 h-5 shrink-0" />
          <p className="leading-4 flex gap-2">
            <span className="text-[#ffffffb3] block shrink-0">
              Nationality :
            </span>
            <span className="block">Indian</span>
          </p>
        </div>
        {/* National end*/}

        {/* Phone */}
        <div className="flex gap-3 align-baseline text-base font-normal w-full sm:w-64 xl:w-72 h-10">
          <PhoneIcon className="w-5 h-5 shrink-0 text-[var(--coloredtext)]" />
          <p className="leading-5 flex gap-2">
            <span className="text-[#ffffffb3] block shrink-0">Phone :</span>
            <a
              href="https://wa.me/919205582846?text=Hello%2C%20I%20came%20across%20your%20portfolio%20and%20I%27m%20interested%20in%20discussing%20a%20potential%20project%20with%20you.%20Let%27s%20connect%20and%20explore%20how%20we%20can%20collaborate%21%20"
              target="_blank"
              rel="noreferrer"
              className="flex gap-2"
            >
              +91 9205582846 <WhatsAppIcon className="w-5 h-5 text-green-400" />
            </a>
          </p>
        </div>
        {/*phoen end*/}

        {/* freelance*/}
        <div className="flex gap-3 align-baseline text-base font-normal w-full sm:w-64 xl:w-72 h-10">
          <LaptopIcon className="w-5 h-5 shrink-0 text-[var(--coloredtext)]" />
          <p className="leading-4 flex gap-2">
            <span className="text-[#ffffffb3] block shrink-0">Freelance :</span>
            <span className="block">Available</span>
          </p>
        </div>
        {/* freelance end*/}

        {/* email*/}
        <div className="flex gap-3 align-baseline text-base font-normal w-full sm:w-64 xl:w-72 h-10">
          <EmailIcon className="w-5 h-5 shrink-0 text-[var(--coloredtext)]" />
          <p className="leading-4 flex gap-2">
            <span className="text-[#ffffffb3] block shrink-0">Email :</span>
            <span className="block  w-full sm:w-[8.5rem] xl:w-[12rem]">
              <a
                href="mailto:rahmanhusain899@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <span className="break-words">rahmanhusain899@gmail.com</span>
              </a>
            </span>
          </p>
        </div>
        {/* email end*/}

        {/* LinkedIn*/}
        <div className="flex gap-3 align-baseline text-base font-normal w-full sm:w-64 xl:w-72 h-10">
          <LinkedInIcon className="w-5 h-5 shrink-0 text-[var(--coloredtext)]" />
          <p className="leading-4 flex gap-2">
            <span className="text-[#ffffffb3] block shrink-0">LinkedIn :</span>
            <span className="block  w-full sm:w-[8.5rem]">
              <a
                href="https://www.linkedin.com/in/rahman-husain-45bb60237/"
                target="_blank"
                rel="noreferrer"
              >
                <span className="break-words">Rahman Husain</span>
              </a>
            </span>
          </p>
        </div>
        {/* Linked end*/}

        {/* Github*/}
        <div className="flex gap-3 align-baseline text-base font-normal w-full sm:w-64 xl:w-72 h-10">
          <Instagram className="w-5 h-5 shrink-0 text-[var(--coloredtext)]" />
          <p className="leading-4 flex gap-2">
            <span className="text-[#ffffffb3] block shrink-0">Instagram :</span>
            <span className="block  w-full sm:w-[8.5rem]">
              <a
                href="https://www.instagram.com/_rahmanhusain?utm_source=qr&igsh=MXVmNGN1cm42OHRpeQ=="
                target="_blank"
                rel="noreferrer"
              >
                <span className="break-words">@_rahmanhusain</span>
              </a>
            </span>
          </p>
        </div>
        {/* Github end*/}
      </div>
    </div>
  );
}

export default AboutDetails;
