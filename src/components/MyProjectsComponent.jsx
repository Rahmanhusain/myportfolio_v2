import React from "react";
import { GitHubIcon, LinkIcon } from "@/icons/icon";
import Image from "next/image";

function MyProjectsComponent() {
  const Projects = [
    {
      title: "A Fashion Product Platform",
      description:
        "A Fashion Product Ecommerce Application will be available in both Mobile and Web Platforms. .",
      imgURL: "/images/1.jpg",
      githublink: "",
      livelink: "",
      indevDesc:
        "The Application is under Workflow & MVC Architecture planning and UI/UX Designing phase.",
      statmessege: "Under Planning",
    },
    {
      title: "GTB4Love- A dating app of GTB4CEC",
      description:
        "Developed a dating app for GTB4CEC for fun and learning purposes.",
      imgURL: "/images/2.1.jpeg",
      githublink: "",
      livelink: "https://gtb4love.vercel.app/",
      indevDesc: "",
      statmessege: "",
    },
    {
      title: "Sai Handlooms & Furnishers- A Business Website",
      description:
        "Developed a professional website for Sai Handlooms & Furnishers, a leading home furnishing brand in Gurugram celebrating 22 years of excellence.",
      imgURL: "/images/2.2.png",
      githublink: "",
      livelink: "https://saihandloomsandfurnishers.in/",
      indevDesc: "",
      statmessege: "",
    },
    {
      title: "A Chrome Extension",
      description:
        "A Chrome Extension to make the chrome appearance more attractive and track screen time.",
      imgURL: "/images/2.webp",
      githublink: "",
      livelink: "https://revibeweb.vercel.app/",
      indevDesc: "",
      statmessege: "",
    },
    {
      title: "Compresso.io- An image Compressor",
      description:
        "Developed a website for an event named Avinya organised by GTB4CEC.",
      imgURL: "/images/4.png",
      githublink: "",
      livelink: "https://compressoio.vercel.app//",
      indevDesc: "",
      statmessege: "",
    },
    {
      title: "Avinya- An Event Website",
      description:
        "Developed a website for an event named Avinaya organised by GTB4CEC.",
      imgURL: "/images/5.png",
      githublink: "",
      livelink: "https://avinyaatgtb4cec.vercel.app/",
      indevDesc: "",
      statmessege: "",
    },
    {
      title: "Student Management Desktop Application ",
      description:
        "Developed with Java and MySQL, featuring an admin login interface with password recovery by Mail.",
      imgURL: "/images/6.png",
      githublink:
        "https://github.com/Rahmanhusain/Student-Management-Desktop-Application",
      livelink:
        "https://github.com/Rahmanhusain/Student-Management-Desktop-Application/releases/tag/Stable",
      indevDesc: "",
      statmessege: "",
    },

    {
      title: "An Online Music Player",
      description: "An Online Music Player to Stream music online",
      imgURL: "/images/7.png",
      githublink: "https://github.com/Rahmanhusain/Online-music-App",
      livelink: "",
      indevDesc: "",
      statmessege: "",
    },
    {
      title: "My First App-Calculator",
      description: "A simple calculator app made java SDK and Android Studio",
      imgURL: "/images/8.jpg",
      githublink: "https://github.com/Rahmanhusain/Online-music-App",
      livelink:
        "https://github.com/Rahmanhusain/Calculator-Mobile-App/releases/tag/stable",
      indevDesc: "",
      statmessege: "",
    },
  ];

  return (
    <div id="projects" className="mx-auto my-14 overflow-hidden ">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold content text-center">
        My Projects
      </h1>
      <div className="mx-auto gap-8 flex flex-wrap justify-center w-full mt-14">
        {Projects.map((project, index) => (
          <div
            key={index}
            data-aos="zoom-in"
            data-aos-duration="600"
            data-aos-delay={100}
            data-aos-easing="ease-in"
            className="backdrop-filter backdrop-blur-lg bg-[#add8e620] p-3.5 rounded-xl w-[20rem] sm:w-[22rem] md:w-[20rem] lg:w-[24rem]"
          >
            <div className="w-full relative">
              <Image
                src={project.imgURL}
                alt="hero"
                width={350}
                height={200}
                loading="lazy"
                className="rounded-lg w-full h-48 lg:h-56 object-fill"
              />
              {project.indevDesc !== "" && (
                <div
                  className={`absolute inset-0 flex items-center justify-center ${
                    index === 1
                      ? "backdrop-filter backdrop-blur-sm bg-[#00000052]"
                      : "backdrop-filter backdrop-blur-lg bg-[#00000052]"
                  } rounded-lg`}
                >
                  <p className="text-xs md:text-sm text-center px-6 text-[#828181]">
                    {project.indevDesc}
                  </p>
                </div>
              )}
            </div>

            <div className="flex mt-4 px-1 gap-2">
              <div className="flex-1">
                <h3 className="font-semibold text-[var(--coloredtext)]">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm flex mt-0.5  items-center">
                  {project.description}
                </p>
              </div>

              <div className="flex gap-3 flex-shrink-0">
                {project.githublink !== "" && (
                  <a
                    href={project.githublink}
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-300 italic flex  gap-2"
                  >
                    <GitHubIcon className="w-6 h-6" />
                  </a>
                )}
                {project.livelink !== "" && (
                  <a
                    href={project.livelink}
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-300 italic flex  gap-2"
                  >
                    <LinkIcon className="w-6 h-6" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyProjectsComponent;
