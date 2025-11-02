import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";

export default function Hero({ onCtaClick }) {
  return (
    <section id="home" className="relative min-h-[86vh] w-full overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.18),transparent_60%)]" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-24 text-center sm:pt-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-xs font-medium text-cyan-300 backdrop-blur"
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
          Open for exciting full‑stack roles & collabs
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mt-6 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl"
        >
          Tech‑savvy Developer crafting
          <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-indigo-300 bg-clip-text text-transparent"> interactive </span>
          experiences
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-4 max-w-2xl text-base text-slate-300 sm:text-lg"
        >
          Full‑stack engineer with hands‑on TPRM (cybersecurity) background — blending secure-by-design thinking with delightful UI and scalable backend systems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <button
            onClick={() => onCtaClick?.("projects")}
            className="group inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-cyan-500/20 transition hover:-translate-y-0.5 hover:bg-cyan-400"
          >
            View Projects
            <svg
              className="h-4 w-4 transition group-hover:translate-x-0.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
          <button
            onClick={() => onCtaClick?.("experience")}
            className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-800/60 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:-translate-y-0.5 hover:border-slate-600"
          >
            My TPRM Journey
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-10 grid grid-cols-2 gap-6 text-left text-xs text-slate-400 sm:grid-cols-4"
        >
          {["React", "Node.js", "FastAPI", "MongoDB"].map((t) => (
            <div key={t} className="rounded-md border border-white/10 bg-white/5 px-3 py-2">
              {t}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
