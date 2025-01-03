"use client";

import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";
import { InsightCard, TitleText, TypingText } from "../components";
import { insights } from "../../../constants";

const Insights = () => (
  <section className="paddings relative z-10">
    <motion.div
      variants={staggerContainer({
        staggerChildren: 0.1,
        delayChildren: 0.1,
      })}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="innerWidth mx-auto flex flex-col"
    >
      <TypingText title="Insight" textStyles="text-center" />
      <TitleText
        title={<>Insight about Nightcrawlers</>}
        textStyles="text-center"
      />
      <div className="mt-[50px] flex flex-col gap-[30px]">
        {insights.map((item, index) => (
          <InsightCard key={`insight-${index}`} {...item} index={index + 1} />
        ))}
      </div>
    </motion.div>
  </section>
);

export default Insights;
