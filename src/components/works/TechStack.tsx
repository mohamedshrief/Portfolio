import { useState } from "react";
import { motion } from "framer-motion";

import { tracksData } from "@/Data/TracksData";
import IconRenderer from "./IconRenderer";
import TechBadge from "./TechBadge";
import TrackCard from "./TrackCard";

// -----------------------------
// Data: grouped tracks (frontend, laravel, node)
// -----------------------------
export type TechItem = {
  name: string;
  icon: string; // SVG url or react-icon component
  level?: number; // percentage for visual meter
};

export type Track = {
  id: string;
  title: string;
  subtitle?: string;
  colorFrom?: string; // tailwind color class or hex
  colorTo?: string;
  summary: string;
  highlights: string[];
  techs: TechItem[];
};

// -----------------------------
// Small helpers
// -----------------------------

// -----------------------------
// Component: TechBadge (single tech)
// -----------------------------

// -----------------------------
// Main component: TechTracks
// -----------------------------
export default function TechTracks() {
  const [selected, setSelected] = useState<string>(tracksData[0].id);

  const activeTrack =
    tracksData.find((t) => t.id === selected) || tracksData[0];

  return (
    <div className="w-full mt-5">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start ">
        {/* Left column: list of tracks */}
        <div className="col-span-1 ">
          <h3 className="text-sm text-cyan-300 font-semibold">Tracks</h3>
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="space-y-3"
          >
            {tracksData.map((t) => (
              <TrackCard
                key={t.id}
                t={t}
                active={t.id === selected}
                onClick={() => setSelected(t.id)}
              />
            ))}
          </motion.div>
        </div>

        {/* Right column: detail panel */}
        <div className="col-span-1 lg:col-span-2 my-auto">
          <motion.div
            layout
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="p-6 rounded-2xl bg-gradient-to-br from-neutral-900/60 to-neutral-900/40 border border-neutral-700 shadow-2xl"
          >
            {/* heading */}
            <div className="flex items-start justify-between gap-6">
              <div>
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-black/20 to-white/2 flex items-center justify-center">
                    <IconRenderer icon={activeTrack.techs[0].icon} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">{activeTrack.title}</h2>
                    <p className="text-sm text-neutral-400">
                      {activeTrack.subtitle}
                    </p>
                  </div>
                </div>
              </div>

              <div className="hidden md:flex flex-col items-end">
                <div className="text-xs text-neutral-400">Highlights</div>
                <ul className="mt-2 text-sm text-neutral-300 space-y-1">
                  {activeTrack.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2">
                      <span className="text-cyan-300">•</span>
                      <span className="truncate">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* summary */}
            <p className="mt-6 text-neutral-300">{activeTrack.summary}</p>

            {/* grid of tech badges */}
            <motion.div
              className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {},
              }}
            >
              {activeTrack.techs.map((tech) => (
                <motion.div
                  key={tech.name}
                  layout
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35 }}
                >
                  <TechBadge tech={tech} />
                </motion.div>
              ))}
            </motion.div>

            {/* call to action */}
            {/* <div className="mt-6 flex items-center justify-between gap-4">
              <div>
                <div className="text-xs text-neutral-400">
                  Want to see projects using this stack?
                </div>
                <div className="text-sm text-neutral-200 font-medium">
                  Filter projects by track
                </div>
              </div>

              <div className="flex items-center gap-3">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-400 to-purple-600 text-black font-semibold"
                  onClick={() => {
                    // نخزن الـtrackId المختار في localStorage أو context
                    localStorage.setItem("selectedTrack", activeTrack.id);

                    // نعمل scroll لجزء Works أو Projects
                    document
                      .getElementById("services")
                      ?.scrollIntoView({ behavior: "smooth" });

                    // نغير الـTab المعروض (هنظبطه في WorksNavBar)
                    const event = new CustomEvent("changeWorksTab", {
                      detail: "Projects",
                    });
                    window.dispatchEvent(event);
                  }}
                >
                  View projects
                </motion.button>
              </div>
            </div> */}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
