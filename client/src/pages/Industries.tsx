/* ============================================================
   DESIGN: Dark Industrial Command Center
   INDUSTRIES SERVED PAGE + RISK + TECHNOLOGY + MAINTENANCE + FAQ
   ============================================================ */
import { useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  ArrowRight, UtensilsCrossed, Pill, Truck, Factory, Building2,
  Warehouse, Server, AlertTriangle, Layers, LifeBuoy, Compass,
  Box, GitBranch, FileStack, Eye, RefreshCw, HeartHandshake,
  ChevronDown
} from "lucide-react";
import PageLayout from "@/components/PageLayout";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeader from "@/components/SectionHeader";
import { IMAGES, INDUSTRIES, RISK_MANAGEMENT, TECH_TOOLS, MAINTENANCE, FAQS } from "@/data/siteData";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const industryIconMap: Record<string, React.ElementType> = {
  UtensilsCrossed, Pill, Truck, Factory, Building2, Warehouse, Server,
};

const riskIconMap: Record<string, React.ElementType> = {
  AlertTriangle, Layers, LifeBuoy,
};

const techIconMap: Record<string, React.ElementType> = {
  Compass, Box, GitBranch, FileStack,
};

const maintenanceIconMap: Record<string, React.ElementType> = {
  Eye, RefreshCw, HeartHandshake,
};

export default function Industries() {
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
                <span className="font-mono text-xs uppercase tracking-widest text-[oklch(0.75_0.15_195)]">Segmentos Industriais</span>
              </div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-foreground mb-4">
                Indústrias <span className="text-gradient-cyan">Atendidas</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                Experiência em múltiplos segmentos industriais, cada um com seus requisitos específicos
                de engenharia, segurança e conformidade regulatória.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {INDUSTRIES.map((ind, i) => {
              const Icon = industryIconMap[ind.icon] || Factory;
              return (
                <ScrollReveal key={ind.id} delay={i * 0.05}>
                  <motion.div
                    className="group relative overflow-hidden rounded-sm glass-panel glow-border-hover h-full"
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="relative h-44 overflow-hidden">
                      <img
                        src={IMAGES[ind.image as keyof typeof IMAGES]}
                        alt={ind.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.1_0.01_270)] via-[oklch(0.1_0.01_270/0.3)] to-transparent" />
                      <div className="absolute top-4 left-4 p-2 rounded-sm bg-[oklch(0.13_0.01_270/0.8)] backdrop-blur-sm border border-[oklch(0.75_0.15_195/0.3)]">
                        <Icon size={20} className="text-[oklch(0.75_0.15_195)]" />
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="font-display text-lg font-bold text-foreground mb-2 group-hover:text-[oklch(0.75_0.15_195)] transition-colors">
                        {ind.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{ind.description}</p>
                    </div>
                  </motion.div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Risk Management */}
      <section id="risk" className="py-16 lg:py-24 bg-[oklch(0.1_0.008_270)]">
        <div className="container">
          <SectionHeader
            tag="Gestão de Riscos"
            title="Abordagem de Gestão de Riscos"
            description="Metodologia sistemática para identificação, análise e mitigação de riscos em projetos industriais."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {RISK_MANAGEMENT.map((item, i) => {
              const Icon = riskIconMap[item.icon] || AlertTriangle;
              return (
                <ScrollReveal key={item.title} delay={i * 0.1}>
                  <div className="p-6 rounded-sm glass-panel glow-border h-full">
                    <div className="p-3 rounded-sm bg-[oklch(0.8_0.16_75/0.1)] border border-[oklch(0.8_0.16_75/0.2)] inline-block mb-4">
                      <Icon size={24} className="text-[oklch(0.8_0.16_75)]" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-foreground mb-3">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technology & Tools */}
      <section id="technology" className="py-16 lg:py-24">
        <div className="container">
          <SectionHeader
            tag="Tecnologia"
            title="Ferramentas de Engenharia"
            description="Metodologias e ferramentas que suportam a qualidade e precisão dos nossos projetos."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {TECH_TOOLS.map((tool, i) => {
              const Icon = techIconMap[tool.icon] || Compass;
              return (
                <ScrollReveal key={tool.title} delay={i * 0.1}>
                  <div className="flex items-start gap-4 p-6 rounded-sm glass-panel glow-border h-full">
                    <div className="p-2.5 rounded-sm bg-[oklch(0.75_0.15_195/0.1)] border border-[oklch(0.75_0.15_195/0.2)] shrink-0">
                      <Icon size={22} className="text-[oklch(0.75_0.15_195)]" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-bold text-foreground mb-2">{tool.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{tool.description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Maintenance & Continuity */}
      <section id="maintenance" className="py-16 lg:py-24 bg-[oklch(0.1_0.008_270)]">
        <div className="container">
          <SectionHeader
            tag="Manutenção"
            title="Manutenção e Continuidade"
            description="Suporte ao ciclo de vida dos sistemas para garantir operação contínua e conformidade ao longo do tempo."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {MAINTENANCE.map((item, i) => {
              const Icon = maintenanceIconMap[item.icon] || RefreshCw;
              return (
                <ScrollReveal key={item.title} delay={i * 0.1}>
                  <div className="p-6 rounded-sm glass-panel glow-border h-full">
                    <div className="p-3 rounded-sm bg-[oklch(0.7_0.17_155/0.1)] border border-[oklch(0.7_0.17_155/0.2)] inline-block mb-4">
                      <Icon size={24} className="text-[oklch(0.7_0.17_155)]" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-foreground mb-3">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Enterprise Level */}
      <section id="faq" className="py-16 lg:py-24">
        <div className="container">
          <SectionHeader
            tag="FAQ"
            title="Perguntas Frequentes"
            description="Respostas para as principais questões de clientes industriais de grande porte."
          />

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {FAQS.map((faq, i) => (
                <ScrollReveal key={i} delay={i * 0.03}>
                  <AccordionItem value={`faq-${i}`} className="border-[oklch(0.25_0.01_270/0.5)]">
                    <AccordionTrigger className="text-base text-foreground hover:text-[oklch(0.75_0.15_195)] font-display font-semibold py-5 text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </ScrollReveal>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-[oklch(0.1_0.008_270)]">
        <div className="container text-center">
          <ScrollReveal>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Seu segmento industrial precisa de engenharia especializada?
            </h2>
            <p className="text-base text-muted-foreground mb-8 max-w-2xl mx-auto">
              Entre em contato para discutir os requisitos específicos do seu setor.
            </p>
            <Link
              href="/contato"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-base font-semibold bg-[oklch(0.75_0.15_195)] text-[oklch(0.1_0.01_270)] rounded-sm hover:bg-[oklch(0.8_0.15_195)] transition-all"
            >
              Solicitar Proposta
              <ArrowRight size={18} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </PageLayout>
  );
}
