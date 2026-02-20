/* ============================================================
   DESIGN: Dark Industrial Command Center
   PORTFOLIO PAGE — Advanced filtering and project details
   ============================================================ */
import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, CheckCircle2, MapPin, Building2, Layers,
  ChevronDown, X, FileText, Shield, AlertTriangle, Wrench
} from "lucide-react";
import PageLayout from "@/components/PageLayout";
import ScrollReveal from "@/components/ScrollReveal";
import { IMAGES, PROJECTS } from "@/data/siteData";

export default function Portfolio() {
  const [location] = useLocation();
  const [activeIndustry, setActiveIndustry] = useState("Todos");
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  const industries = ["Todos", ...Array.from(new Set(PROJECTS.map((p) => p.industry)))];
  const complexities = ["Todos", ...Array.from(new Set(PROJECTS.map((p) => p.complexity)))];

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash) {
      setExpandedProject(hash);
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 300);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  const filtered = PROJECTS.filter(
    (p) => activeIndustry === "Todos" || p.industry === activeIndustry
  );

  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.1_0.015_195/0.3)] to-transparent" />
        <div className="relative container">
          <ScrollReveal>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-sm bg-[oklch(0.75_0.15_195/0.1)] border border-[oklch(0.75_0.15_195/0.2)]">
                <span className="font-mono text-xs uppercase tracking-widest text-[oklch(0.75_0.15_195)]">Portfólio de Projetos</span>
              </div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-foreground mb-4">
                Projetos <span className="text-gradient-cyan">Executados</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                Cada projeto representa uma solução de engenharia completa, desde o diagnóstico técnico
                até a documentação as-built, com controle de qualidade e conformidade em todas as etapas.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b border-[oklch(0.2_0.01_270/0.5)] sticky top-16 lg:top-20 z-30 bg-[oklch(0.13_0.01_270/0.95)] backdrop-blur-xl">
        <div className="container">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground mr-2">Filtrar:</span>
            {industries.map((ind) => (
              <button
                key={ind}
                onClick={() => setActiveIndustry(ind)}
                className={`px-4 py-2 text-sm font-medium rounded-sm transition-all ${
                  activeIndustry === ind
                    ? "bg-[oklch(0.75_0.15_195)] text-[oklch(0.1_0.01_270)]"
                    : "bg-[oklch(0.18_0.01_270)] text-muted-foreground hover:text-foreground border border-[oklch(0.25_0.01_270/0.5)]"
                }`}
              >
                {ind}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects List */}
      <section className="py-16 lg:py-20">
        <div className="container">
          <div className="space-y-8">
            <AnimatePresence mode="popLayout">
              {filtered.map((project, i) => (
                <motion.div
                  key={project.id}
                  id={project.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                >
                  <div className="rounded-sm glass-panel glow-border overflow-hidden">
                    {/* Project Header */}
                    <div
                      className="cursor-pointer"
                      onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
                    >
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                        <div className="relative h-56 lg:h-auto overflow-hidden">
                          <img
                            src={IMAGES[project.image as keyof typeof IMAGES]}
                            alt={project.title}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[oklch(0.16_0.012_270/0.8)] hidden lg:block" />
                        </div>
                        <div className="lg:col-span-2 p-6 lg:p-8">
                          <div className="flex flex-wrap gap-2 mb-3">
                            <span className="px-2 py-1 text-xs font-mono bg-[oklch(0.75_0.15_195/0.1)] border border-[oklch(0.75_0.15_195/0.2)] text-[oklch(0.75_0.15_195)] rounded-sm">
                              {project.industry}
                            </span>
                            <span className="px-2 py-1 text-xs font-mono bg-[oklch(0.8_0.16_75/0.1)] border border-[oklch(0.8_0.16_75/0.2)] text-[oklch(0.8_0.16_75)] rounded-sm">
                              {project.systemType}
                            </span>
                            <span className="px-2 py-1 text-xs font-mono bg-[oklch(0.2_0.01_270)] border border-[oklch(0.3_0.01_270/0.5)] text-muted-foreground rounded-sm">
                              Complexidade: {project.complexity}
                            </span>
                          </div>
                          <h3 className="font-display text-2xl font-bold text-foreground mb-2">{project.title}</h3>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                            <MapPin size={14} className="text-[oklch(0.75_0.15_195)]" />
                            {project.location}
                          </div>
                          <p className="text-sm text-muted-foreground leading-relaxed mb-4">{project.overview}</p>
                          <div className="flex items-center gap-2 text-sm font-medium text-[oklch(0.75_0.15_195)]">
                            <span>{expandedProject === project.id ? "Recolher detalhes" : "Ver detalhes completos"}</span>
                            <motion.div
                              animate={{ rotate: expandedProject === project.id ? 180 : 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              <ChevronDown size={16} />
                            </motion.div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Expanded Details */}
                    <AnimatePresence>
                      {expandedProject === project.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="border-t border-[oklch(0.25_0.01_270/0.5)] p-6 lg:p-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div className="space-y-6">
                                <div>
                                  <h4 className="flex items-center gap-2 font-display text-sm font-bold text-foreground uppercase tracking-wide mb-2">
                                    <Layers size={14} className="text-[oklch(0.75_0.15_195)]" />
                                    Escopo
                                  </h4>
                                  <p className="text-sm text-muted-foreground leading-relaxed">{project.scope}</p>
                                </div>
                                <div>
                                  <h4 className="flex items-center gap-2 font-display text-sm font-bold text-foreground uppercase tracking-wide mb-2">
                                    <AlertTriangle size={14} className="text-[oklch(0.8_0.16_75)]" />
                                    Desafios de Engenharia
                                  </h4>
                                  <p className="text-sm text-muted-foreground leading-relaxed">{project.challenges}</p>
                                </div>
                                <div>
                                  <h4 className="flex items-center gap-2 font-display text-sm font-bold text-foreground uppercase tracking-wide mb-2">
                                    <Wrench size={14} className="text-[oklch(0.75_0.15_195)]" />
                                    Solução Aplicada
                                  </h4>
                                  <p className="text-sm text-muted-foreground leading-relaxed">{project.solution}</p>
                                </div>
                                <div>
                                  <h4 className="flex items-center gap-2 font-display text-sm font-bold text-foreground uppercase tracking-wide mb-2">
                                    <Wrench size={14} className="text-[oklch(0.75_0.15_195)]" />
                                    Metodologia de Execução
                                  </h4>
                                  <p className="text-sm text-muted-foreground leading-relaxed">{project.methodology}</p>
                                </div>
                              </div>
                              <div className="space-y-6">
                                <div>
                                  <h4 className="flex items-center gap-2 font-display text-sm font-bold text-foreground uppercase tracking-wide mb-2">
                                    <Shield size={14} className="text-[oklch(0.7_0.17_155)]" />
                                    Controle de Riscos
                                  </h4>
                                  <p className="text-sm text-muted-foreground leading-relaxed">{project.riskControl}</p>
                                </div>
                                <div>
                                  <h4 className="flex items-center gap-2 font-display text-sm font-bold text-foreground uppercase tracking-wide mb-2">
                                    <Shield size={14} className="text-[oklch(0.7_0.17_155)]" />
                                    Procedimentos de Segurança
                                  </h4>
                                  <p className="text-sm text-muted-foreground leading-relaxed">{project.safetyProcedures}</p>
                                </div>
                                <div>
                                  <h4 className="flex items-center gap-2 font-display text-sm font-bold text-foreground uppercase tracking-wide mb-2">
                                    <FileText size={14} className="text-[oklch(0.8_0.16_75)]" />
                                    Documentação Entregue
                                  </h4>
                                  <p className="text-sm text-muted-foreground leading-relaxed">{project.documentation}</p>
                                </div>
                                <div>
                                  <h4 className="flex items-center gap-2 font-display text-sm font-bold text-foreground uppercase tracking-wide mb-2">
                                    <CheckCircle2 size={14} className="text-[oklch(0.7_0.17_155)]" />
                                    Alinhamento de Compliance
                                  </h4>
                                  <p className="text-sm text-muted-foreground leading-relaxed">{project.complianceAlignment}</p>
                                </div>
                              </div>
                            </div>
                            {/* Results */}
                            <div className="mt-6 p-4 rounded-sm bg-[oklch(0.7_0.17_155/0.05)] border border-[oklch(0.7_0.17_155/0.15)]">
                              <h4 className="flex items-center gap-2 font-display text-sm font-bold text-foreground uppercase tracking-wide mb-2">
                                <CheckCircle2 size={14} className="text-[oklch(0.7_0.17_155)]" />
                                Resultados
                              </h4>
                              <p className="text-sm text-muted-foreground leading-relaxed">{project.results}</p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
