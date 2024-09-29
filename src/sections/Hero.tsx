import memojiImage from "@/assets/images/memoji-computer.png"
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import { MovingStars } from "@/components/MovingStars";


export const HeroSection = () => {
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
      
        <MovingStars size={800} rotation={-72}>
          <StarIcon className="size-28 text-emerald-300" />
        </MovingStars>
        <MovingStars size={550} rotation={20}>
          <StarIcon className="size-12 text-emerald-300" />
        </MovingStars>
        <MovingStars size={590} rotation={98}>
          <StarIcon className="size-8 text-emerald-300" />
        </MovingStars>
        <MovingStars size={430} rotation={-13}>
          <SparkleIcon className="size-8 text-emerald-300/20" />
        </MovingStars>
        <MovingStars size={430} rotation={68}>
          <SparkleIcon className="size-8 text-emerald-300/20" />
        </MovingStars>
        <MovingStars size={530} rotation={170}>
          <SparkleIcon className="size-10 text-emerald-300/20" />
        </MovingStars>
        <MovingStars size={710} rotation={130}>
          <SparkleIcon className="size-14 text-emerald-300/20" />
        </MovingStars>
      </div>
       <div className="container">
        <div className="flex flex-col items-center">
        <Image
          src={memojiImage}
          className="size-[100px]"
          alt="meme" 
        />
        <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
          <div className="bg-green-500 size-2.5 rounded-full"></div>
          <div className="text-sm font-medium">Available for new projects</div>
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
            <span className="font-semibold">Explore my Work</span>
            <ArrowDown className="size-4"/>
           </button>
           <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl">
            <span>✅</span>
            <span className="font-semibold">Let&apos;s Connect</span>
           </button>
        </div>
      </div>
    </div>
   
  )
};
