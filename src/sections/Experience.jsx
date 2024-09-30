"use client";
import { React } from "react";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import Image from "next/image";
import { motion } from 'framer-motion';
import Synlogo from "@/assets/images/SynSolLogo.png";
import Uplogo from "@/assets/images/UpworkLogo.png";
import CGIlogo from "@/assets/images/cgi.jpg";
import 'react-vertical-timeline-component/style.min.css';
import grainImage from "@/assets/images/grain.jpg";


// Updated experiences array
const experiences = [
  {
    title: "Software Engineer",
    company_name: "Synectics Solutions Ltd",
    icon: Synlogo,
    iconBg: "#FFF",
    date: "March 2023 - August 2024",
    points: [
      "Secured over £11 million in funding by demonstrating proof-of-concept strategies for detecting fraudulent documents and images, directly influencing the development of the final product",
      "Played a key role in the final delivery process, resolving 150+ security vulnerabilities (including 13+ critical), and ensured production readiness using Docker and TeamCity in a 12-member deployment team",
      "Collaborated closely with stakeholders and external teams to refine business requirements,reducing ambiguity and ensuring alignment within an 8-member Agile team",
    ],
  },
  {
    title: "Web Development Consultant",
    company_name: "Self-Employed",
    icon: Uplogo,
    iconBg: "#FFF",
    date: "September 2021 - March 2023",
    points: [
      "Promoted recommended Google SEO tactics and put into practice, increasing SEO search results by 15%",
      "Refined client's existing websites to reach modern standards, increasing customer retention by a minimum of 20%",
      "Cultivated ties with 100s of clients through collaboration that guarantees flawless delivery and communication",
    ],
  },
  {
    title: "Business Consultant",
    company_name: "CGI Inc",
    icon: CGIlogo,
    iconBg: "#FFF",
    date: "June 2020 - July 2020",
    points: [
      "Executed strategic development of database migrations protocols and practising security breach simulations, this increased workplace data security by 5%",
      "Orchestrated a group presentation of ideas to the leadership team that was developed and personalised to the needs of different members, increasing the number of corporate participants in team activities by more than 150",
      "Tested networking and security systems, able to discover 2 faults, and informed management of the findings",
    ],
  },
];

const ExperienceCard = ({ experience }) => {
  return (
    
    <VerticalTimelineElement
      visible={true}
      contentStyle={{
        background:'#2F4F4F',
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #2F4F4F" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <Image
            src={experience.icon}
            alt={experience.company_name}
            className='w-[80%] h-[80%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

export const Experience = () => {
  console.log("Experience component rendered");
  console.log("Experiences:", experiences);

  return (
    <>
    <div className="absolute inset-0 -z-10 opacity-5" style={{ backgroundImage: `url(${grainImage.src})`,}}></div>
    <div className="container">
        <div className="flex justify-center">
          <p className="uppecase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-center bg-clip-text text-transparent">Work History</p>
        </div>
        <h2 className="font-serif text-4xl text-center mt-6">Previous Employment</h2>
    </div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={index} // Use index instead of experience directly
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};
