{
  /* شعار MAS - رابط للصفحة الرئيسية */
}

interface IProps {
  href?: string;
}
import { motion } from "framer-motion";

export default function MainLogo({ href = "#home" }: IProps) {
  return (
    <motion.a
      href={href}
      className="flex items-center gap-3 cursor-pointer group"
      whileHover={{ scale: 1.05 }} // تكبير عند التمرير
      whileTap={{ scale: 0.95 }} // تصغير عند النقر
    >
      <span className="text-2xl logo-text gradient-text relative">
        {/* تيار كهربائي يمر عبر الحروف */}
        <span
          className="absolute inset-0 text-cyan-400"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, #00ffff 50%, transparent 100%)",
            backgroundSize: "200% 100%",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          MAS
        </span>

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
          MAS
        </span>
      </span>
    </motion.a>
  );
}
