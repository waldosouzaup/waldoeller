
import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onNavigate: (sectionId?: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', id: 'inicio' },
    { label: 'Sobre', id: 'sobre' },
    { label: 'Competências', id: 'competencias' },
    { label: 'Projetos', id: 'projetos' },
    { label: 'Contato', id: 'contato' },
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
        {/* Logo */}
        <button 
          onClick={() => onNavigate()} 
          className="text-2xl font-black tracking-tighter hover:opacity-80 transition-all flex items-center outline-none group"
        >
          <div className="mr-3 flex items-end gap-[3px] h-6 mb-1">
            <div className="w-[4px] h-[40%] bg-white rounded-t-sm"></div>
            <div className="w-[4px] h-[90%] bg-[#B08D20] rounded-t-sm"></div>
            <div className="w-[4px] h-[65%] bg-white rounded-t-sm"></div>
          </div>
          <span className="text-white">W</span>
          <span className="text-accent">E</span>
        </button>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-12">
          <ul className="flex space-x-12 items-center">
            {navLinks.map((link) => (
              <li key={link.label}>
                <button 
                  onClick={(e) => handleLinkClick(e, link.id)}
                  className="relative text-[11.12px] font-bold uppercase tracking-[0.25em] text-white/50 hover:text-[#B08D20] transition-all duration-500 py-1 group inline-block outline-none"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-full h-[1.5px] bg-[#B08D20] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                </button>
              </li>
            ))}
          </ul>
          
          <a 
            href={cvLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent text-black text-[10px] font-black uppercase tracking-[0.2em] px-8 py-3.5 rounded-xl hover:bg-white transition-all transform hover:-translate-y-0.5 active:scale-95 shadow-lg shadow-accent/10 flex items-center gap-3"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Baixar CV
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-white/60 p-2 border border-white/5 rounded-lg transition-all" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden absolute top-full left-0 w-full bg-[#0F0F0F] border-b border-white/5 transition-all duration-500 overflow-hidden ${mobileMenuOpen ? 'max-h-screen py-12 opacity-100 shadow-3xl' : 'max-h-0 py-0 opacity-0 pointer-events-none'}`}>
        <div className="px-6 flex flex-col space-y-8">
          {navLinks.map((link) => (
            <button 
              key={link.label} 
              onClick={(e) => handleLinkClick(e, link.id)}
              className="text-left text-[13.39px] font-bold uppercase tracking-[0.4em] text-white/40 hover:text-[#B08D20] pl-4 border-l-2 border-transparent hover:border-[#B08D20] transition-all duration-500 outline-none"
            >
              {link.label}
            </button>
          ))}
          
          <div className="pt-6 border-t border-white/5">
            <a 
              href={cvLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-accent text-black text-[11px] font-black uppercase tracking-[0.3em] py-5 rounded-2xl flex items-center justify-center gap-4 active:scale-95 transition-transform"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Baixar Currículo
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
