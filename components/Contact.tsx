
import React from 'react';
import { translations } from '../translations';

interface ContactProps {
  lang: 'pt' | 'en';
}

const Contact: React.FC<ContactProps> = ({ lang }) => {
  const whatsappNumber = "5561991161854";
  const whatsappMessage = encodeURIComponent(
    lang === 'pt' 
      ? "Olá Waldo, vi seu portfólio e gostaria de conversar sobre um projeto." 
      : "Hi Waldo, I saw your portfolio and would like to talk about a project."
  );
  const t = translations[lang].contact;

  return (
    <section id="contato" className="py-32 bg-[#0F0F0F] scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <h2 className="text-5xl md:text-7xl font-black mb-10">{t.title}</h2>
            <p className="text-2xl text-white/80 mb-8 leading-relaxed font-light">
              {t.description1}
            </p>
            <p className="text-white/40 mb-16 max-w-md leading-relaxed">
              {t.description2}
            </p>
            
            <div className="space-y-8">
              {/* Email */}
              <a href="mailto:contato@waldoeller.com.br" className="flex items-center gap-8 group w-fit">
                <div className="w-16 h-16 bg-[#141416] border border-white/5 rounded-2xl flex items-center justify-center group-hover:bg-accent transition-all duration-300 shadow-xl group-hover:shadow-accent/20">
                   <svg className="w-6 h-6 text-accent group-hover:text-black transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                </div>
                <div>
                  <p className="text-white/30 text-[10px] uppercase tracking-[0.3em] font-black mb-1">Email</p>
                  <p className="text-xl font-bold group-hover:text-accent transition-colors">contato@waldoeller.com.br</p>
                </div>
              </a>

              {/* LinkedIn */}
              <a href="https://linkedin.com/in/waldoeller" target="_blank" rel="noopener noreferrer" className="flex items-center gap-8 group w-fit">
                <div className="w-16 h-16 bg-[#141416] border border-white/5 rounded-2xl flex items-center justify-center group-hover:bg-accent transition-all duration-300 shadow-xl group-hover:shadow-accent/20">
                   <svg className="w-6 h-6 text-accent group-hover:text-black transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </div>
                <div>
                  <p className="text-white/30 text-[10px] uppercase tracking-[0.3em] font-black mb-1">LinkedIn</p>
                  <p className="text-xl font-bold group-hover:text-accent transition-colors">in/waldoeller</p>
                </div>
              </a>

              {/* GitHub */}
              <a href="https://github.com/waldosouzaup" target="_blank" rel="noopener noreferrer" className="flex items-center gap-8 group w-fit">
                <div className="w-16 h-16 bg-[#141416] border border-white/5 rounded-2xl flex items-center justify-center group-hover:bg-accent transition-all duration-300 shadow-xl group-hover:shadow-accent/20">
                   <svg className="w-7 h-7 text-accent group-hover:text-black transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </div>
                <div>
                  <p className="text-white/30 text-[10px] uppercase tracking-[0.3em] font-black mb-1">GitHub</p>
                  <p className="text-xl font-bold group-hover:text-accent transition-colors">/waldosouzaup</p>
                </div>
              </a>
            </div>
          </div>

          <div className="bg-[#141416] p-12 md:p-20 rounded-[4rem] border border-white/5 shadow-3xl relative overflow-hidden flex flex-col items-center text-center">
            <div className="absolute top-0 right-0 w-80 h-80 bg-accent/5 blur-[120px] rounded-full"></div>
            
            <div className="w-24 h-24 bg-accent/10 rounded-full flex items-center justify-center mb-10 border border-accent/20">
               <svg className="w-10 h-10 text-accent animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                 <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
               </svg>
            </div>

            <h3 className="text-3xl font-black text-white mb-6 tracking-tighter uppercase">{t.quickResponse}</h3>
            <p className="text-white/40 mb-12 text-lg font-light leading-relaxed">
              {t.whatsappText}
            </p>

            <a 
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-accent text-black font-black uppercase tracking-[0.3em] py-7 rounded-2xl hover:bg-white transition-all transform hover:scale-[1.02] shadow-2xl shadow-accent/30 text-[11px] flex items-center justify-center gap-4"
            >
              WhatsApp: (61) 99116-1854
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </a>
            
            <p className="mt-8 text-[9px] font-black uppercase tracking-[0.4em] text-white/10">
              {t.availability}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
