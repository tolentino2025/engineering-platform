/* ============================================================
   DESIGN: Dark Industrial Command Center
   CONTACT PAGE
   ============================================================ */
import { useEffect, useState } from "react";
import { Mail, Phone, MapPin, ArrowRight, CheckCircle2, Send, Loader2 } from "lucide-react";
import { toast } from "sonner";
import PageLayout from "@/components/PageLayout";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";

type FormState = {
  nome: string;
  empresa: string;
  email: string;
  telefone: string;
  disciplina: string;
  descricao: string;
};

const INITIAL_FORM: FormState = {
  nome: "",
  empresa: "",
  email: "",
  telefone: "",
  disciplina: "",
  descricao: "",
};

export default function Contact() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState<FormState>(INITIAL_FORM);

  const updateField = <K extends keyof FormState>(key: K, value: FormState[K]) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    try {
      const res = await fetch("/api/send-proposal", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data?.ok) {
        const msg = data?.error || "Não foi possível enviar a mensagem. Tente novamente.";
        toast.error(msg);
        return;
      }
      setSubmitted(true);
      setForm(INITIAL_FORM);
      toast.success("Mensagem enviada com sucesso! Entraremos em contato em breve.");
    } catch (err: any) {
      toast.error(`Erro de rede: ${err?.message || err}`);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.93_0_0/0.3)] dark:from-[oklch(0.1_0.015_25/0.3)] to-transparent" />
        <div className="relative container">
          <ScrollReveal>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-sm bg-[oklch(0.32_0_0/0.1)] dark:bg-[oklch(0.58_0.22_25/0.1)] border border-[oklch(0.32_0_0/0.2)] dark:border-[oklch(0.58_0.22_25/0.2)]">
                <span className="font-mono text-xs uppercase tracking-widest text-[oklch(0.32_0_0)] dark:text-[oklch(0.58_0.22_25)]">Contato</span>
              </div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-foreground mb-4">
                Fale <span className="text-gradient-red">Conosco</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                Entre em contato para uma consulta técnica inicial. Vamos entender suas necessidades
                e apresentar uma abordagem de engenharia adequada ao seu projeto.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Map */}
      <section className="pb-0">
        <div className="container">
          <div className="rounded-sm overflow-hidden glow-border" style={{ height: "400px" }}>
            <iframe
              title="Localização Jonel Engenharia"
              src="https://maps.google.com/maps?q=R.+Jo%C3%A3o+Batista+Mastr%C3%A2ngelo,+89,+Jardim+Anton+von+Zuben,+Campinas,+SP,+13044-580&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <ScrollReveal className="lg:col-span-3" direction="left">
              <div className="p-8 rounded-sm glass-panel glow-border">
                <h2 className="font-display text-2xl font-bold text-foreground mb-6">Solicitar Proposta Técnica</h2>

                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-[oklch(0.42_0_0/0.15)] dark:bg-[oklch(0.7_0.17_155/0.15)] border border-[oklch(0.42_0_0/0.3)] dark:border-[oklch(0.7_0.17_155/0.3)] flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 size={32} className="text-[oklch(0.42_0_0)] dark:text-[oklch(0.7_0.17_155)]" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-foreground mb-2">Mensagem Enviada</h3>
                    <p className="text-sm text-muted-foreground">Entraremos em contato em até 24 horas úteis.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">Nome</label>
                        <input
                          type="text"
                          required
                          value={form.nome}
                          onChange={(e) => updateField("nome", e.target.value)}
                          disabled={submitting}
                          className="w-full px-4 py-3 rounded-sm bg-[oklch(0.93_0_0)] dark:bg-[oklch(0.14_0.01_270)] border border-[oklch(0.84_0_0/0.5)] dark:border-[oklch(0.25_0.01_270/0.5)] text-foreground text-sm focus:border-[oklch(0.32_0_0/0.5)] dark:focus:border-[oklch(0.58_0.22_25/0.5)] focus:outline-none transition-colors disabled:opacity-60"
                          placeholder="Seu nome completo"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">Empresa</label>
                        <input
                          type="text"
                          required
                          value={form.empresa}
                          onChange={(e) => updateField("empresa", e.target.value)}
                          disabled={submitting}
                          className="w-full px-4 py-3 rounded-sm bg-[oklch(0.93_0_0)] dark:bg-[oklch(0.14_0.01_270)] border border-[oklch(0.84_0_0/0.5)] dark:border-[oklch(0.25_0.01_270/0.5)] text-foreground text-sm focus:border-[oklch(0.32_0_0/0.5)] dark:focus:border-[oklch(0.58_0.22_25/0.5)] focus:outline-none transition-colors disabled:opacity-60"
                          placeholder="Nome da empresa"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">E-mail</label>
                        <input
                          type="email"
                          required
                          value={form.email}
                          onChange={(e) => updateField("email", e.target.value)}
                          disabled={submitting}
                          className="w-full px-4 py-3 rounded-sm bg-[oklch(0.93_0_0)] dark:bg-[oklch(0.14_0.01_270)] border border-[oklch(0.84_0_0/0.5)] dark:border-[oklch(0.25_0.01_270/0.5)] text-foreground text-sm focus:border-[oklch(0.32_0_0/0.5)] dark:focus:border-[oklch(0.58_0.22_25/0.5)] focus:outline-none transition-colors disabled:opacity-60"
                          placeholder="seu@email.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">Telefone</label>
                        <input
                          type="tel"
                          value={form.telefone}
                          onChange={(e) => updateField("telefone", e.target.value)}
                          disabled={submitting}
                          className="w-full px-4 py-3 rounded-sm bg-[oklch(0.93_0_0)] dark:bg-[oklch(0.14_0.01_270)] border border-[oklch(0.84_0_0/0.5)] dark:border-[oklch(0.25_0.01_270/0.5)] text-foreground text-sm focus:border-[oklch(0.32_0_0/0.5)] dark:focus:border-[oklch(0.58_0.22_25/0.5)] focus:outline-none transition-colors disabled:opacity-60"
                          placeholder="+55 (11) 0000-0000"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Disciplina de Interesse</label>
                      <select
                        value={form.disciplina}
                        onChange={(e) => updateField("disciplina", e.target.value)}
                        disabled={submitting}
                        className="w-full px-4 py-3 rounded-sm bg-[oklch(0.93_0_0)] dark:bg-[oklch(0.14_0.01_270)] border border-[oklch(0.84_0_0/0.5)] dark:border-[oklch(0.25_0.01_270/0.5)] text-foreground text-sm focus:border-[oklch(0.32_0_0/0.5)] dark:focus:border-[oklch(0.58_0.22_25/0.5)] focus:outline-none transition-colors disabled:opacity-60"
                      >
                        <option value="">Selecione uma disciplina</option>
                        <option value="fire">Engenharia de Incêndio</option>
                        <option value="electrical">Sistemas Elétricos</option>
                        <option value="hydraulic">Infraestrutura Hidráulica</option>
                        <option value="regulatory">Engenharia Regulatória</option>
                        <option value="multiple">Múltiplas Disciplinas</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Descrição do Projeto</label>
                      <textarea
                        rows={5}
                        required
                        value={form.descricao}
                        onChange={(e) => updateField("descricao", e.target.value)}
                        disabled={submitting}
                        className="w-full px-4 py-3 rounded-sm bg-[oklch(0.93_0_0)] dark:bg-[oklch(0.14_0.01_270)] border border-[oklch(0.84_0_0/0.5)] dark:border-[oklch(0.25_0.01_270/0.5)] text-foreground text-sm focus:border-[oklch(0.32_0_0/0.5)] dark:focus:border-[oklch(0.58_0.22_25/0.5)] focus:outline-none transition-colors resize-none disabled:opacity-60"
                        placeholder="Descreva brevemente o projeto, localização, tipo de ocupação e principais necessidades..."
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={submitting}
                      className="inline-flex items-center gap-2 px-7 py-3.5 text-base font-semibold bg-[oklch(0.32_0_0)] dark:bg-[oklch(0.58_0.22_25)] text-white rounded-sm hover:bg-[oklch(0.22_0_0)] dark:hover:bg-[oklch(0.50_0.20_25)] transition-all w-full justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {submitting ? (
                        <>
                          Enviando...
                          <Loader2 size={18} className="animate-spin" />
                        </>
                      ) : (
                        <>
                          Enviar Solicitação
                          <Send size={18} />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </ScrollReveal>

            {/* Contact Info */}
            <ScrollReveal className="lg:col-span-2" direction="right">
              <div className="space-y-6">
                <div className="p-6 rounded-sm glass-panel glow-border">
                  <h3 className="font-display text-lg font-bold text-foreground mb-4">Informações de Contato</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-sm bg-[oklch(0.32_0_0/0.1)] dark:bg-[oklch(0.58_0.22_25/0.1)] border border-[oklch(0.32_0_0/0.2)] dark:border-[oklch(0.58_0.22_25/0.2)] shrink-0">
                        <Mail size={16} className="text-[oklch(0.32_0_0)] dark:text-[oklch(0.58_0.22_25)]" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-foreground">E-mail</div>
                        <div className="text-sm text-muted-foreground">jonel@jonel.eng.br</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-sm bg-[oklch(0.32_0_0/0.1)] dark:bg-[oklch(0.58_0.22_25/0.1)] border border-[oklch(0.32_0_0/0.2)] dark:border-[oklch(0.58_0.22_25/0.2)] shrink-0">
                        <Phone size={16} className="text-[oklch(0.32_0_0)] dark:text-[oklch(0.58_0.22_25)]" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-foreground">Telefone</div>
                        <div className="text-sm text-muted-foreground">+55 (19) 3276-7313</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-sm bg-[oklch(0.32_0_0/0.1)] dark:bg-[oklch(0.58_0.22_25/0.1)] border border-[oklch(0.32_0_0/0.2)] dark:border-[oklch(0.58_0.22_25/0.2)] shrink-0">
                        <MapPin size={16} className="text-[oklch(0.32_0_0)] dark:text-[oklch(0.58_0.22_25)]" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-foreground">Endereço</div>
                        <div className="text-sm text-muted-foreground leading-relaxed">
                          R. João Batista Mastrângelo, 89<br />
                          Jardim Anton von Zuben<br />
                          Campinas — SP, 13044-580
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-sm glass-panel glow-border">
                  <h3 className="font-display text-lg font-bold text-foreground mb-4">Horário de Atendimento</h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex justify-between">
                      <span>Segunda a Quinta</span>
                      <span className="font-mono text-foreground">07:00 — 17:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sábado</span>
                      <span className="font-mono text-foreground">07:00 — 16:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Domingo</span>
                      <span className="font-mono text-muted-foreground">Fechado</span>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-3 pt-3 border-t border-[oklch(0.84_0_0/0.4)] dark:border-[oklch(0.25_0.01_270/0.4)]">
                    Sem execução de obras aos sábados e domingos.
                  </p>
                </div>

                <div className="p-6 rounded-sm bg-[oklch(0.32_0_0/0.05)] dark:bg-[oklch(0.58_0.22_25/0.05)] border border-[oklch(0.32_0_0/0.15)] dark:border-[oklch(0.58_0.22_25/0.15)]">
                  <h3 className="font-display text-lg font-bold text-foreground mb-2">Resposta Rápida</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Respondemos todas as solicitações em até 24 horas úteis. Para projetos urgentes,
                    entre em contato por telefone.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
