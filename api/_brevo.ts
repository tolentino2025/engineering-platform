/**
 * Brevo (Sendinblue) e-mail handler — usado pela serverless function (/api/send-proposal.ts)
 * e pelo middleware de dev do vite (vite.config.ts).
 *
 * Variáveis de ambiente esperadas:
 *  - BREVO_API_KEY        Chave da API Brevo (obrigatória)
 *  - BREVO_SENDER_EMAIL   E-mail do remetente verificado no Brevo (default: contato@jonel.eng.br)
 *  - BREVO_SENDER_NAME    Nome do remetente (default: "Site Jonel Engenharia")
 *  - PROPOSAL_TO_EMAIL    E-mail de destino (default: jonel@jonel.eng.br)
 */

export type ProposalPayload = {
  nome?: string;
  empresa?: string;
  email?: string;
  telefone?: string;
  disciplina?: string;
  descricao?: string;
};

const DISCIPLINA_LABEL: Record<string, string> = {
  fire: "Engenharia de Incêndio",
  electrical: "Sistemas Elétricos",
  hydraulic: "Infraestrutura Hidráulica",
  regulatory: "Engenharia Regulatória",
  multiple: "Múltiplas Disciplinas",
};

function escapeHtml(str: string): string {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function validate(payload: ProposalPayload): string | null {
  if (!payload || typeof payload !== "object") return "Payload inválido.";
  const { nome, empresa, email, descricao } = payload;
  if (!nome || !nome.trim()) return "Nome é obrigatório.";
  if (!empresa || !empresa.trim()) return "Empresa é obrigatória.";
  if (!email || !email.trim()) return "E-mail é obrigatório.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return "E-mail inválido.";
  if (!descricao || !descricao.trim()) return "Descrição do projeto é obrigatória.";
  return null;
}

function buildHtml(p: ProposalPayload): string {
  const disciplina = p.disciplina ? DISCIPLINA_LABEL[p.disciplina] ?? p.disciplina : "—";
  const telefone = p.telefone?.trim() || "—";
  return `<!DOCTYPE html>
<html lang="pt-BR">
<head><meta charset="UTF-8"><title>Solicitação de Proposta Técnica</title></head>
<body style="font-family: Arial, Helvetica, sans-serif; background:#f5f5f5; padding:24px; color:#111;">
  <div style="max-width:640px; margin:0 auto; background:#ffffff; border:1px solid #e5e5e5; border-radius:6px; overflow:hidden;">
    <div style="background:#9b1c1c; color:#fff; padding:20px 24px;">
      <h1 style="margin:0; font-size:20px; letter-spacing:0.5px;">Jonel Engenharia</h1>
      <p style="margin:4px 0 0; font-size:13px; opacity:0.9;">Nova solicitação de proposta técnica</p>
    </div>
    <div style="padding:24px;">
      <table style="width:100%; border-collapse:collapse; font-size:14px;">
        <tr><td style="padding:8px 0; color:#555; width:140px;"><strong>Nome</strong></td><td style="padding:8px 0;">${escapeHtml(p.nome!)}</td></tr>
        <tr><td style="padding:8px 0; color:#555;"><strong>Empresa</strong></td><td style="padding:8px 0;">${escapeHtml(p.empresa!)}</td></tr>
        <tr><td style="padding:8px 0; color:#555;"><strong>E-mail</strong></td><td style="padding:8px 0;"><a href="mailto:${escapeHtml(p.email!)}" style="color:#9b1c1c; text-decoration:none;">${escapeHtml(p.email!)}</a></td></tr>
        <tr><td style="padding:8px 0; color:#555;"><strong>Telefone</strong></td><td style="padding:8px 0;">${escapeHtml(telefone)}</td></tr>
        <tr><td style="padding:8px 0; color:#555;"><strong>Disciplina</strong></td><td style="padding:8px 0;">${escapeHtml(disciplina)}</td></tr>
      </table>
      <hr style="border:none; border-top:1px solid #eee; margin:20px 0;" />
      <h3 style="margin:0 0 8px; font-size:14px; color:#555;">Descrição do projeto</h3>
      <p style="white-space:pre-wrap; line-height:1.6; margin:0; font-size:14px;">${escapeHtml(p.descricao!)}</p>
    </div>
    <div style="background:#fafafa; padding:14px 24px; font-size:12px; color:#888; border-top:1px solid #eee;">
      Enviado automaticamente a partir do formulário de contato em <strong>jonel.eng.br/contato</strong>.
    </div>
  </div>
</body>
</html>`;
}

function buildText(p: ProposalPayload): string {
  const disciplina = p.disciplina ? DISCIPLINA_LABEL[p.disciplina] ?? p.disciplina : "—";
  return [
    "Nova solicitação de proposta técnica — Jonel Engenharia",
    "",
    `Nome: ${p.nome}`,
    `Empresa: ${p.empresa}`,
    `E-mail: ${p.email}`,
    `Telefone: ${p.telefone?.trim() || "—"}`,
    `Disciplina: ${disciplina}`,
    "",
    "Descrição do projeto:",
    p.descricao,
    "",
    "— Enviado de jonel.eng.br/contato",
  ].join("\n");
}

export async function sendProposalEmail(payload: ProposalPayload): Promise<
  { ok: true; messageId?: string } | { ok: false; status: number; error: string }
> {
  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) {
    return { ok: false, status: 500, error: "BREVO_API_KEY não configurada no servidor." };
  }

  const validationError = validate(payload);
  if (validationError) {
    return { ok: false, status: 400, error: validationError };
  }

  const senderEmail = process.env.BREVO_SENDER_EMAIL || "contato@jonel.eng.br";
  const senderName = process.env.BREVO_SENDER_NAME || "Site Jonel Engenharia";
  const toEmail = process.env.PROPOSAL_TO_EMAIL || "jonel@jonel.eng.br";

  const body = {
    sender: { name: senderName, email: senderEmail },
    to: [{ email: toEmail, name: "Jonel Engenharia" }],
    replyTo: { email: payload.email!, name: payload.nome! },
    subject: `[Proposta] ${payload.empresa} — ${payload.nome}`,
    htmlContent: buildHtml(payload),
    textContent: buildText(payload),
    tags: ["site-contato", "proposta-tecnica"],
  };

  try {
    const res = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "api-key": apiKey,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(body),
    });

    const text = await res.text();
    let data: any = null;
    try {
      data = text ? JSON.parse(text) : null;
    } catch {
      /* não-JSON */
    }

    if (!res.ok) {
      const msg = data?.message || data?.code || text || `HTTP ${res.status}`;
      return { ok: false, status: res.status, error: `Brevo: ${msg}` };
    }

    return { ok: true, messageId: data?.messageId };
  } catch (err: any) {
    return { ok: false, status: 502, error: `Falha ao contatar Brevo: ${err?.message || err}` };
  }
}
