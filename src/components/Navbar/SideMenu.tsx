import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../ui/button";
import { X } from "lucide-react";
import { ContactMeLink } from "../ContactMeLink";

interface IProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  handleLinkClick: (href: string) => void;
}

export default function SideMenu({
  isOpen,
  setIsOpen,
  handleLinkClick,
}: IProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{
            y: -100, // بداية من الأعلى
            opacity: 0, // شفاف في البداية
            scaleX: 0.1, // مضغوط أفقياً
            transformOrigin: "top center",
          }}
          animate={{
            y: 0, // الانتقال للأسفل
            opacity: 1, // ظهور كامل
            scaleX: 1, // توسع كامل
          }}
          exit={{
            y: -100, // العودة للأعلى
            opacity: 0, // اختفاء
            scaleX: 0.1, // انكماش
          }}
          transition={{
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94],
            scaleX: { duration: 0.5, delay: 0.1 },
          }}
          className="absolute top-full left-0 w-full text-white overflow-hidden z-[200] bg-black border-t-2 border-cyan-400/30"
        >
          {/* تأثير الجسيمات العائمة */}
          <motion.div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                  radial-gradient(2px 2px at 20px 30px, #00D4FF, transparent),
                  radial-gradient(2px 2px at 40px 70px, #0099CC, transparent),
                  radial-gradient(1px 1px at 90px 40px, #0066FF, transparent),
                  radial-gradient(1px 1px at 130px 80px, #00D4FF, transparent),
                  radial-gradient(2px 2px at 160px 30px, #0099CC, transparent)
                `,
              backgroundSize:
                "200px 100px, 150px 100px, 100px 100px, 150px 100px, 200px 100px",
            }}
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"], // حركة الجسيمات
            }}
            transition={{
              duration: 20,
              ease: "linear",
            }}
          />

          {/* تأثير موجات الطاقة */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

          {/* زر الإغلاق السحري - نمط فولدمورت */}
          <motion.div
            className="absolute top-4 right-4 z-20"
            initial={{ scale: 0, rotate: -180 }} // بداية صغيرة ومقلوبة
            animate={{ scale: 1, rotate: 0 }} // ظهور كامل واستقامة
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="relative overflow-hidden bg-gradient-to-br from-red-600 to-red-800 hover:from-red-500 hover:to-red-700 border-2 border-red-400"
            >
              {/* تأثير السحر المظلم */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-red-300 to-transparent"
                animate={{
                  x: ["0%", "100%"], // حركة من اليسار لليمين
                  opacity: [0, 1, 0], // ظهور واختفاء
                }}
                transition={{
                  duration: 1.5,
                  ease: "easeInOut",
                }}
              />

              <X className="relative z-10 text-white w-5 h-5" />

              {/* تأثير الدخان المظلم */}
              <motion.div
                className="absolute inset-0 bg-black rounded-full opacity-0"
                whileHover={{
                  opacity: 0.3, // ظهور الدخان عند التمرير
                  scale: 1.5, // تكبير الدخان
                }}
                transition={{ duration: 0.3 }}
              />
            </Button>
          </motion.div>

          {/* عناصر القائمة مع دخول خيال علمي */}
          <div className="relative z-10 flex flex-col items-center gap-8 py-10 mt-8">
            {[
              { href: "#home", text: "Home", icon: "🏠" },
              { href: "#about", text: "About", icon: "👤" },
              { href: "#services", text: "Services", icon: "⚡" },
            ].map((item, index) => (
              <motion.div
                key={item.href}
                className="relative group"
                initial={{
                  x: -100, // بداية من اليسار
                  opacity: 0, // شفاف
                  filter: "blur(20px)", // ضبابي
                }}
                animate={{
                  x: 0, // الانتقال للموضع الأصلي
                  opacity: 1, // ظهور كامل
                  filter: "blur(0px)", // وضوح كامل
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.2 + index * 0.15, // تأخير متدرج لكل عنصر
                  ease: "easeOut",
                }}
                whileHover={{
                  scale: 1.05, // تكبير عند التمرير
                  x: 10, // حركة لليمين
                }}
              >
                {/* تأثير الخط عند التمرير */}
                <motion.div
                  className="absolute -left-4 top-1/2 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500"
                  whileHover={{
                    width: "20px", // امتداد الخط عند التمرير
                  }}
                  transition={{ duration: 0.3 }}
                />

                <a
                  href={item.href}
                  onClick={() => handleLinkClick && handleLinkClick(item.href)}
                  className="flex items-center gap-3 text-lg font-medium hover:text-cyan-300 transition-colors duration-300 group"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span className="relative">
                    {item.text}
                    {/* تأثير توهج النص */}
                    <motion.span
                      className="absolute inset-0 text-cyan-400 opacity-0 blur-sm"
                      whileHover={{
                        opacity: 0.7, // ظهور التوهج عند التمرير
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {item.text}
                    </motion.span>
                  </span>
                </a>
              </motion.div>
            ))}
            <ContactMeLink />
          </div>

          {/* خط الطاقة السفلي */}
          <motion.div
            className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent"
            initial={{ scaleX: 0 }} // بداية مضغوط
            animate={{ scaleX: 1 }} // توسع كامل
            transition={{ duration: 0.8, delay: 0.5 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
