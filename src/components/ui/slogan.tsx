// استيراد مكتبة Framer Motion للانيميشن
import { motion } from "framer-motion";

/**
 * واجهة الخصائص لمكون الشعار
 */
interface IProps {
  sloganText: string; // النص المراد عرضه مع تأثير الشرارة الكهربائية
}

/**
 * مكون الشعار مع تأثير الشرارة الكهربائية
 * يعرض النص مع:
 * - توهج بنفسجي مستمر
 * - تيار كهربائي يمر عبر الحروف
 * - جسيمات كهربائية متحركة
 * - تأثيرات hover و tap
 */
export default function Slogan({ sloganText }: IProps) {
  return (
    <motion.span
      className="flex justify-center items-center gap-3 cursor-pointer group"
      whileHover={{ scale: 1.05 }} // تكبير عند التمرير
      whileTap={{ scale: 0.95 }} // تصغير عند النقر
    >
      <motion.span
        className="text-2xl logo-text gradient-text relative"
        animate={{
          filter: "drop-shadow(0 0 8px rgba(139, 92, 246, 0.6))", // توهج بنفسجي
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* تيار كهربائي يمر عبر الحروف */}
        <motion.span
          className="absolute inset-0 text-cyan-400"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"], // حركة التدرج
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, #00ffff 50%, transparent 100%)",
            backgroundSize: "200% 100%",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          {sloganText}
        </motion.span>

        {/* جسيمات كهربائية تتحرك عبر الحروف */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            style={{
              left: `${10 + i * 10}%`, // موضع أفقي متدرج
              top: `${30 + (i % 3) * 20}%`, // موضع عمودي متغير
            }}
            animate={{
              x: [0, 20, 0], // حركة أفقية
              y: [0, -5, 0], // حركة عمودية
              opacity: [0, 1, 0], // ظهور واختفاء
              scale: [0, 1.2, 0], // تكبير وتصغير
              filter: "drop-shadow(0 0 8px #00ffff)", // توهج سماوي
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: i * 0.15, // تأخير متدرج لكل جسيم
              ease: "easeInOut",
            }}
          />
        ))}

        {/* النص الرئيسي مع التوهج الكهربائي */}
        <span
          className="relative z-10"
          style={{
            background: "linear-gradient(to right, #8b5cf6, #a855f7, #7c3aed)", // تدرج بنفسجي
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          {sloganText}
        </span>
      </motion.span>
    </motion.span>
  );
}
