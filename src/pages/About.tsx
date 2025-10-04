import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Title from "@/components/ui/Title";
import AboutText from "@/components/about/AboutText";
import AboutLayout from "@/components/about/AboutLayout";
import ToDirection from "@/components/animations/ToDirection";
// import CoverflowCarousel from "@/components/carousel";
import VerticalCarousel from "@/components/carousel";
// import Title from "@/components/ui/Title";

/**
 * مكون صفحة "حولي"
 * يحتوي على:
 * - عنوان القسم مع انيميشن
 * - معلومات شخصية مفصلة
 * - كاروسيل للصور مع تأثير Coverflow
 * - أزرار التواصل وعرض المشاريع
 */
export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div
      id="about"
      className="min-h-screen text-white px-4 sm:px-6 lg:px-8 relative pt-20"
    >
      <ToDirection direction="up" duration={0.4}>
        <div className="container mx-auto max-w-6xl relative z-10">
          {/* قسم العنوان */}

          <div ref={ref}>
            <Title title="About Me" />
          </div>
          <AboutLayout>
            {/* الجانب الأيسر - المحتوى النصي */}
            <AboutText />
            {/* الجانب الأيمن - كاروسيل Coverflow */}

            <motion.div
              initial={{ opacity: 0, x: 100, scale: 0.8 }} // بداية شفافة ومضغوطة من اليمين
              animate={
                isInView
                  ? { opacity: 1, x: 0, scale: 1 } // ظهور كامل وتوسع
                  : { opacity: 0, x: 100, scale: 0.8 } // العودة للحالة الأولية
              }
              transition={{
                duration: 1,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="order-2 "
            >
              <VerticalCarousel />
            </motion.div>
          </AboutLayout>
        </div>
      </ToDirection>
    </div>
  );
}
