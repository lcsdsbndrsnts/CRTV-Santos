import React from 'react';
import { STUDIO_INFO } from '../data/content';
import { ArrowUp, ArrowUpRight } from 'lucide-react';
import { getWhatsAppUrl } from '../utils/whatsapp';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#F2F0EF] text-[#303030] border-t border-[#303030]/10 pt-16 pb-12 px-6 sm:px-8 md:px-12">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Studio Brand and Core Idea */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-baseline gap-1">
              <span className="text-2xl md:text-3xl font-extrabold tracking-tight text-[#303030] font-editorial">
                CRTVSANTOS
              </span>
              <span className="w-2 h-2 rounded-full bg-[#DF5800]" />
            </div>

            <p className="text-sm sm:text-base text-[#303030]/75 font-light max-w-sm leading-relaxed">
              {STUDIO_INFO.tagline}
            </p>

            <p className="text-xs font-mono text-[#303030]/50 pt-2">
              Social Media · Design · Comunicação Estratégica
            </p>
          </div>

          {/* Direct Channels Links */}
          <div className="md:col-span-6 flex flex-col sm:flex-row justify-start md:justify-end gap-8 sm:gap-12 text-sm font-medium">
            <div className="space-y-3">
              <div className="text-xs font-mono uppercase tracking-widest text-[#303030]/40">
                Redes & Portfólio
              </div>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[#303030]/80 hover:text-[#DF5800] transition-colors"
                  >
                    <span>Instagram</span>
                    <ArrowUpRight size={13} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://behance.net"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[#303030]/80 hover:text-[#DF5800] transition-colors"
                  >
                    <span>Behance</span>
                    <ArrowUpRight size={13} />
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <div className="text-xs font-mono uppercase tracking-widest text-[#303030]/40">
                Contato Direto
              </div>
              <ul className="space-y-2">
                <li>
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[#303030]/80 hover:text-[#DF5800] transition-colors"
                  >
                    <span>WhatsApp</span>
                    <ArrowUpRight size={13} />
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${STUDIO_INFO.email}`}
                    className="inline-flex items-center gap-1 text-[#303030]/80 hover:text-[#DF5800] transition-colors"
                  >
                    <span>{STUDIO_INFO.email}</span>
                    <ArrowUpRight size={13} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom line: Copyright & Back to Top */}
        <div className="pt-8 border-t border-[#303030]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#303030]/60">
          <div>
            © 2026 CRTVSANTOS. Todos os direitos reservados.
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 hover:text-[#303030] transition-colors cursor-pointer group"
          >
            <span>Voltar ao topo</span>
            <ArrowUp size={13} className="transition-transform group-hover:-translate-y-1" />
          </button>
        </div>
      </div>
    </footer>
  );
};
