import React, { useState } from 'react';
import { PRINCIPLES } from '../data/content';
import { Sparkles, ArrowRight } from 'lucide-react';

export const Principles: React.FC = () => {
  const [activePrincipleId, setActivePrincipleId] = useState<string>(PRINCIPLES[0].id);

  return (
    <section className="py-24 md:py-36 px-6 sm:px-8 md:px-12 max-w-7xl mx-auto border-t border-[#303030]/10">
      {/* Section Header */}
      <div className="max-w-4xl space-y-4">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#DF5800]">
          <span className="w-2 h-2 bg-[#DF5800]" />
          <span>07 // PRINCÍPIOS FUNDAMENTAIS</span>
        </div>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#303030] leading-tight font-editorial">
          Algumas coisas das quais não abrimos mão.
        </h2>

        <p className="text-base sm:text-lg text-[#303030]/75 font-light leading-relaxed max-w-2xl">
          Nossos valores definem cada projeto que aceitamos, cada linha que traçamos e a forma como nos relacionamos com cada parceiro.
        </p>
      </div>

      {/* Editorial Principles Grid with Hover Focus */}
      <div className="mt-16 space-y-4">
        {PRINCIPLES.map((principle, index) => {
          const isSelected = activePrincipleId === principle.id;
          return (
            <div
              key={principle.id}
              onMouseEnter={() => setActivePrincipleId(principle.id)}
              onClick={() => setActivePrincipleId(principle.id)}
              className={`p-8 md:p-10 border transition-all duration-300 cursor-pointer ${
                isSelected
                  ? 'bg-white border-[#303030] shadow-md -translate-y-0.5'
                  : 'bg-transparent border-[#303030]/15 hover:border-[#303030]/40'
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                {/* Index and Title */}
                <div className="lg:col-span-4 flex items-baseline gap-4">
                  <span className="text-sm font-mono text-[#DF5800] font-bold">
                    0{index + 1}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#303030] font-editorial">
                    {principle.title}
                  </h3>
                </div>

                {/* Subtitle / Punchline */}
                <div className="lg:col-span-4">
                  <p className="text-base font-medium text-[#303030]">
                    {principle.subtitle}
                  </p>
                </div>

                {/* Detailed Description */}
                <div className="lg:col-span-4">
                  <p className="text-xs sm:text-sm text-[#303030]/70 leading-relaxed font-light">
                    {principle.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
