"use client";
import { TypeAnimation } from "react-type-animation";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import { MovingStars } from "@/components/MovingStars";
import { useState } from "react";
import Link from 'next/link';



export const HeroSection = () => {
  const [textColor, setTextColor] = useState('bg-green-500');
  return (
    <div id="home" className="py-32 sm:py-26 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
     <div className="absolute inset-0 z-999 hero-mask">
      <div className="absolute inset-0 -z-30 opacity-5" style={{
        backgroundImage: `url(${grainImage.src})`
      }}></div>
      <div className="hero-mask bg-gray-800">
        <div className="size-[620px] hero-ring"></div>
        <div className="size-[820px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div>
      </div>
      
        <MovingStars size={430} rotation={-13} spin spinDuration="30s" orbit orbitDuration="4s">
          <SparkleIcon className="size-8 text-emerald-300/20" />
        </MovingStars>
        <MovingStars size={430} rotation={68} spin spinDuration="32s" orbit orbitDuration="4s">
          <SparkleIcon className="size-8 text-emerald-300/20" />
        </MovingStars>
        <MovingStars size={530} rotation={170} spin spinDuration="34s" orbit orbitDuration="4s">
          <SparkleIcon className="size-10 text-emerald-300/20" />
        </MovingStars>
        <MovingStars size={550} rotation={20} spin spinDuration="38s" orbit orbitDuration="5s">
          <StarIcon className="size-12 text-emerald-300" />
        </MovingStars>
        <MovingStars size={550} rotation={-160} spin spinDuration="48s" orbit orbitDuration="4s">
          <StarIcon className="size-28 text-emerald-300" />
        </MovingStars>
        <MovingStars size={590} rotation={98} spin spinDuration="40s" orbit orbitDuration="5s">
          <StarIcon className="size-8 text-emerald-300" />
        </MovingStars>
        <MovingStars size={610} rotation={-22} spin spinDuration="48s" orbit orbitDuration="8s">
          <StarIcon className="size-28 text-emerald-300" />
        </MovingStars>
        <MovingStars size={660} rotation={-52} spin spinDuration="48s" orbit orbitDuration="4s">
          <StarIcon className="size-28 text-emerald-300" />
        </MovingStars>
        <MovingStars size={710} rotation={130} spin spinDuration="42s" orbit orbitDuration="3s">
          <SparkleIcon className="size-14 text-emerald-300/20" />
        </MovingStars>
        <MovingStars size={800} rotation={-132} spin spinDuration="48s" orbit orbitDuration="6s">
          <StarIcon className="size-28 text-emerald-300" />
        </MovingStars>
      </div>
       <div className="container">
        <div className="flex flex-col items-center">
       <div className="md:text-sm">
        <TypeAnimation
          sequence={[
            'Titas Ramancauskas',
            1000,
            'Full Stack Developer',
            1000,
            '.NET, C#, TypeScript',
            1000,
          ]}
          speed={50}
          deletionSpeed={90}
          style={{
            height: '300px',
            width: '700px',
            fontSize: '2em',
            font: 'font-sans',
          }}
          repeat={Infinity}
        >
      </TypeAnimation>
       </div>
      
        <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
          <div className="bg-green-500/80 size-2.5 rounded-full relative">
            <div className="bg-green-500 size-2.5 rounded-full animate-ping-large"></div>
          </div>
          <div className="text-sm font-medium">Open To Work</div>
        </div>
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl text-center mt-8 md:text-5xl">Delivering & Developing Quality Solutions</h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            Well-engineered, strong systems and products are my area of expertise
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4 relative z-999 ">
          <Link href="#projects" passHref>
            <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl hover:bg-green-600 hover:border-green-500" >
              <span className="font-semibold ">Explore my Work</span>
              <ArrowDown className="size-4 animate-bounce"/>
            </button>
           </Link>
           <a href="mailto:titas.r@outlook.com">
            <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl hover:bg-green-500 hover:border-green-500">
              <span className="font-semibold ">Send Message</span>
              <span className="animate-pulse">ᯓ➤</span>
            </button>
           </a>
        </div>
      </div>
    </div>

    
   
  )
};

<style jsx>{`
  .hero-mask {
    mask-image: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.7), transparent);
    -webkit-mask-image: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.7), transparent);
    mask-size: cover;
    -webkit-mask-size: cover;
  }
`}</style>
