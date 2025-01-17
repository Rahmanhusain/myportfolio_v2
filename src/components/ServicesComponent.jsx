import React from "react";
import { AppDevelopmentIcon, BackEndIcon, ClockIcon, DesktopAppIcon, LogoDesignIcon, PlaceIcon, UIUXIcon, WebDevIcon } from "@/icons/icon";

function ServicesComponent() {
  const services = [
    {
      icon: <WebDevIcon className="w-14 h-14 text-[var(--coloredtext2)]" />,
      Name: "Web Development",
      desc: "Build fast, modern, and responsive websites to grow your business.",
    },
    {
      icon: <AppDevelopmentIcon className="w-14 h-14 text-[var(--coloredtext2)]"  />,
      Name: "App Development",
      desc: "Expand your reach with sleek and user-friendly mobile apps.",
    },
    {
      icon: <BackEndIcon className="w-14 h-14 text-[var(--coloredtext2)]" />,
      Name: "Backend Development",
      desc: "Scale your operations with secure and reliable RESTful APIs.",
    },
    {
      icon: <DesktopAppIcon className="w-14 h-14 text-[var(--coloredtext2)]" />,
      Name: "Desktop App Development",
      desc: "Boost productivity with responsive and efficient desktop applications.",
    },
    {
      icon: <UIUXIcon className="w-10 h-10 m-1 text-[var(--coloredtext2)]" />,
      Name: "UI/UX Design",
      desc: "Enhance user satisfaction with intuitive and visually appealing designs.",
    },
    {
      icon: <LogoDesignIcon className="w-14 h-14 text-[var(--coloredtext2)]" />,
      Name: "Logo Design",
      desc: "Strengthen your brand identity with unique and memorable logos.",
    },
  ];

  return (
    <section id="services" className="mx-auto pt-14 overflow-hidden">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold content text-center">
        Services
      </h1>
      <p className="text-center mt-4 text-gray-400">Here are some of the services I provide with 2 years of experience in Programming and Development</p>
      <div className="mx-auto gap-5 flex flex-wrap justify-center py-5 w-full mt-6 sm:mt-12">
        {services.map((s, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay={`${index * 100}`}
            data-aos-easing="ease-in"
            className="backdrop-filter backdrop-blur-lg bg-[#add8e620] p-6 rounded-lg w-[25rem] h-"
          >
            <div className="flex h-fit flex-col justify-between gap-3 rounded-md">
              {s.icon}
              <div className="space-y-1">
                <h3 className="font-bold text-[var(--coloredtext)]">{s.Name}</h3>
                <p className="text-sm text-muted-foreground text-gray-300">
                 {s.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ServicesComponent;
