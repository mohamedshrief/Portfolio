import IconRenderer from "./IconRenderer";
import type { Track } from "./TechStack";
import { motion } from "framer-motion";
// -----------------------------
// Component: TrackCard (list item)

// -----------------------------
export default function TrackCard({
  t,
  active,
  onClick,
}: {
  t: Track;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <motion.button
      onClick={onClick}
      initial={false}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`w-full text-left p-4 rounded-2xl border-2 transition-shadow flex gap-3 items-center focus:outline-none ${
        active
          ? "bg-gradient-to-r from-cyan-500/20 to-purple-700/20 border-cyan-400 shadow-lg"
          : "bg-neutral-900/40 border-neutral-800 hover:shadow-lg"
      }`}
      aria-pressed={active}
    >
      <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-br from-black/20 to-white/3">
        <div className="w-8 h-8">
          <IconRenderer icon={t.techs[0].icon} alt={t.techs[0].name} />
        </div>
      </div>

      <div className="flex-1">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-lg font-semibold">{t.title}</div>
            <div className="text-xs text-neutral-400">{t.subtitle}</div>
          </div>
          <div className="text-sm text-neutral-300">{t.techs.length} tools</div>
        </div>
        <p className="mt-2 text-sm text-neutral-300 ">{t.summary}</p>
      </div>
    </motion.button>
  );
}
