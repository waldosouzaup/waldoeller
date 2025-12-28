
import React, { useState, useEffect, useCallback } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ProjectDetail from './components/ProjectDetail';
import AboutDetail from './components/AboutDetail';
import Contact from './components/Contact';
import AdminPortal from './components/AdminPortal';
import AdminDashboard from './components/AdminDashboard';
import { Project } from './types';
import { PROJECTS as STATIC_PROJECTS } from './constants';
import { supabase } from './supabase';
import { translations } from './translations';

type View = 'home' | 'project' | 'about-detail' | 'admin';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('home');
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [projects, setProjects] = useState<Project[]>(STATIC_PROJECTS);
  const [session, setSession] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [lang, setLang] = useState<'pt' | 'en'>('pt');
  const currentYear = 2026;

  const t = translations[lang];

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    const loadData = async () => {
      try {
        const { data, error } = await supabase
          .from('projects')
          .select('*')
          .order('display_order', { ascending: true });

        if (data && data.length > 0) {
          const mappedProjects: Project[] = data.map((p: any) => ({
            id: p.id,
            title: p.title || "Sem Título",
            category: p.category || "Dados",
            description: p.description || "",
            technologies: p.technologies || [],
            imageUrl: p.image_url || "",
            galleryImages: p.gallery_images || [],
            businessProblemImage: p.business_problem_image || "",
            contextImage: p.context_image || "",
            premisesImage: p.premises_image || "",
            strategyImage: p.strategy_image || "",
            resultsImage: p.results_image || "",
            nextStepsImage: p.next_steps_image || "",
            businessProblem: p.business_problem || "",
            context: p.context || "",
            premises: p.premises || [],
            strategy: p.strategy || [],
            insights: p.insights || [],
            results: p.results || [],
            nextSteps: p.next_steps || [],
            links: {
              github: p.github_url || "",
              demo: p.demo_url || ""
            }
          }));
          setProjects(mappedProjects);
        }
      } catch (err) {
        console.error("Erro ao carregar dados:", err);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
    return () => subscription.unsubscribe();
  }, []);

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  }, []);

  const handleGoHome = (sectionId?: string) => {
    if (sectionId) {
      window.location.hash = sectionId;
    } else {
      window.history.pushState("", document.title, window.location.pathname + window.location.search);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    
    if (currentView !== 'home') {
      setCurrentView('home');
      setActiveProject(null);
    } else if (sectionId) {
      scrollToSection(sectionId);
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0B] selection:bg-[#B08D20] selection:text-black font-sans antialiased overflow-x-hidden">
      {currentView !== 'admin' && <Navbar onNavigate={handleGoHome} lang={lang} setLang={setLang} />}
      
      <main>
        {currentView === 'home' && (
          <div className="animate-fade-in">
            <Hero onNavigate={handleGoHome} lang={lang} />
            <About lang={lang} />
            <section className="bg-[#0F0F0F] pb-32">
              <div className="container mx-auto px-6">
                <div className="max-w-5xl mx-auto relative group">
                  <div className="absolute inset-0 bg-accent/5 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <div className="relative z-10 bg-[#141416] border border-white/5 rounded-[3rem] p-12 md:p-20 overflow-hidden text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-12 group hover:border-accent/20 transition-all duration-500">
                    <div className="max-w-2xl">
                      <span className="text-accent font-black text-[10px] uppercase tracking-[0.4em] mb-6 block">Deep Dive</span>
                      <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight tracking-tighter">
                        {lang === 'pt' ? 'Quer entender como transformo ' : 'Want to understand how I transform '}
                        <span className="text-accent italic">{lang === 'pt' ? 'dados em valor?' : 'data into value?'}</span>
                      </h2>
                      <p className="text-white/40 text-lg md:text-xl font-light leading-relaxed mb-0">
                        {lang === 'pt' 
                          ? 'Acesse meu perfil técnico detalhado para explorar minha metodologia de trabalho e visão estratégica.'
                          : 'Access my detailed technical profile to explore my work methodology and strategic vision.'
                        }
                      </p>
                    </div>
                    <button onClick={() => setCurrentView('about-detail')} className="shrink-0 bg-white text-black font-black py-6 px-12 rounded-2xl hover:bg-accent transition-all shadow-2xl flex items-center gap-4 uppercase tracking-[0.2em] text-[11px]">
                      {lang === 'pt' ? 'Ver Perfil Completo' : 'View Full Profile'}
                    </button>
                  </div>
                </div>
              </div>
            </section>
            <Skills lang={lang} />
            <Projects projects={projects} onSelectProject={(p) => { setActiveProject(p); setCurrentView('project'); }} lang={lang} />
            <Contact lang={lang} />
          </div>
        )}

        {currentView === 'project' && activeProject && (
          <ProjectDetail project={activeProject} onBack={() => handleGoHome('projetos')} lang={lang} />
        )}

        {currentView === 'about-detail' && (
          <AboutDetail onBack={() => handleGoHome('sobre')} lang={lang} />
        )}

        {currentView === 'admin' && (
          session ? (
            <AdminDashboard onBack={() => setCurrentView('home')} />
          ) : (
            <AdminPortal onBack={() => setCurrentView('home')} />
          )
        )}
      </main>
      
      {currentView !== 'admin' && (
        <footer className="pt-24 pb-12 bg-[#050505] border-t border-white/5">
          <div className="container mx-auto px-6 text-center">
            <div className="mb-12">
              <button onClick={() => handleGoHome()} className="text-3xl font-black tracking-tighter text-white hover:opacity-80 transition-all outline-none">
                W<span className="text-accent">E</span>
              </button>
              <p className="text-[10px] text-white/20 uppercase tracking-[0.4em] font-bold mt-2">
                {lang === 'pt' ? 'Especialista em TI e Dados' : 'IT and Data Specialist'}
              </p>
            </div>
            <div className="pt-8 border-t border-white/[0.03] flex flex-col md:flex-row justify-between items-center gap-4 relative">
              <p className="text-[9px] uppercase tracking-[0.2em] font-black text-white/10">
                &copy; {currentYear} WALDO ELLER — {t.footer.rights}
              </p>
              <button onClick={() => setCurrentView('admin')} className="opacity-10 hover:opacity-100 hover:text-accent transition-all duration-500 p-2 group" title="Painel Administrativo">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </button>
              <p className="text-[9px] uppercase tracking-[0.2em] font-black text-white/10">{t.footer.location}</p>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
};

export default App;
