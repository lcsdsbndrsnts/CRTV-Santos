import React, { useState } from 'react';
import { STUDIO_INFO, SERVICES, SEGMENTS } from '../data/content';
import { getWhatsAppUrlWithDetails, getWhatsAppUrl } from '../utils/whatsapp';
import { MessageSquare, ArrowRight, X, Sparkles, CheckCircle2 } from 'lucide-react';

interface WhatsAppModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
  initialSegment?: string;
}

export const WhatsAppModal: React.FC<WhatsAppModalProps> = ({
  isOpen,
  onClose,
  initialService = '',
  initialSegment = '',
}) => {
  const [selectedService, setSelectedService] = useState<string>(initialService);
  const [selectedSegment, setSelectedSegment] = useState<string>(initialSegment);
  const [name, setName] = useState<string>('');
  const [brand, setBrand] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  if (!isOpen) return null;

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    const url = getWhatsAppUrlWithDetails({
      name: name.trim() || undefined,
      brand: brand.trim() || undefined,
      service: selectedService || undefined,
      segment: selectedSegment || undefined,
      message: message.trim() || undefined,
    });
    window.open(url, '_blank', 'noopener,noreferrer');
    onClose();
  };

  const handleDirectWhatsApp = () => {
    window.open(getWhatsAppUrl(), '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#303030]/60 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-xl bg-[#F2F0EF] text-[#303030] border border-[#303030]/10 shadow-2xl p-6 md:p-8 rounded-none max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-[#303030]/60 hover:text-[#303030] transition-colors"
          aria-label="Fechar"
        >
          <X size={20} />
        </button>

        {/* Studio Identifier */}
        <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#DF5800] uppercase mb-3">
          <span className="w-2 h-2 rounded-full bg-[#DF5800]" />
          <span>CRTVSANTOS · DIÁLOGO DIRETO</span>
        </div>

        <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-[#303030] font-editorial">
          Vamos iniciar uma conversa.
        </h3>

        <p className="text-sm text-[#303030]/70 mt-2 leading-relaxed">
          Sem formulários longos ou intermediários. Você conversa diretamente com quem pensa e executa a comunicação do seu negócio.
        </p>

        <form onSubmit={handleSend} className="mt-6 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-[#303030]/80 uppercase tracking-wider mb-1.5">
                Seu Nome
              </label>
              <input
                type="text"
                placeholder="Como podemos te chamar?"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-white border border-[#303030]/15 px-3.5 py-2.5 text-sm text-[#303030] placeholder-[#303030]/40 focus:outline-none focus:border-[#DF5800] transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-[#303030]/80 uppercase tracking-wider mb-1.5">
                Nome da Marca / Negócio
              </label>
              <input
                type="text"
                placeholder="Qual o nome do seu projeto?"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
                className="w-full bg-white border border-[#303030]/15 px-3.5 py-2.5 text-sm text-[#303030] placeholder-[#303030]/40 focus:outline-none focus:border-[#DF5800] transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-[#303030]/80 uppercase tracking-wider mb-1.5">
              Área de Interesse
            </label>
            <div className="flex flex-wrap gap-2">
              {['Social Media', 'Design', 'Landing Pages', 'Tráfego Pago', 'Edição de Vídeo', 'Projeto Completo'].map((srv) => (
                <button
                  type="button"
                  key={srv}
                  onClick={() => setSelectedService(selectedService === srv ? '' : srv)}
                  className={`text-xs px-3 py-1.5 transition-all border ${
                    selectedService === srv
                      ? 'bg-[#303030] text-[#F2F0EF] border-[#303030]'
                      : 'bg-white text-[#303030]/80 border-[#303030]/15 hover:border-[#303030]'
                  }`}
                >
                  {srv}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-[#303030]/80 uppercase tracking-wider mb-1.5">
              Segmento da sua marca
            </label>
            <div className="flex flex-wrap gap-1.5">
              {SEGMENTS.map((seg) => (
                <button
                  type="button"
                  key={seg.name}
                  onClick={() => setSelectedSegment(selectedSegment === seg.name ? '' : seg.name)}
                  className={`text-[11px] px-2.5 py-1 transition-all border ${
                    selectedSegment === seg.name
                      ? 'bg-[#DF5800] text-white border-[#DF5800]'
                      : 'bg-white/60 text-[#303030]/70 border-[#303030]/10 hover:border-[#303030]/40'
                  }`}
                >
                  {seg.name}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-[#303030]/80 uppercase tracking-wider mb-1.5">
              Conte brevemente sobre o seu momento (opcional)
            </label>
            <textarea
              rows={2}
              placeholder="Ex: Queremos reformular nossa presença nas redes ou lançar uma nova campanha..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full bg-white border border-[#303030]/15 p-3 text-sm text-[#303030] placeholder-[#303030]/40 focus:outline-none focus:border-[#DF5800] transition-colors resize-none"
            />
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
            <button
              type="submit"
              className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 bg-[#303030] text-[#F2F0EF] px-6 py-3.5 text-sm font-medium hover:bg-[#DF5800] transition-colors group cursor-pointer"
            >
              <span>Abrir WhatsApp com detalhes</span>
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </button>

            <button
              type="button"
              onClick={handleDirectWhatsApp}
              className="w-full sm:w-auto text-xs text-[#303030]/60 hover:text-[#303030] underline py-2 transition-colors cursor-pointer"
            >
              Ou vá direto ao WhatsApp →
            </button>
          </div>
        </form>

        <div className="mt-6 pt-4 border-t border-[#303030]/10 flex items-center justify-between text-[11px] text-[#303030]/60">
          <span>Horário de atendimento: Segunda a Sexta</span>
          <span className="font-mono text-[#DF5800] font-semibold">{STUDIO_INFO.whatsappDisplay}</span>
        </div>
      </div>
    </div>
  );
};
