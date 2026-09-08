import React from 'react';
import { Project } from '../data/content';
import { VisualShowcase } from './VisualShowcase';
import { getWhatsAppUrlForProject } from '../utils/whatsapp';
import { X, ArrowUpRight, Check, Tag } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  const handleWhatsApp = () => {
    window.open(getWhatsAppUrlForProject(project.title), '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10 bg-[#303030]/75 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-[#F2F0EF] text-[#303030] border border-[#303030]/10 shadow-2xl my-auto overflow-hidden">
        {/* Top bar header */}
        <div className="sticky top-0 z-20 bg-[#F2F0EF]/95 backdrop-blur border-b border-[#303030]/10 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#DF5800]" />
            <span className="text-xs font-mono tracking-widest text-[#303030]/70 uppercase">
              {project.category} · {project.year}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#303030]/60 hover:text-[#303030] hover:bg-[#303030]/5 rounded-none transition-colors"
            aria-label="Fechar case"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal content body */}
        <div className="p-6 md:p-10 max-h-[80vh] overflow-y-auto space-y-10">
          {/* Title and main tagline */}
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#DF5800]">
              {project.segment}
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#303030] mt-2 font-editorial">
              {project.title}
            </h2>
            <p className="text-lg md:text-xl text-[#303030]/80 mt-4 leading-relaxed font-light">
              {project.tagline}
            </p>
          </div>

          {/* Featured Visual Canvas */}
          <div className="border border-[#303030]/10 overflow-hidden shadow-lg">
            <VisualShowcase projectId={project.id} className="min-h-[300px] md:min-h-[380px]" />
          </div>

          {/* Editorial Analysis: Challenge & Strategy */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-[#303030]/10">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#303030]/60">
                <span>01</span>
                <span>O Desafio</span>
              </div>
              <h3 className="text-xl font-bold text-[#303030] font-editorial">
                O que precisava ser comunicado
              </h3>
              <p className="text-sm text-[#303030]/80 leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#DF5800]">
                <span>02</span>
                <span>Direção Estratégica</span>
              </div>
              <h3 className="text-xl font-bold text-[#303030] font-editorial">
                O caminho criativo adotado
              </h3>
              <p className="text-sm text-[#303030]/80 leading-relaxed">
                {project.strategy}
              </p>
            </div>
          </div>

          {/* Deliverables List */}
          <div className="space-y-4 pt-6 border-t border-[#303030]/10 bg-white/60 p-6 border border-[#303030]/5">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#303030]/60">
              <Tag size={13} className="text-[#DF5800]" />
              <span>Entregas & Desdobramentos</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {project.deliverables.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-[#303030]/90">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#DF5800] mt-1.5 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Project Gallery Items */}
          {project.gallery && project.gallery.length > 0 && (
            <div className="space-y-4 pt-6 border-t border-[#303030]/10">
              <h4 className="text-sm font-mono uppercase tracking-wider text-[#303030]/60">
                Desdobramentos do Projeto ({project.gallery.length})
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.gallery.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-5 border border-[#303030]/10 bg-white/80 transition-all hover:border-[#303030]/30"
                  >
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#DF5800]">
                      {item.tag}
                    </span>
                    <h5 className="text-base font-bold text-[#303030] mt-1">
                      {item.title}
                    </h5>
                    <p className="text-xs text-[#303030]/70 mt-1 leading-relaxed">
                      {item.caption}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Bottom Action */}
          <div className="pt-8 border-t border-[#303030]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-xs text-[#303030]/60">Gostou deste projeto?</p>
              <p className="text-sm font-semibold text-[#303030]">
                Podemos criar algo sob medida para a sua marca.
              </p>
            </div>
            <button
              onClick={handleWhatsApp}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#303030] text-[#F2F0EF] px-6 py-3 text-sm font-medium hover:bg-[#DF5800] transition-colors cursor-pointer"
            >
              <span>Conversar sobre projeto similar</span>
              <ArrowUpRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
