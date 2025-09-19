import { NavigationMenuItem } from "@radix-ui/react-navigation-menu";
import { motion } from "framer-motion";

interface IProps {
  href: string;
  text: string;
  handleLinkClick: (href: string) => void;
  activeLink: string;
}

export default function CustomNavLink({
  href,
  handleLinkClick,
  activeLink,
  text,
}: IProps) {
  return (
    <NavigationMenuItem>
      <motion.a
        href={href}
        onClick={() => handleLinkClick(href)}
        className={`relative px-3 py-1.5 rounded-3xl transition-all duration-500 ${
          activeLink === href
            ? "text-purple-200 bg-gradient-to-r from-purple-900/40 to-violet-900/40 border-2 border-purple-400 shadow-lg shadow-purple-500/30"
            : "text-white hover:text-purple-100"
        }`}
        whileHover={{
          scale: 1.08, // تكبير عند التمرير
          y: -4, // رفع قليل
          filter: "brightness(1.2)", // زيادة السطوع
        }}
        whileTap={{
          scale: 0.92, // تصغير عند النقر
          y: 0, // العودة للموضع الأصلي
          filter: "brightness(0.9)", // تقليل السطوع
        }}
      >
        {/* خط متحرك في الأسفل */}
        <motion.div
          className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-violet-400 rounded-full"
          whileHover={{
            width: "100%", // امتداد الخط عند التمرير
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />

        {/* خلفية متغيرة اللون */}
        <motion.div
          className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/5 to-violet-500/5 opacity-0"
          whileHover={{
            opacity: 1, // ظهور الخلفية عند التمرير
          }}
          transition={{ duration: 0.3 }}
        />

        {/* حدود متوهجة */}
        <motion.div
          className="absolute inset-0 rounded-3xl border border-transparent"
          whileHover={{
            borderColor: "rgba(139, 92, 246, 0.3)", // حدود بنفسجية عند التمرير
          }}
          transition={{ duration: 0.3 }}
        />

        {/* تغيير لون النص */}
        <motion.span
          className="relative z-10 font-medium"
          whileHover={{
            color: "#c084fc", // لون بنفسجي فاتح عند التمرير
          }}
          transition={{ duration: 0.2 }}
        >
          {text}
        </motion.span>
      </motion.a>
    </NavigationMenuItem>
  );
}
