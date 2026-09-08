import React, { useState } from 'react';
import { ArrowRight, ArrowDown, Sparkles } from 'lucide-react';
import { STUDIO_INFO } from '../data/content';

interface HeroProps {
  onOpenConversation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConversation }) => {
  const [activeWord, setActiveWord] = useState<'PROPÓSITO' | 'COMUNICAÇÃO'>('PROPÓSITO');

  const scrollToProjects = () => {
    const el = document.getElementById('trabalho');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex flex-col justify-between pt-32 md:pt-40 pb-12 md:pb-16 px-6 sm:px-8 md:px-12 max-w-7xl mx-auto overflow-hidden">
      {/* Top Studio Indicator */}
      <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-mono tracking-widest text-[#303030]/60 uppercase border-b border-[#303030]/10 pb-4">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#DF5800] animate-pulse" />
          <span>ESTÚDIO CRIATIVO INDEPENDENTE</span>
        </div>
        <div className="hidden sm:block">
          <span>SOCIAL MEDIA & DESIGN ESTRATÉGICO</span>
        </div>
        <div>
          <span>SANTOS / BRASIL</span>
        </div>
      </div>

      {/* Main Conceptual Hero Area */}
      <div className="my-auto py-12 md:py-16">
        <div className="max-w-5xl">
          {/* Main Headline with Editorial Weight */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[#303030] leading-[1.05] font-editorial">
            Marcas têm algo a dizer. <br />
            <span className="text-[#303030]/75 font-light">A gente ajuda a</span>{' '}
            <span className="relative inline-block text-[#303030] font-extrabold underline decoration-[#DF5800] decoration-4 md:decoration-8 underline-offset-8">
              comunicar.
            </span>
          </h1>

          {/* Subtitle with High Negative Space */}
          <p className="mt-8 md:mt-10 text-lg sm:text-xl md:text-2xl text-[#303030]/80 max-w-2xl font-light leading-relaxed">
            {STUDIO_INFO.subheadline}
          </p>

          {/* Action CTAs */}
          <div className="mt-10 md:mt-12 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6">
            <button
              onClick={onOpenConversation}
              className="inline-flex items-center justify-center gap-3 bg-[#303030] text-[#F2F0EF] px-8 py-4 text-base font-semibold hover:bg-[#DF5800] transition-colors group cursor-pointer shadow-sm"
            >
              <span>Vamos conversar</span>
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={scrollToProjects}
              className="inline-flex items-center justify-center gap-2 border border-[#303030]/20 text-[#303030] hover:border-[#303030] hover:bg-white/40 px-6 py-4 text-base font-medium transition-all cursor-pointer"
            >
              <span>Ver projetos</span>
              <ArrowDown size={16} className="text-[#DF5800]" />
            </button>
          </div>
        </div>
      </div>

      {/* Typographic Kinetic / Interactive Statement */}
      <div className="relative pt-8 border-t border-[#303030]/10 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono uppercase tracking-widest text-[#303030]/50">
            Foco central:
          </span>
          <div className="inline-flex bg-white/60 p-1 border border-[#303030]/10">
            <button
              onClick={() => setActiveWord('PROPÓSITO')}
              className={`text-xs font-mono px-3 py-1 transition-all cursor-pointer ${
                activeWord === 'PROPÓSITO'
                  ? 'bg-[#303030] text-[#F2F0EF]'
                  : 'text-[#303030]/60 hover:text-[#303030]'
              }`}
            >
              PROPÓSITO
            </button>
            <button
              onClick={() => setActiveWord('COMUNICAÇÃO')}
              className={`text-xs font-mono px-3 py-1 transition-all cursor-pointer ${
                activeWord === 'COMUNICAÇÃO'
                  ? 'bg-[#DF5800] text-white'
                  : 'text-[#303030]/60 hover:text-[#303030]'
              }`}
            >
              COMUNICAÇÃO
            </button>
          </div>
        </div>

        {/* Large subtle architectural watermark text */}
        <div className="overflow-hidden select-none pointer-events-none">
          <div className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tighter text-[#303030]/10 font-editorial uppercase whitespace-nowrap">
            {activeWord} · ESTRATÉGIA · DESIGN · {activeWord}
          </div>
        </div>

        <div className="text-xs font-mono text-[#303030]/50">
          ROLAR PARA EXPLORAR ↓
        </div>
      </div>
    </section>
  );
};
