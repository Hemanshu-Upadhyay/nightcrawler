"use client";

import { motion } from "framer-motion";
import { slideIn, staggerContainer, textVariant } from "../utils/motion";

const Hero = () => (
  <section className="yPaddings sm:pl-16 pl-6">
    <motion.div
      variants={staggerContainer(0.1, 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }} // Trigger animation earlier
      className="innerWidth mx-auto flex flex-col"
    >
      <div className="flex justify-center items-center flex-col relative z-10">
        <motion.h1 variants={textVariant(1.1)} className="heroHeading">
          Be a
        </motion.h1>

        <motion.div
          variants={textVariant(1.2)}
          className="flex flex-row justify-center items-center"
        >
          <h1 className="heroHeading">Night</h1>
          <h1 className="heroHeading">Crawler</h1>
        </motion.div>
      </div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="relative w-full md:-mt-[20px] -mt-[12px]"
      >
        <div className="absolute w-full h-[300px] rounded-tl-[140px] z-0 -top-[30px]" />

        <img
          src="/image.png"
          alt="hero_cover"
          className="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative"
        />
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
