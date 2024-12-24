"use client";

import { motion } from "framer-motion";
import { TypingText } from "../components";
import { fadeIn, staggerContainer } from "../utils/motion";

const boldify = (text: string) => (
  <span className="font-extrabold text-white">{text}</span>
);

const About = () => (
  <section className="paddings relative z-10">
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer(0.15, 0.2)} // Slightly increased delays for smoother stagger
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }} // Reduced viewport trigger for better visibility
      className="innerWidth mx-auto flexCenter flex-col"
    >
      <TypingText
        title="About Nightcrawlers"
        textStyles="text-center text-gray-400"
      />

      <motion.p
        variants={fadeIn("up", "tween", 0.15, 0.8)} // Reduced delay and duration
        className="mt-[8px] font-normal sm:text-[28px] text-[18px] text-center text-gray-400"
      >
        <span className="font-extrabold text-white">Nightcrawling</span> is not
        it’s an opportunity to {boldify("Capture")} the chaos and turn it into
        your narrative. In this world, you {boldify("Create")} the madness, not
        just observe it. With your camera, your instincts, and your drive, you
        make reality what you want it to be. Join us. {boldify("Scroll down")}{" "}
        and embrace the Nightsquad.
      </motion.p>

      <motion.img
        variants={fadeIn("up", "tween", 0.2, 0.8)} // Adjusted delay and duration for quicker transitions
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
