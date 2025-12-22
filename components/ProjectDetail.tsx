import React, { useEffect, useState } from 'react';
import { Project } from '../types';

interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onBack }) => {
  const [activeImage, setActiveImage] = useState(project.imageUrl);
  const allImages = [project.imageUrl, ...(project.galleryImages || [])].filter(Boolean);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Helper para renderizar imagem da seção
  const SectionImage = ({ url }: { url?: string }) => {
    if (!url) return null;
    return (
      <div className="my-10 rounded-[2rem] overflow-hidden border border-white/5 shadow-2xl bg-[#141416]">
        <img src={url} className="w-full h-auto object-cover max-h-[600px]" alt="Visual da Seção" />
      </div>
    );
  };

  return (
    <section className="py-20 md:py-32 bg-[#0A0A0B] min-h-screen">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-16">
            <button onClick={onBack} className="flex items-center gap-3 text-white/40 hover:text-accent transition-all group">
              <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-accent group-hover:bg-accent/5 transition-all">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">Voltar</span>
            </button>
            <div className="flex gap-4">
               {project.links.github && (
                <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-[#141416] border border-white/5 flex items-center justify-center hover:border-accent transition-all group" title="Ver no GitHub">
                  <svg className="w-5 h-5 text-white/40 group-hover:text-accent" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                </a>
               )}
               {project.links.demo && (
                <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-[#141416] border border-white/5 flex items-center justify-center hover:border-accent transition-all group" title="Ver Demonstração">
                  <svg className="w-5 h-5 text-white/40 group-hover:text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </a>
               )}
            </div>
          </div>

          <div className="border-b border-white/5 pb-12 mb-16">
            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tighter mb-6">{project.title}</h1>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map(tech => (
                <span key={tech} className="bg-accent/10 text-accent text-[11.15px] font-black uppercase px-4 py-1.5 rounded-lg border border-accent/20">{tech}</span>
              ))}
            </div>
          </div>

          {/* Galeria Principal */}
          <section className="mb-24">
            <h2 className="text-xs font-black uppercase tracking-[0.4em] text-accent mb-8">Galeria do Case</h2>
            <div className="bg-[#141416] p-4 rounded-[3rem] border border-white/5 shadow-3xl">
              <div className="relative aspect-video rounded-[2rem] overflow-hidden mb-6 group">
                <img src={activeImage} className="w-full h-full object-cover transition-all duration-700" alt="Destaque" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
              </div>
              {allImages.length > 1 && (
                <div className="flex gap-4 overflow-x-auto pb-4 px-2 no-scrollbar">
                  {allImages.map((img, i) => (
                    <button key={i} onClick={() => setActiveImage(img)} className={`relative w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0 transition-all border-2 ${activeImage === img ? 'border-accent scale-105' : 'border-transparent opacity-40 hover:opacity-100'}`}>
                      <img src={img} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </section>

          {/* Seções Narrativas com Imagens */}
          <div className="space-y-24">
            {/* 1. Problema de Negócio */}
            <section>
              <h2 className="text-2xl font-black text-white mb-8 flex items-center gap-4"><span className="text-accent text-sm">1.</span> Problema de Negócio</h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-white/70 text-[20px] leading-relaxed font-light">{project.businessProblem}</p>
              </div>
              <SectionImage url={project.businessProblemImage} />
            </section>

            {/* 2. Contexto */}
            <section>
              <h2 className="text-2xl font-black text-white mb-8 flex items-center gap-4"><span className="text-accent text-sm">2.</span> Contexto</h2>
              <p className="text-white/60 text-[18px] mb-8 leading-relaxed font-light">{project.context}</p>
              <SectionImage url={project.contextImage} />
            </section>

            {/* 3. Premissas */}
            <section>
              <h2 className="text-2xl font-black text-white mb-8 flex items-center gap-4"><span className="text-accent text-sm">3.</span> Premissas da análise</h2>
              <ul className="space-y-4 mb-10">
                {project.premises.map((p, i) => (
                  <li key={i} className="flex gap-4 items-start text-white/50 bg-white/[0.02] p-6 rounded-2xl border border-white/5">
                    <div className="w-2.5 h-2.5 rounded-full bg-accent mt-1.5 shrink-0"></div>
                    <span className="text-[16px] leading-relaxed">{p}</span>
                  </li>
                ))}
              </ul>
              <SectionImage url={project.premisesImage} />
            </section>

            {/* 4. Estratégia */}
            <section>
              <h2 className="text-2xl font-black text-white mb-8 flex items-center gap-4"><span className="text-accent text-sm">4.</span> Estratégia da solução</h2>
              <div className="grid md:grid-cols-1 gap-4 mb-10">
                {project.strategy.map((step, i) => (
                  <div key={i} className="flex items-center gap-6 p-6 rounded-2xl bg-[#141416] border border-white/5 group hover:border-accent/30 transition-all">
                    <span className="text-2xl font-black text-white/5 group-hover:text-accent/20 transition-colors">0{i+1}</span>
                    <p className="text-white/80 text-[18px] font-medium">{step}</p>
                  </div>
                ))}
              </div>
              <SectionImage url={project.strategyImage} />
            </section>

            {/* 6. Resultados */}
            <section>
              <h2 className="text-2xl font-black text-white mb-8 flex items-center gap-4"><span className="text-accent text-sm">6.</span> Resultados</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-10">
                {project.results.map((res, i) => (
                  <div key={i} className="p-8 rounded-[2rem] border border-white/5 bg-[#0F0F0F] hover:bg-[#141416] transition-all">
                    <p className="text-white/70 text-[16px] leading-relaxed font-light">{res}</p>
                  </div>
                ))}
              </div>
              <SectionImage url={project.resultsImage} />
            </section>

            {/* 7. Próximos passos */}
            <section>
              <h2 className="text-2xl font-black text-white mb-8 flex items-center gap-4"><span className="text-accent text-sm">7.</span> Próximos passos</h2>
              <div className="bg-[#141416] p-10 rounded-[3rem] border border-white/5 relative overflow-hidden mb-10">
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-accent/10 blur-3xl"></div>
                <div className="space-y-6">
                  {project.nextSteps.map((step, i) => (
                    <div key={i} className="flex gap-4 items-center group">
                      <div className="w-2.5 h-2.5 bg-accent rounded-full group-hover:scale-150 transition-transform"></div>
                      <p className="text-white/90 text-[18px] font-medium">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
              <SectionImage url={project.nextStepsImage} />
            </section>

            {/* 8. Acesso ao Projeto Externo */}
            {project.links.demo && (
              <section className="pt-8 border-t border-white/5">
                <h2 className="text-2xl font-black text-white mb-8 flex items-center gap-4">
                  <span className="text-accent text-sm">8.</span> Visualizar Projeto
                </h2>
                <div className="bg-accent/5 border border-accent/20 rounded-[3rem] p-12 text-center group hover:bg-accent/10 transition-all duration-500 relative overflow-hidden">
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent/10 blur-3xl rounded-full"></div>
                  <p className="text-white/60 mb-10 uppercase tracking-[0.2em] font-black text-sm">Explore o portfólio completo e os resultados dinâmicos deste projeto</p>
                  
                  <a 
                    href={project.links.demo} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-6 bg-accent text-black font-black py-6 px-16 rounded-2xl hover:bg-white transition-all transform hover:scale-105 shadow-2xl shadow-accent/20 uppercase tracking-[0.3em] text-[12px]"
                  >
                    Acessar Projeto Externo
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </section>
            )}
          </div>

          <div className="mt-32 pt-16 border-t border-white/5 text-center">
             <button onClick={onBack} className="bg-white text-black font-black py-5 px-16 rounded-2xl hover:bg-accent transition-all uppercase tracking-[0.2em] text-[11px]">Concluir Leitura do Case</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;