import { motion } from "framer-motion";

const projects = [
  {
    title: "RiskOps Dashboard",
    desc: "End‑to‑end platform to visualize vendor risk, automate assessments, and track remediation.",
    stack: ["React", "Node", "MongoDB", "Tailwind"],
    link: "#",
  },
  {
    title: "Secure API Boilerplate",
    desc: "FastAPI + JWT + role‑based access with CI checks and OWASP‑friendly defaults.",
    stack: ["FastAPI", "JWT", "Docker", "PyTest"],
    link: "#",
  },
  {
    title: "Infra as Code Starter",
    desc: "IaC templates with GitHub Actions for preview environments and policy gates.",
    stack: ["Terraform", "GH Actions", "AWS"],
    link: "#",
  },
  {
    title: "Realtime Collab Board",
    desc: "WebSocket‑powered whiteboard with presence and optimistic updates.",
    stack: ["React", "WebSocket", "Redis"],
    link: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative w-full scroll-mt-20 bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between gap-4">
          <motion.h2
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-semibold sm:text-4xl"
          >
            Featured Projects
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            className="hidden text-sm text-slate-400 sm:block"
          >
            Built with performance, security, and UX in mind
          </motion.div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.link}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-b from-slate-900 to-slate-950 p-5 shadow-lg ring-1 ring-white/5 transition hover:-translate-y-1 hover:shadow-cyan-500/10"
            >
              <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(600px_200px_at_0%_0%,rgba(34,211,238,0.15),transparent)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-2 py-0.5 text-[10px] text-cyan-300">{i + 1}</span>
              </div>
              <p className="mt-2 text-sm text-slate-300">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span key={s} className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-[11px] text-slate-300">
                    {s}
                  </span>
                ))}
              </div>
              <div className="mt-4 text-sm text-cyan-300 opacity-0 transition group-hover:opacity-100">Explore →</div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
