import { useCallback } from "react";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import About from "./components/About";

function App() {
  const handleScrollTo = useCallback((id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Top navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-slate-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="h-2.5 w-2.5 animate-pulse rounded-full bg-cyan-400" />
            <span className="text-sm font-semibold tracking-wide text-slate-200">
              dev.portfolio
            </span>
          </div>
          <nav className="hidden gap-6 text-sm text-slate-300 sm:flex">
            <button onClick={() => handleScrollTo("home")} className="transition hover:text-white">
              Home
            </button>
            <button onClick={() => handleScrollTo("projects")} className="transition hover:text-white">
              Projects
            </button>
            <button onClick={() => handleScrollTo("experience")} className="transition hover:text-white">
              Experience
            </button>
            <button onClick={() => handleScrollTo("about")} className="transition hover:text-white">
              About
            </button>
          </nav>
        </div>
      </header>

      {/* Sections */}
      <Hero onCtaClick={handleScrollTo} />
      <Projects />
      <Experience />
      <About />

      {/* Footer */}
      <footer className="border-t border-white/10 bg-slate-950 py-10 text-center text-sm text-slate-400">
        <div className="mx-auto max-w-7xl px-6">
          Built with love for secure, scalable, and playful experiences. © {new Date().getFullYear()}
        </div>
      </footer>
    </div>
  );
}

export default App;
