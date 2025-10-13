/**
 * مكون تأثير الكتابة الآلية
 * يعرض قائمة من الكلمات مع تأثير كتابة ومسح متكرر
 * يشبه تأثير الكتابة الآلية في المواقع الحديثة
 */

interface IProps {
  words: string[];
  className?: string;
}

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function TypingEffectJobDesc({ words, className }: IProps) {
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
