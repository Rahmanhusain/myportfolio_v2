import { ClockIcon, PlaceIcon } from "@/icons/icon";
import React from "react";

function MyResumeComponent() {
  const educationData = [
    {
      title: "B.tech in Computer Science",
      timing: "2023 - 2026",
      place: "GTB4CEC, GGSIPU, Delhi",
    },
    {
      title: "Diploma in Computer Science",
      timing: "2020 - 2023",
      place: "GNDIT, BTE, Delhi",
    },
    {
      title: "Internship in Web Development",
      timing: "2023",
      place: "PHN Technology Pvt Ltd, Pune",
    },
    {
      title: "Student Coordinator - Avinya",
      timing: "2024",
      place: "GTB4CEC, GGSIPU, Delhi",
    },
    {
      title: "10th Standard",
      timing: "2019 - 2020",
      place: "CBSE, Delhi",
    },
  ];

  return (
    <div id="resume" className="mx-auto my-14 overflow-hidden">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold content text-center">
        My Resume
      </h1>
      <div className="mx-auto gap-5 flex flex-wrap justify-center py-5 w-full mt-12">
        {educationData.map((edu, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay={`${index * 100}`}
            data-aos-easing="ease-in"
            className="backdrop-filter backdrop-blur-lg bg-[#add8e620] p-6 rounded-lg w-[25rem] h-"
          >
            <h3 className="text-lg font-semibold text-[var(--coloredtext)]">
              {edu.title}
            </h3>
            <p className="text-gray-300 mt-2 flex  items-center gap-2"><ClockIcon className="w-5 h-5"/> {edu.timing}</p>
            <p className="text-gray-300 italic flex  gap-2"><PlaceIcon className="w-5 h-5" /> {edu.place}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyResumeComponent;
