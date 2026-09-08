import React from 'react';

export const Manifesto: React.FC = () => {
  return (
    <section className="py-24 md:py-36 px-6 sm:px-8 md:px-12 max-w-7xl mx-auto border-t border-[#303030]/10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Section Label */}
        <div className="lg:col-span-3">
          <div className="sticky top-28 flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#DF5800]">
            <span className="w-2 h-2 bg-[#DF5800]" />
            <span>01 // POSICIONAMENTO</span>
          </div>
        </div>

        {/* Editorial Body */}
        <div className="lg:col-span-9 space-y-12 md:space-y-16">
          {/* Main Manifesto Headline */}
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#303030] leading-[1.12] font-editorial max-w-3xl">
            Não acreditamos em comunicação feita no automático.
          </h2>

          {/* Editorial Paragraphs */}
          <div className="space-y-8 text-lg sm:text-xl md:text-2xl text-[#303030]/85 font-light leading-relaxed max-w-3xl">
            <p>
              Cada marca tem uma história, um público e uma razão para existir. Por isso, antes de criar qualquer layout ou linha de texto, a gente procura entender:
            </p>

            {/* The 3 Core Questions - Minimalist typography blocks */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 pb-4">
              <div className="p-6 bg-white/70 border-l-2 border-[#303030] shadow-sm">
                <span className="text-xs font-mono text-[#303030]/50 block mb-2">01</span>
                <p className="text-xl font-bold text-[#303030] font-editorial">
                  O que você faz.
                </p>
              </div>
              <div className="p-6 bg-white/70 border-l-2 border-[#303030] shadow-sm">
                <span className="text-xs font-mono text-[#303030]/50 block mb-2">02</span>
                <p className="text-xl font-bold text-[#303030] font-editorial">
                  Para quem você faz.
                </p>
              </div>
              <div className="p-6 bg-white/70 border-l-2 border-[#DF5800] shadow-sm">
                <span className="text-xs font-mono text-[#DF5800] block mb-2">03</span>
                <p className="text-xl font-bold text-[#303030] font-editorial">
                  Por que isso importa.
                </p>
              </div>
            </div>

            <p>
              Depois de mapear essa essência com clareza, transformamos tudo isso em comunicação visual, verbal e estratégica.
            </p>
          </div>

          {/* Featured Highlight Block */}
          <div className="relative p-8 md:p-12 bg-[#303030] text-[#F2F0EF] overflow-hidden">
            {/* Subtle decorative accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#DF5800]/10 rounded-full blur-2xl pointer-events-none" />
            
            <div className="relative z-10 space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-[#DF5800]">
                Princípio Norteador
              </span>
              <blockquote className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-snug font-editorial">
                "Estratégia para fazer sentido. <br />
                <span className="text-[#DF5800]">Design para ser percebido."</span>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
