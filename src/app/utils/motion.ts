import { Variants } from "framer-motion";
import { useReducedMotion } from "framer-motion";

type Direction = "left" | "right" | "up" | "down";
type TransitionType = "tween" | "spring";

// Optimized base configurations
const baseTransition = {
  duration: 0.3, // Reduced for snappier feedback
  ease: [0.25, 0.1, 0.25, 1], // Custom cubic-bezier for smoother motion
};

const baseSpringConfig = {
  type: "spring" as TransitionType,
  stiffness: 300, // Increased for snappier response
  damping: 30, // Increased for less oscillation
  mass: 0.5, // Reduced mass for lighter feel
};

// Reduced motion variants
const reducedMotionVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.2 },
  },
};

interface AnimationConfig {
  direction?: Direction;
  type?: TransitionType;
  delay?: number;
  duration?: number;
  staggerChildren?: number;
  delayChildren?: number;
}

// Optimized directional offset calculation
const getDirectionalOffset = (direction: Direction, value: number = 20) => ({
  // Reduced offset
  x: direction === "left" ? -value : direction === "right" ? value : 0,
  y: direction === "up" ? -value : direction === "down" ? value : 0,
});

// Hardware acceleration wrapper
const withAcceleration = (variants: Variants): Variants => ({
  ...variants,
  initial: {
    ...variants.hidden,
    willChange: "transform, opacity",
  },
  animate: {
    ...variants.show,
    willChange: "transform, opacity",
  },
});

// Optimized slide animation
export const slideIn = ({
  direction,
  type = "spring",
  delay = 0,
}: AnimationConfig): Variants =>
  withAcceleration({
    hidden: {
      ...getDirectionalOffset(direction!),
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition:
        type === "spring"
          ? { ...baseSpringConfig, delay }
          : { ...baseTransition, delay },
    },
  });

// Optimized stagger container
export const staggerContainer = ({
  staggerChildren = 0.05, // Reduced stagger time
  delayChildren = 0,
}: AnimationConfig = {}): Variants => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

// Optimized text variant
export const textVariant = (delay: number = 0): Variants =>
  withAcceleration({
    hidden: {
      y: 10, // Reduced distance
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        ...baseTransition,
        delay,
      },
    },
  });

// Optimized fade in
export const fadeIn = ({
  direction = "up",
  type = "spring",
  delay = 0,
}: AnimationConfig = {}): Variants =>
  withAcceleration({
    hidden: {
      ...getDirectionalOffset(direction, 15), // Reduced movement
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition:
        type === "spring"
          ? { ...baseSpringConfig, delay }
          : { ...baseTransition, delay },
    },
  });

// Optimized zoom in
export const zoomIn = (delay: number = 0): Variants =>
  withAcceleration({
    hidden: {
      scale: 0.95, // Smaller scale change
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        ...baseSpringConfig,
        delay,
      },
    },
  });

// Optimized nav variants
export const navVariants: Variants = withAcceleration({
  hidden: {
    opacity: 0,
    y: -10, // Reduced movement
    transition: baseSpringConfig,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ...baseSpringConfig,
      delay: 0.1, // Reduced delay
    },
  },
});

// Optimized footer variants
export const footerVariants: Variants = withAcceleration({
  hidden: {
    opacity: 0,
    y: 10, // Reduced movement
    transition: baseTransition,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ...baseTransition,
      delay: 0.1, // Reduced delay
    },
  },
});

// Optimized scene variants

export const sceneVariants = (direction: Direction): Variants =>
  withAcceleration({
    hidden: {
      x: direction === "left" ? "-15%" : "15%", // Reduced movement
      rotate: 15, // Reduced rotation
      opacity: 0,
    },
    show: {
      x: 0,
      rotate: 0,
      opacity: 1,
      transition: {
        ...baseSpringConfig,
        stiffness: 200,
        damping: 25,
      },
    },
  });
export const sceneVariant2 = (direction: Direction): Variants =>
  withAcceleration({
    hidden: {
      x: direction === "left" ? "-15%" : "15%", // Reduced movement
      rotate: 15, // Reduced rotation
      opacity: 0,
    },
    show: {
      x: 0,
      rotate: 0,
      opacity: 1,
      transition: {
        ...baseSpringConfig,
        stiffness: 200,
        damping: 25,
      },
    },
  });

// Hook to handle reduced motion preference
export const useOptimizedAnimations = (variants: Variants): Variants => {
  const prefersReducedMotion = useReducedMotion();
  return prefersReducedMotion ? reducedMotionVariants : variants;
};
