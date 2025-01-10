"use client";
import React, { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Typewriter } from "react-simple-typewriter";
import MultiLanguageText from "./MultiLanguageText";

function HomeSection() {
  const [showbg, setshowbg] = useState(true);
  useEffect(() => {
    Aos.init({
      duration: 800, // Animation duration
    });
    Aos.refresh();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("home");
      const sectionBottom = section.getBoundingClientRect().bottom;
      const windowHeight = window.innerHeight;

      // Check if the section's bottom is within 100px of the window's bottom
      if (sectionBottom <= windowHeight - 100) {
        setshowbg(false);
      } else {
        setshowbg(true);
      }
    };

    // Add the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  const [showTypewriter, setShowTypewriter] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTypewriter(true);
      console.log("hitted");
    }, 2700); // 1-second delay

    return () => clearTimeout(timer); // Cleanup
  }, []);

  return (
    <section
      id="home"
      className={`h-screen relative w-full ${
        showbg ? "bg-[#000000]" : "bg-transparent"
      } flex items-center justify-center lg:px-24 md:px-20 sm:px-10 px-5 transition-colors duration-700 ease-in overflow-hidden`}
    >
      <div className={`shape-container absolute inset-0 overflow-hidden transition-opacity duration-700 ease-in ${showbg ? "opacity-100" : "opacity-0"}`}>
        <div className="shape z-[1] absolute -left-32 -top-32  opacity-[0.17] lg:w-[33rem] lg:h-[35rem] md:w-[29rem] md:h-[29rem] sm:w-[26rem] sm:h-[26rem] w-[26rem] h-[26rem] " />
        <div className="shape z-[1] absolute -right-32 -bottom-32 opacity-[0.17] lg:w-[33rem] lg:h-[35rem] md:w-[29rem] md:h-[29rem] sm:w-[26rem] sm:h-[26rem] w-[26rem] h-[26rem]" />
      </div>

      <div className="relative text-center lg:text-left flex flex-col lg:flex-row items-center z-10">
        <h1
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-anchor-placement="top-center"
          data-aos-delay="300"
          data-aos-easing="ease-in-out"
          className=" lg:w-fit gap-1 items-center text-4xl sm:text-6xl lg:text-8xl font-extrabold select-none tracking-widest lg:tracking-[1.4rem] [text-shadow:_8px_10px_0px_rgba(131,131,131,0.27)]"
        >
          <MultiLanguageText />
          <div className="baloo-2-font justify-center lg:justify-start flex pt-2 pb-1 lg:py-6 ">
            I am{" "}
            <span
              data-aos="zoom-in-left"
              data-aos-delay="1000"
              className="hidden lg:block text-sm tracking-tighter ml-10 font-light w-96 [text-shadow:none] chivo-mono-font leading-4 text-[#ffffffa4] "
            >
              {/*             Hi, I'm Rahman Husain, a driven Delhi-based computer science undergraduate passionate about decoding technology and taking on new challenges.
               */}{" "}
              <Typewriter
                words={[
                  "Hi, I’m Rahman Husain, a passionate computer science undergraduate student from Delhi. I love decoding technology and taking on new challenges with enthusiasm.",
                ]}
                loop={5}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={10}
                delaySpeed={1000}
              />
            </span>
          </div>
          <span className="text-[var(--coloredtext)] block">Rahman</span>
          <span className="text-[var(--coloredtext)] block">Husain</span>
        </h1>
        <p
          data-aos="fade-up"
          data-aos-delay="1000"
          className="chivo-mono-font  text-[#ffffffa4] lg:hidden px-2 sm:px-0 text-sm sm:text-lg mt-6 sm:mt-8 max-w-[53rem] lg:max-w-[20rem] "
        >
          <Typewriter
            words={[
              "Hi, I’m Rahman Husain, a passionate computer science undergraduate student from Delhi. I love decoding technology and taking on new challenges with enthusiasm.",
            ]}
            loop={5}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={10}
            delaySpeed={5000}
          />
        </p>
        <p
          data-aos="zoom-in-up"
          data-aos-delay="1500"
          className="mt-6 inline lg:hidden w-full text-[#ffffff7c] text-sm sm:text-lg"
        >
          <span className="font-bold text-2xl select-none">
            {"< "}
            {showTypewriter ? (
              <Typewriter
                words={[
                  "Programmer",
                  "UI/UX Design",
                  "Web Development",
                  "App Development",
                  "Backend Development",
                  "SEO",
                  "Photography",
                ]}
                loop={false} // Use `false` instead of "false" (boolean, not string)
                cursor
                cursorStyle=""
                typeSpeed={70}
                deleteSpeed={10}
                delaySpeed={800}
              />
            ) : (
              "Programmer"
            )}
            {" />"}
          </span>
        </p>
      </div>

      <p className="absolute right-6 top-1/2 transform -translate-y-1/2 text-transparent custom-text-stroke">
        <span className="writing-mode-vertical-rl rotate-180 font-bold text-5xl hidden lg:block select-none">
          <Typewriter
            words={[
              "Programmer",
              "UI/UX Design",
              "Web Development",
              "App Development",
              "Backend Development",
              "SEO",
              "Photography",
            ]}
            loop={false} // Use `false` instead of "false" (boolean, not string)
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={10}
            delaySpeed={800}
          />
        </span>
      </p>
     
    </section>
  );
}

export default HomeSection;
