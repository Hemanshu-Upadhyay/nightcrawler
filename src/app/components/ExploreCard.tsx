"use client";

import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { useMediaQuery } from "react-responsive";

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

  return (
    <motion.div
      variants={fadeIn({
        direction: "right",
        type: "spring",
        delay: index * 0.3, // Reduced from 0.5
      })}
      initial={{ flex: 1 }}
      animate={{
        flex: active === id ? 4 : 1, // Reduced from 6 for smoother transitions
      }}
      transition={{
        type: "spring",
        stiffness: isMobile ? 120 : 150, // Reduced values
        damping: 25,
        duration: isMobile ? 0.4 : 0.5, // Faster transitions
      }}
      className="relative flex items-center justify-center min-w-[170px] h-[500px] cursor-pointer"
      onClick={() => handleClick(id)}
    >
      <img
        src={imgUrl}
        alt={title}
        className="absolute w-full h-full object-cover rounded-[24px]"
      />
      {active !== id ? (
        <h3 className="font-semibold sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]">
          {title}
        </h3>
      ) : (
        <div className="absolute bottom-0 p-8 flex justify-start w-full flex-col bg-gradient-to-t from-black/60 rounded-b-[24px]">
          <p className="font-mono text-[16px] leading-[20px] text-white uppercase">
            {description}
          </p>
          <h2 className="mt-6 font-semibold sm:text-[32px] text-[24px] text-white">
            {title}
          </h2>
        </div>
      )}
    </motion.div>
  );
};

export default ExploreCard;
