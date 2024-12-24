"use client";

import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

type InsightCardProps = {
  imgUrl: string;
  title: string;
  subtitle: string;
  index: number;
};

const InsightCard = ({ imgUrl, title, subtitle, index }: InsightCardProps) => (
  <motion.div
    variants={fadeIn({
      direction: "up",
      type: "spring",
      delay: index * 0.3,
    })}
    className="flex flex-col gap-4 md:flex-row"
  >
    <img
      src={imgUrl}
      alt={title}
      className="w-full h-[250px] md:w-[270px] rounded-[32px] object-cover"
    />
    <div className="w-full flex flex-col md:flex-row justify-between items-center">
      <div className="flex-1 md:ml-[62px] flex flex-col max-w-[650px]">
        <h4 className="font-normal text-[26px] lg:text-[42px] text-white">
          {title}
        </h4>
        <p className="mt-[16px] font-normal text-[14px] lg:text-[20px] text-[#C7C7C7]">
          {subtitle}
        </p>
      </div>

      <div className="hidden lg:flex items-center justify-center w-[100px] h-[100px] rounded-full bg-transparent border-[1px] border-white">
        <img
          src="/arrow.svg"
          alt="arrow"
          className="w-[40%] h-[40%] object-contain"
        />
      </div>
    </div>
  </motion.div>
);

export default InsightCard;
