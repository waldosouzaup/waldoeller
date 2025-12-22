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

        <div className="hidden lg:flex items-center gap-16">
          <ul className="flex space-x-12 items-center">
            {navLinks.map((link) => (
              <li key={link.label}>
                <button 
                  onClick={(e) => handleLinkClick(e, link.id)}
                  className="relative text-[12px] font-black uppercase tracking-[0.3em] text-white/50 hover:text-accent transition-all duration-500 py-2 group inline-block"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                </button>
              </li>
            ))}
          </ul>
          
          <a 
            href={cvLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent text-black text-[11px] font-black uppercase tracking-[0.3em] px-10 py-4 rounded-xl hover:bg-white transition-all transform hover:-translate-y-1 shadow-2xl shadow-accent/10 flex items-center gap-4"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Baixar CV
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

      <div className={`lg:hidden absolute top-full left-0 w-full bg-[#0F0F0F] border-b border-white/5 transition-all duration-700 overflow-hidden ${mobileMenuOpen ? 'max-h-screen py-16 opacity-100 shadow-3xl' : 'max-h-0 py-0 opacity-0'}`}>
        <div className="px-10 flex flex-col space-y-10">
          {navLinks.map((link) => (
            <button 
              key={link.label} 
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
              Baixar Currículo
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;