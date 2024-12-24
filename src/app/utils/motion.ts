import { Variants } from "framer-motion";

type Direction = "left" | "right" | "up" | "down";
type TransitionType = "tween" | "spring"; // Removed rarely used 'keyframes'

// Shared transition configurations
const sharedTransition = {
  duration: 0.5, // Reduced from 0.8
  ease: "easeOut",
};

const sharedSpringConfig = {
  type: "spring" as TransitionType,
  stiffness: 100,
  damping: 20,
};

// Combined interface for all transition types
interface AnimationConfig {
  direction?: Direction;
  type?: TransitionType;
  delay?: number;
  duration?: number;
  staggerChildren?: number;
  delayChildren?: number;
}

// Helper function to calculate offset based on direction
const getDirectionalOffset = (direction: Direction, value: number = 50) => ({
  x: direction === "left" ? -value : direction === "right" ? value : 0,
  y: direction === "up" ? value : direction === "down" ? -value : 0,
});

// Optimized slide animation
export const slideIn = ({
  direction,
  type = "tween",
  delay = 0,
}: AnimationConfig): Variants => ({
  hidden: getDirectionalOffset(direction!, 50),
  show: {
    x: 0,
    y: 0,
    transition: {
      ...sharedTransition,
      type,
      delay,
    },
  },
});

// Optimized stagger container
export const staggerContainer = ({
  staggerChildren = 0.1,
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
export const textVariant = (delay: number = 0): Variants => ({
  hidden: {
    y: 20, // Reduced from 30
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      ...sharedTransition,
      delay,
    },
  },
});

// Optimized fade in
export const fadeIn = ({
  direction = "up",
  type = "tween",
  delay = 0,
}: AnimationConfig = {}): Variants => ({
  hidden: {
    ...getDirectionalOffset(direction, 30), // Reduced from 50
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      ...sharedTransition,
      type,
      delay,
    },
  },
});

// Optimized zoom in
export const zoomIn = (delay: number = 0): Variants => ({
  hidden: {
    scale: 0.9, // Changed from 0.8 for smoother scaling
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      ...sharedTransition,
      delay,
    },
  },
});

// Optimized nav variants
export const navVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -20, // Reduced from -30
    transition: sharedSpringConfig,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ...sharedSpringConfig,
      delay: 0.3, // Reduced from 0.5
    },
  },
};

// Optimized footer variants
export const footerVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20, // Reduced from 30
    transition: sharedTransition,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ...sharedTransition,
      delay: 0.3, // Reduced from 0.5
    },
  },
};

// Combined scene variants (removed duplicate sceneVariant2)
export const sceneVariants = (direction: Direction): Variants => ({
  hidden: {
    x: direction === "left" ? "-30%" : "30%", // Reduced from 50%
    rotate: 45, // Reduced from 90
    opacity: 0,
  },
  show: {
    x: 0,
    rotate: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 0.8, // Reduced from 1.2
      delay: 0.1, // Reduced from 0.2
      stiffness: 80, // Reduced from 100
      damping: 15, // Adjusted for smoother animation
    },
  },
});

export const sceneVariant2 = (direction: Direction): Variants => ({
  hidden: {
    x: direction === "left" ? "-50%" : "50%",
    rotate: 90, // Reduced rotation angle for smoother rendering
    opacity: 0, // Adding opacity for a more natural hidden state
  },
  show: {
    x: 0,
    rotate: 0,
    opacity: 1, // Ensuring the element fades in smoothly
    transition: {
      type: "spring",
      duration: 1.2, // Reduced duration for faster transitions
      delay: 0.2, // Keep a slight delay for staging
      stiffness: 100, // Lowered stiffness for smoother animation
      damping: 20, // Increased damping to avoid overshooting
    },
  },
});
