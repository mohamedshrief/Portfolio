// استيراد مكتبة Framer Motion للانيميشن
import { motion, useInView } from "framer-motion";
import ImpulseBorder from "./animations/ImpulseBorder";
import { useRef } from "react";
// أيقونات تقريبية للمهارات من lucide-react

/**
 * واجهة البيانات الخاصة ببطاقة التجربة المهنية
 */
interface ISkill {
  name: string;
  icon: null | React.ReactNode;
}

interface IProps {
  exp: {
    id: number; // معرف فريد للتجربة
    company: string; // اسم الشركة
    location: string; // موقع العمل
    period: string; // فترة العمل
    workType: string; // نوع العمل (دوام كامل، جزئي، إلخ)
    role: string; // المسمى الوظيفي
    description: string[]; // وصف تفصيلي للمهام
    skills: ISkill[]; // المهارات المستخدمة
    isComplete: boolean; // هل التجربة مكتملة أم لا
  };
  index: number; // فهرس التجربة في القائمة
}

/**
 * مكون بطاقة التجربة المهنية
 * يعرض معلومات تجربة عمل واحدة مع:
 * - انيميشن دخول متدرج
 * - تخطيط متجاوب للشاشات المختلفة
 * - حدود ملونة حسب حالة التجربة
 * - مهارات تقنية مع تأثيرات hover
 */
export default function ExperienceCard({ exp, index }: IProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      key={exp.id}
      initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }} // انيميشن دخول من اليسار أو اليمين بالتناوب
      animate={
        isInView
          ? { opacity: 1, x: 0 }
          : { opacity: 0, x: index % 2 === 0 ? -150 : 150 }
      }
      transition={{ duration: 0.5 }}
      className="relative  flex items-start lg:grid lg:grid-cols-2 lg:gap-8"
    >
      {/* التاريخ - على اليسار في الشاشات الصغيرة، متناوب في الشاشات الكبيرة */}
      <div
        className={` w-12  lg:w-auto flex-shrink-0 text-right pr-6 lg:pr-0 ${
          index % 2 === 0 ? "lg:col-start-1" : "lg:col-start-2"
        }`}
      >
        <p className="text-gray-400 text-sm lg:text-base font-medium lg:text-left">
          {exp.period}
        </p>
      </div>

      {/* خط يصل من التجربة إلى الخط الرئيسي - للشاشات الكبيرة */}
      <div className="hidden lg:block absolute left-1/2 top-8 w-px h-8 bg-gradient-to-b from-cyan-400/60 to-transparent transform -translate-x-1/2"></div>

      {/* خط يصل من التجربة إلى الخط الرئيسي - للشاشات الصغيرة */}
      <div className="lg:hidden absolute left-8 top-8 w-px h-8 bg-gradient-to-b from-cyan-400/60 to-transparent"></div>

      {/* المحتوى - على اليمين في الشاشات الصغيرة، متناوب في الشاشات الكبيرة */}
      <div
        className={`flex-1 lg:pl-0 ${
          index % 2 === 0 ? "lg:col-start-2" : "lg:col-start-1"
        }`}
      >
        {/* بطاقة التجربة مع حدود ملونة حسب الحالة */}

        <ImpulseBorder exp={{ isComplete: exp.isComplete }}>
          {/* اسم الشركة والمسمى الوظيفي */}
          <div className="mb-4">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">
              {exp.company}
            </h3>
            <h4 className="text-xl lg:text-2xl font-semibold text-cyan-300 mb-3">
              {exp.role}
            </h4>

            {/* الموقع ونوع العمل */}
            <div className="flex items-center justify-center gap-4 text-gray-400 text-sm lg:text-base">
              <div className="flex items-center gap-2">
                <span>📍</span>
                <span>{exp.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <span>💼</span>
                <span>{exp.workType}</span>
              </div>
            </div>
          </div>

          {/* الوصف التفصيلي للمهام */}
          <div className="space-y-4 mb-6">
            {exp.description.map((desc, descIndex) => (
              <p key={descIndex} className="text-gray-300 leading-relaxed">
                {/* تقسيم النص لتمييز الكلمات المهمة بالعريض */}
                {desc.split("**").map((part, partIndex) =>
                  partIndex % 2 === 1 ? (
                    <strong
                      key={partIndex}
                      className="text-white font-semibold"
                    >
                      {part}
                    </strong>
                  ) : (
                    part
                  )
                )}
              </p>
            ))}
          </div>

          {/* المهارات التقنية المستخدمة - كتلة بزجاجية خفيفة */}
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-3 md:p-4 backdrop-blur-sm shadow-inner">
            <div className="flex flex-wrap justify-center gap-2">
              {exp.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  title={skill.name}
                  className="group inline-flex items-center gap-2 px-3 py-1 rounded-full  bg-gradient-to-br from-[#BB83FF] to-indigo-700 text-white text-sm font-medium shadow-sm backdrop-blur-sm transition-all duration-300 ease-out hover:border-cyan-400/50 hover:from-cyan-400/10 hover:to-transparent hover:text-white hover:shadow-cyan-400/20 hover:ring-1 hover:ring-cyan-400/30 hover:scale-[1.04] hover:-translate-y-[2px]"
                >
                  {skill.icon ? (
                    <span className="shrink-0 text-white/70 text-sm  duration-300 group-hover:text-cyan-300 transition-transform group-hover:rotate-180">
                      {skill.icon}
                    </span>
                  ) : null}
                  <span className="transition-colors duration-300">
                    {skill.name}
                  </span>
                </span>
              ))}
            </div>
          </div>
        </ImpulseBorder>
      </div>
    </motion.div>
  );
}
