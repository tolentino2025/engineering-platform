/* DESIGN: Dark Industrial Command Center - 404 Page */
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import PageLayout from "@/components/PageLayout";

export default function NotFound() {
  return (
    <PageLayout>
      <section className="min-h-[70vh] flex items-center justify-center">
        <div className="text-center">
          <div className="font-mono text-8xl font-bold text-[oklch(0.58_0.22_25/0.2)] mb-4">404</div>
          <h1 className="font-display text-3xl font-bold text-foreground mb-4">Pagina nao encontrada</h1>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            A pagina que voce esta procurando nao existe ou foi movida.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold bg-[oklch(0.58_0.22_25)] text-white rounded-sm hover:bg-[oklch(0.50_0.20_25)] transition-all"
          >
            <ArrowLeft size={16} />
            Voltar ao Inicio
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
