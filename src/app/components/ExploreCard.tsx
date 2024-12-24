"use client";

import { motion } from "framer-motion";
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

const ExploreCard: React.FC<ExploreCardProps> = ({
  id,
  imgUrl,
  title,
  index,
  active,
  handleClick,
  description,
}) => (
  <motion.div
    variants={fadeIn("right", "spring", index * 0.5, 0.75)}
    initial={{ flex: 0.5 }}
    animate={{
      flex: active === id ? 10 : 2,
    }}
    transition={{
      type: "spring",
      stiffness: 200,
      damping: 30,
      duration: 0.7,
    }}
    className={`relative flex items-center justify-center min-w-[170px] h-[700px] cursor-pointer`}
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
      <div className="absolute bottom-0 p-8 flex justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px]">
        <div
          className={`${"flexCenter"} w-[60px] h-[60px] rounded-[24px] glassmorphism mb-[16px]`}
        >
          <img
            src="/headset.svg"
            alt="headset"
            className="w-1/2 h-1/2 object-contain"
          />
        </div>
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

export default ExploreCard;
