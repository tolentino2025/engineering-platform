/**
 * Vercel Serverless Function — POST /api/send-proposal
 * Recebe os dados do formulário de contato e envia e-mail via Brevo
 * para jonel@jonel.eng.br.
 */
import { sendProposalEmail, type ProposalPayload } from "./_brevo";

type VercelRequest = {
  method?: string;
  body?: any;
  headers: Record<string, string | string[] | undefined>;
};

type VercelResponse = {
  status: (code: number) => VercelResponse;
  json: (body: any) => VercelResponse;
  setHeader: (name: string, value: string) => VercelResponse;
  end: (body?: any) => VercelResponse;
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // CORS (mesma origem em produção, mas útil para previews)
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.status(204).end();
    return;
  }
  if (req.method !== "POST") {
    res.status(405).json({ ok: false, error: "Método não permitido. Use POST." });
    return;
  }

  let payload: ProposalPayload;
  try {
    payload =
      typeof req.body === "string" ? JSON.parse(req.body) : (req.body as ProposalPayload);
  } catch {
    res.status(400).json({ ok: false, error: "JSON inválido." });
    return;
  }

  const result = await sendProposalEmail(payload || {});
  if (result.ok) {
    res.status(200).json({ ok: true, messageId: result.messageId });
  } else {
    res.status(result.status).json({ ok: false, error: result.error });
  }
}
