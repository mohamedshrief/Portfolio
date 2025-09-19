import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import * as Tabs from "@radix-ui/react-tabs";
import { Mail, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import SocialMediaTab from "../ui/SocialMediaTab";

export function ContactMeDialog() {
  const [isHover, setIsHover] = useState(false);
  const [isDrag, setIsDrag] = useState(false);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <motion.button
          drag
          dragElastic={0.2}
          dragConstraints={{ top: -30, left: -30, right: 30, bottom: 30 }}
          onHoverStart={() => setIsHover(true)}
          onHoverEnd={() => setIsHover(false)}
          onDragStart={() => setIsDrag(true)}
          onDragEnd={() => setIsDrag(false)}
          animate={{
            scale: isHover || isDrag ? 1.1 : 1,
            background:
              isHover || isDrag
                ? "linear-gradient(to right, #06b6d4, #9333ea)"
                : "linear-gradient(to right, #9333ea, #06b6d4)",
            boxShadow:
              isHover || isDrag
                ? "0px 0px 25px rgba(147, 51, 234, 0.5), 0px 0px 35px rgba(6, 182, 212, 0.4)"
                : "0px 0px 0px rgba(0,0,0,0)",
          }}
          whileTap={{
            scale: 0.95,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="px-6 py-2 rounded-md text-white font-semibold cursor-grab active:cursor-grabbing"
          style={{ cursor: "grab" }}
        >
          Contact Me
        </motion.button>
      </PopoverTrigger>

      <PopoverContent asChild>
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: -10 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="w-[380px] lg:w-[620px] p-5 bg-neutral-900 text-white rounded-xl shadow-xl border border-neutral-700"
        >
          <SocialMediaTab />
          {/* Tabs */}
          <Tabs.Root defaultValue="quick">
            <Tabs.List className="flex w-full mb-4 rounded-lg overflow-hidden">
              <Tabs.Trigger
                value="quick"
                className="flex-1 px-3 py-2 text-sm font-medium data-[state=active]:bg-neutral-800 data-[state=active]:text-white data-[state=active]:shadow-inner"
              >
                Quick connect
              </Tabs.Trigger>
            </Tabs.List>

            {/* Quick connect content */}
            <Tabs.Content value="quick" className="space-y-4 py-5">
              <div className="grid grid-cols-2 gap-4">
                {/* Email Card */}
                <a
                  href="mailto:mohmedshrief97@gmail.com"
                  className="p-4 rounded-lg bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700 hover:shadow-md transition"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Mail className="text-cyan-400" />
                    <h3 className="font-semibold">Email</h3>
                  </div>
                  <p className="text-sm font-medium text-white break-words">
                    mohmedshrief97@gmail.com
                  </p>
                  <p className="text-xs text-neutral-400">
                    Send me an email directly
                  </p>
                </a>

                {/* WhatsApp Card */}
                <a
                  href="https://wa.me/201122871426"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-lg bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700 hover:shadow-md transition"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <MessageCircle className="text-green-400" />
                    <h3 className="font-semibold">Text me</h3>
                  </div>
                  <p className="text-sm font-medium text-white">
                    +20 112 287 1426
                  </p>
                  <p className="text-xs text-neutral-400">
                    Chat with me on WhatsApp
                  </p>
                </a>
              </div>
            </Tabs.Content>
          </Tabs.Root>

          {/* Status footer */}
          <div className="mt-5 flex items-center gap-2 rounded-lg bg-green-900/30 px-3 py-2 text-sm text-green-400">
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            Currently available for new opportunities
          </div>
        </motion.div>
      </PopoverContent>
    </Popover>
  );
}
