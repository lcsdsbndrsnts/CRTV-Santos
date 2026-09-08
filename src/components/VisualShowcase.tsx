import React from 'react';

interface ShowcaseProps {
  projectId: string;
  className?: string;
  variant?: 'card' | 'hero' | 'gallery';
  title?: string;
}

export const VisualShowcase: React.FC<ShowcaseProps> = ({
  projectId,
  className = '',
  variant = 'card',
}) => {
  if (projectId === 'mare-beach-club') {
    return (
      <div className={`relative overflow-hidden bg-[#202020] text-[#F2F0EF] flex flex-col justify-between p-6 md:p-8 select-none ${className}`}>
        {/* Subtle decorative background noise/grid */}
        <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#DF5800_1px,transparent_1px)] [background-size:16px_16px]" />
        
        {/* Top bar with beach tennis branding element */}
        <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#DF5800]" />
            <span className="text-xs uppercase tracking-widest font-semibold text-white/80">MARÉ BEACH CLUB</span>
          </div>
          <span className="text-[11px] font-mono text-white/50 uppercase tracking-wider">Social Media + Design</span>
        </div>

        {/* Centerpiece art direction */}
        <div className="relative z-10 my-6 flex flex-col items-center justify-center text-center">
          <div className="relative w-full max-w-sm mx-auto p-5 bg-[#2B2B2B] rounded-sm border border-white/10 shadow-2xl">
            {/* Visual element simulating a beach tennis tournament poster / social post */}
            <div className="flex items-center justify-between text-[10px] tracking-wider text-[#DF5800] uppercase font-bold mb-3">
              <span>ARENA MARÉ</span>
              <span>SUMMER SERIES</span>
            </div>
            
            <div className="text-2xl md:text-3xl font-extrabold tracking-tight leading-none text-white my-2 uppercase font-editorial">
              OPEN BEACH <br />
              <span className="text-[#DF5800]">TENNIS</span> 2025
            </div>

            <div className="h-px w-full bg-gradient-to-r from-transparent via-[#DF5800] to-transparent my-3" />

            <div className="flex justify-between items-end text-left text-[11px] text-white/70">
              <div>
                <p className="font-semibold text-white">CATEGORIAS A · B · C · D</p>
                <p className="text-[10px] text-white/50">MASCULINO, FEMININO & MISTA</p>
              </div>
              <div className="text-right font-mono text-[10px] text-[#DF5800]">
                INSCRIÇÕES ABERTAS
              </div>
            </div>
          </div>
        </div>

        {/* Bottom tags */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-2 pt-4 border-t border-white/10 text-xs text-white/60">
          <span>Direção de Arte & Campanhas</span>
          <span className="font-mono text-[#DF5800] text-[11px]">CASE REAL CRTVSANTOS</span>
        </div>
      </div>
    );
  }

  if (projectId === 'colegio-educacao') {
    return (
      <div className={`relative overflow-hidden bg-[#242e38] text-[#F2F0EF] flex flex-col justify-between p-6 md:p-8 select-none ${className}`}>
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]" />
        
        <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-white/60" />
            <span className="text-xs uppercase tracking-widest font-semibold text-white/80">EDUCAÇÃO & PROPÓSITO</span>
          </div>
          <span className="text-[11px] font-mono text-white/50">INSTITUCIONAL</span>
        </div>

        <div className="relative z-10 my-6 p-6 bg-[#1b232c] rounded-sm border border-white/10 shadow-xl">
          <span className="text-[11px] uppercase tracking-widest text-[#DF5800] font-semibold">Comunicação Humanizada</span>
          <h4 className="text-xl md:text-2xl font-bold tracking-tight text-white mt-2 leading-snug font-editorial">
            "Aprender com afeto, crescer com autonomia."
          </h4>
          <p className="text-xs text-white/60 mt-3 leading-relaxed">
            Estruturação de narrativas pedagógicas que conectam famílias à vivência real em sala de aula.
          </p>
          <div className="mt-4 flex items-center gap-2 text-[10px] font-mono text-white/40">
            <span>LINHAS EDITORIAIS</span>
            <span>•</span>
            <span>VÍNCULO FAMÍLIA-ESCOLA</span>
          </div>
        </div>

        <div className="relative z-10 flex items-center justify-between pt-4 border-t border-white/10 text-xs text-white/60">
          <span>Posicionamento & Conteúdo</span>
          <span className="font-mono text-[11px] text-white/40">EXPERIÊNCIA REAL</span>
        </div>
      </div>
    );
  }

  if (projectId === 'studio-arquitetura') {
    return (
      <div className={`relative overflow-hidden bg-[#353839] text-[#F2F0EF] flex flex-col justify-between p-6 md:p-8 select-none ${className}`}>
        <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2.5 h-2.5 bg-[#DF5800]" />
            <span className="text-xs uppercase tracking-widest font-semibold text-white/80">STUDIO DE ARQUITETURA</span>
          </div>
          <span className="text-[11px] font-mono text-white/50">DESIGN</span>
        </div>

        <div className="relative z-10 my-4 space-y-3">
          <div className="p-4 bg-[#282a2b] border border-white/10 rounded-sm">
            <div className="text-[10px] font-mono text-white/40">RESIDENCIAL · PROJETO 08</div>
            <div className="text-lg font-bold text-white tracking-tight mt-1 font-editorial">CASA DAS PEDRAS</div>
            <div className="text-xs text-white/60 mt-1">Linguagem visual minimalista e valorização da materialidade.</div>
          </div>
          <div className="grid grid-cols-2 gap-2 text-[11px] font-mono text-white/50">
            <div className="p-2 bg-[#282a2b]/60 border border-white/5">01 // CURADORIA</div>
            <div className="p-2 bg-[#282a2b]/60 border border-white/5">02 // ALTO PADRÃO</div>
          </div>
        </div>

        <div className="relative z-10 flex items-center justify-between pt-4 border-t border-white/10 text-xs text-white/60">
          <span>Identidade Visual & Portfólio</span>
          <span className="font-mono text-[11px] text-white/40">SERVIÇOS</span>
        </div>
      </div>
    );
  }

  if (projectId === 'gastronomia-artesanal') {
    return (
      <div className={`relative overflow-hidden bg-[#2D2421] text-[#F2F0EF] flex flex-col justify-between p-6 md:p-8 select-none ${className}`}>
        <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#DF5800]" />
            <span className="text-xs uppercase tracking-widest font-semibold text-white/80">GASTRONOMIA AUTORAL</span>
          </div>
          <span className="text-[11px] font-mono text-white/50">DESIGN + SOCIAL</span>
        </div>

        <div className="relative z-10 my-6 p-5 bg-[#3B2F2B] border border-white/10 rounded-sm text-center">
          <span className="text-[10px] font-mono text-[#DF5800] uppercase tracking-widest">PROCESSO ARTESANAL</span>
          <h4 className="text-xl font-bold text-white mt-1 uppercase font-editorial">MENU DE TEMPORADA</h4>
          <div className="h-0.5 w-12 bg-[#DF5800] mx-auto my-3" />
          <p className="text-xs text-white/70 italic">"Ingredientes locais, técnica apurada e sabor autêntico."</p>
        </div>

        <div className="relative z-10 flex items-center justify-between pt-4 border-t border-white/10 text-xs text-white/60">
          <span>Cardápios & Campanhas</span>
          <span className="font-mono text-[11px] text-white/40">PEQUENOS NEGÓCIOS</span>
        </div>
      </div>
    );
  }

  // Default fallback for personal brand / generic
  return (
    <div className={`relative overflow-hidden bg-[#242424] text-[#F2F0EF] flex flex-col justify-between p-6 md:p-8 select-none ${className}`}>
      <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-4">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2.5 h-2.5 bg-[#DF5800]" />
          <span className="text-xs uppercase tracking-widest font-semibold text-white/80">MARCA PESSOAL</span>
        </div>
        <span className="text-[11px] font-mono text-white/50">AUTORIDADE</span>
      </div>

      <div className="relative z-10 my-4 p-5 bg-[#1e1e1e] border border-white/10 rounded-sm">
        <div className="text-[10px] font-mono text-[#DF5800]">CARROSSEL ESTRATÉGICO</div>
        <h4 className="text-lg font-bold text-white mt-1 font-editorial">Como estruturar uma comunicação com autoridade</h4>
        <p className="text-xs text-white/60 mt-2">Diagramação editorial ritmada para transmitir conhecimento sem ruídos.</p>
      </div>

      <div className="relative z-10 flex items-center justify-between pt-4 border-t border-white/10 text-xs text-white/60">
        <span>Conteúdo de Autoridade</span>
        <span className="font-mono text-[11px] text-white/40">PROFISSIONAIS</span>
      </div>
    </div>
  );
};
