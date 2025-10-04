import { Wand, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  // NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { motion, AnimatePresence } from "framer-motion";

import { useState, useEffect } from "react";
import CustomNavLink from "./CustomNavLink";

import { ContactMeLink } from "./ContactMeLink";

/**
 * Hook مخصص لتتبع القسم النشط في الصفحة باستخدام Intersection Observer
 * يراقب أي قسم مرئي حالياً ويحدد الرابط النشط في شريط التنقل
 */
function useIntersectionObserver() {
  // حالة لتخزين الرابط النشط حالياً
  const [activeLink, setActiveLink] = useState("#home");

  useEffect(() => {
    // قائمة بالأقسام التي نريد مراقبتها مع عتبة الرؤية لكل قسم
    const sections = [
      { id: "home", threshold: 0.3 }, // القسم الرئيسي - يظهر عند 30% من الرؤية
      { id: "about", threshold: 0.3 }, // قسم "حولي" - يظهر عند 30% من الرؤية
      { id: "services", threshold: 0 }, // قسم "الخدمات" - يظهر عند 30% من الرؤية
      { id: "contact", threshold: 0.3 }, // قسم "التواصل" - يظهر عند 30% من الرؤية
    ];

    // مصفوفة لتخزين مراقبي التقاطع
    const observers: IntersectionObserver[] = [];

    // إنشاء مراقب لكل قسم
    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        // إنشاء مراقب التقاطع
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              // إذا كان القسم مرئي، قم بتحديث الرابط النشط
              if (entry.isIntersecting) {
                setActiveLink(`#${section.id}`);
              }
            });
          },
          {
            threshold: section.threshold, // عتبة الرؤية (30%)
            rootMargin: "-20% 0px -20% 0px", // هامش إضافي لتحديد الرؤية بدقة
          }
        );

        // بدء مراقبة العنصر
        observer.observe(element);
        observers.push(observer);
      }
    });

    // تنظيف المراقبين عند إلغاء تحميل المكون
    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return activeLink;
}

/**
 * مكون شريط التنقل الرئيسي
 * يحتوي على:
 * - شعار MAS مع تأثير الشرارة الكهربائية
 * - روابط التنقل للشاشات الكبيرة
 * - زر العصا السحرية لفتح القائمة المتنقلة
 * - القائمة المتنقلة مع تأثيرات سحرية
 */
export default function Navbar() {
  // حالة فتح/إغلاق القائمة المتنقلة
  const [isOpen, setIsOpen] = useState(false);
  // الحصول على الرابط النشط حالياً من الـ hook المخصص
  const activeLink = useIntersectionObserver();

  /**
   * وظيفة للتعامل مع مفتاح ESC لإغلاق القائمة المتنقلة
   * تستمع لضغطات المفاتيح وتغلق القائمة عند الضغط على ESC
   */
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    // إضافة مستمع الأحداث فقط عندما تكون القائمة مفتوحة
    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
    }

    // تنظيف مستمع الأحداث عند إلغاء تحميل المكون
    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen]);

  /**
   * وظيفة للتعامل مع النقر على روابط التنقل
   * تقوم بإغلاق القائمة المتنقلة والانتقال السلس للقسم المطلوب
   */
  const handleLinkClick = (href: string) => {
    setIsOpen(false); // إغلاق القائمة المتنقلة

    // الانتقال السلس للقسم المطلوب
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth", // انتقال سلس
        block: "start", // محاذاة بداية القسم
        inline: "nearest", // محاذاة أفقية قريبة
      });
    }
  };

  return (
    // شريط التنقل الثابت في أعلى الصفحة
    <nav className="fixed top-0 left-0 w-full shadow-md z-50 bg-black/20 backdrop-blur-xl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between py-3">
          {/* شعار MAS - رابط للصفحة الرئيسية */}
          <motion.a
            href="#home"
            className="flex items-center gap-3 cursor-pointer group"
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
                MAS
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
                    delay: i * 0.15, // تأخير متدرج لكل جسيم
                    ease: "easeInOut",
                  }}
                />
              ))}

              {/* النص الرئيسي مع التوهج الكهربائي */}
              <span
                className="relative z-10"
                style={{
                  background:
                    "linear-gradient(to right, #8b5cf6, #a855f7, #7c3aed)", // تدرج بنفسجي
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                MAS
              </span>
            </motion.span>
          </motion.a>

          {/* روابط التنقل للشاشات الكبيرة */}
          <NavigationMenu className="hidden md:block">
            <motion.div
              className="relative p-2 rounded-3xl border-2 border-purple-400/30"
              animate={{
                boxShadow: [
                  "0 0 20px rgba(139, 92, 246, 0.2)", // توهج خفيف
                  "0 0 40px rgba(139, 92, 246, 0.4)", // توهج متوسط
                  "0 0 20px rgba(139, 92, 246, 0.2)", // توهج خفيف
                ],
              }}
              transition={{
                duration: 3,
                ease: "easeInOut",
              }}
            >
              <NavigationMenuList className="flex gap-4 text-white">
                {/* قائمة روابط التنقل */}
                {[
                  { href: "#home", text: "Home" },
                  { href: "#about", text: "About" },
                  { href: "#services", text: "Services" },
                ].map((item) => (
                  <CustomNavLink
                    key={item.href}
                    href={item.href}
                    text={item.text}
                    handleLinkClick={handleLinkClick}
                    activeLink={activeLink}
                  />
                ))}
                <ContactMeLink />
              </NavigationMenuList>
            </motion.div>
          </NavigationMenu>

          {/* زر العصا السحرية - يظهر في جميع الشاشات */}
          <motion.div
            whileHover={{
              scale: 1.1, // تكبير عند التمرير
              rotate: [0, -10, 10, -5, 0], // حركة اهتزاز سحرية
              filter:
                "drop-shadow(0 0 30px #8B5CF6) drop-shadow(0 0 60px #A855F7)", // توهج قوي
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

              {/* تأثير ذيل التعويذة */}
              <div className="absolute -right-2 -top-2 w-4 h-4 bg-yellow-300 rounded-full opacity-0" />
            </Button>
          </motion.div>
        </div>
      </div>

      {/* القائمة المتنقلة المتحركة - تأثير سحر الفضاء */}
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
                    onClick={() => handleLinkClick(item.href)}
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
    </nav>
  );
}
