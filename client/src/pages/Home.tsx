/* ============================================================
   DESIGN: Dark Industrial Command Center
   HOME PAGE — Complete with all 8 sections:
   1) Cinematic Hero  2) Authority Stats  3) Disciplines Overview
   4) Execution Methodology  5) Featured Projects  6) Governance
   7) Safety & Quality  8) Final CTA
   ============================================================ */
import { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  Flame, Zap, Droplets, Scale, ArrowRight, ChevronDown,
  Shield, Award, CheckCircle2, ArrowUpRight, Filter
} from "lucide-react";
import PageLayout from "@/components/PageLayout";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeader from "@/components/SectionHeader";
import AnimatedCounter from "@/components/AnimatedCounter";
import { IMAGES, STATS, DISCIPLINES, PROJECTS, PROCESS_STEPS, COMPLIANCE_ITEMS } from "@/data/siteData";

const iconMap: Record<string, React.ElementType> = { Flame, Zap, Droplets, Scale };

export default function Home() {
  const [activeFilter, setActiveFilter] = useState("Todos");
  const filters = ["Todos", "Logística", "Farmacêutica", "Alimentícia"];

  return (
    <PageLayout>
      {/* ===== 1) CINEMATIC HERO ===== */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src={IMAGES.hero}
            alt="Industrial infrastructure"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.08_0.01_270/0.95)] via-[oklch(0.1_0.01_270/0.85)] to-[oklch(0.08_0.01_270/0.7)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.08_0.01_270)] via-transparent to-[oklch(0.08_0.01_270/0.3)]" />
        </div>

        {/* Content */}
        <div className="relative container pt-32 pb-20">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-sm bg-[oklch(0.75_0.15_195/0.1)] border border-[oklch(0.75_0.15_195/0.2)]"
            >
              <span className="w-2 h-2 rounded-full bg-[oklch(0.75_0.15_195)] animate-pulse" />
              <span className="font-mono text-xs uppercase tracking-widest text-[oklch(0.75_0.15_195)]">
                Engineering Digital Platform
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.05] text-white mb-6"
            >
              Engenharia com{" "}
              <span className="text-gradient-cyan">controle</span>,{" "}
              <span className="text-gradient-amber">precisão</span>{" "}
              e rastreabilidade
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="text-lg sm:text-xl text-[oklch(0.75_0.005_250)] leading-relaxed mb-10 max-w-2xl"
            >
              Projetos de engenharia industrial com autoridade técnica, controle de execução
              e conformidade regulatória. Da concepção ao suporte ao ciclo de vida.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/contato"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-base font-semibold bg-[oklch(0.75_0.15_195)] text-[oklch(0.1_0.01_270)] rounded-sm hover:bg-[oklch(0.8_0.15_195)] transition-all"
              >
                Solicitar Proposta
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-base font-semibold border border-[oklch(0.4_0.01_270)] text-foreground rounded-sm hover:bg-[oklch(1_0_0/0.05)] transition-all"
              >
                Ver Portfólio
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown size={20} className="text-[oklch(0.75_0.15_195)]" />
          </motion.div>
        </motion.div>
      </section>

      {/* ===== 2) AUTHORITY STATS ===== */}
      <section className="py-20 lg:py-24 border-b border-[oklch(0.2_0.01_270/0.5)]">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {STATS.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 0.1} className="text-center lg:text-left">
                <div className="relative p-6 rounded-sm glass-panel glow-border">
                  <div className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[oklch(0.75_0.15_195)]">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="mt-2 font-display text-base font-semibold text-foreground uppercase tracking-wide">
                    {stat.label}
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">{stat.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 3) ENGINEERING DISCIPLINES OVERVIEW ===== */}
      <section className="py-20 lg:py-28">
        <div className="container">
          <SectionHeader
            tag="Disciplinas"
            title="Vertentes de Engenharia"
            description="Cada disciplina opera como uma vertical técnica independente, com metodologia, normas e entregáveis específicos."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {DISCIPLINES.map((disc, i) => {
              const Icon = iconMap[disc.icon] || Flame;
              return (
                <ScrollReveal key={disc.id} delay={i * 0.1}>
                  <Link href={`/disciplinas#${disc.id}`}>
                    <motion.div
                      className="group relative overflow-hidden rounded-sm glass-panel glow-border-hover cursor-pointer"
                      whileHover={{ scale: 1.01 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Image */}
                      <div className="relative h-56 overflow-hidden">
                        <img
                          src={IMAGES[disc.image as keyof typeof IMAGES]}
                          alt={disc.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.1_0.01_270)] via-[oklch(0.1_0.01_270/0.3)] to-transparent" />
                        <div className="absolute top-4 left-4 p-2.5 rounded-sm bg-[oklch(0.13_0.01_270/0.8)] backdrop-blur-sm border border-[oklch(0.75_0.15_195/0.3)]">
                          <Icon size={22} className="text-[oklch(0.75_0.15_195)]" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-[oklch(0.75_0.15_195)] transition-colors">
                          {disc.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                          {disc.shortDescription}
                        </p>
                        <div className="flex items-center gap-2 text-sm font-medium text-[oklch(0.75_0.15_195)]">
                          <span>Ver detalhes</span>
                          <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== 4) EXECUTION METHODOLOGY SNAPSHOT ===== */}
      <section className="py-20 lg:py-28 bg-[oklch(0.1_0.008_270)]">
        <div className="container">
          <SectionHeader
            tag="Metodologia"
            title="Inteligência de Processo"
            description="Metodologia estruturada em 8 etapas com pontos de controle e validação técnica em cada fase."
          />

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[oklch(0.75_0.15_195/0.3)] via-[oklch(0.75_0.15_195/0.15)] to-transparent" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {PROCESS_STEPS.slice(0, 4).map((step, i) => (
                <ScrollReveal key={step.id} delay={i * 0.1}>
                  <div className="relative p-6 rounded-sm glass-panel glow-border h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="font-mono text-2xl font-bold text-[oklch(0.75_0.15_195/0.4)]">
                        {String(step.id).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="font-display text-lg font-bold text-foreground mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
              {PROCESS_STEPS.slice(4).map((step, i) => (
                <ScrollReveal key={step.id} delay={i * 0.1}>
                  <div className="relative p-6 rounded-sm glass-panel glow-border h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="font-mono text-2xl font-bold text-[oklch(0.75_0.15_195/0.4)]">
                        {String(step.id).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="font-display text-lg font-bold text-foreground mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal className="mt-10 text-center">
              <Link
                href="/processo"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold border border-[oklch(0.75_0.15_195/0.3)] text-[oklch(0.75_0.15_195)] rounded-sm hover:bg-[oklch(0.75_0.15_195/0.1)] transition-all"
              >
                Ver Processo Completo
                <ArrowRight size={16} />
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== 5) FEATURED PROJECTS SHOWCASE ===== */}
      <section className="py-20 lg:py-28">
        <div className="container">
          <SectionHeader
            tag="Portfólio"
            title="Projetos em Destaque"
            description="Seleção de projetos executados em diferentes segmentos industriais e níveis de complexidade."
          />

          {/* Filters */}
          <ScrollReveal className="flex flex-wrap items-center gap-2 mb-10 justify-center">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-4 py-2 text-sm font-medium rounded-sm transition-all ${
                  activeFilter === f
                    ? "bg-[oklch(0.75_0.15_195)] text-[oklch(0.1_0.01_270)]"
                    : "bg-[oklch(0.18_0.01_270)] text-muted-foreground hover:text-foreground"
                }`}
              >
                {f}
              </button>
            ))}
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {PROJECTS.filter(
              (p) => activeFilter === "Todos" || p.industry === activeFilter
            ).map((project, i) => (
              <ScrollReveal key={project.id} delay={i * 0.1}>
                <Link href={`/portfolio#${project.id}`}>
                  <motion.div
                    className="group relative overflow-hidden rounded-sm glass-panel glow-border-hover cursor-pointer h-full"
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="relative h-52 overflow-hidden">
                      <img
                        src={IMAGES[project.image as keyof typeof IMAGES]}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.1_0.01_270)] to-transparent" />
                      <div className="absolute bottom-4 left-4 flex gap-2">
                        <span className="px-2 py-1 text-xs font-mono bg-[oklch(0.13_0.01_270/0.8)] backdrop-blur-sm border border-[oklch(0.3_0.01_270/0.5)] text-[oklch(0.75_0.15_195)] rounded-sm">
                          {project.industry}
                        </span>
                        <span className="px-2 py-1 text-xs font-mono bg-[oklch(0.13_0.01_270/0.8)] backdrop-blur-sm border border-[oklch(0.3_0.01_270/0.5)] text-muted-foreground rounded-sm">
                          {project.complexity}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-display text-lg font-bold text-foreground mb-2 group-hover:text-[oklch(0.75_0.15_195)] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                        {project.overview}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span>{project.location}</span>
                        <span className="w-1 h-1 rounded-full bg-[oklch(0.4_0.01_270)]" />
                        <span>{project.systemType}</span>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="mt-10 text-center">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold border border-[oklch(0.75_0.15_195/0.3)] text-[oklch(0.75_0.15_195)] rounded-sm hover:bg-[oklch(0.75_0.15_195/0.1)] transition-all"
            >
              Ver Todos os Projetos
              <ArrowRight size={16} />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== 6) GOVERNANCE & COMPLIANCE HIGHLIGHT ===== */}
      <section className="py-20 lg:py-28 bg-[oklch(0.1_0.008_270)]">
        <div className="container">
          <SectionHeader
            tag="Compliance"
            title="Governança e Conformidade"
            description="Alinhamento responsável com normas nacionais, boas práticas de engenharia e, quando requerido, padrões internacionais."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {COMPLIANCE_ITEMS.slice(0, 3).map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.1}>
                <div className="p-6 rounded-sm glass-panel glow-border h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-sm bg-[oklch(0.7_0.17_155/0.1)] border border-[oklch(0.7_0.17_155/0.2)]">
                      <Shield size={20} className="text-[oklch(0.7_0.17_155)]" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-foreground">{item.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{item.description}</p>
                  <ul className="space-y-2">
                    {item.standards.map((std) => (
                      <li key={std} className="flex items-start gap-2 text-xs text-muted-foreground">
                        <CheckCircle2 size={12} className="text-[oklch(0.7_0.17_155)] mt-0.5 shrink-0" />
                        {std}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="mt-10 text-center">
            <Link
              href="/compliance"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold border border-[oklch(0.7_0.17_155/0.3)] text-[oklch(0.7_0.17_155)] rounded-sm hover:bg-[oklch(0.7_0.17_155/0.1)] transition-all"
            >
              Ver Compliance Completo
              <ArrowRight size={16} />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== 7) SAFETY & QUALITY COMMITMENT ===== */}
      <section className="py-20 lg:py-28">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div>
                <div className="inline-flex items-center gap-2 mb-4">
                  <span className="w-8 h-px bg-[oklch(0.8_0.16_75)]" />
                  <span className="font-mono text-xs uppercase tracking-widest text-[oklch(0.8_0.16_75)]">Qualidade & Segurança</span>
                </div>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-foreground mb-6">
                  Compromisso com Excelência Operacional
                </h2>
                <p className="text-base text-muted-foreground leading-relaxed mb-8">
                  Cada projeto é executado sob rigorosos padrões de qualidade e segurança do trabalho.
                  Inspeções em pontos críticos, documentação fotográfica e testes de aceitação garantem
                  a conformidade com as especificações do projeto.
                </p>
                <div className="space-y-4">
                  {[
                    "Controle de qualidade em todas as etapas",
                    "Supervisão técnica especializada em campo",
                    "Documentação fotográfica de execução",
                    "Testes de aceitação conforme normas técnicas",
                    "Cultura de segurança do trabalho",
                    "Checklists de execução padronizados",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-sm bg-[oklch(0.8_0.16_75/0.15)] border border-[oklch(0.8_0.16_75/0.3)] flex items-center justify-center shrink-0">
                        <CheckCircle2 size={12} className="text-[oklch(0.8_0.16_75)]" />
                      </div>
                      <span className="text-sm text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <Link
                    href="/qualidade"
                    className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold border border-[oklch(0.8_0.16_75/0.3)] text-[oklch(0.8_0.16_75)] rounded-sm hover:bg-[oklch(0.8_0.16_75/0.1)] transition-all"
                  >
                    Saiba Mais
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="rounded-sm overflow-hidden h-48">
                    <img src={IMAGES.fire} alt="Fire safety inspection" className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <div className="rounded-sm overflow-hidden h-64">
                    <img src={IMAGES.electrical} alt="Electrical quality control" className="w-full h-full object-cover" loading="lazy" />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="rounded-sm overflow-hidden h-64">
                    <img src={IMAGES.hydraulic} alt="Hydraulic system inspection" className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <div className="rounded-sm overflow-hidden h-48">
                    <img src={IMAGES.projectShowcase} alt="Project execution" className="w-full h-full object-cover" loading="lazy" />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== 8) FINAL STRONG CTA ===== */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.15_0.02_195)] via-[oklch(0.12_0.015_270)] to-[oklch(0.1_0.01_270)]" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[oklch(0.75_0.15_195/0.1)] rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[oklch(0.8_0.16_75/0.08)] rounded-full blur-[120px]" />
        </div>

        <div className="relative container text-center">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-sm bg-[oklch(0.75_0.15_195/0.1)] border border-[oklch(0.75_0.15_195/0.2)]">
                <span className="font-mono text-xs uppercase tracking-widest text-[oklch(0.75_0.15_195)]">
                  Próximo Passo
                </span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-foreground mb-6">
                Pronto para elevar o padrão da sua infraestrutura industrial?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-2xl mx-auto">
                Entre em contato para uma consulta técnica inicial. Vamos entender suas necessidades
                e apresentar uma abordagem de engenharia adequada ao seu projeto.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  href="/contato"
                  className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold bg-[oklch(0.75_0.15_195)] text-[oklch(0.1_0.01_270)] rounded-sm hover:bg-[oklch(0.8_0.15_195)] transition-all"
                >
                  Solicitar Proposta Técnica
                  <ArrowRight size={18} />
                </Link>
                <Link
                  href="/processo"
                  className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold border border-[oklch(0.4_0.01_270)] text-foreground rounded-sm hover:bg-[oklch(1_0_0/0.05)] transition-all"
                >
                  Conhecer Nosso Processo
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PageLayout>
  );
}
