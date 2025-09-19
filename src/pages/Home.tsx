import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin, Facebook } from "lucide-react";
import me from "../assets/portfolio.jpg";

import { useState, useEffect } from "react";
import ContactMe from "@/components/ui/ContactMe";
import ParticlesScreenSaver from "@/components/ParticlesScreenSaver";
import { profileSVGPath } from "@/Data/svgPaths";

/**
 * مكون تأثير الكتابة الآلية
 * يعرض قائمة من الكلمات مع تأثير كتابة ومسح متكرر
 * يشبه تأثير الكتابة الآلية في المواقع الحديثة
 */
function TypingEffect({
  words, // مصفوفة الكلمات المراد عرضها
  className, // كلاسات CSS إضافية
}: {
  words: string[];
  className?: string;
}) {
  // حالة الفهرس الحالي للكلمة
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  // حالة النص الحالي المعروض
  const [currentText, setCurrentText] = useState("");
  // حالة تحديد ما إذا كنا في وضع المسح أم الكتابة
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];

    if (isDeleting) {
      // تأثير المسح - حذف حرف واحد في كل مرة
      if (currentText.length > 0) {
        const timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1)); // حذف آخر حرف
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        // انتهاء المسح، الانتقال للكلمة التالية
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    } else {
      // تأثير الكتابة - إضافة حرف واحد في كل مرة
      if (currentText.length < currentWord.length) {
        const timeout = setTimeout(() => {
          setCurrentText(currentWord.slice(0, currentText.length + 1)); // إضافة حرف جديد
        }, 150);
        return () => clearTimeout(timeout);
      } else {
        // انتهاء الكتابة، انتظار قبل بدء المسح
        const timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
        return () => clearTimeout(timeout);
      }
    }
  }, [currentText, currentWordIndex, isDeleting, words]);

  return (
    <h3 className={`${className} font-semibold text-white/90`}>
      <span className="text-3xl lg:text-4xl">{currentText}</span>
      {/* مؤشر الكتابة المتلألئ */}
      <motion.span
        className="text-3xl lg:text-4xl text-cyan-400 ml-1"
        animate={{ opacity: [1, 0] }} // تلألؤ المؤشر
        transition={{ duration: 0.8, repeat: Infinity }}
      >
        |
      </motion.span>
    </h3>
  );
}

/**
 * مكون الصفحة الرئيسية
 * يحتوي على:
 * - صورة المستخدم مع تأثير الرسم المتحرك
 * - معلومات شخصية مع تأثير الكتابة الآلية
 * - أزرار تحميل السيرة الذاتية والتواصل
 * - روابط وسائل التواصل الاجتماعي
 */
