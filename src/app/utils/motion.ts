import { Variants } from "framer-motion";

type Direction = "left" | "right" | "up" | "down";
type TransitionType = "spring" | "tween" | "keyframes";

interface TransitionProps {
  type?: TransitionType;
  delay?: number;
  duration?: number;
  ease?: string;
  stiffness?: number;
  damping?: number;
  staggerChildren?: number;
  delayChildren?: number;
}

export const slideIn = (
  direction: Direction,
  type: TransitionType = "tween",
  delay: number = 0,
  duration: number = 0.8
): Variants => ({
  hidden: {
    x: direction === "left" ? "-50%" : direction === "right" ? "50%" : 0,
    y: direction === "up" ? "50%" : direction === "down" ? "-50%" : 0,
  },
  show: {
    x: 0,
    y: 0,
    transition: {
      type,
      delay,
      duration,
      ease: "easeOut",
    },
  },
});

export const staggerContainer = (
  staggerChildren: number = 0.1,
  delayChildren: number = 0
): Variants => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const textVariant = (delay: number = 0): Variants => ({
  hidden: {
    y: 30,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "tween",
      duration: 0.8,
      delay,
      ease: "easeOut",
    },
  },
});

export const fadeIn = (
  direction: Direction = "up",
  type: TransitionType = "tween",
  delay: number = 0,
  duration: number = 0.8
): Variants => ({
  hidden: {
    x: direction === "left" ? 50 : direction === "right" ? -50 : 0,
    y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type,
      delay,
      duration,
      ease: "easeOut",
    },
  },
});

export const zoomIn = (
  delay: number = 0,
  duration: number = 0.8
): Variants => ({
  hidden: {
    scale: 0.8,
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "tween",
      delay,
      duration,
      ease: "easeOut",
    },
  },
});

export const navVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -30,
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 20,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 25,
      delay: 0.5,
    },
  },
};

export const footerVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    transition: {
      type: "tween",
      duration: 0.8,
      ease: "easeOut",
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      duration: 0.8,
      ease: "easeOut",
      delay: 0.5,
    },
  },
};

export const sceneVariants = (direction: Direction): Variants => ({
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
