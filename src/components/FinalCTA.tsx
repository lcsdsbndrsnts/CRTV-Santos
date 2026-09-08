import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { STUDIO_INFO } from '../data/content';

interface FinalCTAProps {
  onOpenConversation: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenConversation }) => {
  const handleDirectWhatsApp = () => {
    window.open(getWhatsAppUrl(), '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contato" className="py-24 md:py-36 px-6 sm:px-8 md:px-12 max-w-7xl mx-auto border-t border-[#303030]/10">
      <div className="relative p-8 sm:p-12 md:p-20 bg-[#303030] text-[#F2F0EF] overflow-hidden">
        {/* Subtle decorative background glow */}
        <div className="absolute -bottom-16 -right-16 w-80 h-80 bg-[#DF5800]/15 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 max-w-4xl space-y-8">
          {/* Top Tag */}
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#DF5800]">
            <span className="w-2 h-2 rounded-full bg-[#DF5800]" />
            <span>PRÓXIMO PASSO · DIÁLOGO DIRETO</span>
          </div>

          {/* Large Editorial Headline */}
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.05] font-editorial">
            Sua marca tem algo a dizer.
          </h2>

          {/* Subtitle */}
          <p className="text-lg sm:text-2xl text-white/80 font-light leading-relaxed max-w-2xl">
            Vamos entender juntos como transformar isso em uma comunicação mais clara, estratégica e verdadeira.
          </p>

          {/* Main Action Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={handleDirectWhatsApp}
              className="inline-flex items-center justify-center gap-3 bg-[#DF5800] text-white px-8 sm:px-10 py-5 text-base sm:text-lg font-bold hover:bg-[#c44e00] transition-colors group cursor-pointer shadow-lg"
            >
              <span>Vamos conversar</span>
              <ArrowRight size={20} className="transition-transform group-hover:translate-x-1.5" />
            </button>

            <button
              onClick={onOpenConversation}
              className="inline-flex items-center justify-center gap-2 border border-white/20 text-white/90 hover:text-white hover:border-white px-6 py-5 text-sm sm:text-base font-medium transition-colors cursor-pointer"
            >
              <span>Personalizar assunto da mensagem</span>
            </button>
          </div>

          {/* Bottom Discipline List */}
          <div className="pt-10 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs font-mono tracking-widest text-white/60 uppercase">
            <span>Social Media · Design · Comunicação</span>
            <span className="text-[#DF5800]">{STUDIO_INFO.whatsappDisplay}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
