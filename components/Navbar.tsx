
import React, { useState, useEffect } from 'react';
import { translations } from '../translations';

interface NavbarProps {
  onNavigate: (sectionId?: string) => void;
  lang: 'pt' | 'en';
  setLang: (lang: 'pt' | 'en') => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, lang, setLang }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[lang].nav;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: lang === 'pt' ? 'Início' : 'Home', id: 'inicio' },
    { label: lang === 'pt' ? 'Para negócios' : 'For business', id: 'clientes' },
    { label: lang === 'pt' ? 'Projetos' : 'Projects', id: 'projetos' },
    { label: lang === 'pt' ? 'Conteúdo' : 'Insights', id: 'autoridade' },
    { label: t.contato, id: 'contato' },
  ];

  const handleLinkClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  const cvLink = "https://drive.google.com/file/d/1HstZvzXdQ9bkIuRvp54qbiN5q4mKhCPQ/view?usp=sharing";

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/95 py-4 border-b border-gray-200 shadow-sm' : 'bg-transparent py-8'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <button 
          onClick={() => onNavigate()} 
          className="text-2xl font-display font-bold tracking-tight hover:text-accent transition-colors flex items-center gap-2"
        >
          <span className="text-gray-900">W</span>
          <span className="text-accent">E</span>
        </button>

        <div className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button 
                  onClick={(e) => handleLinkClick(e, link.id)}
                  className="text-sm font-medium text-gray-500 hover:text-accent transition-colors relative"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2 pl-4 ml-2 border-l border-gray-200">
            <button 
              onClick={() => setLang('pt')}
              className={`w-7 h-7 rounded-full overflow-hidden border-2 transition-all ${lang === 'pt' ? 'border-accent' : 'border-transparent opacity-50 hover:opacity-100'}`}
              title="Português"
            >
              <img src="https://flagcdn.com/w80/br.png" alt="BR" className="w-full h-full object-cover" />
            </button>
            <button 
              onClick={() => setLang('en')}
              className={`w-7 h-7 rounded-full overflow-hidden border-2 transition-all ${lang === 'en' ? 'border-accent' : 'border-transparent opacity-50 hover:opacity-100'}`}
              title="English"
            >
              <img src="https://flagcdn.com/w80/us.png" alt="US" className="w-full h-full object-cover" />
            </button>
          </div>
          
          <a 
            href={cvLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent text-white text-xs font-semibold px-5 py-2.5 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            {t.baixarCv}
          </a>
        </div>

        <button 
          className="lg:hidden text-gray-600 p-2" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
          </svg>
        </button>
      </div>

      <div className={`lg:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 transition-all duration-300 overflow-hidden ${mobileMenuOpen ? 'max-h-screen py-8 shadow-lg' : 'max-h-0 opacity-0'}`}>
        <div className="px-6 flex flex-col gap-4">
          <div className="flex gap-3 pb-4 border-b border-gray-100">
            <button 
              onClick={() => { setLang('pt'); setMobileMenuOpen(false); }} 
              className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg border transition-all ${lang === 'pt' ? 'bg-blue-50 border-accent text-accent' : 'border-gray-200 text-gray-400'}`}
            >
              <img src="https://flagcdn.com/w40/br.png" className="w-5 h-5 rounded-full object-cover" alt="BR" />
              <span className="text-xs font-medium">PT</span>
            </button>
            <button 
              onClick={() => { setLang('en'); setMobileMenuOpen(false); }} 
              className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg border transition-all ${lang === 'en' ? 'bg-blue-50 border-accent text-accent' : 'border-gray-200 text-gray-400'}`}
            >
              <img src="https://flagcdn.com/w40/us.png" className="w-5 h-5 rounded-full object-cover" alt="US" />
              <span className="text-xs font-medium">EN</span>
            </button>
          </div>

          {navLinks.map((link) => (
            <button 
              key={link.id} 
              onClick={(e) => handleLinkClick(e, link.id)}
              className="text-left text-base font-medium text-gray-600 hover:text-accent transition-colors py-2"
            >
              {link.label}
            </button>
          ))}
          
          <div className="pt-4 border-t border-gray-100">
            <a 
              href={cvLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-accent text-white text-sm font-semibold py-4 rounded-lg flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              {t.baixarCv}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
