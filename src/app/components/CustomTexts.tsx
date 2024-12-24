"use client";

import { motion } from "framer-motion";

interface TextProps {
  title: string;
  textStyles?: string;
}

interface Textprops2 {
  title: React.ReactNode;
  textStyles?: string;
}

export const TypingText: React.FC<TextProps> = ({ title, textStyles = "" }) => (
  <motion.p
    className={`font-mono md:text-[30px] text-[14px] text-[#C7C7C7] ${textStyles}`}
  >
    {Array.from(title).map((letter, index) => (
      <motion.span key={index}>
        {letter === " " ? "\u00A0" : letter}
      </motion.span>
    ))}
  </motion.p>
);

export const TitleText: React.FC<Textprops2> = ({ title, textStyles = "" }) => (
  <motion.h2
    initial="hidden"
    whileInView="show"
    className={`mt-[8px] font-bold md:text-[64px] text-[40px] text-white ${textStyles}`}
  >
    {title}
  </motion.h2>
);
