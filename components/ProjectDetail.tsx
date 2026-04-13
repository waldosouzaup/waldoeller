
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Project } from '../types';
import { translations } from '../translations';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkBreaks from 'remark-breaks';

interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
  lang: 'pt' | 'en';
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onBack, lang }) => {
  const [activeImage, setActiveImage] = useState(project.imageUrl);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const allImages = [project.imageUrl, ...(project.galleryImages || [])].filter(Boolean);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
        className="my-10 rounded-xl overflow-hidden border border-gray-200 bg-gray-50 cursor-pointer"
        onClick={() => setLightboxImage(url)}
      >
        <img src={url} className="w-full h-auto object-cover max-h-[500px]" alt="Visual do Case" />
      </div>
    );
  };

  const pageTitle = `${project.title} | Case Study | Waldo Eller`;
  const pageDescription = project.description || `Case study detalhado do projeto ${project.title} na área de ${project.category}.`;

  return (
    <section className="py-16 md:py-24 bg-white min-h-screen">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        {project.imageUrl && <meta property="og:image" content={project.imageUrl} />}
        <meta property="twitter:title" content={pageTitle} />
        <meta property="twitter:description" content={pageDescription} />
        {project.imageUrl && <meta property="twitter:image" content={project.imageUrl} />}
      </Helmet>

      {lightboxImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 cursor-pointer"
          onClick={() => setLightboxImage(null)}
        >
          <button 
            className="absolute top-4 right-4 text-white/70 hover:text-white p-2"
            onClick={(e) => { e.stopPropagation(); setLightboxImage(null); }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <img 
            src={lightboxImage} 
            className="max-w-full max-h-full object-contain" 
            alt="Lightbox view" 
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-between items-center mb-10">
            <button onClick={onBack} className="flex items-center gap-2 text-gray-500 hover:text-accent transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
              <span className="text-sm font-medium">{lang === 'pt' ? 'Voltar' : 'Back'}</span>
            </button>
            {project.links.github && (
              <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors" title="GitHub">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
              </a>
            )}
          </div>

          <div className="mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{project.title}</h1>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map(tech => (
                <span key={tech} className="bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1 rounded-full">{tech}</span>
              ))}
            </div>
          </div>

          <section className="mb-12">
            <div className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden">
              <div 
                className="relative aspect-video cursor-pointer"
                onClick={() => setLightboxImage(activeImage)}
              >
                {activeImage ? (
                  <img src={activeImage} className="w-full h-full object-cover" alt="Showcase" />
                ) : (
                  <div className="w-full h-full bg-gray-100" />
                )}
              </div>
              {allImages.length > 1 && (
                <div className="flex gap-2 p-3 overflow-x-auto">
                  {allImages.map((img, i) => (
                    <button key={i} onClick={() => setActiveImage(img)} className={`w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 border-2 ${activeImage === img ? 'border-accent' : 'border-transparent opacity-50 hover:opacity-100'}`}>
                      {img && <img src={img} className="w-full h-full object-cover" />}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </section>

          <div className="space-y-12">
            {project.markdown ? (
              <div className="prose prose-lg max-w-none">
                <ReactMarkdown remarkPlugins={[remarkGfm, remarkBreaks]}>
                  {project.markdown}
                </ReactMarkdown>
              </div>
            ) : (
              <>
                <section>
                  <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 bg-accent text-white text-sm flex items-center justify-center rounded-lg">1</span>
                    {lang === 'pt' ? 'Problema de Negócio' : 'Business Problem'}
                  </h2>
                  <p className="text-gray-600 leading-relaxed">{project.businessProblem}</p>
                  <SectionImage url={project.businessProblemImage} />
                </section>

                <section>
                  <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 bg-accent text-white text-sm flex items-center justify-center rounded-lg">2</span>
                    {lang === 'pt' ? 'Contexto' : 'Context'}
                  </h2>
                  <p className="text-gray-600 leading-relaxed">{project.context}</p>
                  <SectionImage url={project.contextImage} />
                </section>

                <section>
                  <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 bg-accent text-white text-sm flex items-center justify-center rounded-lg">3</span>
                    {lang === 'pt' ? 'Premissas' : 'Premises'}
                  </h2>
                  <ul className="space-y-3">
                    {project.premises.map((p, i) => (
                      <li key={i} className="flex gap-3 items-start text-gray-600 bg-gray-50 p-4 rounded-lg">
                        <div className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0"></div>
                        <p>{p}</p>
                      </li>
                    ))}
                  </ul>
                  <SectionImage url={project.premisesImage} />
                </section>

                <section>
                  <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 bg-accent text-white text-sm flex items-center justify-center rounded-lg">4</span>
                    {lang === 'pt' ? 'Estratégia' : 'Strategy'}
                  </h2>
                  <ul className="space-y-3">
                    {project.strategy.map((step, i) => (
                      <li key={i} className="flex gap-3 items-start text-gray-600 bg-gray-50 p-4 rounded-lg">
                        <div className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0"></div>
                        <p>{step}</p>
                      </li>
                    ))}
                  </ul>
                  <SectionImage url={project.strategyImage} />
                </section>

                <section>
                  <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 bg-accent text-white text-sm flex items-center justify-center rounded-lg">5</span>
                    {lang === 'pt' ? 'Resultados' : 'Results'}
                  </h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {project.results.map((res, i) => (
                      <div key={i} className="p-5 bg-gray-50 rounded-xl text-gray-600">
                        <p>{res}</p>
                      </div>
                    ))}
                  </div>
                  <SectionImage url={project.resultsImage} />
                </section>

                {project.nextSteps && project.nextSteps.length > 0 && (
                  <section>
                    <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                      <span className="w-8 h-8 bg-accent text-white text-sm flex items-center justify-center rounded-lg">6</span>
                      {lang === 'pt' ? 'Próximos Passos' : 'Next Steps'}
                    </h2>
                    <ul className="space-y-3">
                      {project.nextSteps.map((step, i) => (
                        <li key={i} className="flex gap-3 items-start text-gray-600">
                          <div className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0"></div>
                          <p>{step}</p>
                        </li>
                      ))}
                    </ul>
                    <SectionImage url={project.nextStepsImage} />
                  </section>
                )}
              </>
            )}

            {project.links.demo && (
              <section className="pt-8 border-t border-gray-200">
                <h2 className="text-xl font-bold text-gray-900 mb-6">{lang === 'pt' ? 'Acesso ao Projeto' : 'Project Access'}</h2>
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 text-center">
                  <p className="text-gray-500 mb-6 text-sm">
                    {lang === 'pt' ? 'Explore a solução completa' : 'Explore the complete solution'}
                  </p>
                  <a 
                    href={project.links.demo} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-2 bg-accent text-white font-medium py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    {lang === 'pt' ? 'Acessar Projeto' : 'Access Project'}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </a>
                </div>
              </section>
            )}
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200 text-center">
             <button onClick={onBack} className="bg-gray-900 text-white font-medium py-3 px-8 rounded-lg hover:bg-accent transition-colors">
               {lang === 'pt' ? 'Voltar aos Projetos' : 'Back to Projects'}
             </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;
