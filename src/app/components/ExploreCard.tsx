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

  return (
    <AnimatedElement
      variants={fadeIn({
        direction: "right",
        type: "spring",
        delay: index * 0.15,
      })}
      className={`relative flex items-center justify-center min-w-[170px] h-[500px] transition-[flex] cursor-pointer overflow-hidden rounded-[24px]`}
      onClick={() => handleClick(id)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        flex: active === id ? 4 : 1,
        transition: `flex ${isMobile ? 0.3 : 0.4}s ${
          isHovered
            ? "cubic-bezier(0.34, 1.56, 0.64, 1)"
            : "cubic-bezier(0.25, 0.1, 0.25, 1)"
        }`,
      }}
    >
      <img
        src={imgUrl}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Content wrapper with proper positioning */}
      <div className="absolute inset-0 flex items-end justify-start p-8">
        {active !== id ? (
          <div className="relative w-full h-full">
            <h3 className="absolute bottom-0 left-0 font-semibold sm:text-[26px] text-[18px] text-white lg:bottom-[20%] lg:rotate-[-90deg] lg:origin-[0,0] whitespace-nowrap">
              {title}
            </h3>
          </div>
        ) : (
          <AnimatedElement
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
            }}
            className="w-full"
          >
            <div className="w-full bg-gradient-to-t from-black/60 via-black/40 to-transparent rounded-b-[24px] p-8 -m-8">
              <p className="font-mono text-[16px] leading-[20px] text-white uppercase">
                {description}
              </p>
              <h2 className="mt-6 font-semibold sm:text-[32px] text-[24px] text-white">
                {title}
              </h2>
            </div>
          </AnimatedElement>
        )}
      </div>
    </AnimatedElement>
  );
};

export default ExploreCard;
