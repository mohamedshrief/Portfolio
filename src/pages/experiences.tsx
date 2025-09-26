import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { experiences } from "@/Data/data";
import ExperienceCard from "@/components/ExperienceCard";
import me from "../assets/portfolio.jpg";
// import Title from "@/components/ui/Title";
// import FadeIn from "@/components/animations/fadeIn";
// import FadeInWithExpantion from "@/components/animations/FadeInWithExpantion";

/**
 * مكون صفحة "التجارب المهنية"
 * يحتوي على:
 * - خط زمني عمودي متحرك
 * - نقطة تتحرك مع التمرير وتغير لون الخط
 * - بطاقات التجارب المهنية
 * - انيميشن متقدم مع Framer Motion
 */
export default function Experiences() {
  // إنشاء مرجع للحاوية الرئيسية للـ timeline
  const containerRef = useRef<HTMLDivElement>(null);

  // تتبع تقدم الـ scroll داخل الحاوية المحددة
  // offset: ["start center", "end center"] يعني يبدأ التتبع عندما تبدأ الحاوية في الظهور وينتهي عندما تنتهي
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  // تحويل تقدم الـ scroll إلى موضع الـ Flask في منتصف الشاشة
  const flaskY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  // تحويل تقدم الـ scroll إلى لون الخط
  // يتغير من الأبيض إلى السماوي إلى البنفسجي
  const lineColor = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["#8b5cf6", "#8b5cf6", "#8b5cf6"]
  );

  return (
    <div id="experiences" className="min-h-screen py-20 md:pt-8">
      {/* <Title title="Experiences">
        <p className="text-white text-center">my whole life</p>
      </Title> */}

      <div className="container  mx-auto  sm:px-6 lg:px-8 max-w-7xl">
        {/* عنوان القسم مع انيميشن fade-in */}

        {/* حاوية الخط الزمني الرئيسية */}
        <div ref={containerRef} className="relative min-h-[1000px]">
          {/* الخط الزمني العمودي - في المنتصف على الشاشات الكبيرة */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-2 transform -translate-x-1/2">
            {/* خط الخلفية (اللون الأصلي الرمادي) */}
            <div className="w-full h-full bg-gradient-to-b from-gray-400 to-gray-600 rounded-full"></div>

            {/* الخط المتحرك (يتغير لونه مع حركة النقطة) */}
            <motion.div
              className="absolute w-full rounded-full timeline-line"
              style={{
                backgroundColor: lineColor, // لون الخط يتغير مع التمرير
                boxShadow: `0 0 30px ${lineColor}, 0 0 60px ${lineColor}`, // توهج متغير
                top: 0,
                height: flaskY, // ارتفاع الخط يتغير مع موضع النقطة
              }}
            >
              {/* النقطة المتحركة في نهاية الخط */}
              {/* <div className="absolute w-12 h-12  shadow-lg -bottom-6  sm:left-1/2 -translate-1/2 ">
                <img
                  src={me}
                  className=" sm:rounded-full border w-full h-full"
                />
              </div> */}
            </motion.div>
          </div>

          {/* الخط الزمني العمودي - على اليسار في الشاشات الصغيرة والمتوسطة */}
          <div className="lg:hidden absolute left-8 top-0 bottom-0 w-2">
            {/* خط الخلفية (اللون الأصلي الرمادي) */}
            <div className="w-full h-full bg-gradient-to-b from-gray-400 to-gray-600 rounded-full"></div>

            {/* الخط المتحرك (يتغير لونه مع حركة النقطة) */}
            <motion.div
              className="absolute w-full rounded-full timeline-line"
              style={{
                backgroundColor: lineColor, // لون الخط يتغير مع التمرير
                boxShadow: `0 0 25px ${lineColor}, 0 0 50px ${lineColor}`, // توهج متغير
                top: 0,
                height: flaskY, // ارتفاع الخط يتغير مع موضع النقطة
              }}
            >
              {/* النقطة المتحركة في نهاية الخط (حجم أصغر للشاشات الصغيرة) */}
              {/* <div className="absolute w-10 h-10 shadow-lg bottom-[-20px] -left-[12px] -translate-x-1/2">
                <img src={me} className=" rounded-l-lg border w-full h-full" />
              </div> */}
            </motion.div>
          </div>

          {/* عناصر الخط الزمني (التجارب المهنية) */}
          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <ExperienceCard exp={exp} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
