import { motion } from "framer-motion";

interface IProps {
  exp: {
    isComplete: boolean;
    // هل التجربة مكتملة أم لا
  };
  children: React.ReactNode;
}

function ImpulseBorder({ exp, children }: IProps) {
  return (
    <motion.div
      className="bg-black/20 backdrop-blur-sm md:mx-5 rounded-xl p-3 lg:p-8 transition-all duration-300"
      animate={
        exp.isComplete
          ? { borderColor: "rgba(34, 211, 238, 0.6)" } // سماوي
          : {
              borderColor: [
                "rgba(250, 204, 21, 0.6)",
                "rgba(250, 204, 21, 1)",
                "rgba(250, 204, 21, 0.6)",
              ],
            } // أصفر متلألئ
      }
      transition={
        exp.isComplete
          ? { duration: 0.3 }
          : { duration: 1, repeat: Infinity, ease: "easeInOut" }
      }
      style={{ borderWidth: "1px" }}
    >
      {/* المحتوى هنا */}
      {children}
    </motion.div>
  );
}
export default ImpulseBorder;
