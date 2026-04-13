
import React, { useState, useEffect, useCallback } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Clients from './components/Clients';
import About from './components/About';
import Services from './components/Services';
import ServiceDetail from './components/ServiceDetail';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ProjectDetail from './components/ProjectDetail';
import AboutDetail from './components/AboutDetail';
import Authority from './components/Authority';
import Contact from './components/Contact';
import AdminPortal from './components/AdminPortal';
import AdminDashboard from './components/AdminDashboard';
import { Project } from './types';
import { PROJECTS as STATIC_PROJECTS } from './constants';
import { supabase } from './supabase';
import { translations } from './translations';

type View = 'home' | 'project' | 'about-detail' | 'admin' | 'service-detail' | 'all-projects';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('home');
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [activeService, setActiveService] = useState<string | null>(null);
  const [projects, setProjects] = useState<Project[]>(STATIC_PROJECTS);
  const [session, setSession] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [lang, setLang] = useState<'pt' | 'en'>('pt');
  const currentYear = 2026;

  const t = translations[lang];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Waldo Eller",
    "jobTitle": "Data Analyst & Future Data Engineer",
    "description": "Especialista em unir a potência da Análise de Dados com a flexibilidade do Desenvolvimento Web para criar produtos digitais que escalam.",
    "url": window.location.origin,
    "sameAs": [
      "https://github.com/waldoeller",
      "https://linkedin.com/in/waldoeller"
    ]
  };

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash.startsWith('#servico-')) {
      const serviceId = hash.replace('#servico-', '');
      setActiveService(serviceId);
      setCurrentView('service-detail');
    } else if (hash.startsWith('#projeto-')) {
      const projectId = hash.replace('#projeto-', '');
      // We need to wait for projects to load to set activeProject
      // This will be handled in the loadProjects callback or another effect
    } else if (hash === '#sobre-detalhes') {
      setCurrentView('about-detail');
    }
  }, []);

  const loadProjects = useCallback(async () => {
    try {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('created_at', { ascending: false });

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
          markdown: p.markdown || "",
          links: {
            github: p.github_url || "",
            demo: p.demo_url || ""
          }
        }));
        setProjects(mappedProjects);
        
        const hash = window.location.hash;
        if (hash.startsWith('#projeto-')) {
          const projectId = hash.replace('#projeto-', '');
          const project = mappedProjects.find(p => p.id === projectId);
          if (project) {
            setActiveProject(project);
            setCurrentView('project');
          }
        }
      }
    } catch (err) {
      console.error("Erro ao carregar dados:", err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (currentView === 'home' || currentView === 'all-projects') {
      loadProjects();
    }
  }, [currentView, loadProjects]);

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
      setActiveService(null);
    } else if (sectionId) {
      scrollToSection(sectionId);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 selection:bg-accent selection:text-white font-sans antialiased overflow-x-hidden">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      {currentView !== 'admin' && <Navbar onNavigate={handleGoHome} lang={lang} setLang={setLang} />}
      
      <main>
        {currentView === 'home' && (
          <div className="animate-fade-in">
            <Helmet>
              <title>{lang === 'pt' ? 'Waldo Eller | Portfólio Estratégico de Dados' : 'Waldo Eller | Strategic Data Portfolio'}</title>
              <meta name="description" content={lang === 'pt' ? 'Especialista em unir a potência da Análise de Dados com a flexibilidade do Desenvolvimento Web para criar produtos digitais que escalam.' : 'Specialist in combining the power of Data Analysis with the flexibility of Web Development to create digital products that scale.'} />
            </Helmet>
            <Hero onNavigate={handleGoHome} lang={lang} />
            <Clients lang={lang} />
            <Projects 
              projects={projects} 
              onSelectProject={(p) => { setActiveProject(p); setCurrentView('project'); }} 
              lang={lang} 
              limit={6}
              onViewAll={() => {
                setCurrentView('all-projects');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
            <Authority lang={lang} />
            <About 
              lang={lang} 
              onViewFullProfile={() => {
                setCurrentView('about-detail');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }} 
            />
            <Services lang={lang} onSelectService={(id) => { setActiveService(id); setCurrentView('service-detail'); }} />
            <Contact lang={lang} />
          </div>
        )}

        {currentView === 'project' && activeProject && (
          <ProjectDetail project={activeProject} onBack={() => handleGoHome('projetos')} lang={lang} />
        )}

        {currentView === 'service-detail' && activeService && (
          <ServiceDetail serviceId={activeService} onBack={() => handleGoHome('servicos')} lang={lang} />
        )}

        {currentView === 'about-detail' && (
          <AboutDetail onBack={() => handleGoHome('sobre')} lang={lang} />
        )}

        {currentView === 'all-projects' && (
          <div className="animate-fade-in">
            <Projects 
              projects={projects} 
              onSelectProject={(p) => { setActiveProject(p); setCurrentView('project'); }} 
              lang={lang} 
              onBack={() => handleGoHome('projetos')}
            />
          </div>
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
        <footer className="pt-16 pb-8 bg-white border-t border-gray-200">
          <div className="container mx-auto px-6 text-center">
            <div className="mb-10">
              <button onClick={() => handleGoHome()} className="text-2xl font-bold text-gray-900 hover:text-accent transition-colors">
                W<span className="text-accent">E</span>
              </button>
              <p className="text-xs text-gray-400 uppercase tracking-widest mt-2">
                {lang === 'pt' ? 'Especialista em TI e Dados' : 'IT and Data Specialist'}
              </p>
            </div>
            <div className="pt-6 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
              <p className="text-xs text-gray-400">
                &copy; {currentYear} WALDO ELLER, {t.footer.rights}
              </p>
              <button onClick={() => setCurrentView('admin')} className="text-gray-300 hover:text-accent transition-colors p-2" title="Painel Administrativo">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </button>
              <p className="text-xs text-gray-400">{t.footer.location}</p>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
};

export default App;
