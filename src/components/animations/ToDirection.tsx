import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const fromLeft = { opacity: 0.5, x: -150 };
const fromRight = { opacity: 0.5, x: 150 };
const fromBottom = { opacity: 0.5, y: 200 }; // من تحت لفوق

interface IProps {
  children: React.ReactNode;
  direction?: "left" | "right" | "up";
  repeat?: boolean;
  duration?: number;
}

function directionConfig(dir: "left" | "right" | "up") {
  switch (dir) {
    case "left":
      return fromLeft;
    case "right":
      return fromRight;
    case "up":
      return fromBottom;
    default:
      return fromLeft;
  }
}

export default function ToDirection({
  children,
  direction = "left",
  repeat = true,
  duration = 0.4,
}: IProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: repeat, margin: "-100px" });

  const initial = directionConfig(direction);
  const visible = { opacity: 1, x: 0, y: 0 };

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={isInView ? visible : initial}
      transition={{ duration, ease: "easeInOut" }}
      className="will-change-transform"
    >
      {children}
    </motion.div>
  );
}
