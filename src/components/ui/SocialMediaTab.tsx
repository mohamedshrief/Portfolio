import { Github, Linkedin, Facebook } from "lucide-react";
import { motion } from "framer-motion";

export default function SocialMediaTab() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex justify-center gap-4 py-4"
    >
      {[
        {
          icon: Github,
          href: "https://github.com/mohamedshrief/",
          label: "GitHub",
        },
        {
          icon: Linkedin,
          href: "https://www.linkedin.com/in/mohamed-abd-elsalam-125270253/",
          label: "LinkedIn",
        },
        {
          icon: Facebook,
          href: "https://www.facebook.com/share/1F4Qk9cEW9/#",
          label: "Facebook",
        },
      ].map((social) => (
        <motion.a
          key={social.label}
          href={social.href}
          className="text-white/60 hover:text-cyan-400 transition-colors duration-300"
          whileHover={{ scale: 1.1, y: -2 }} // تكبير ورفع عند التمرير
          whileTap={{ scale: 0.95 }} // تصغير عند النقر
        >
          <social.icon className="w-4 h-4" />
        </motion.a>
      ))}
    </motion.div>
  );
}
