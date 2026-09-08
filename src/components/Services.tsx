import React, { useState } from 'react';
import { SERVICES, ServiceItem } from '../data/content';
import { ArrowRight, Plus, Minus, Users2, Sparkles, Check } from 'lucide-react';
import { getWhatsAppUrlForService } from '../utils/whatsapp';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const handleWhatsApp = (serviceTitle: string) => {
    window.open(getWhatsAppUrlForService(serviceTitle), '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="servicos" className="py-24 md:py-36 px-6 sm:px-8 md:px-12 max-w-7xl mx-auto border-t border-[#303030]/10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Section Label / Sidebar */}
        <div className="lg:col-span-4 space-y-6">
          <div className="sticky top-28 space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#DF5800]">
              <span className="w-2 h-2 bg-[#DF5800]" />
              <span>02 // CAPACIDADES</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#303030] leading-tight font-editorial">
              O que podemos construir juntos.
            </h2>

            <p className="text-base text-[#303030]/75 font-light leading-relaxed">
              Soluções integradas com foco em Social Media e Design autoral, complementadas por parceiros especializados sob nossa total direção estratégica.
            </p>

            <div className="pt-4 border-t border-[#303030]/10 text-xs text-[#303030]/60 space-y-2">
              <div className="flex items-center gap-2 font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-[#303030]" />
                <span>DIREÇÃO CRIATIVA CRTVSANTOS</span>
              </div>
              <div className="flex items-center gap-2 font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-[#DF5800]" />
                <span>ATENDIMENTO DIRETO E DEDICADO</span>
              </div>
            </div>
          </div>
        </div>

        {/* Editorial Index of Services */}
        <div className="lg:col-span-8 space-y-4">
          {SERVICES.map((service, index) => {
            const isExpanded = expandedIndex === index;
            return (
              <div
                key={service.number}
                className={`border transition-all duration-300 ${
                  isExpanded
                    ? 'border-[#303030] bg-white shadow-sm'
                    : 'border-[#303030]/15 bg-transparent hover:border-[#303030]/50'
                }`}
              >
                {/* Accordion Header */}
                <button
                  type="button"
                  onClick={() => toggleExpand(index)}
                  className="w-full text-left p-6 sm:p-8 flex items-start justify-between gap-4 cursor-pointer"
                >
                  <div className="flex items-start gap-4 sm:gap-6">
                    <span className="text-sm font-mono text-[#DF5800] mt-1 font-semibold">
                      {service.number}
                    </span>
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#303030] font-editorial">
                          {service.title}
                        </h3>
                        {service.isPartner && (
                          <span className="inline-flex items-center gap-1 text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 bg-[#F2F0EF] text-[#303030]/70 border border-[#303030]/15">
                            <Users2 size={10} className="text-[#DF5800]" />
                            Rede de Especialistas
                          </span>
                        )}
                      </div>
                      <p className="text-sm sm:text-base text-[#303030]/70 mt-2 font-light max-w-xl">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-1 p-1.5 rounded-full border border-[#303030]/20 text-[#303030] shrink-0">
                    {isExpanded ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>

                {/* Expanded Editorial Drawer */}
                {isExpanded && (
                  <div className="px-6 sm:px-8 pb-8 pt-2 border-t border-[#303030]/10 animate-fade-in space-y-6">
                    {/* Partner context note */}
                    {service.isPartner && (
                      <div className="p-4 bg-[#F2F0EF]/80 border-l-2 border-[#DF5800] text-xs text-[#303030]/80 leading-relaxed">
                        <strong className="text-[#303030] font-semibold">Direção Integrada:</strong>{' '}
                        Desenvolvemos este serviço em conjunto com parceiros técnicos especializados de confiança da CRTVSANTOS, mantendo nossa equipe como responsável direta pelo conceito, direção de arte, tom de voz e relacionamento.
                      </div>
                    )}

                    {/* Deliverables */}
                    <div>
                      <span className="text-xs font-mono uppercase tracking-wider text-[#303030]/60 block mb-3">
                        O que está incluso:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {service.deliverables.map((item, dIdx) => (
                          <div key={dIdx} className="flex items-start gap-2 text-xs text-[#303030]/85">
                            <Check size={14} className="text-[#DF5800] mt-0.5 shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Ideal for note */}
                    <div className="pt-2">
                      <p className="text-xs text-[#303030]/70">
                        <span className="font-semibold text-[#303030]">Ideal para:</span> {service.idealFor}
                      </p>
                    </div>

                    {/* Quick Service Action */}
                    <div className="pt-4 flex flex-wrap items-center gap-4">
                      <button
                        onClick={() => handleWhatsApp(service.title)}
                        className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider bg-[#303030] text-[#F2F0EF] px-5 py-2.5 hover:bg-[#DF5800] transition-colors cursor-pointer"
                      >
                        <span>Conversar sobre {service.title}</span>
                        <ArrowRight size={13} />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