export default function Home() {
  return (
    <>
      <div
        id="home"
        className="min-h-screen  flex items-center justify-center text-white  relative pt-2 md:pt-20 px-4 sm:px-6 lg:px-8 "
      >
        <ParticlesScreenSaver />
        <div className=" pt-20 md:pt-8 container mx-auto max-w-6xl relative z-10 ">
          {" "}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* الجانب الأيسر - الصورة مع تأثير الرسم المتحرك */}
            <motion.div
              initial={{ opacity: 0, x: -100 }} // بداية شفافة ومن اليسار
              animate={{ opacity: 1, x: 0 }} // ظهور كامل وانتقال للموضع
              transition={{ duration: 1, ease: "easeOut" }}
              className="flex flex-col items-center lg:items-start space-y-8"
            >
              {/* حاوية الصورة مع تأثير الرسم */}
              <motion.div
                className="relative  w-80 h-80 md:w-96 md:h-96"
                animate={{
                  y: [0, -5, 0], // حركة طفو خفيفة
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {/* طبقة أيقونة SVG المتحركة */}
                <motion.div
                  className="absolute inset-0 z-20"
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 0 }} // اختفاء تدريجي
                  transition={{ duration: 3, delay: 2 }}
                >
                  {/* أيقونة SVG (الشخصية) */}
                  <svg
                    className="w-full h-full"
                    viewBox="0 0 3000 3000" // اضبط الأبعاد حسب ملفك
                    fill="url(#gradient)"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* الشخصية */}
                    <motion.path
                      d={profileSVGPath}
                      stroke="url(#gradient)"
                      strokeWidth="4"
                      fill="none"
                      initial={{ pathLength: 0, scale: 0 }} // يبدأ من غير رسم
                      animate={{ pathLength: 1, scale: 1 }} // يظهر كامل
                      transition={{ duration: 3 }}
                    />

                    {/* تعريف التدرج اللوني */}
                    <defs>
                      <linearGradient
                        id="gradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop offset="0%" stopColor="#8b5cf6" /> {/* بنفسجي */}
                        <stop offset="50%" stopColor="#00ffff" /> {/* سماوي */}
                        <stop offset="100%" stopColor="#7c3aed" />{" "}
                        {/* بنفسجي داكن */}
                      </linearGradient>
                    </defs>
                  </svg>
                </motion.div>

                {/* الصورة الفعلية */}
                <motion.div
                  className="absolute inset-0 z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }} // ظهور تدريجي
                  transition={{ duration: 2, delay: 3 }}
                >
                  <img
                    src={me}
                    alt="MAS"
                    className="w-full h-full object-cover rounded-full border-4 border-purple-400/30 shadow-2xl shadow-purple-500/20"
                  />
                </motion.div>

                {/* خلفية متوهجة */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 blur-3xl -z-10"
                  animate={{
                    scale: [1, 1.2, 1], // تكبير وتصغير
                    opacity: [0.3, 0.6, 0.3], // تغيير الشفافية
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                {/* جسيمات عائمة حول الصورة */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1.5 h-1.5 bg-cyan-400 rounded-full z-30"
                    style={{
                      left: `${20 + i * 10}%`, // موضع أفقي متدرج
                      top: `${25 + (i % 3) * 25}%`, // موضع عمودي متغير
                    }}
                    animate={{
                      y: [0, -15, 0], // حركة عمودية
                      opacity: [0, 1, 0], // ظهور واختفاء
                      scale: [0, 1, 0], // تكبير وتصغير
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      delay: i * 0.2, // تأخير متدرج لكل جسيم
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </motion.div>
            </motion.div>

            {/* الجانب الأيمن - المحتوى النصي */}
            <motion.div
              initial={{ opacity: 0, x: 100 }} // بداية شفافة ومن اليمين
              animate={{ opacity: 1, x: 0 }} // ظهور كامل وانتقال للموضع
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              className="space-y-8 text-center lg:text-left"
            >
              {/* التحية */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <h2 className="text-2xl text-cyan-400 font-medium mb-1">
                  Hello, I'm
                </h2>
              </motion.div>

              {/* الاسم */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                <h1 className="text-6xl lg:text-6xl font-bold bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-600 bg-clip-text text-transparent">
                  Mohamed Abd El-Salam
                </h1>
              </motion.div>

              {/* المسمى الوظيفي مع تأثير الكتابة الآلية */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.9 }}
              >
                <TypingEffect
                  words={[
                    "Full Stack Developer", // مطور متكامل
                    "Frontend Developer", // مطور واجهة أمامية
                    "Backend Developer", // مطور خلفية
                    "React Developer", // مطور React
                    "Node.js Developer", // مطور Node.js
                    "Laravel Developer", // مطور Laravel
                    "Problem Solver", // محلل مشاكل
                    "Creative Developer", // مطور مبدع
                  ]}
                  className="text-3xl lg:text-4xl"
                />
              </motion.div>

              {/* الوصف */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.1 }}
              >
                <p className="text-lg text-white/70 mx-auto lg:mx-0 leading-relaxed max-w-lg">
                  Passionate developer creating innovative digital experiences
                  with cutting-edge technologies. Specializing in modern web
                  development and user experience design.
                </p>
              </motion.div>

              {/* أزرار الدعوة للعمل */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.3 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                {/* زر تحميل السيرة الذاتية */}
                <Button
                  className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105"
                  onClick={() => {
                    const cvUrl =
                      "https://drive.google.com/file/d/1IpeHSkMwPSw8wTQ7_CqH87_FPkpCrX9v/view?usp=drive_link";
                    // تحويل إلى رابط تحميل مباشر
                    const downloadUrl = cvUrl.replace(
                      "/view?usp=drive_link",
                      "/preview"
                    );
                    window.open(downloadUrl, "_blank");
                  }}
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download CV
                </Button>

                {/* مكون قائمة التواصل */}
                <ContactMe />
              </motion.div>

              {/* روابط وسائل التواصل الاجتماعي */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.5 }}
                className="flex justify-center lg:justify-start gap-6 pt-4"
              >
                {[
                  {
                    icon: Github,
                    href: "https://github.com/mohamedshrief/",
                    label: "GitHub",
                  },
                  {
                    icon: Linkedin,
                    href: "https://www.linkedin.com/in/mohamed-abd-elsalam-125270253/",
                    label: "LinkedIn",
                  },
                  {
                    icon: Facebook,
                    href: "https://www.facebook.com/share/1F4Qk9cEW9/#",
                    label: "Facebook",
                  },
                ].map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className="text-white/60 hover:text-cyan-400 transition-colors duration-300"
                    whileHover={{ scale: 1.1, y: -2 }} // تكبير ورفع عند التمرير
                    whileTap={{ scale: 0.95 }} // تصغير عند النقر
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
