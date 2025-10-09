/**
 * Hook مخصص لتتبع القسم النشط في الصفحة باستخدام Intersection Observer
 * يراقب أي قسم مرئي حالياً ويحدد الرابط النشط في شريط التنقل
 */

import { useEffect, useState } from "react";

export function useIntersectionObserver() {
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
