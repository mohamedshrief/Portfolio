import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { Wand } from "lucide-react";

interface IProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export default function SideMenuButton({ isOpen, setIsOpen }: IProps) {
  return (
    <motion.div
      whileHover={{
        scale: 1.1, // تكبير عند التمرير
        rotate: [0, -10, 10, -5, 0], // حركة اهتزاز سحرية
        filter: "drop-shadow(0 0 30px #8B5CF6) drop-shadow(0 0 60px #A855F7)", // توهج قوي
      }}
      whileTap={{
        scale: 0.9, // تصغير عند النقر
        rotate: [0, 15, -15, 0], // حركة اهتزاز عند النقر
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
      }}
    >
      <Button
        className="relative overflow-hidden bg-gradient-to-br from-purple-600 via-violet-600 to-indigo-700 hover:from-purple-500 hover:via-violet-500 hover:to-indigo-600 border-2 border-purple-400"
        onClick={() => setIsOpen(!isOpen)}
      >
        {/* تأثير البريق السحري */}
        <div className="absolute inset-0" />

        {/* أيقونة العصا مع التوهج والدوران */}
        <motion.div
          animate={{
            rotate: isOpen ? [0, 360] : 0, // دوران كامل عند فتح القائمة
          }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
          }}
        >
          <Wand className="relative z-10 text-white w-5 h-5" />
        </motion.div>
      </Button>
    </motion.div>
  );
}

{
  /* تأثير ذيل التعويذة */
}
{
  /* <div className="absolute -right-2 -top-2 w-4 h-4 bg-yellow-300 rounded-full opacity-0" /> */
}
