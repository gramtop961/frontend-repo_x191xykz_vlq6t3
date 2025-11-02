import { motion } from "framer-motion";

const roles = [
  {
    role: "Full‑Stack Developer",
    org: "Product Platform",
    period: "2023 — Present",
    points: [
      "Built secure microservices and dashboards used by 10k+ users.",
      "Led code health initiatives: typed APIs, e2e tests, observability.",
      "Partnered with security to embed threat modeling in sprints.",
    ],
  },
  {
    role: "TPRM Analyst (Cybersecurity)",
    org: "Enterprise Security",
    period: "2021 — 2023",
    points: [
      "Owned vendor risk assessments across 60+ third‑parties.",
      "Automated evidence collection, cutting cycle time by 35%.",
      "Championed secure‑by‑design patterns with engineering teams.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative w-full scroll-mt-20 bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-3xl font-semibold sm:text-4xl"
        >
          Experience
        </motion.h2>

        <div className="relative border-l border-white/10 pl-6">
          {roles.map((r, i) => (
            <motion.div
              key={r.role}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="mb-10"
            >
              <div className="absolute -left-[7px] mt-1 h-3 w-3 rounded-full bg-cyan-400" />
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="text-xl font-semibold">{r.role}</h3>
                <span className="text-sm text-slate-400">{r.period}</span>
              </div>
              <div className="mt-1 text-slate-300">{r.org}</div>
              <ul className="mt-3 list-disc space-y-2 pl-4 text-sm text-slate-300">
                {r.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
