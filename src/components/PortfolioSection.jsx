"use client";
import React, { useEffect } from "react";
import SkillsComponent from "./SkillsComponent";
import Aos from "aos";
import "aos/dist/aos.css";
import MyResumeComponent from "./MyResumeComponent";
import MyProjectsComponent from "./MyProjectsComponent";

function PortfolioSection() {
  useEffect(() => {
    Aos.init({
      duration: 800,
    });
    Aos.refresh();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
  
      const trigger = document.getElementById("skill");
      const wrapper = document.getElementById("wrapper");

      if (trigger && wrapper) {


        const triggerRect = trigger.getBoundingClientRect();

   
        if (triggerRect.bottom <= 0) {
    
          wrapper.style.background =
            "center / cover no-repeat url('/images/bgimg2.jpg')";
        } else {
          wrapper.style.background =
            "center / cover no-repeat url('/images/bgimg1.jpg')";
        }
      } else {
        console.log("One or both elements do not exist");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //hover effect pointer
  

  return (
    <section id="portfolio" className="lg:px-24 md:px-20 sm:px-10 px-5 pt-10">
      <SkillsComponent />
      <MyResumeComponent />
      <MyProjectsComponent />
    </section>
  );
}

export default PortfolioSection;