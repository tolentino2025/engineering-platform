/* DESIGN: Dark Industrial Command Center — Jonel Engenharia + crimson red system */
import { Link } from "wouter";
import { Mail, Phone, MapPin } from "lucide-react";
import { IMAGES } from "@/data/siteData";

export default function Footer() {
  return (
    <footer className="bg-[oklch(0.22_0_0)] dark:bg-[oklch(0.1_0.008_270)] border-t border-[oklch(0.40_0_0/0.5)] dark:border-[oklch(0.2_0.01_270/0.5)]">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src={IMAGES.logo}
                alt="Jonel Engenharia"
                className="h-10 w-auto [filter:brightness(0)_invert(1)] dark:[filter:none]"
              />
            </div>
            <p className="text-sm text-[oklch(0.70_0_0)] dark:text-[oklch(0.6_0.01_250)] leading-relaxed">
              Engenharia com controle, precisão e rastreabilidade. Soluções integradas para infraestrutura industrial.
            </p>
          </div>

          {/* Disciplinas */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-[oklch(0.92_0_0)] dark:text-[oklch(0.58_0.22_25)] mb-4">Disciplinas</h4>
            <ul className="space-y-2">
              {["Engenharia de Incêndio", "Sistemas Elétricos", "Infraestrutura Hidráulica", "Engenharia Regulatória"].map((item) => (
                <li key={item}>
                  <Link href="/disciplinas" className="text-sm text-[oklch(0.70_0_0)] dark:text-[oklch(0.6_0.01_250)] hover:text-[oklch(0.98_0_0)] dark:hover:text-[oklch(0.9_0.005_250)] transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navegação */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-[oklch(0.92_0_0)] dark:text-[oklch(0.58_0.22_25)] mb-4">Navegação</h4>
            <ul className="space-y-2">
              {["Portfólio", "Processo", "Qualidade", "Compliance", "Indústrias", "FAQ"].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`} className="text-sm text-[oklch(0.70_0_0)] dark:text-[oklch(0.6_0.01_250)] hover:text-[oklch(0.98_0_0)] dark:hover:text-[oklch(0.9_0.005_250)] transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-[oklch(0.92_0_0)] dark:text-[oklch(0.58_0.22_25)] mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-[oklch(0.70_0_0)] dark:text-[oklch(0.6_0.01_250)]">
                <Mail size={14} className="text-[oklch(0.85_0_0)] dark:text-[oklch(0.58_0.22_25)]" />
                jonel@jonel.eng.br
              </li>
              <li className="flex items-center gap-2 text-sm text-[oklch(0.70_0_0)] dark:text-[oklch(0.6_0.01_250)]">
                <Phone size={14} className="text-[oklch(0.85_0_0)] dark:text-[oklch(0.58_0.22_25)]" />
                +55 (19) 3276-7313
              </li>
              <li className="flex items-start gap-2 text-sm text-[oklch(0.70_0_0)] dark:text-[oklch(0.6_0.01_250)]">
                <MapPin size={14} className="text-[oklch(0.85_0_0)] dark:text-[oklch(0.58_0.22_25)] mt-0.5 shrink-0" />
                Campinas, SP — Brasil
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-[oklch(0.40_0_0/0.3)] dark:border-[oklch(0.2_0.01_270/0.3)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[oklch(0.60_0_0)] dark:text-[oklch(0.6_0.01_250)]">
            &copy; {new Date().getFullYear()} Jonel Engenharia. Todos os direitos reservados.
          </p>
          <p className="text-xs text-[oklch(0.60_0_0)] dark:text-[oklch(0.6_0.01_250)]">
            Engenharia com controle, precisão e rastreabilidade.
          </p>
        </div>
      </div>
    </footer>
  );
}
