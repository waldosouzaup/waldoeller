
import React from 'react';
import { translations } from '../translations';

interface HeroProps {
  onNavigate?: (id: string) => void;
  lang: 'pt' | 'en';
}

const Hero: React.FC<HeroProps> = ({ onNavigate, lang }) => {
  const profileImageUrl = "https://pmartinsimob.com.br/wp-content/uploads/2025/12/waldo-terno-preto_baixa.png?auto=format&fit=crop&q=80&w=800";
  const analyticsBgUrl = "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1600";
  const t = translations[lang].hero;

  const handleLinkClick = (e: React.MouseEvent, id: string) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(id);
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#0A0A0B]">
      <div className="absolute inset-0 z-0">
        <img 
          src={analyticsBgUrl} 
          alt="Data Processing" 
          className="w-full h-full object-cover opacity-15 mix-blend-luminosity filter brightness-75 contrast-125 transition-all duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0B] via-[#0A0A0B]/90 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B] via-transparent to-transparent z-10"></div>
      </div>

      <div className="absolute top-1/4 right-0 w-[800px] h-[800px] bg-accent opacity-[0.04] blur-[150px] rounded-full z-0 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-20">
        <div className="order-2 lg:order-1">
          <p className="text-accent font-black tracking-[0.4em] uppercase mb-6 text-[12px]">{t.welcome}</p>
          <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight text-white tracking-tighter text-balance">
            Waldo <span className="text-accent">Eller</span>
          </h1>
          <h2 className="text-2xl md:text-4xl font-light mb-10 text-white/80">
           <span className="font-bold text-white">Data Analytics</span>
          </h2>
          <p className="text-lg md:text-xl text-white/50 mb-12 max-w-xl leading-relaxed font-light">
           {t.description}
          </p>
          <div className="flex flex-wrap gap-6">
            <a 
              href="#projetos" 
              onClick={(e) => handleLinkClick(e, 'projetos')}
              className="bg-accent text-black font-black py-5 px-14 rounded-2xl hover:bg-white transition-all transform hover:-translate-y-1 inline-block uppercase tracking-[0.2em] text-[12px] shadow-2xl shadow-accent/20"
            >
              {t.explore}
            </a>
            <a 
              href="#contato" 
              onClick={(e) => handleLinkClick(e, 'contato')}
              className="border border-white/10 bg-white/5 text-white font-black py-5 px-14 rounded-2xl hover:border-accent hover:text-accent transition-all transform hover:-translate-y-1 inline-block uppercase tracking-[0.2em] text-[12px] backdrop-blur-md"
            >
              {t.contact}
            </a>
          </div>
        </div>
        
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end relative">
          <div className="relative w-72 h-72 md:w-[480px] md:h-[600px] rounded-[4rem] overflow-hidden border border-white/10 shadow-3xl group">
            <img 
              src={profileImageUrl} 
              alt="Waldo Eller" 
              className="w-full h-full object-cover object-top transition-all duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-accent/5 mix-blend-color"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B]/80 via-transparent to-transparent"></div>
          </div>
          
          <div className="absolute -bottom-8 -right-8 bg-[#141416] border border-white/10 p-8 rounded-3xl shadow-2xl hidden xl:block backdrop-blur-xl z-30">
             <div className="flex items-center gap-5">
                <div className="w-14 h-14 bg-accent rounded-xl flex items-center justify-center text-black font-black text-2xl">
                  +5
                </div>
                <div>
                   <p className="text-xs font-black uppercase tracking-widest text-accent mb-1">{t.years}</p>
                   <p className="text-white font-bold text-lg">{t.experience}</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
