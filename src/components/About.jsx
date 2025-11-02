import { motion } from "framer-motion";
import { Shield, Code2, Gamepad2, Music, Dumbbell } from "lucide-react";

const chips = [
  { label: "Application Security", icon: Shield },
  { label: "TypeScript & React", icon: Code2 },
  { label: "Strategy Games", icon: Gamepad2 },
  { label: "Electronic Music", icon: Music },
  { label: "Fitness", icon: Dumbbell },
];

export default function About() {
  return (
    <section id="about" className="relative w-full scroll-mt-20 bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold sm:text-4xl"
        >
          About — Hobbies & Interests
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 max-w-3xl text-slate-300"
        >
          I love building reliable systems and expressive interfaces. From vendor risk
          playbooks to real‑time apps, I bring a security‑first yet user‑centric mindset.
        </motion.p>

        <div className="mt-8 flex flex-wrap gap-3">
          {chips.map(({ label, icon: Icon }) => (
            <motion.span
              key={label}
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200"
            >
              <Icon className="h-4 w-4 text-cyan-300" /> {label}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
