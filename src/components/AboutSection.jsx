"use client";
import React, { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

import AboutDetails from "./AboutDetails";

function AboutSection() {
  useEffect(() => {
    Aos.init({
      duration: 800, // Animation duration
    });
    Aos.refresh();
  }, []);

  const [aosAnimation, setAosAnimation] = useState("fade-right");

  // Function to update the animation based on screen width
  const updateAnimation = () => {
    if (window.innerWidth <= 768) { // Mobile breakpoint
      setAosAnimation("fade-up");
    } else {
      setAosAnimation("fade-right");
    }
  };

  // useEffect to handle window resize and initial load
  useEffect(() => {
    // Initial check
    updateAnimation();

    // Add event listener for window resize
    window.addEventListener("resize", updateAnimation);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateAnimation);
    };
  }, []);

  return (
    <section
      id="about"
      className=" min-h-screen overflow-hidden w-full px-4 py-14 sm:px-6 md:px-8 lg:px-10 content-center"
    >
      <div className="mx-auto  w-fit flex flex-col sm:flex-row flex-wrap justify-center gap-10 overflow-hidden">
        <div
          id="animated-element"
          data-aos={aosAnimation}
          data-aos-duration="500"
          data-aos-delay="150"
          data-aos-easing="ease-in"
          className="backdrop-filter backdrop-blur-lg mx-3 rounded-3xl bg-[#add8e620]"
        >
          <Image
            src="/images/hero3.png"
            alt="hero"
            width={350}
            height={200}
            className="object-cover max-w-full rounded-3xl"
          />
        </div>

        <AboutDetails />
      </div>
    </section>
  );
}

export default AboutSection;
