"use client";

import { motion } from "framer-motion";

import { NewFeatures, TitleText, TypingText } from "../components";
import { sceneVariant2, staggerContainer, fadeIn } from "../utils/motion";
import { newFeatures } from "../../../constants";

const WhatsNew = () => (
  <section className={`${"paddings"} relative z-10`}>
    <motion.div
      variants={staggerContainer(0.1, 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${"innerWidth"} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className="flex-[0.95] flex justify-center flex-col"
      >
        <TypingText title="Whats new?" />
        <TitleText title={<>What's new about Nightcrawlers</>} />
        <div className="mt-[48px] flex flex-wrap justify-between gap-[24px]">
          {newFeatures.map((feature) => (
            <NewFeatures key={feature.title} {...feature} />
          ))}
        </div>
      </motion.div>

      <motion.div
        variants={sceneVariant2("right")}
        className={`flex-1 ${"flexCenter"}`}
      >
        <img
          src="/lou.png"
          alt="get-started"
          className="w-full h-auto object-contain lg:max-w-[100%] lg:max-h-[100%] hidden lg:block"
        />
      </motion.div>
    </motion.div>
  </section>
);

export default WhatsNew;
