"use client";

import { motion } from "framer-motion";
import { TypingText } from "../components";

import { fadeIn, staggerContainer } from "../utils/motion";

const boldify = (text: string) => {
  return <span className="font-extrabold text-white">{text}</span>;
};
const About = () => (
  <section className={`${"paddings"} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer(0.1, 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${"innerWidth"} mx-auto ${"flexCenter"} flex-col`}
    >
      <TypingText
        title="About Nightcrawlers"
        textStyles="text-center text-gray-400"
      />

      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center   text-gray-400"
      >
        <span className="font-extrabold text-white">Nightcrawling</span> is not
        it’s an opportunity to {boldify("Capture")} the chaos and turn it into
        your narrative. In this world, you {boldify("Create")} the madness, not
        just observe it. With your camera, your instincts, and your drive, you
        make reality what you want it to be. Join us. {boldify("Scroll down")}{" "}
        and embrace the Nightsquad.
      </motion.p>

      <motion.img
        variants={fadeIn("up", "tween", 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
