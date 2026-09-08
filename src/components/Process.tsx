import React from 'react';
import { PROCESS_STEPS } from '../data/content';
import { Sparkles, ArrowRight } from 'lucide-react';

export const Process: React.FC = () => {
  return (
    <section className="py-24 md:py-36 px-6 sm:px-8 md:px-12 max-w-7xl mx-auto border-t border-[#303030]/10">
      {/* Section Header */}
      <div className="max-w-4xl space-y-4">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#DF5800]">
          <span className="w-2 h-2 bg-[#DF5800]" />
          <span>03 // METODOLOGIA</span>
        </div>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#303030] leading-tight font-editorial">
          Antes de criar, a gente entende.
        </h2>

        <p className="text-lg text-[#303030]/75 font-light leading-relaxed max-w-2xl">
          Nosso fluxo de trabalho foi pensado para garantir precisão estratégica, diálogo contínuo e entregas que geram valor real para o seu negócio.
        </p>
      </div>

      {/* 4-Step Editorial Flow */}
      <div className="mt-16 md:mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {PROCESS_STEPS.map((step, idx) => (
          <div
            key={step.number}
            className="group relative p-8 bg-white/70 border border-[#303030]/10 hover:border-[#DF5800] transition-all flex flex-col justify-between"
          >
            {/* Top Step Number */}
            <div>
              <div className="flex items-center justify-between border-b border-[#303030]/10 pb-4 mb-6">
                <span className="text-xs font-mono text-[#DF5800] font-bold">
                  FASE {step.number}
                </span>
                <span className="text-[10px] font-mono text-[#303030]/40">
                  {step.highlight}
                </span>
              </div>

              <h3 className="text-2xl font-bold tracking-tight text-[#303030] font-editorial">
                {step.title}
              </h3>

              <p className="text-sm text-[#303030]/75 mt-3 leading-relaxed font-light">
                {step.description}
              </p>
            </div>

            {/* Bottom accent indicator */}
            <div className="pt-6 mt-6 border-t border-[#303030]/5 flex items-center justify-between text-xs text-[#303030]/40 font-mono">
              <span>ETAPA 0{idx + 1} DE 04</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#DF5800]/40 group-hover:bg-[#DF5800] transition-colors" />
            </div>
          </div>
        ))}
      </div>

      {/* Featured Bottom Statement */}
      <div className="mt-16 p-8 md:p-12 border border-[#303030]/15 bg-white/40 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-1">
          <span className="text-xs font-mono uppercase tracking-wider text-[#DF5800]">
            Abordagem Individualizada
          </span>
          <p className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-[#303030] font-editorial">
            Sem fórmulas prontas. Cada marca pede uma solução diferente.
          </p>
        </div>

        <div className="shrink-0 text-xs font-mono text-[#303030]/60 border-l md:border-l-2 border-[#DF5800] pl-4">
          CRTVSANTOS PROCESS // 2026
        </div>
      </div>
    </section>
  );
};
