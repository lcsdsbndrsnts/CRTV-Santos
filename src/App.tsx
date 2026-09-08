import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Manifesto } from './components/Manifesto';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { Portfolio } from './components/Portfolio';
import { Segments } from './components/Segments';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { WhatsAppModal } from './components/WhatsAppModal';
import { ProjectModal } from './components/ProjectModal';
import { Project } from './data/content';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from './utils/whatsapp';

export default function App() {
  const [isWhatsAppModalOpen, setIsWhatsAppModalOpen] = useState(false);
  const [selectedServiceForModal, setSelectedServiceForModal] = useState<string>('');
  const [selectedSegmentForModal, setSelectedSegmentForModal] = useState<string>('');
  const [selectedProjectForModal, setSelectedProjectForModal] = useState<Project | null>(null);

  const handleOpenConversation = (service?: string) => {
    setSelectedServiceForModal(service || '');
    setSelectedSegmentForModal('');
    setIsWhatsAppModalOpen(true);
  };

  const handleOpenWithSegment = (segmentName: string) => {
    setSelectedSegmentForModal(segmentName);
    setSelectedServiceForModal('');
    setIsWhatsAppModalOpen(true);
  };

  const handleSelectProject = (project: Project) => {
    setSelectedProjectForModal(project);
  };

  return (
    <div className="min-h-screen bg-[#F2F0EF] text-[#303030] font-sans antialiased selection:bg-[#DF5800] selection:text-[#F2F0EF] flex flex-col relative">
      {/* Minimalist Top Header */}
      <Header onOpenConversation={() => handleOpenConversation()} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero onOpenConversation={() => handleOpenConversation()} />

        {/* 2. Manifesto / Positioning */}
        <Manifesto />

        {/* 3. Services (Editorial, with curated partner solutions) */}
        <Services onSelectService={(serviceName) => handleOpenConversation(serviceName)} />

        {/* 4. Process (4-step Escuta -> Estratégia -> Criação -> Evolução) */}
        <Process />

        {/* 5. Selected Works & Portfolio (Asymmetric, Maré Beach Club case, Education, Architecture, Gastro, Authority) */}
        <Portfolio
          onSelectProject={handleSelectProject}
          onOpenConversation={() => handleOpenConversation()}
        />

        {/* 6. Multi-Segment Experience (Educação, Esportes, Serviços, Pequenos Negócios, etc.) */}
        <Segments onOpenConversationWithSegment={handleOpenWithSegment} />

        {/* Final CTA to direct WhatsApp Business */}
        <FinalCTA onOpenConversation={() => handleOpenConversation()} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Quick Dialogue Action Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => handleOpenConversation()}
          aria-label="Abrir conversa no WhatsApp"
          className="group relative flex items-center gap-3 bg-[#303030] text-[#F2F0EF] hover:bg-[#DF5800] p-3.5 sm:px-5 sm:py-3.5 shadow-2xl transition-all duration-300 cursor-pointer border border-white/20"
        >
          <div className="relative">
            <MessageCircle size={20} className="text-[#DF5800] group-hover:text-white transition-colors" />
            <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-[#DF5800] group-hover:bg-white animate-ping" />
          </div>
          <span className="hidden sm:inline text-xs font-mono uppercase tracking-wider font-semibold">
            Conversar
          </span>
        </button>
      </div>

      {/* Interactive Quick Conversation Modal (Pre-fills WhatsApp message) */}
      <WhatsAppModal
        isOpen={isWhatsAppModalOpen}
        onClose={() => setIsWhatsAppModalOpen(false)}
        initialService={selectedServiceForModal}
        initialSegment={selectedSegmentForModal}
      />

      {/* Deep-dive Project Case Study Modal */}
      <ProjectModal
        project={selectedProjectForModal}
        onClose={() => setSelectedProjectForModal(null)}
      />
    </div>
  );
}
