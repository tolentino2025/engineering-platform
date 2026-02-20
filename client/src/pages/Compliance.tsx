/* ============================================================
   DESIGN: Dark Industrial Command Center
   COMPLIANCE & REGULATORY PAGE
   ============================================================ */
import { useEffect } from "react";
import { Link } from "wouter";
import {
  Shield, CheckCircle2, ArrowRight, BookOpen, Globe,
  Award, ShieldCheck, Flame, AlertTriangle
} from "lucide-react";
import PageLayout from "@/components/PageLayout";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeader from "@/components/SectionHeader";
import { COMPLIANCE_ITEMS } from "@/data/siteData";

const iconMap: Record<string, React.ElementType> = {
  Flame, BookOpen, Award, Globe, ShieldCheck,
};

export default function Compliance() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.1_0.015_155/0.2)] to-transparent" />
        <div className="relative container">
          <ScrollReveal>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-sm bg-[oklch(0.7_0.17_155/0.1)] border border-[oklch(0.7_0.17_155/0.2)]">
                <span className="font-mono text-xs uppercase tracking-widest text-[oklch(0.7_0.17_155)]">Compliance & Regulatório</span>
              </div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-foreground mb-4">
                Conformidade <span className="text-[oklch(0.7_0.17_155)]">Responsável</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                Alinhamento responsável com normas nacionais, boas práticas de engenharia e,
                quando requerido por seguradoras ou operações multinacionais, padrões internacionais.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8">
        <div className="container">
          <ScrollReveal>
            <div className="p-6 rounded-sm bg-[oklch(0.8_0.16_75/0.05)] border border-[oklch(0.8_0.16_75/0.15)]">
              <div className="flex items-start gap-3">
                <AlertTriangle size={20} className="text-[oklch(0.8_0.16_75)] shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-display text-base font-bold text-foreground mb-1">Nota Importante</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    As informações nesta página descrevem nossa abordagem de alinhamento com normas e regulamentações.
                    Não constituem certificações, garantias de aprovação ou declarações de conformidade automática.
                    Cada projeto é avaliado individualmente conforme seus requisitos específicos.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Compliance Items */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <SectionHeader
            tag="Áreas de Conformidade"
            title="Abordagem Regulatória"
            description="Tratamento responsável e transparente de cada aspecto regulatório aplicável aos nossos projetos."
          />

          <div className="space-y-8">
            {COMPLIANCE_ITEMS.map((item, i) => {
              const Icon = iconMap[item.icon] || Shield;
              return (
                <ScrollReveal key={item.title} delay={i * 0.05}>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6 lg:p-8 rounded-sm glass-panel glow-border">
                    <div className="lg:col-span-1">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2.5 rounded-sm bg-[oklch(0.7_0.17_155/0.1)] border border-[oklch(0.7_0.17_155/0.2)]">
                          <Icon size={20} className="text-[oklch(0.7_0.17_155)]" />
                        </div>
                        <h3 className="font-display text-xl font-bold text-foreground">{item.title}</h3>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                    <div className="lg:col-span-2">
                      <h4 className="font-display text-sm font-bold text-foreground uppercase tracking-wide mb-3">Normas e Referências</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {item.standards.map((std) => (
                          <div key={std} className="flex items-start gap-2 p-3 rounded-sm bg-[oklch(0.14_0.01_270/0.5)]">
                            <CheckCircle2 size={14} className="text-[oklch(0.7_0.17_155)] mt-0.5 shrink-0" />
                            <span className="text-sm text-muted-foreground">{std}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-16 lg:py-24 bg-[oklch(0.1_0.008_270)]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Abordagem Transparente e Responsável
              </h2>
              <div className="space-y-4">
                {[
                  "Mapeamento completo de requisitos regulatórios no início de cada projeto",
                  "Identificação clara de normas obrigatórias vs. recomendadas",
                  "Comunicação transparente sobre limitações e responsabilidades",
                  "Acompanhamento de atualizações normativas relevantes",
                  "Documentação de todas as decisões de conformidade",
                  "Sem exageros ou falsas certificações",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-[oklch(0.7_0.17_155)] mt-0.5 shrink-0" />
                    <span className="text-sm text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="p-8 rounded-sm glass-panel glow-border">
                <blockquote className="text-lg text-foreground leading-relaxed font-display italic">
                  "Conformidade não é um selo — é um processo contínuo de alinhamento entre engenharia,
                  regulamentação e boas práticas. Tratamos cada requisito com a seriedade que ele exige."
                </blockquote>
                <div className="mt-4 text-sm text-muted-foreground">— Equipe de Engenharia Regulatória</div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24">
        <div className="container text-center">
          <ScrollReveal>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Dúvidas sobre conformidade regulatória?
            </h2>
            <p className="text-base text-muted-foreground mb-8 max-w-2xl mx-auto">
              Entre em contato para uma consulta sobre os requisitos regulatórios aplicáveis ao seu projeto.
            </p>
            <Link
              href="/contato"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-base font-semibold bg-[oklch(0.58_0.22_25)] text-white rounded-sm hover:bg-[oklch(0.50_0.20_25)] transition-all"
            >
              Falar com Especialista
              <ArrowRight size={18} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </PageLayout>
  );
}
