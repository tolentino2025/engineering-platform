/* ============================================================
   Assistente virtual da Jonel Engenharia (chat com IA)
   Widget flutuante — atendimento e qualificação de leads.
   ============================================================ */
import { useEffect, useRef, useState } from "react";
import { MessageCircle, X, Send, Loader2 } from "lucide-react";

type ChatMessage = { role: "user" | "assistant"; text: string };

const WELCOME: ChatMessage = {
  role: "assistant",
  text:
    "Olá! 👋 Sou a Júlia, assistente da Jonel Engenharia. Posso ajudar com proteção contra incêndio (SPCI), sistemas elétricos, hidráulica, AVCB e regularização junto ao Corpo de Bombeiros. Como posso ajudar no seu projeto?",
};

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([WELCOME]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [leadDone, setLeadDone] = useState(false);

  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading, open]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 100);
  }, [open]);

  const send = async () => {
    const text = input.trim();
    if (!text || loading) return;

    const next = [...messages, { role: "user" as const, text }];
    setMessages(next);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: next.map((m) => ({ role: m.role, content: m.text })),
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data?.ok) {
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            text:
              data?.error?.includes("ANTHROPIC")
                ? "O atendimento por IA ainda não foi ativado. Por favor, use o formulário em /contato ou ligue para (19) 3276-7313."
                : "Tive um problema para responder agora. Pode tentar novamente em instantes? Se preferir, use o formulário em /contato.",
          },
        ]);
        return;
      }
      setMessages((prev) => [...prev, { role: "assistant", text: data.reply }]);
      if (data.leadRegistered) setLeadDone(true);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", text: "Falha de conexão. Verifique sua internet e tente novamente." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  return (
    <>
      {/* Botão flutuante */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Fechar atendimento" : "Abrir atendimento"}
        className="fixed bottom-5 right-5 z-[60] w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center hover:opacity-90 transition-all"
      >
        {open ? <X size={24} /> : <MessageCircle size={26} />}
        {!open && (
          <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-[oklch(0.7_0.17_155)] border-2 border-background" />
        )}
      </button>

      {/* Janela de chat */}
      {open && (
        <div className="fixed bottom-24 right-5 z-[60] w-[calc(100vw-2.5rem)] max-w-[380px] h-[min(560px,calc(100vh-8rem))] flex flex-col rounded-xl overflow-hidden border border-border bg-card shadow-2xl">
          {/* Header */}
          <div className="flex items-center gap-3 px-4 py-3 bg-primary text-primary-foreground shrink-0">
            <div className="w-9 h-9 rounded-full bg-[oklch(1_0_0/0.18)] flex items-center justify-center font-display text-lg">
              J
            </div>
            <div className="min-w-0">
              <div className="font-display text-base leading-tight tracking-wide">Júlia — Jonel Engenharia</div>
              <div className="flex items-center gap-1.5 text-xs opacity-90">
                <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.7_0.17_155)]" />
                Atendimento online
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Fechar"
              className="ml-auto p-1.5 rounded-md hover:bg-[oklch(1_0_0/0.15)] transition-colors"
            >
              <X size={18} />
            </button>
          </div>

          {/* Mensagens */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-background">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[85%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap ${
                    m.role === "user"
                      ? "bg-primary text-primary-foreground rounded-br-sm"
                      : "bg-muted text-foreground rounded-bl-sm"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="px-3.5 py-3 rounded-2xl rounded-bl-sm bg-muted text-muted-foreground flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-current animate-bounce [animation-delay:-0.3s]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-current animate-bounce [animation-delay:-0.15s]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-current animate-bounce" />
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="shrink-0 border-t border-border bg-card p-2.5">
            {leadDone && (
              <div className="mb-2 px-3 py-2 rounded-md bg-[oklch(0.7_0.17_155/0.12)] border border-[oklch(0.7_0.17_155/0.3)] text-xs text-foreground">
                ✓ Suas informações foram encaminhadas à nossa equipe de engenharia.
              </div>
            )}
            <div className="flex items-end gap-2">
              <textarea
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={onKeyDown}
                rows={1}
                placeholder="Escreva sua mensagem..."
                disabled={loading}
                className="flex-1 resize-none max-h-28 px-3 py-2.5 rounded-lg bg-background border border-border text-foreground text-sm focus:border-primary/60 focus:outline-none transition-colors disabled:opacity-60"
              />
              <button
                onClick={send}
                disabled={loading || !input.trim()}
                aria-label="Enviar"
                className="shrink-0 w-10 h-10 rounded-lg bg-primary text-primary-foreground flex items-center justify-center hover:opacity-90 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {loading ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
              </button>
            </div>
            <p className="mt-1.5 text-[10px] text-muted-foreground text-center">
              Assistente virtual • respostas geradas por IA podem conter imprecisões
            </p>
          </div>
        </div>
      )}
    </>
  );
}
