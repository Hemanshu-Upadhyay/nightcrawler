"use client";

import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { useMediaQuery } from "react-responsive"; // To detect mobile devices

interface ExploreCardProps {
  id: string;
  imgUrl: string;
  title: string;
  index: number;
  active: string;
  handleClick: (id: string) => void;
  description: string;
}

const ExploreCard: React.FC<ExploreCardProps> = ({
  id,
  imgUrl,
  title,
  index,
  active,
  handleClick,
  description,
}) => {
  // Detect if the device is mobile
  const isMobile = useMediaQuery({ maxWidth: 767 });

  // Optimized transition for mobile devices
  const animationDuration = isMobile ? 0.5 : 0.7; // Shorter animation for mobile
  const animationStiffness = isMobile ? 150 : 200; // Lower stiffness for mobile

  return (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      initial={{ flex: 1 }} // Start with a normal flex value
      animate={{
        flex: active === id ? 6 : 1, // Slightly increase flex size when active, for a better visual effect
      }}
      transition={{
        type: "spring",
        stiffness: animationStiffness,
        damping: 30,
        duration: animationDuration,
      }}
      className={`relative flex items-center justify-center min-w-[170px] h-[500px] cursor-pointer`} // Adjusted height for better appearance
      onClick={() => handleClick(id)}
    >
      <img
        src={imgUrl}
        alt="planet-04"
        className="absolute w-full h-full object-cover rounded-[24px]"
      />
      {active !== id ? (
        <h3 className="font-semibold sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]">
          {title}
        </h3>
      ) : (
        <div className="absolute bottom-0 p-8 flex justify-start w-full flex-col rounded-b-[24px]">
          <p className="font-mono text-[16px] leading-[20.16px] text-white uppercase">
            {description}
          </p>
          <h2 className="mt-[24px] font-semibold sm:text-[32px] text-[24px] text-white">
            {title}
          </h2>
        </div>
      )}
    </motion.div>
  );
};

export default ExploreCard;
