import RediAI from "@/assets/images/RediAI.png";
import BudiAI from "@/assets/images/BudiAi.png";
import EnglishReady from "@/assets/images/EnglishReady.png";
import Image from "next/image";
import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';
import grainImage from "@/assets/images/grain.jpg";

const portfolioProjects = [
  {
    company: "RediAI",
    year: "2024-Present",
    title: "RediAI: English Learning Agent",
    results: [
      { title: "40% reduction in response times through efficient data retrieval" },
      { title: "100+ users gained through Reddit demostrations" },
      { title: "WebAPI Architecture C#/.NET, JavaScript front-end" },
    ],
    link: "https://github.com/pyjpg",
    image: RediAI,
  },
  {
    company: "Budi",
    year: "2024-Present",
    title: "Budi: AI Personal Shopper",
    results: [
      { title: "Launched Flutter landing, generating interest from 9,000+ followers" },
      { title: "97% exact matchs and 85% similar alternatives for outfit generator" },
    ],
    link: "https://getbudi.app/",
    image: BudiAI,
  },
  {
    company: "English Ready V1.0",
    year: "2023-2024",
    title: "English Ready V1.0: English Dictation",
    results: [
      { title: "95% accurary of word matching through dictation" },
      { title: "Restful Web API developed enabling speech analysis" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://github.com/pyjpg",
    image: EnglishReady,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24">
      <div id="projects" className="container">
        <div className="flex justify-center">
          <p className="uppecase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-center bg-clip-text text-transparent text-2xl">My Portofolio</p>
        </div>
        <h2 className="font-serif text-6xl text-center mt-6">Projects</h2>
        <p className="text-center md:text-lg lg:text-2xl text-white/70 mt-4 max-w-md mx-auto">See my process from concept to code to final product 😊</p>
        <div className="flex flex-col md:mt-20 mt-10 gap-20">
          {portfolioProjects.map((project, index) => (
            <div key={project.title} className="bg-gray-800 rounded-3xl z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 px-8 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20 after:pointer-events-none sticky"
            style={{
              top: `calc(64px + ${index * 40}px)`
            }}>
              
              <div className="absolute inset-0 -z-10 opacity-5" style={{ backgroundImage: `url(${grainImage.src})`,}}></div>
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
              <div className="lg:pb-16">
              <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                <span>{project.company}</span>
                <span>&bull;</span>
                <span>{project.year}</span>
              </div>
           
              <h3 className="font-serif text-2xl mt-2 md:text-4xl md:mt-5">{project.title}</h3>
              <hr className="border-t-2 border-white/5 mt-4"/>
              <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                {project.results.map((result, index) => (
                  <li key={index} className="flex gap-2 text-sm md:text-base text-white/90">
                    <span>✅{result.title}</span>
                  </li>
                ))}
              </ul>
              <a href={project.link}>
                <button className="bg-white text-gray-950 h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 md:w-auto px-6 hover:bg-green-500 hover:border-green-500">
                  <span>View Github/Site</span>
                  <ArrowUpRightIcon className="size-4"/>
                  </button>
              </a>
              </div>
              <div className="relative flex justify-center">
              <Image src={project.image} alt={project.title} className="mt-8 -mb-12 md:-mb-16 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:ml-7 lg:max-w-none transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/50 hover:border-4 hover:border-emerald-500 rounded-3xl"
              />
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
