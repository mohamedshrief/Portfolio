import { techIcons } from "@/Data/TechIcons";
import { motion } from "framer-motion";

interface IProps {
  direction?: "toLeft" | "toRight";
}

const TechMarquee = ({ direction = "toLeft" }: IProps) => {
  return (
    <div className="relative flex overflow-hidden p-4 [--gap:2rem] border border-y-indigo-700 bg-[#323b47]">
      {[...Array(2)].map((_, i) => (
        <motion.div
          key={i}
          className="flex shrink-0 justify-around [gap:var(--gap)]"
          animate={{
            x: direction === "toLeft" ? ["0%", "-100%"] : ["-100%", "0%"],
          }}
          transition={{
            duration: 40,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {techIcons.map((tech, idx) => (
            <div key={idx} className="flex items-center gap-2 min-w-[160px]">
              {typeof tech.icon === "string" ? (
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-6 h-6 object-contain"
                />
              ) : (
                <tech.icon className="w-6 h-6 text-cyan-400" />
              )}
              <p className="text-sm text-white">{tech.name}</p>
            </div>
          ))}
        </motion.div>
      ))}
    </div>
  );
};

export default TechMarquee;
