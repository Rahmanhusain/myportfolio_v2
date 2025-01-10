import React from 'react'
import { AppDevelopmentIcon, CorelDrawIcon, CPlusPlusIcon, ExpressJsIcon, FigmaIcon, JavaIcon, JavascriptIcon, MongoDBIcon, NextJsIcon, NodeJsIcon, ReactJsIcon, ReduxIcon, SQLIcon, TailwindIcon } from '@/icons/icon';
function SkillsComponent() {

    const skillsData = [
        { name: "Java", component: <JavaIcon className='w-11 h-11 shrink-0 mx-auto' /> },
        { name: "JavaScript", component: <JavascriptIcon className='w-8 h-8 shrink-0 mx-auto' /> },
        { name: "SQL", component: <SQLIcon className='w-9 h-9 shrink-0 mx-auto text-[#f0972a]' /> },
        { name: "App Dev", component: <AppDevelopmentIcon className='w-9 h-9 shrink-0 mx-auto text-[#5d55ee]' /> },
        { name: "Node.js", component: <NodeJsIcon className='w-9 h-9 shrink-0 mx-auto' /> },
        { name: "Next.js", component: <NextJsIcon className='w-10 h-10 shrink-0 mx-auto text-[#e9e9e9]' /> },
        { name: "Tailwind CSS", component: <TailwindIcon className='w-9 h-9 shrink-0 mx-auto' /> },
        { name: "MongoDB", component: <MongoDBIcon className='w-9 h-9 shrink-0 mx-auto' /> },
        { name: "React.js", component: <ReactJsIcon className='w-9 h-9 shrink-0 mx-auto' /> },
        { name: "Redux Toolkit", component: <ReduxIcon className='w-9 h-9 shrink-0 mx-auto' /> },
        { name: "Express.js", component: <ExpressJsIcon className='w-9 h-9 shrink-0 mx-auto' /> },
        { name: "C++", component: <CPlusPlusIcon className='w-8 h-8 shrink-0 mx-auto text-[#5353ee]' /> },
        { name: "Figma", component: <FigmaIcon className='w-9 h-9 shrink-0 mx-auto' /> },
        { name: "CorelDraw", component: <CorelDrawIcon className='w-9 h-9 shrink-0 mx-auto text-[#247a1e]' /> },
      ];
    
  return (
    <div id='skill' className='mx-auto mb-14 '>
        <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold content text-center mb-12'>
            My Skills
        </h1>
        <div className="flex flex-wrap justify-center gap-4 px-2 sm:p-8 overflow-hidden">
        {skillsData.map((skill, index) => (
          <div
            key={index}
            data-aos="zoom-out"
            data-aos-duration="600"
            data-aos-delay={`${100}`}
            data-aos-easing="ease-in"
            className="flex flex-col items-center justify-center p-2  w-[8.375rem] aspect-square rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="backdrop-filter backdrop-blur-lg bg-[#add8e620] w-[5.75rem] aspect-square content-center rounded-full">{skill.component}</div>
            <h3 className="text-base font-semibold text-center mt-2">{skill.name}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SkillsComponent