"use client";

import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { AnimatedElement } from "./AnimatedElement";
import { fadeIn } from "../utils/motion";

interface ExploreCardProps {
  id: string;
  imgUrl: string;
  title: string;
  index: number;
  active: string;
  handleClick: (id: string) => void;
  description: string;
}

const ExploreCard = ({
  id,
  imgUrl,
  title,
  index,
  active,
  handleClick,
  description,
}: ExploreCardProps) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [isHovered, setIsHovered] = useState(false);

  const isActive = active === id;

  return (
    <AnimatedElement
      variants={fadeIn({
        direction: "right",
        type: "spring",
        delay: index * 0.15,
      })}
      className={`
        relative 
        flex 
        min-w-[170px] 
        h-[400px] 
        sm:h-[500px] 
        transition-all 
        duration-500 
        ease-out-flex 
        cursor-pointer 
        overflow-hidden 
        pt-10
        ${isActive ? "flex-[10] lg:flex-[3.5]" : "flex-[2] lg:flex-[0.5]"}
      `}
      onClick={() => handleClick(id)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image with gradient overlay */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={imgUrl}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className={`
            absolute 
            inset-0 
            ${
              isActive
                ? "bg-gradient-to-b from-transparent via-black/40 to-black/70"
                : "bg-black/20"
            }
          `}
        />
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
        {!isActive ? (
          <div className="relative w-full">
            {/* Non-active state title */}
            <h3
              className={`
                font-semibold 
                text-white 
                ${
                  isMobile
                    ? "text-[18px] sm:text-[26px]"
                    : `
 
                    bottom-0 
                    mb-4
                    text-[26px] 
                    lg:rotate-[-90deg] 
                    lg:origin-[0,0] 
                    whitespace-nowrap
                  `
                }
              `}
            >
              {title}
            </h3>
          </div>
        ) : (
          <AnimatedElement
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.3,
                  ease: "easeOut",
                },
              },
            }}
            className="w-full"
          >
            {/* Active state content */}
            <div className="flex flex-col gap-4">
              <div>
                <p className="font-normal text-[14px] sm:text-[16px] leading-[20px] text-white uppercase">
                  {description}
                </p>
                <h2 className="mt-2 sm:mt-4 font-semibold text-[20px] sm:text-[24px] md:text-[32px] text-white">
                  {title}
                </h2>
              </div>
            </div>
          </AnimatedElement>
        )}
      </div>
    </AnimatedElement>
  );
};

export default ExploreCard;
