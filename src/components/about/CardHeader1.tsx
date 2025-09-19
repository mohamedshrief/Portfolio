import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface IProps {
  text: string;
  customStyle?: string;
  icon?: string;
  delay?: number;
}

export default function CardHeader1({
  text,
  customStyle,
  icon,
  delay,
}: IProps) {
  const ref = useRef(null);

  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.h2
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{
        duration: 0.6,
        delay: delay ? delay : 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={`about-subtitle font-bold  flex items-center justify-start ${
        customStyle
          ? customStyle
          : "text-2xl sm:text-3xl lg:text-4xl mb-4 lg:mb-6"
      }`}
    >
      <span className="star mr-2 lg:mr-3 text-xl lg:text-2xl">
        {" "}
        {icon ? icon : "✦"}{" "}
      </span>
      {text}
    </motion.h2>
  );
}
