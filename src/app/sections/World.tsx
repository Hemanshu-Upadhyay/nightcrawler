"use client";

import { motion } from "framer-motion";

import { TitleText, TypingText } from "../components";
import { fadeIn, staggerContainer } from "../utils/motion";

const World = () => (
  <section className={`${"paddings"} relative z-10`}>
    <motion.div
      variants={staggerContainer(0.1, 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${"innerWidth"} mx-auto flex flex-col`}
    >
      <TypingText title="Around the world" textStyles="text-center" />
      <TitleText
        title={
          <>
            Nightcrawlers are worldwide <br className="md:block hidden" />
          </>
        }
        textStyles="text-center"
      />

      <motion.div
        variants={fadeIn("up", "tween", 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px] sm:h-[400px]"
      >
        <img src="/map.png" alt="map" className="w-full h-full object-cover" />

        <div className="hidden md:block absolute bottom-[10%] right-[5%] sm:right-[10%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src="people-01.png" alt="people" className="w-full h-full" />
        </div>

        <div className="absolute top-[10%] left-[15%] sm:left-[20%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src="/people-02.png" alt="people" className="w-full h-full" />
        </div>
        <div className="absolute md:hidden top-[1%] left-[35%] sm:left-[20%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src="/people-03.png" alt="people" className="w-full h-full" />
        </div>
        <div className="absolute md:hidden top-[25%] left-[50%] sm:left-[20%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src="/people-01.png" alt="people" className="w-full h-full" />
        </div>

        <div className="absolute top-[50%] left-[40%] sm:left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src="people-03.png" alt="people" className="w-full h-full" />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
