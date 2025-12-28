
import React from 'react';
import { translations } from '../translations';

interface AboutProps {
  lang: 'pt' | 'en';
}

const About: React.FC<AboutProps> = ({ lang }) => {
  const profileImageUrl = "https://pmartinsimob.com.br/wp-content/uploads/2025/12/waldo-terno-preto_baixa.png?auto=format&fit=crop&q=80&w=800";
  const t = translations[lang].about;

  return (
    <section id="sobre" className="py-32 md:py-48 bg-[#0F0F0F] scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="relative">
             <div className="relative z-10 rounded-[4rem] overflow-hidden border border-white/5 shadow-3xl aspect-[4/5] md:aspect-square">
                <img 
                  src={profileImageUrl} 
                  alt="Waldo Eller" 
                  className="w-full h-full object-cover object-top filter grayscale hover:grayscale-0 transition-all duration-1000"
                />
             </div>
            
            <div className="absolute -bottom-12 -right-12 bg-accent text-black p-12 rounded-[3rem] hidden xl:block shadow-3xl z-20 border-[12px] border-[#0F0F0F]">
              <span className="text-7xl font-black block tracking-tighter leading-none mb-2">10+</span>
              <span className="text-[12px] font-black uppercase tracking-widest opacity-70">{t.activeProjects}</span>
            </div>
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] bg-accent opacity-[0.03] blur-[120px] rounded-full -z-10"></div>
          </div>
          
          <div>
            <div className="relative mb-16">
              <span className="text-accent font-black tracking-[0.5em] uppercase text-[12px] block mb-6">{t.trajectory}</span>
              <h2 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter leading-tight">{t.title} <span className="text-white/20">{t.mim}</span></h2>
              <div className="w-24 h-2.5 bg-accent"></div>
            </div>
            
            <div className="space-y-10">
              <p className="text-2xl md:text-3xl text-white/90 leading-[1.6] font-light italic border-l-4 border-accent pl-10 py-4 text-balance">
                {t.quote}
              </p>

              <p className="text-white/40 leading-[1.8] text-lg md:text-xl font-light">
                 {t.description}
              </p>

              <div className="pt-16 border-t border-white/10">
                <div className="flex flex-col">
                  <span className="text-accent text-[11px] uppercase tracking-[0.5em] font-black mb-4 flex items-center gap-3">
                    {t.status}
                    <span className="flex h-2 w-2 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                  </span>
                  <div className="bg-white/[0.03] border border-white/10 px-8 py-4 rounded-2xl w-fit group hover:bg-accent/10 hover:border-accent/40 transition-all duration-500 shadow-2xl backdrop-blur-sm">
                    <span className="text-xl md:text-2xl font-black text-white tracking-tighter group-hover:text-accent transition-colors">{t.available}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
