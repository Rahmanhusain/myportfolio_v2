"use client";
import React, { useEffect } from "react";
import SkillsComponent from "./SkillsComponent";
import Aos from "aos";
import "aos/dist/aos.css";

function ServicesSection() {
    useEffect(() => {
        Aos.init({
          duration: 800,
        });
        Aos.refresh();
      }, []);
    
     
      
      return (
        <section id="services" className="lg:px-24 md:px-20 sm:px-10 px-5 pt-10">
          <SkillsComponent />
        </section>
      );
}

export default ServicesSection