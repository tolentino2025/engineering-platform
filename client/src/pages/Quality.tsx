/* ============================================================
   DESIGN: Dark Industrial Command Center
   QUALITY & SAFETY PAGE — Expanded with gallery and progress
   ============================================================ */
import { useEffect } from "react";
import { Link } from "wouter";
import {
  CheckCircle2, ArrowRight, Shield, Eye, ClipboardCheck,
  FileText, Users, Wrench, Award, BarChart3
} from "lucide-react";
import PageLayout from "@/components/PageLayout";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeader from "@/components/SectionHeader";
import { IMAGES } from "@/data/siteData";

const qualitySections = [
  { title: "Filosofia de Controle de Qualidade", description: "Cada projeto segue um programa de qualidade estruturado com inspeções em pontos críticos, verificações de conformidade e documentação completa de todas as etapas construtivas.", icon: Award },
  { title: "Estrutura de Inspeção", description: "Inspeções são realizadas em marcos definidos do projeto: recebimento de materiais, pontos de montagem críticos, testes intermediários e verificação final antes do comissionamento.", icon: Eye },
  { title: "Supervisão Técnica", description: "Engenheiros especialistas acompanham a execução em campo, garantindo que cada instalação atenda às especificações do projeto executivo e às normas técnicas aplicáveis.", icon: Users },
  { title: "Documentação de Campo", description: "Registro fotográfico e documental de todas as etapas construtivas, criando um histórico completo e rastreável da execução do projeto.", icon: FileText },
  { title: "Cultura de Segurança", description: "Treinamentos específicos, diálogos diários de segurança, análise preliminar de riscos e permissões de trabalho para atividades de risco são parte integral da nossa operação.", icon: Shield },
  { title: "Checklists de Execução", description: "Checklists padronizados para cada tipo de atividade garantem que nenhuma etapa crítica seja omitida e que todos os requisitos de qualidade sejam atendidos.", icon: ClipboardCheck },
  { title: "Lógica de Comissionamento", description: "Processo estruturado de comissionamento com testes de aceitação definidos em protocolo, verificação de funcionalidade e validação de desempenho.", icon: Wrench },
  { title: "Validação de Testes", description: "Todos os testes são documentados com resultados comparados aos critérios de aceitação definidos em norma. Não-conformidades são tratadas antes da entrega final.", icon: BarChart3 },
];

export default function Quality() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.1_0.015_75/0.2)] to-transparent" />
        <div className="relative container">
          <ScrollReveal>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-sm bg-[oklch(0.8_0.16_75/0.1)] border border-[oklch(0.8_0.16_75/0.2)]">
                <span className="font-mono text-xs uppercase tracking-widest text-[oklch(0.8_0.16_75)]">Qualidade & Segurança</span>
              </div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-foreground mb-4">
                Excelência <span className="text-gradient-amber">Operacional</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                Qualidade e segurança não são departamentos — são princípios integrados em cada
                etapa do nosso processo de engenharia, da concepção à entrega final.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-8">
        <div className="container">
          <ScrollReveal>
            <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
              {[IMAGES.fire, IMAGES.electrical, IMAGES.hydraulic, IMAGES.projectShowcase].map((img, i) => (
                <div key={i} className="shrink-0 w-72 h-48 rounded-sm overflow-hidden">
                  <img src={img} alt={`Quality inspection ${i + 1}`} className="w-full h-full object-cover" loading="lazy" />
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Quality Sections Grid */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <SectionHeader
            tag="Programa de Qualidade"
            title="Controle em Todas as Etapas"
            description="Cada aspecto da qualidade e segurança é tratado com processos definidos, documentação e verificação."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {qualitySections.map((section, i) => {
              const Icon = section.icon;
              return (
                <ScrollReveal key={section.title} delay={i * 0.05}>
                  <div className="p-6 rounded-sm glass-panel glow-border h-full">
                    <div className="flex items-start gap-4">
                      <div className="p-2.5 rounded-sm bg-[oklch(0.8_0.16_75/0.1)] border border-[oklch(0.8_0.16_75/0.2)] shrink-0">
                        <Icon size={20} className="text-[oklch(0.8_0.16_75)]" />
                      </div>
                      <div>
                        <h3 className="font-display text-lg font-bold text-foreground mb-2">{section.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{section.description}</p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Progress Indicators */}
      <section className="py-16 lg:py-24 bg-[oklch(0.1_0.008_270)]">
        <div className="container">
          <SectionHeader
            tag="Indicadores"
            title="Métricas de Qualidade"
            description="Indicadores que refletem nosso compromisso com a excelência operacional."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "Conformidade em Inspeções", value: 98, color: "oklch(0.7_0.17_155)" },
              { label: "Documentação Completa", value: 100, color: "oklch(0.75_0.15_195)" },
              { label: "Testes de Aceitação", value: 95, color: "oklch(0.8_0.16_75)" },
              { label: "Satisfação do Cliente", value: 97, color: "oklch(0.7_0.17_155)" },
            ].map((metric, i) => (
              <ScrollReveal key={metric.label} delay={i * 0.1}>
                <div className="p-6 rounded-sm glass-panel glow-border text-center">
                  <div className="relative w-24 h-24 mx-auto mb-4">
                    <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="42" fill="none" stroke="oklch(0.2 0.01 270)" strokeWidth="6" />
                      <circle
                        cx="50" cy="50" r="42" fill="none"
                        stroke={metric.color}
                        strokeWidth="6"
                        strokeLinecap="round"
                        strokeDasharray={`${metric.value * 2.64} ${264 - metric.value * 2.64}`}
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="font-mono text-lg font-bold text-foreground">{metric.value}%</span>
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground">{metric.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24">
        <div className="container text-center">
          <ScrollReveal>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Qualidade que se documenta e se comprova
            </h2>
            <p className="text-base text-muted-foreground mb-8 max-w-2xl mx-auto">
              Conheça nosso processo completo de engenharia e como garantimos qualidade em cada etapa.
            </p>
            <Link
              href="/processo"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-base font-semibold bg-[oklch(0.75_0.15_195)] text-[oklch(0.1_0.01_270)] rounded-sm hover:bg-[oklch(0.8_0.15_195)] transition-all"
            >
              Ver Processo de Engenharia
              <ArrowRight size={18} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </PageLayout>
  );
}
