/* ============================================================
   DESIGN: Dark Industrial Command Center
   DISCIPLINES PAGE — Deep technical content for each discipline
   ============================================================ */
import { useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import {
  Flame, Zap, Droplets, Scale, ArrowRight, CheckCircle2,
  ChevronDown, FileText, Shield, Wrench, AlertTriangle
} from "lucide-react";
import PageLayout from "@/components/PageLayout";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeader from "@/components/SectionHeader";
import { IMAGES, DISCIPLINES } from "@/data/siteData";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const iconMap: Record<string, React.ElementType> = { Flame, Zap, Droplets, Scale };

export default function Disciplines() {
  const [location] = useLocation();

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash) {
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 300);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.1_0.015_25/0.3)] to-transparent" />
        <div className="relative container">
          <ScrollReveal>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-sm bg-[oklch(0.58_0.22_25/0.1)] border border-[oklch(0.58_0.22_25/0.2)]">
                <span className="font-mono text-xs uppercase tracking-widest text-[oklch(0.58_0.22_25)]">Disciplinas Técnicas</span>
              </div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-foreground mb-4">
                Vertentes de <span className="text-gradient-red">Engenharia</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                Cada disciplina opera como uma vertical técnica independente, com metodologia própria,
                normas específicas e entregáveis definidos. Conheça em profundidade cada área de atuação.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Disciplines */}
      {DISCIPLINES.map((disc, idx) => {
        const Icon = iconMap[disc.icon] || Flame;
        const isEven = idx % 2 === 0;

        return (
          <section
            key={disc.id}
            id={disc.id}
            className={`py-20 lg:py-28 ${isEven ? "" : "bg-[oklch(0.1_0.008_270)]"}`}
          >
            <div className="container">
              {/* Header with image */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                <ScrollReveal direction={isEven ? "left" : "right"} className={isEven ? "" : "lg:order-2"}>
                  <div className="relative rounded-sm overflow-hidden">
                    <img
                      src={IMAGES[disc.image as keyof typeof IMAGES]}
                      alt={disc.title}
                      className="w-full h-80 lg:h-96 object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.1_0.01_270/0.5)] to-transparent" />
                  </div>
                </ScrollReveal>

                <ScrollReveal direction={isEven ? "right" : "left"} className={isEven ? "" : "lg:order-1"}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 rounded-sm bg-[oklch(0.58_0.22_25/0.1)] border border-[oklch(0.58_0.22_25/0.3)]">
                      <Icon size={24} className="text-[oklch(0.58_0.22_25)]" />
                    </div>
                    <span className="font-mono text-xs uppercase tracking-widest text-[oklch(0.58_0.22_25)]">
                      Disciplina {String(idx + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">{disc.title}</h2>
                  <p className="text-base text-muted-foreground leading-relaxed">{disc.overview}</p>
                </ScrollReveal>
              </div>

              {/* Details Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {/* Project Types */}
                <ScrollReveal delay={0}>
                  <div className="p-6 rounded-sm glass-panel glow-border h-full">
                    <div className="flex items-center gap-2 mb-4">
                      <Wrench size={16} className="text-[oklch(0.58_0.22_25)]" />
                      <h3 className="font-display text-base font-bold text-foreground uppercase tracking-wide">Tipos de Projeto</h3>
                    </div>
                    <ul className="space-y-2">
                      {disc.projectTypes.map((t) => (
                        <li key={t} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 size={12} className="text-[oklch(0.58_0.22_25)] mt-1 shrink-0" />
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>

                {/* Deliverables */}
                <ScrollReveal delay={0.1}>
                  <div className="p-6 rounded-sm glass-panel glow-border h-full">
                    <div className="flex items-center gap-2 mb-4">
                      <FileText size={16} className="text-[oklch(0.8_0.16_75)]" />
                      <h3 className="font-display text-base font-bold text-foreground uppercase tracking-wide">Entregáveis</h3>
                    </div>
                    <ul className="space-y-2">
                      {disc.deliverables.map((d) => (
                        <li key={d} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 size={12} className="text-[oklch(0.8_0.16_75)] mt-1 shrink-0" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>

                {/* Standards */}
                <ScrollReveal delay={0.2}>
                  <div className="p-6 rounded-sm glass-panel glow-border h-full">
                    <div className="flex items-center gap-2 mb-4">
                      <Shield size={16} className="text-[oklch(0.7_0.17_155)]" />
                      <h3 className="font-display text-base font-bold text-foreground uppercase tracking-wide">Normas Técnicas</h3>
                    </div>
                    <ul className="space-y-2">
                      {disc.standards.map((s) => (
                        <li key={s} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 size={12} className="text-[oklch(0.7_0.17_155)] mt-1 shrink-0" />
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>
              </div>

              {/* Execution Stages */}
              <ScrollReveal className="mb-12">
                <div className="p-6 rounded-sm glass-panel glow-border">
                  <h3 className="font-display text-lg font-bold text-foreground mb-6 uppercase tracking-wide">Etapas de Execução</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {disc.stages.map((stage, i) => (
                      <div key={stage} className="flex items-start gap-3 p-3 rounded-sm bg-[oklch(0.14_0.01_270/0.5)]">
                        <span className="font-mono text-lg font-bold text-[oklch(0.58_0.22_25/0.4)] shrink-0">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="text-sm text-muted-foreground">{stage}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* Risk & Compliance */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <ScrollReveal delay={0}>
                  <div className="p-6 rounded-sm glass-panel glow-border h-full">
                    <div className="flex items-center gap-2 mb-3">
                      <AlertTriangle size={16} className="text-[oklch(0.8_0.16_75)]" />
                      <h3 className="font-display text-base font-bold text-foreground uppercase tracking-wide">Mitigação de Riscos</h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{disc.riskMitigation}</p>
                  </div>
                </ScrollReveal>
                <ScrollReveal delay={0.1}>
                  <div className="p-6 rounded-sm glass-panel glow-border h-full">
                    <div className="flex items-center gap-2 mb-3">
                      <Shield size={16} className="text-[oklch(0.7_0.17_155)]" />
                      <h3 className="font-display text-base font-bold text-foreground uppercase tracking-wide">Tratamento de Compliance</h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{disc.complianceHandling}</p>
                  </div>
                </ScrollReveal>
              </div>

              {/* FAQ */}
              {disc.faqs.length > 0 && (
                <ScrollReveal>
                  <div className="p-6 rounded-sm glass-panel glow-border">
                    <h3 className="font-display text-lg font-bold text-foreground mb-4 uppercase tracking-wide">Perguntas Frequentes</h3>
                    <Accordion type="single" collapsible className="w-full">
                      {disc.faqs.map((faq, i) => (
                        <AccordionItem key={i} value={`faq-${i}`} className="border-[oklch(0.25_0.01_270/0.5)]">
                          <AccordionTrigger className="text-sm text-foreground hover:text-[oklch(0.58_0.22_25)] font-medium py-4">
                            {faq.q}
                          </AccordionTrigger>
                          <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-4">
                            {faq.a}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                </ScrollReveal>
              )}

              {/* CTA */}
              <ScrollReveal className="mt-10 text-center">
                <Link
                  href="/contato"
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold bg-[oklch(0.58_0.22_25)] text-white rounded-sm hover:bg-[oklch(0.50_0.20_25)] transition-all"
                >
                  Solicitar Proposta para {disc.title}
                  <ArrowRight size={16} />
                </Link>
              </ScrollReveal>
            </div>
          </section>
        );
      })}
    </PageLayout>
  );
}
