"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";

import { staggerContainer } from "../utils/motion";
import { ExploreCard, TitleText, TypingText } from "../components";
import { exploreWorlds } from "../../../constants";

interface World {
  id: string;
  imgUrl: string;
  title: string;
  description: string;
}

const Explore: React.FC = () => {
  const [active, setActive] = useState<string>("world-2");

  const worlds = useMemo(
    () =>
      exploreWorlds.map((world: World, index: number) => (
        <ExploreCard
          key={world.id}
          {...world}
          index={index}
          active={active}
          handleClick={setActive}
        />
      )),
    [active]
  );

  return (
    <section className="paddings" id="explore">
      <motion.div
        variants={staggerContainer(0.15, 0.2)} // Adjusted for smoother stagger
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }} // Trigger animations earlier and only once
        className="innerWidth mx-auto flex flex-col"
      >
        <TypingText title="Scenes" textStyles="text-center" />
        <TitleText
          title={
            <>
              Choose the world you want <br className="md:block hidden" /> to
              explore
            </>
          }
          textStyles="text-center"
        />
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {worlds}
        </div>
      </motion.div>
    </section>
  );
};

export default Explore;
