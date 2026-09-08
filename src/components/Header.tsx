import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { getWhatsAppUrl } from '../utils/whatsapp';

interface HeaderProps {
  onOpenConversation: (service?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenConversation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Trabalho', href: '#trabalho' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Contato', href: '#contato' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#F2F0EF]/90 backdrop-blur-md border-b border-[#303030]/10 py-4 shadow-sm'
            : 'bg-transparent py-6 md:py-8'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 flex items-center justify-between">
          {/* Logo / Brand Name */}
          <a
            href="#"
            className="group inline-flex items-baseline gap-1 text-xl md:text-2xl font-extrabold tracking-tight text-[#303030] hover:text-[#DF5800] transition-colors font-editorial"
          >
            <span>CRTVSANTOS</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#DF5800] group-hover:scale-125 transition-transform" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#303030]/80">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="relative py-1 hover:text-[#303030] transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#DF5800] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => onOpenConversation()}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold px-4 py-2.5 bg-[#303030] text-[#F2F0EF] hover:bg-[#DF5800] transition-colors group cursor-pointer"
            >
              <span>Vamos conversar</span>
              <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#303030] hover:text-[#DF5800] transition-colors"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-[#F2F0EF] md:hidden pt-24 px-6 flex flex-col justify-between pb-10 animate-fade-in">
          <div className="space-y-6">
            <div className="text-xs font-mono uppercase tracking-widest text-[#303030]/40 pb-2 border-b border-[#303030]/10">
              Navegação
            </div>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block text-2xl font-bold text-[#303030] hover:text-[#DF5800] transition-colors font-editorial"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="space-y-4 pt-6 border-t border-[#303030]/10">
            <p className="text-xs text-[#303030]/60">
              Ajudando marcas a comunicarem propósito.
            </p>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConversation();
              }}
              className="w-full inline-flex items-center justify-center gap-2 bg-[#303030] text-[#F2F0EF] py-4 text-sm font-semibold hover:bg-[#DF5800] transition-colors"
            >
              <span>Vamos conversar →</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};
