import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

export const MovingStars = ({ 
    children, size, rotation, orbit = false, spin = false, orbitDuration, spinDuration, 
}: PropsWithChildren<{ 
    size: number, rotation: number, spinDuration?: string; spin?: boolean; orbit?: boolean; orbitDuration?: string; 
}>) => {
    return (
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-20  ">
          <div className={twMerge(spin ? "animate-spin" : "")} style={{
            animationDuration: spinDuration,
            }}>
            <div className="flex items-start justify-start" style={{
                transform: `rotate(${rotation}deg)`,
                height: `${size}px`,
                width: `${size}px`
            }}>
              <div className={twMerge(orbit === true && "animate-spin")} style={{
                animationDuration: orbitDuration,
              }}>  
                <div className="inline-flex" style={{
                transform: `rotate(${rotation * -1}deg)`,
                }}>
                    {children}
                </div> 
             </div>
            </div>
            </div>
        </div>
    )
}