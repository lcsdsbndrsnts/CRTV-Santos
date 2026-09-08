import React, { useState } from 'react';
import { SEGMENTS } from '../data/content';
import { ArrowRight, Sparkles } from 'lucide-react';

interface SegmentsProps {
  onOpenConversationWithSegment: (segmentName: string) => void;
}

export const Segments: React.FC<SegmentsProps> = ({ onOpenConversationWithSegment }) => {
  const [activeSegmentIndex, setActiveSegmentIndex] = useState<number | null>(null);

  return (
    <section className="py-24 md:py-36 px-6 sm:px-8 md:px-12 max-w-7xl mx-auto border-t border-[#303030]/10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Section Label */}
        <div className="lg:col-span-3">
          <div className="sticky top-28 flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#DF5800]">
            <span className="w-2 h-2 bg-[#DF5800]" />
            <span>05 // UNIVERSO DE ATUAÇÃO</span>
          </div>
        </div>

        {/* Content Body */}
        <div className="lg:col-span-9 space-y-12">
          {/* Main Statement */}
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#303030] leading-[1.1] font-editorial max-w-3xl">
              Diferentes negócios. <br />
              Diferentes desafios. <br />
              <span className="text-[#DF5800]">A mesma intenção: comunicar melhor.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#303030]/75 font-light max-w-2xl pt-2">
              Não acreditamos que a boa comunicação precise ficar presa a um único setor. O que muda são os códigos de cada área; o que permanece é o compromisso com a clareza e a verdade da marca.
            </p>
          </div>

          {/* Interactive Editorial Segment Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-4">
            {SEGMENTS.map((seg, idx) => {
              const isActive = activeSegmentIndex === idx;
              return (
                <div
                  key={seg.name}
                  onMouseEnter={() => setActiveSegmentIndex(idx)}
                  onMouseLeave={() => setActiveSegmentIndex(null)}
                  onClick={() => onOpenConversationWithSegment(seg.name)}
                  className={`p-6 border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                    isActive
                      ? 'bg-white border-[#DF5800] shadow-md -translate-y-1'
                      : 'bg-white/50 border-[#303030]/10 hover:border-[#303030]/40'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between text-[11px] font-mono text-[#303030]/50 mb-4">
                      <span>0{idx + 1}</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#DF5800]" />
                    </div>
                    <h3 className="text-lg font-bold text-[#303030] font-editorial">
                      {seg.name}
                    </h3>
                    <p className="text-xs text-[#303030]/70 mt-2 leading-relaxed">
                      {seg.desc}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-[#303030]/5 flex items-center justify-between text-[11px] font-mono text-[#DF5800]">
                    <span>Conversar sobre este segmento</span>
                    <ArrowRight size={12} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Discrete Summary Tagline */}
          <div className="p-6 bg-[#303030] text-[#F2F0EF] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-sm font-light text-white/90">
              Seja você um profissional autônomo, uma escola, uma arena esportiva ou um negócio em expansão.
            </p>
            <span className="text-xs font-mono text-[#DF5800] shrink-0">
              CONSULTORIA PERSONALIZADA
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
