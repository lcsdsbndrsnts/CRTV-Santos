import React, { useState } from 'react';
import { PROJECTS, Project } from '../data/content';
import { VisualShowcase } from './VisualShowcase';
import { ArrowUpRight, Plus, Eye, Sparkles } from 'lucide-react';

interface PortfolioProps {
  onSelectProject: (project: Project) => void;
  onOpenConversation: () => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onSelectProject, onOpenConversation }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('Todos');

  const filters = ['Todos', 'Social Media', 'Design', 'Educação', 'Esportes'];

  const filteredProjects = selectedFilter === 'Todos'
    ? PROJECTS
    : PROJECTS.filter(p => 
        p.category.toLowerCase().includes(selectedFilter.toLowerCase()) ||
        p.segment.toLowerCase().includes(selectedFilter.toLowerCase())
      );

  return (
    <section id="trabalho" className="py-24 md:py-36 px-6 sm:px-8 md:px-12 max-w-7xl mx-auto border-t border-[#303030]/10">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#303030]/10">
        <div className="space-y-4 max-w-2xl">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#DF5800]">
            <span className="w-2 h-2 bg-[#DF5800]" />
            <span>04 // PORTFÓLIO SELECIONADO</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#303030] leading-tight font-editorial">
            Alguns trabalhos.
          </h2>

          <p className="text-base sm:text-lg text-[#303030]/75 font-light leading-relaxed">
            Projetos desenvolvidos com foco em posicionamento autêntico, consistência visual e conexão real com o público.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 pt-2">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`text-xs px-3.5 py-1.5 transition-all cursor-pointer font-medium ${
                selectedFilter === filter
                  ? 'bg-[#303030] text-[#F2F0EF]'
                  : 'bg-white/70 text-[#303030]/70 border border-[#303030]/15 hover:border-[#303030]'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Asymmetric Editorial Project Showcase */}
      <div className="mt-12 space-y-12 md:space-y-16">
        {/* Flagship Feature: Maré Beach Club (Hero Large Layout) */}
        {filteredProjects.find(p => p.id === 'mare-beach-club') && (
          <div
            onClick={() => onSelectProject(PROJECTS.find(p => p.id === 'mare-beach-club')!)}
            className="group relative cursor-pointer border border-[#303030]/15 bg-white overflow-hidden transition-all duration-300 hover:border-[#DF5800] hover:shadow-xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Visual Showcase (Big side) */}
              <div className="lg:col-span-7 relative min-h-[340px] sm:min-h-[420px] bg-[#202020] overflow-hidden">
                <VisualShowcase
                  projectId="mare-beach-club"
                  className="h-full w-full transition-transform duration-700 group-hover:scale-[1.02]"
                />
              </div>

              {/* Editorial Description side */}
              <div className="lg:col-span-5 p-8 sm:p-10 md:p-12 flex flex-col justify-between bg-white">
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-[#DF5800] uppercase font-semibold">CASE EM DESTAQUE</span>
                    <span className="text-[#303030]/50">2024 / 2025</span>
                  </div>

                  <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#303030] font-editorial group-hover:text-[#DF5800] transition-colors">
                    Maré Beach Club
                  </h3>

                  <p className="text-xs font-mono uppercase tracking-widest text-[#303030]/60">
                    Social Media + Design
                  </p>

                  <p className="text-sm sm:text-base text-[#303030]/80 leading-relaxed font-light pt-2">
                    Comunicação digital para um espaço de Beach Tennis, com criação de campanhas, eventos, torneios, promoções e conteúdos para fortalecer a presença da marca.
                  </p>
                </div>

                <div className="pt-8 border-t border-[#303030]/10 flex items-center justify-between">
                  <span className="text-xs font-mono text-[#303030]/60">
                    CLIQUE PARA VER O CASE COMPLETO
                  </span>
                  <div className="w-9 h-9 rounded-full bg-[#303030] text-[#F2F0EF] flex items-center justify-center group-hover:bg-[#DF5800] transition-colors">
                    <ArrowUpRight size={16} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Secondary Asymmetric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10">
          {filteredProjects
            .filter(p => p.id !== 'mare-beach-club')
            .map((project, idx) => {
              // Asymmetric column widths
              const colSpan = idx % 2 === 0 ? 'md:col-span-7' : 'md:col-span-5';
              return (
                <div
                  key={project.id}
                  onClick={() => onSelectProject(project)}
                  className={`${colSpan} group cursor-pointer border border-[#303030]/15 bg-white flex flex-col justify-between transition-all duration-300 hover:border-[#DF5800] hover:shadow-lg`}
                >
                  <div className="relative min-h-[260px] sm:min-h-[300px] overflow-hidden border-b border-[#303030]/10">
                    <VisualShowcase
                      projectId={project.id}
                      className="h-full w-full transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </div>

                  <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="text-[#DF5800]">{project.category}</span>
                        <span className="text-[#303030]/50">{project.year}</span>
                      </div>

                      <h4 className="text-2xl font-bold tracking-tight text-[#303030] font-editorial group-hover:text-[#DF5800] transition-colors">
                        {project.title}
                      </h4>

                      <p className="text-xs sm:text-sm text-[#303030]/75 leading-relaxed font-light">
                        {project.description}
                      </p>
                    </div>

                    <div className="pt-6 mt-6 border-t border-[#303030]/10 flex items-center justify-between text-xs font-mono text-[#303030]/60">
                      <span>VER DETALHES</span>
                      <ArrowUpRight size={14} className="group-hover:text-[#DF5800] transition-colors" />
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>

      {/* Direct Portfolio CTA */}
      <div className="mt-16 text-center pt-8 border-t border-[#303030]/10">
        <button
          onClick={onOpenConversation}
          className="inline-flex items-center gap-3 bg-[#303030] text-[#F2F0EF] px-8 py-4 text-sm font-semibold hover:bg-[#DF5800] transition-colors cursor-pointer"
        >
          <span>Quer um projeto como esses para sua marca? Vamos conversar →</span>
        </button>
      </div>
    </section>
  );
};
