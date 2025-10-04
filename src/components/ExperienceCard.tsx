import ImpulseBorder from "./animations/ImpulseBorder";

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
  return (
    <div key={exp.id} className="relative  flex items-center text-center">
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
        <span className="absolute -bottom-8 right-10 text-md text-gray-400">
          {" "}
          {exp.period}{" "}
        </span>
      </div>
    </div>
  );
}
