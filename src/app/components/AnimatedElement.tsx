"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { useOptimizedAnimations } from "../utils/motion";

interface AnimatedElementProps extends HTMLMotionProps<"div"> {
  as?: keyof JSX.IntrinsicElements;
  children: React.ReactNode;
}

export function AnimatedElement({
  as = "div",
  children,
  variants,
  ...props
}: AnimatedElementProps) {
  const optimizedVariants = useOptimizedAnimations(variants!);

  return (
    <motion.div
      initial="hidden"
      animate="show"
      exit="hidden"
      variants={optimizedVariants}
      style={{
        transform: "translateZ(0)",
        backfaceVisibility: "hidden",
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
