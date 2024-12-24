"use client";

import { motion } from "framer-motion";

import { StartSteps, TitleText, TypingText } from "../components";
import { staggerContainer, fadeIn, sceneVariants } from "../utils/motion";
import { startingnfo } from "../../../constants";

const GetStarted: React.FC = () => (
  <section className="paddings relative z-10">
    <motion.div
      variants={staggerContainer(0.1, 0.15)} // Slightly quicker stagger timing for a smoother flow
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }} // Triggering animation earlier and once
      className="innerWidth mx-auto flex lg:flex-row flex-col gap-8"
    >
      <motion.div
        variants={sceneVariants("left")}
        className="flex-1 flexCenter"
      >
        <img
          src="/camera.png"
          alt="camera"
          className="w-[100%] h-[100%] object-contain"
        />
      </motion.div>
      <motion.div
        variants={fadeIn("left", "tween", 0.3, 1)} // Shortened delay to feel more fluid
        className="flex-[0.75] flex justify-center flex-col"
      >
        <TypingText title="How we work?" />
        <TitleText title={<>Get Started by knowing our process of work</>} />
        <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px]">
          {startingnfo.map((feature, index) => (
            <StartSteps key={index} number={index + 1} text={feature} />
          ))}
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default GetStarted;
