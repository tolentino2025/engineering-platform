/* ============================================================
   DESIGN: Dark Industrial Command Center
   ENGINEERING PROCESS PAGE — Full 8-step breakdown
   ============================================================ */
import { Link } from "wouter";
import { useEffect } from "react";
import { motion } from "framer-motion";
import {
  Search, Shield, PenTool, FileCheck, Wrench, ClipboardCheck,
  FileText, RefreshCw, ArrowRight, CheckCircle2
} from "lucide-react";
import PageLayout from "@/components/PageLayout";
import ScrollReveal from "@/components/ScrollReveal";
import { PROCESS_STEPS } from "@/data/siteData";

const iconMap: Record<string, React.ElementType> = {
  Search, Shield, PenTool, FileCheck, Wrench, ClipboardCheck, FileText, RefreshCw,
};

export default function Process() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.1_0.015_195/0.3)] to-transparent" />
        <div className="relative container">
          <ScrollReveal>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-sm bg-[oklch(0.75_0.15_195/0.1)] border border-[oklch(0.75_0.15_195/0.2)]">
                <span className="font-mono text-xs uppercase tracking-widest text-[oklch(0.75_0.15_195)]">Processo de Engenharia</span>
              </div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-foreground mb-4">
                Metodologia de <span className="text-gradient-cyan">Execução</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                Processo estruturado em 8 etapas com pontos de controle, validação técnica e
                documentação em cada fase. Do diagnóstico inicial ao suporte ao ciclo de vida.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="relative">
            {/* Vertical timeline line */}
            <div className="hidden lg:block absolute left-[39px] top-0 bottom-0 w-px bg-gradient-to-b from-[oklch(0.75_0.15_195/0.4)] via-[oklch(0.75_0.15_195/0.2)] to-transparent" />

            <div className="space-y-12 lg:space-y-16">
              {PROCESS_STEPS.map((step, i) => {
                const Icon = iconMap[step.icon] || Search;
                return (
                  <ScrollReveal key={step.id} delay={i * 0.05}>
                    <div className="flex gap-6 lg:gap-10">
                      {/* Step number & icon */}
                      <div className="shrink-0 flex flex-col items-center">
                        <div className="relative w-20 h-20 rounded-sm bg-[oklch(0.16_0.012_270)] border border-[oklch(0.75_0.15_195/0.3)] flex items-center justify-center glow-border">
                          <Icon size={28} className="text-[oklch(0.75_0.15_195)]" />
                          <span className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-[oklch(0.75_0.15_195)] text-[oklch(0.1_0.01_270)] font-mono text-sm font-bold flex items-center justify-center">
                            {step.id}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 pb-8">
                        <h3 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-3">
                          {step.title}
                        </h3>
                        <p className="text-base text-muted-foreground leading-relaxed mb-4 max-w-2xl">
                          {step.description}
                        </p>
                        <div className="p-4 rounded-sm glass-panel">
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {step.details}
                          </p>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Summary */}
      <section className="py-16 lg:py-24 bg-[oklch(0.1_0.008_270)]">
        <div className="container">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Processo Integrado de Ponta a Ponta
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed mb-8">
                Cada etapa alimenta a próxima com informações validadas, criando uma cadeia de
                rastreabilidade que garante controle total sobre o projeto. Da concepção à operação,
                cada decisão é documentada e cada entregável é verificado.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
                {[
                  { label: "Etapas", value: "8" },
                  { label: "Pontos de Controle", value: "24+" },
                  { label: "Documentos", value: "15+" },
                  { label: "Verificações", value: "100%" },
                ].map((item) => (
                  <div key={item.label} className="p-4 rounded-sm glass-panel">
                    <div className="font-display text-2xl font-bold text-[oklch(0.75_0.15_195)]">{item.value}</div>
                    <div className="text-xs text-muted-foreground mt-1">{item.label}</div>
                  </div>
                ))}
              </div>
              <Link
                href="/contato"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-base font-semibold bg-[oklch(0.75_0.15_195)] text-[oklch(0.1_0.01_270)] rounded-sm hover:bg-[oklch(0.8_0.15_195)] transition-all"
              >
                Solicitar Proposta
                <ArrowRight size={18} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PageLayout>
  );
}
