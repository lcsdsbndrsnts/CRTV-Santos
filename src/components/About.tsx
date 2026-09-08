import React from 'react';
import { STUDIO_INFO } from '../data/content';
import { ArrowRight, Sparkles, ShieldCheck, HeartHandshake } from 'lucide-react';

interface AboutProps {
  onOpenConversation: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenConversation }) => {
  return (
    <section id="sobre" className="py-24 md:py-36 px-6 sm:px-8 md:px-12 max-w-7xl mx-auto border-t border-[#303030]/10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Section Label */}
        <div className="lg:col-span-4 space-y-6">
          <div className="sticky top-28 space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#DF5800]">
              <span className="w-2 h-2 bg-[#DF5800]" />
              <span>06 // SOBRE O ESTÚDIO</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#303030] leading-tight font-editorial">
              Por trás da CRTVSANTOS.
            </h2>

            {/* Studio Identity Monogram Card */}
            <div className="p-8 bg-[#303030] text-[#F2F0EF] space-y-4">
              <div className="text-3xl font-extrabold tracking-tighter text-[#F2F0EF] font-editorial flex items-center justify-between">
                <span>CRTVSANTOS</span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#DF5800]" />
              </div>
              <div className="h-px bg-white/15 my-4" />
              <p className="text-xs text-white/70 leading-relaxed font-light">
                Estúdio criativo independente fundado para unir rigor conceitual, design de alto nível e proximidade real com cada cliente.
              </p>
              <div className="pt-2 text-[11px] font-mono text-[#DF5800]">
                EST. BRASIL · ATUAÇÃO GLOBAL
              </div>
            </div>
          </div>
        </div>

        {/* Narrative & Human Essence */}
        <div className="lg:col-span-8 space-y-10">
          <div className="space-y-8 text-lg sm:text-xl md:text-2xl text-[#303030]/85 font-light leading-relaxed">
            <p>
              A <strong className="font-semibold text-[#303030]">CRTVSANTOS</strong> nasceu da vontade genuína de transformar conhecimento em comunicação que faça sentido.
            </p>

            <p>
              Somos um estúdio criativo independente, com uma abordagem deliberadamente próxima e personalizada. Aqui, seu projeto não entra em uma esteira de produção em massa.
            </p>

            <p>
              Trabalhamos diretamente com nossos clientes para entender seus desafios, encontrar oportunidades reais e transformar ideias em comunicação visual e estratégica duradoura.
            </p>
          </div>

          {/* Core Philosophy Statement: "Pequeno por escolha. Cuidadoso por princípio." */}
          <div className="p-8 md:p-10 bg-white border border-[#303030]/15 shadow-sm space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#DF5800]">
              Nosso Posicionamento
            </span>
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#303030] font-editorial">
              Pequeno por escolha. <br />
              <span className="text-[#DF5800]">Cuidadoso por princípio.</span>
            </div>
            <p className="text-sm text-[#303030]/75 leading-relaxed pt-2">
              Optamos por manter uma estrutura enxuta e focada para que cada cliente receba atenção dedicada, profundidade analítica e agilidade na entrega.
            </p>
          </div>

          {/* Quick Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-5 border border-[#303030]/10 bg-white/60">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#303030] uppercase mb-1">
                <HeartHandshake size={14} className="text-[#DF5800]" />
                <span>Interlocução Direta</span>
              </div>
              <p className="text-xs text-[#303030]/70 leading-relaxed">
                Você conversa diretamente com quem planeja e desenha sua marca, sem intermediários.
              </p>
            </div>

            <div className="p-5 border border-[#303030]/10 bg-white/60">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#303030] uppercase mb-1">
                <ShieldCheck size={14} className="text-[#DF5800]" />
                <span>Cuidado Artesanal</span>
              </div>
              <p className="text-xs text-[#303030]/70 leading-relaxed">
                Cada peça gráfica, copy e estratégia é desenhada especificamente para a sua realidade.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
