import { motion } from "framer-motion";
import IconRenderer from "./IconRenderer";
import type { TechItem } from "./TechStack";
export default function TechBadge({ tech }: { tech: TechItem }) {
  return (
    <motion.div
      layout
      whileHover={{ y: -6, scale: 1.04 }}
      className="flex items-center gap-3 bg-neutral-900/60 backdrop-blur p-3 rounded-xl border border-neutral-700 shadow-md"
    >
      <div className="flex items-center justify-center w-10 h-10 bg-neutral-800/40 rounded-md">
        <IconRenderer icon={tech.icon} alt={tech.name} />
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-sm font-semibold truncate">{tech.name}</div>
        {typeof tech.level === "number" && (
          <div className="mt-1 h-2 bg-neutral-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-cyan-400 to-purple-600"
              style={{ width: `${tech.level}%` }}
            />
          </div>
        )}
      </div>
    </motion.div>
  );
}
