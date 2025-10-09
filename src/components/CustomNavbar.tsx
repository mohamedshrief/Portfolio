import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { motion } from "framer-motion";

import { useState, useEffect } from "react";
import CustomNavLink from "./CustomNavLink";

import { ContactMeLink } from "./ContactMeLink";
import { useIntersectionObserver } from "./Navbar/useIntersectionObserver";
import MainLogo from "./Navbar/MainLogo";
import SideMenuButton from "./Navbar/SideMenuButton";
import SideMenu from "./Navbar/SideMenu";

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
          <MainLogo />

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
          <SideMenuButton isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </div>

      {/* القائمة المتنقلة المتحركة - تأثير سحر الفضاء */}
      <SideMenu
        isOpen={isOpen}
        handleLinkClick={handleLinkClick}
        setIsOpen={setIsOpen}
      />
    </nav>
  );
}

{
  /* جسيمات كهربائية تتحرك عبر الحروف */
}
{
  /* {[...Array(8)].map((_, i) => (
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
              ))} */
}
