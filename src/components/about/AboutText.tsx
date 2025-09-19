import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "../ui/button";
import ContactMe from "../ui/ContactMe";
import CardHeader1 from "./CardHeader1";

export default function AboutText() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -100 }} // بداية شفافة ومن اليسار
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
      transition={{
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="space-y-6 lg:space-y-8 order-2 lg:order-1"
    >
      {/* النص التعريفي */}
      <div className="space-y-6 lg:space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="text-center lg:text-left"
        >
          {/* عنوان فرعي مع نجمة */}
          <CardHeader1 text="About Me" />
          {/* الفقرات النصية مع انيميشن متدرج */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="space-y-4 lg:space-y-6 text-base sm:text-lg leading-relaxed text-white/90"
          >
            {/* الفقرة الأولى - التعريف الشخصي */}
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{
                duration: 0.6,
                delay: 0.5,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              I'm{" "}
              <span className="text-cyan-300 font-semibold">
                Mohamed Abd El-Salam Mohamed Shrief
              </span>
              , a{" "}
              <span className="text-purple-300 font-semibold">
                Front-End Developer
              </span>{" "}
              passionate about building modern, scalable, and user-friendly web
              applications using{" "}
              <span className="text-cyan-300 font-semibold">React.js</span>,{" "}
              <span className="text-purple-300 font-semibold">Next.js</span>,{" "}
              <span className="text-cyan-300 font-semibold">JavaScript</span>,
              and{" "}
              <span className="text-purple-300 font-semibold">TypeScript</span>.
            </motion.p>

            {/* الفقرة الثانية - الخلفية المهنية */}
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{
                duration: 0.6,
                delay: 0.7,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              My background as a{" "}
              <span className="text-cyan-300 font-semibold">
                Materials Testing Engineer
              </span>{" "}
              and{" "}
              <span className="text-purple-300 font-semibold">
                Medical Laboratory Specialist
              </span>{" "}
              sharpened my analytical skills, precision, and problem-solving
              mindset—qualities I now apply in software development.
            </motion.p>

            {/* الفقرة الثالثة - التطوير المستقبلي */}
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{
                duration: 0.6,
                delay: 0.9,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              Currently, I'm expanding my expertise into{" "}
              <span className="text-purple-300 font-semibold">
                Back-End development
              </span>{" "}
              with <span className="text-cyan-300 font-semibold">Node.js</span>{" "}
              and{" "}
              <span className="text-purple-300 font-semibold">PHP Laravel</span>
              , aiming to become a versatile{" "}
              <span className="text-gradient font-bold text-lg lg:text-xl">
                Full-Stack Developer
              </span>
              . I love crafting responsive interfaces, optimizing performance,
              and delivering seamless user experiences while continuously
              learning and pushing my skills forward.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>

      {/* قسم الدعوة للعمل */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{
          duration: 0.8,
          delay: 1.1,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
        className="pt-4 lg:pt-6"
      >
        {/* نص الدعوة للعمل */}
        <motion.p
          initial={{ opacity: 0, scale: 0.95 }}
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }
          }
          transition={{
            duration: 0.6,
            delay: 1.3,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="text-base lg:text-lg text-white/80 mb-4 lg:mb-6 leading-relaxed"
        >
          I believe in waking up each day eager to make a difference! I'm
          available for full-time roles & freelance projects.
        </motion.p>

        {/* أزرار العمل */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{
            duration: 0.6,
            delay: 1.5,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="flex flex-col sm:flex-row gap-3 lg:gap-4"
        >
          {/* زر التواصل */}
          <ContactMe
            buttonText="Get in Touch"
            buttunStyle="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg shadow-purple-500/25 text-sm sm:text-base"
          />

          {/* زر عرض المشاريع */}
          <Button
            variant="outline"
            className="border-2 border-purple-400/50 hover:border-purple-400 text-purple-400 hover:text-purple-300 px-4 sm:px-6 py-2 sm:py-3 rounded-full transition-all duration-300 hover:scale-105 text-sm sm:text-base"
          >
            View Projects
          </Button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
