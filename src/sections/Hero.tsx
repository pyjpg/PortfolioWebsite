"use client";
import { TypeAnimation } from "react-type-animation";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import { MovingStars } from "@/components/MovingStars";
import { useState } from "react";



export const HeroSection = () => {
  const [textColor, setTextColor] = useState('bg-green-500');
  return (
    <div className="py-32 sm:py-26 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom, transparent, black_10%, black_70%,transparent)]">
      <div className="absolute inset-0 -z-30 opacity-5" style={{
        backgroundImage: `url(${grainImage.src})`
      }}></div>
      <div className="size-[620px] hero-ring"></div>
      <div className="size-[820px] hero-ring"></div>
      <div className="size-[1020px] hero-ring"></div>
      <div className="size-[1220px] hero-ring"></div>
      
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
        <MovingStars size={590} rotation={98} spin spinDuration="40s" orbit orbitDuration="5s">
          <StarIcon className="size-8 text-emerald-300" />
        </MovingStars>
        <MovingStars size={710} rotation={130} spin spinDuration="42s" orbit orbitDuration="6s">
          <SparkleIcon className="size-14 text-emerald-300/20" />
        </MovingStars>
        <MovingStars size={800} rotation={-72} spin spinDuration="48s" orbit orbitDuration="6s">
          <StarIcon className="size-28 text-emerald-300" />
        </MovingStars>
      </div>
       <div className="container">
        <div className="flex flex-col items-center">
       
      <TypeAnimation 
        sequence={[
          'Titas Ramancauskas',
          1000,
          'Full Stack Developer',
          1000,
          '.NET, C#, JavaScript/TypeScript Developer',
          1000,
        ]}
        speed={50}
        deletionSpeed={90}
        style={{ fontSize: '3em', font: "font-sans" }}
        repeat={Infinity}>
        
      </TypeAnimation>
        <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
          <div className="bg-green-500/80 size-2.5 rounded-full relative">
            <div className="bg-green-500 size-2.5 rounded-full animate-ping-large"></div>
          </div>
          <div className="text-sm font-medium">Open To Work</div>
        </div>
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl text-center mt-8 md:text-5xl">Building Exceptional User Experience</h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            I specialise in transforming designs into functional, high-performing web applications. Let&apos; discuss your next project.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
           <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
            <span className="font-semibold ">Explore my Work</span>
            <ArrowDown className="size-4 animate-bounce"/>
           </button>
           <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl">
            <span className="font-semibold ">Send Message</span>
            <span className="animate-pulse">ᯓ➤</span>
           </button>
        </div>
      </div>
    </div>
   
  )
};
