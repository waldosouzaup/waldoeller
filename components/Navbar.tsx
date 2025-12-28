
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
    { label: t.inicio, id: 'inicio' },
    { label: t.sobre, id: 'sobre' },
    { label: t.competencias, id: 'competencias' },
    { label: t.projetos, id: 'projetos' },
    { label: t.contato, id: 'contato' },
  ];

  const handleLinkClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  const cvLink = "https://drive.google.com/file/d/1-GoMYUi3AXBDD-N5hQF5NWFdWh_yJuny/view?usp=sharing";

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${isScrolled ? 'bg-[#0A0A0B]/95 py-4 border-b border-white/5 backdrop-blur-xl shadow-2xl' : 'bg-transparent py-10'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <button 
          onClick={() => onNavigate()} 
          className="text-3xl font-black tracking-tighter hover:opacity-80 transition-all flex items-center group"
        >
          <div className="mr-3 flex items-end gap-[3px] h-7 mb-1">
            <div className="w-[5px] h-[40%] bg-white rounded-t-sm"></div>
            <div className="w-[5px] h-[95%] bg-accent rounded-t-sm"></div>
            <div className="w-[5px] h-[65%] bg-white rounded-t-sm"></div>
          </div>
          <span className="text-white">W</span>
          <span className="text-accent">E</span>
        </button>

        <div className="hidden lg:flex items-center gap-10">
          <ul className="flex space-x-10 items-center">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button 
                  onClick={(e) => handleLinkClick(e, link.id)}
                  className="relative text-[11px] font-black uppercase tracking-[0.25em] text-white/50 hover:text-accent transition-all duration-500 py-2 group inline-block"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                </button>
              </li>
            ))}
          </ul>

          {/* Language Selector Desktop */}
          <div className="flex items-center gap-3 px-6 border-l border-white/10 ml-2">
            <button 
              onClick={() => setLang('pt')}
              className={`relative w-8 h-8 rounded-full overflow-hidden border-2 transition-all duration-500 hover:scale-110 flex items-center justify-center
                ${lang === 'pt' 
                  ? 'border-accent shadow-[0_0_15px_rgba(176,141,32,0.4)] ring-2 ring-accent/20' 
                  : 'border-white/5 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 hover:border-white/20'
                }`}
              title="Português"
            >
              <img src="https://flagcdn.com/w80/br.png" alt="BR" className="w-full h-full object-cover" />
              {lang === 'pt' && <div className="absolute inset-0 bg-accent/10 pointer-events-none"></div>}
            </button>
            <button 
              onClick={() => setLang('en')}
              className={`relative w-8 h-8 rounded-full overflow-hidden border-2 transition-all duration-500 hover:scale-110 flex items-center justify-center
                ${lang === 'en' 
                  ? 'border-accent shadow-[0_0_15px_rgba(176,141,32,0.4)] ring-2 ring-accent/20' 
                  : 'border-white/5 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 hover:border-white/20'
                }`}
              title="English"
            >
              <img src="https://flagcdn.com/w80/us.png" alt="US" className="w-full h-full object-cover" />
              {lang === 'en' && <div className="absolute inset-0 bg-accent/10 pointer-events-none"></div>}
            </button>
          </div>
          
          <a 
            href={cvLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent text-black text-[10px] font-black uppercase tracking-[0.25em] px-8 py-4 rounded-xl hover:bg-white transition-all transform hover:-translate-y-1 shadow-2xl shadow-accent/10 flex items-center gap-3"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            {t.baixarCv}
          </a>
        </div>

        <button 
          className="lg:hidden text-white/60 p-3 border border-white/10 rounded-xl transition-all hover:border-accent/50" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden absolute top-full left-0 w-full bg-[#0F0F0F] border-b border-white/5 transition-all duration-700 overflow-hidden ${mobileMenuOpen ? 'max-h-screen py-16 opacity-100 shadow-3xl' : 'max-h-0 py-0 opacity-0'}`}>
        <div className="px-10 flex flex-col space-y-8">
          {/* Language Selector Mobile */}
          <div className="flex gap-4 pb-8 border-b border-white/5">
            <button 
              onClick={() => { setLang('pt'); setMobileMenuOpen(false); }} 
              className={`flex-1 flex items-center justify-center gap-3 py-4 rounded-2xl border transition-all ${lang === 'pt' ? 'bg-accent/10 border-accent/40 text-accent' : 'bg-white/5 border-white/5 text-white/30'}`}
            >
              <img src="https://flagcdn.com/w40/br.png" className={`w-6 h-6 rounded-full object-cover ${lang !== 'pt' && 'grayscale opacity-50'}`} alt="BR" />
              <span className="text-xs font-black uppercase tracking-widest">Português</span>
            </button>
            <button 
              onClick={() => { setLang('en'); setMobileMenuOpen(false); }} 
              className={`flex-1 flex items-center justify-center gap-3 py-4 rounded-2xl border transition-all ${lang === 'en' ? 'bg-accent/10 border-accent/40 text-accent' : 'bg-white/5 border-white/5 text-white/30'}`}
            >
              <img src="https://flagcdn.com/w40/us.png" className={`w-6 h-6 rounded-full object-cover ${lang !== 'en' && 'grayscale opacity-50'}`} alt="US" />
              <span className="text-xs font-black uppercase tracking-widest">English</span>
            </button>
          </div>

          {navLinks.map((link) => (
            <button 
              key={link.id} 
              onClick={(e) => handleLinkClick(e, link.id)}
              className="text-left text-2xl font-black uppercase tracking-[0.3em] text-white/40 hover:text-accent transition-all duration-500"
            >
              {link.label}
            </button>
          ))}
          
          <div className="pt-10 border-t border-white/5">
            <a 
              href={cvLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-accent text-black text-[12px] font-black uppercase tracking-[0.4em] py-6 rounded-2xl flex items-center justify-center gap-5 shadow-2xl shadow-accent/20"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
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
