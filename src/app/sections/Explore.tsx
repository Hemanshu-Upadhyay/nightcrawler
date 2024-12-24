"use client";

import { useState, useCallback } from "react";

import { ExploreCard, TitleText, TypingText } from "../components";
import { AnimatedElement } from "../components/AnimatedElement";
import { exploreWorlds } from "../../../constants";
import { staggerContainer } from "../utils/motion";

interface World {
  id: string;
  imgUrl: string;
  title: string;
  description: string;
}

const Explore = () => {
  const [active, setActive] = useState("world-2");

  const handleCardClick = useCallback((id: string) => {
    setActive(id);
  }, []);

  return (
    <section className="paddings" id="explore">
      <AnimatedElement
        variants={staggerContainer({
          staggerChildren: 0.05, // Reduced for snappier overall effect
          delayChildren: 0.05,
        })}
        className="innerWidth mx-auto flex flex-col"
        viewport={{ once: true, amount: 0.25 }}
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
          {exploreWorlds.map((world: World, index: number) => (
            <ExploreCard
              key={world.id}
              {...world}
              index={index}
              active={active}
              handleClick={handleCardClick}
              description={world.description}
            />
          ))}
        </div>
      </AnimatedElement>
    </section>
  );
};

export default Explore;
