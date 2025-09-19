/**

 
 * - انيميشن دخول عند ظهوره في الشاشة
 * - تأثيرات scale و opacity
 * - استخدام Intersection Observer لتتبع الرؤية
 */

interface IProps {
  children: React.ReactNode;
}
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function FadeInWithExpantion({ children }: IProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.5 }} // بداية شفافة ومضغوطة
      animate={
        isInView
          ? { opacity: 1, y: 0, scale: 1 } // ظهور كامل وتوسع
          : { opacity: 0, y: 30, scale: 0.95 } // العودة للحالة الأولية
      }
      transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="text-center mb-12 lg:mb-16"
    >
      {children}
    </motion.div>
  );
}
