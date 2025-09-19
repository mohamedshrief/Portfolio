import { motion, type Variants } from "framer-motion";
import { useState, useMemo } from "react";

// تعريف نوع الـ Props اللي هياخده المكون
type IProps = {
  text?: string;
  className?: string;
};

export default function HoverINOut({
  text = "The Experience",
  className,
}: IProps) {
  // حالة بتحدد لو الماوس فوق العنصر أو لا
  const [hovered, setHovered] = useState(false);

  // نحول النص لمصفوفة حروف مرة واحدة فقط عند تغيّر النص
  const letters = useMemo(() => Array.from(text), [text]);

  // Variants خاصة بالـ container (بتعمل stagger = تأخير بسيط بين الحروف)
  const container: Variants = {
    hoverIn: { transition: { staggerChildren: 0.05, when: "beforeChildren" } },
    hoverOut: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
  };

  // Variants لكل حرف بشكل منفرد
  const letter: Variants = {
    rest: { y: 0, opacity: 0 },
    hoverIn: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
    hoverOut: {
      y: -20,
      opacity: 0,
      transition: { duration: 0.35, ease: "easeIn" },
    },
  };

  return (
    // الحاوية الأساسية للنص
    <div
      className={`relative  select-none ${className ?? ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* النص الأساسي اللي بيكون ظاهر طول الوقت */}
      <span aria-hidden="true" className="block">
        {text}
      </span>

      {/* الطبقة المتحركة (Overlay) */}
      <motion.span
        className="absolute inset-0 pointer-events-none"
        variants={container}
        initial="rest"
        animate={hovered ? "hoverIn" : "hoverOut"}
      >
        {letters.map((ch, i) => (
          // كل حرف بيتحول لمكون Motion مستقل
          <motion.span
            key={`${ch}-${i}`}
            variants={letter}
            className="inline-block align-baseline"
          >
            {ch === " " ? "\u00A0" : ch}
          </motion.span>
        ))}
      </motion.span>
    </div>
  );
}
