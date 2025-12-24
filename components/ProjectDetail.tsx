import React, { useEffect, useState } from 'react';
import { Project } from '../types';

interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onBack }) => {
  const [activeImage, setActiveImage] = useState(project.imageUrl);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const allImages = [project.imageUrl, ...(project.galleryImages || [])].filter(Boolean);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Bloqueia o scroll quando o lightbox está aberto
  useEffect(() => {
    if (lightboxImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [lightboxImage]);

  const SectionImage = ({ url }: { url?: string }) => {
    if (!url) return null;
    return (
      <div 
        className="my-16 rounded-[2.5rem] overflow-hidden border border-white/5 shadow-2xl bg-[#141416] group cursor-zoom-in"
        onClick={() => setLightboxImage(url)}
      >
        <img src={url} className="w-full h-auto object-cover max-h-[700px] transition-transform duration-1000 group-hover:scale-[1.02]" alt="Visual do Case" />
      </div>
    );
  };

  // Classe padrão para o texto descritivo das seções - Aumentado em 7% (19px * 1.07 = 20.33px)
  const bodyTextClass = "antialiased text-white/70 text-[20.33px] leading-[1.8] font-light max-w-2xl";

  return (
    <section className="py-24 md:py-32 bg-[#0A0A0B] min-h-screen relative">
      {/* Lightbox Overlay */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm animate-fade-in p-4 md:p-10 cursor-zoom-out"
          onClick={() => setLightboxImage(null)}
        >
          <button 
            className="absolute top-8 right-8 text-white/50 hover:text-white transition-all p-4"
            onClick={(e) => { e.stopPropagation(); setLightboxImage(null); }}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <img 
            src={lightboxImage} 
            className="max-w-full max-h-full object-contain rounded-xl shadow-2xl animate-scale-up" 
            alt="Lightbox view" 
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          {/* Header de Navegação */}
          <div className="flex justify-between items-center mb-20">
            <button onClick={onBack} className="flex items-center gap-4 text-white/50 hover:text-accent transition-all group">
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-accent group-hover:bg-accent/5 transition-all">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
              </div>
              <span className="text-[12px] font-black uppercase tracking-[0.25em]">Voltar aos Projetos</span>
            </button>
            <div className="flex gap-4">
               {project.links.github && (
                <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-2xl bg-[#141416] border border-white/10 flex items-center justify-center hover:border-accent transition-all group" title="GitHub">
                  <svg className="w-6 h-6 text-white/50 group-hover:text-accent" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                </a>
               )}
            </div>
          </div>

          <div className="mb-20">
            <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.1] tracking-tighter mb-10 text-balance">{project.title}</h1>
            <div className="flex flex-wrap gap-4">
              {project.technologies.map(tech => (
                <span key={tech} className="bg-accent/10 text-accent text-[12px] font-black uppercase px-5 py-2 rounded-xl border border-accent/20 tracking-widest">{tech}</span>
              ))}
            </div>
          </div>

          <section className="mb-32">
            <div className="bg-[#141416] p-6 rounded-[3rem] border border-white/5 shadow-3xl">
              <div 
                className="relative aspect-video rounded-[2rem] overflow-hidden mb-6 group cursor-zoom-in"
                onClick={() => setLightboxImage(activeImage)}
              >
                <img src={activeImage} className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105" alt="Showcase" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center pb-6 opacity-0 group-hover:opacity-100 transition-opacity">
                   <div className="bg-white/10 backdrop-blur-md px-6 py-2 rounded-full border border-white/10 text-[10px] font-black uppercase tracking-widest text-white">Clique para ampliar</div>
                </div>
              </div>
              {allImages.length > 1 && (
                <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar px-2">
                  {allImages.map((img, i) => (
                    <button key={i} onClick={() => setActiveImage(img)} className={`relative w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0 transition-all border-2 ${activeImage === img ? 'border-accent scale-105 shadow-xl shadow-accent/20' : 'border-transparent opacity-40 hover:opacity-100'}`}>
                      <img src={img} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </section>

          {/* Narrativa Principal */}
          <div className="space-y-32">
            <section>
              <h2 className="text-3xl font-black text-white mb-10 flex items-center gap-6">
                <span className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent text-lg">01</span>
                Problema de Negócio
              </h2>
              <div className="prose prose-invert max-w-none">
                <p className={bodyTextClass}>{project.businessProblem}</p>
              </div>
              <SectionImage url={project.businessProblemImage} />
            </section>

            <section>
              <h2 className="text-3xl font-black text-white mb-10 flex items-center gap-6">
                <span className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent text-lg">02</span>
                Contexto da Solução
              </h2>
              <p className={bodyTextClass}>{project.context}</p>
              <SectionImage url={project.contextImage} />
            </section>

            <section>
              <h2 className="text-3xl font-black text-white mb-10 flex items-center gap-6">
                <span className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent text-lg">03</span>
                Premissas Técnicas
              </h2>
              <div className="max-w-2xl">
                <ul className="space-y-6">
                  {project.premises.map((p, i) => (
                    <li key={i} className="flex gap-6 items-start text-white/50 bg-[#141416] p-8 rounded-[2rem] border border-white/5 hover:border-accent/20 transition-all">
                      <div className="w-3 h-3 rounded-full bg-accent mt-2 shrink-0 shadow-lg shadow-accent/40"></div>
                      <span className="text-[18px] leading-[1.7] font-light">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <SectionImage url={project.premisesImage} />
            </section>

            <section>
              <h2 className="text-3xl font-black text-white mb-10 flex items-center gap-6">
                <span className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent text-lg">04</span>
                Estratégia de Implementação
              </h2>
              <div className="max-w-2xl space-y-4">
                {project.strategy.map((step, i) => (
                  <div key={i} className="flex items-center gap-8 p-8 rounded-[2rem] bg-[#141416] border border-white/5 group hover:bg-accent/5 transition-all">
                    <span className="text-3xl font-black text-white/5 group-hover:text-accent/20">0{i+1}</span>
                    <p className="text-white/80 text-[19px] font-medium leading-tight">{step}</p>
                  </div>
                ))}
              </div>
              <SectionImage url={project.strategyImage} />
            </section>

            <section>
              <h2 className="text-3xl font-black text-white mb-10 flex items-center gap-6">
                <span className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent text-lg">05</span>
                Resultados Obtidos
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {project.results.map((res, i) => (
                  <div key={i} className="p-10 rounded-[2.5rem] border border-white/5 bg-[#0F0F0F] hover:bg-[#141416] transition-all relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 blur-2xl group-hover:bg-accent/10 transition-all"></div>
                    <p className="text-white/70 text-[18px] leading-[1.8] font-light relative z-10">{res}</p>
                  </div>
                ))}
              </div>
              <SectionImage url={project.resultsImage} />
            </section>

            {project.links.demo && (
              <section className="pt-16 border-t border-white/5">
                <h2 className="text-3xl font-black text-white mb-12 flex items-center gap-6">
                  <span className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent text-lg">06</span>
                  Acesso ao Projeto
                </h2>
                <div className="bg-accent/5 border border-accent/20 rounded-[3.5rem] p-16 text-center group relative overflow-hidden">
                  <div className="absolute -top-20 -right-20 w-64 h-64 bg-accent/10 blur-[100px] rounded-full"></div>
                  <p className="text-white/50 mb-12 uppercase tracking-[0.3em] font-black text-[12px]">Explore a solução completa e os Dashboards dinâmicos</p>
                  
                  <a 
                    href={project.links.demo} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-8 bg-accent text-black font-black py-7 px-20 rounded-2xl hover:bg-white transition-all transform hover:scale-105 shadow-2xl shadow-accent/30 uppercase tracking-[0.4em] text-[13px]"
                  >
                    Acessar Projeto Externo
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </section>
            )}
          </div>

          <div className="mt-40 pt-20 border-t border-white/5 text-center">
             <button onClick={onBack} className="bg-white text-black font-black py-6 px-20 rounded-2xl hover:bg-accent transition-all uppercase tracking-[0.3em] text-[12px] shadow-2xl">Finalizar Leitura do Case</button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scale-up {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-scale-up {
          animation: scale-up 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </section>
  );
};

export default ProjectDetail;