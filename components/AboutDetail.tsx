
import React, { useEffect } from 'react';
import { translations } from '../translations';
import { TECH_GROUPS } from '../constants';

interface AboutDetailProps {
  onBack: () => void;
  lang: 'pt' | 'en';
}

const AboutDetail: React.FC<AboutDetailProps> = ({ onBack, lang }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const whatsappNumber = "5561991161854";
  const whatsappMessage = encodeURIComponent(
    lang === 'pt' 
      ? "Olá Waldo, vi seu perfil detalhado no portfólio e gostaria de conversar sobre um projeto." 
      : "Hi Waldo, I saw your detailed profile in your portfolio and would like to talk about a project."
  );
  
  const t = translations[lang].aboutDetail;

  // Estilos base para manter a consistência visual
  const smoothTextClass = "antialiased text-white/75 text-[20.33px] leading-[1.85] font-light tracking-tight selection:bg-accent/30";
  const smoothTitleClass = "antialiased text-white/95 font-black tracking-tighter leading-[1.1] selection:bg-accent/30";
  const sectionLabelClass = "text-accent font-black text-[11px] uppercase tracking-[0.4em] mb-4 block opacity-90";

  return (
    <div className="bg-[#0A0A0B] min-h-screen pt-32 pb-20 selection:bg-accent selection:text-black" style={{ textRendering: 'optimizeLegibility' }}>
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Botão Voltar */}
        <button 
          onClick={onBack}
          className="flex items-center gap-4 text-white/40 hover:text-accent transition-all mb-16 group"
        >
          <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-accent group-hover:bg-accent/5 transition-all">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </div>
          <span className="text-[10px] font-black uppercase tracking-[0.3em]">{t.back}</span>
        </button>

        {/* Profile Hero */}
        <div className="grid lg:grid-cols-2 gap-20 items-start mb-32">
          <div className="relative">
            <div className="absolute -top-10 -left-10 text-[12rem] font-black text-white/[0.01] select-none pointer-events-none uppercase -z-10 tracking-tighter">
              PROFILE
            </div>
            <h1 className={`${smoothTitleClass} text-5xl md:text-8xl mb-8`}>
              {lang === 'pt' ? 'Dados são o ' : 'Data is the '}
              <span className="text-accent italic font-serif">DNA</span> 
              {lang === 'pt' ? ' de decisões modernas.' : ' of modern decisions.'}
            </h1>
            <p className="text-xl md:text-3xl text-white/60 font-light leading-relaxed max-w-xl antialiased">
              {lang === 'pt' 
                ? 'Como especialista em tecnologia e dados, meu trabalho é garantir que cada byte de informação seja transformado em uma vantagem competitiva tangível.'
                : 'As a technology and data specialist, my job is to ensure that every byte of information is transformed into a tangible competitive advantage.'
              }
            </p>
          </div>
          
          <div className="space-y-10">
            <div className="p-10 rounded-[2.5rem] bg-[#141416] border border-white/5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 blur-3xl group-hover:bg-accent/10 transition-all"></div>
              <h3 className={sectionLabelClass}>{lang === 'pt' ? 'A Filosofia' : 'The Philosophy'}</h3>
              <p className="text-white/80 leading-relaxed text-lg md:text-xl font-light antialiased">
                {lang === 'pt' 
                  ? 'Não acredito em tecnologia pela tecnologia. Acredito em soluções que resolvem problemas reais. Meu foco está na intersecção entre a precisão da engenharia de dados e a agilidade do desenvolvimento web moderno.'
                  : 'I don’t believe in technology for technology’s sake. I believe in solutions that solve real problems. My focus is at the intersection of data engineering precision and modern web development agility.'
                }
              </p>
            </div>
          </div>
        </div>

        {/* SEÇÃO: TRAJETÓRIA E VISÃO */}
        <div className="max-w-4xl mx-auto mb-32 py-16 border-y border-white/5">
          <h2 className="text-center text-3xl md:text-4xl font-black uppercase mb-16 tracking-[0.3em] text-white/40 antialiased">
            {lang === 'pt' ? 'Trajetória e Visão' : 'Trajectory and Vision'}
          </h2>
          <div className="space-y-16">
            <div className="space-y-6">
              <h3 className="text-accent font-black text-[12px] uppercase tracking-[0.4em] flex items-center gap-4">
                <span className="w-8 h-[1px] bg-accent/30"></span>
                {lang === 'pt' ? 'Analista de Dados & Estratégia de Negócios' : 'Data Analyst & Business Strategy'}
              </h3>
              <p className={smoothTextClass}>
                {lang === 'pt' 
                  ? 'Minha trajetória profissional combina uma sólida formação em Sistemas de Informação com Pós-graduação em Marketing Digital e Inovação, com especial foco em Análise de Negócios. Há mais de dois anos, atuo como Analista de Dados, utilizando minha expertise em análise de dados e inferência estatística para otimizar resultados e descobrir novas oportunidades de crescimento.'
                  : 'My professional journey combines a solid background in Information Systems with a Postgraduate degree in Digital Marketing and Innovation, with a special focus on Business Analysis. For over two years, I have been working as a Data Analyst, using my expertise in data analysis and statistical inference to optimize results and discover new growth opportunities.'
                }
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-accent font-black text-[12px] uppercase tracking-[0.4em] flex items-center gap-4">
                <span className="w-8 h-[1px] bg-accent/30"></span>
                {lang === 'pt' ? 'Evolução para Ciência de Dados' : 'Evolution to Data Science'}
              </h3>
              <p className={smoothTextClass}>
                {lang === 'pt' 
                  ? 'Motivado pela busca por soluções baseadas em dados, estou em transição para a área de Ciência de Dados. Atualmente, dedico-me a aprofundar meus conhecimentos, desenvolvendo projetos práticos que visam aprimorar o domínio em ferramentas de análise avançada e machine learning para solucionar desafios de negócio complexos.'
                  : 'Motivated by the search for data-driven solutions, I am transitioning to the Data Science area. Currently, I am dedicated to deepening my knowledge, developing practical projects aimed at improving mastery in advanced analysis tools and machine learning to solve complex business challenges.'
                }
              </p>
            </div>
          </div>
        </div>

        {/* SEÇÃO: IDIOMAS (VERSÃO REFINADA E MAIS SUAVE) */}
        <section className="mb-32">
          <h3 className={`${smoothTitleClass} text-2xl md:text-3xl mb-10 uppercase tracking-widest text-white/40`}>{t.languages.title}</h3>
          <div className="grid md:grid-cols-3 gap-6">
            
            {/* ITEM: Português */}
            <div className="bg-[#141416]/50 p-6 rounded-[1.5rem] border border-white/5 flex items-center gap-5 group hover:border-accent/20 transition-all duration-500">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-white/10 shrink-0 shadow-lg transition-all group-hover:scale-105 group-hover:border-accent/30">
                 <img src="https://flagcdn.com/w80/br.png" alt="Brasil" className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all" />
              </div>
              <div>
                <h4 className="text-sm font-black uppercase text-white mb-1 tracking-widest opacity-80 group-hover:opacity-100 transition-opacity">{lang === 'pt' ? 'Português' : 'Portuguese'}</h4>
                <p className="text-white/30 text-[11px] font-medium leading-tight">Nativo / Fluente</p>
              </div>
            </div>

            {/* ITEM: Inglês */}
            <div className="bg-[#141416]/50 p-6 rounded-[1.5rem] border border-white/5 flex items-center gap-5 group hover:border-accent/20 transition-all duration-500">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-white/10 shrink-0 shadow-lg transition-all group-hover:scale-105 group-hover:border-accent/30">
                 <img src="https://flagcdn.com/w80/us.png" alt="USA" className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all" />
              </div>
              <div>
                <h4 className="text-sm font-black uppercase text-white mb-1 tracking-widest opacity-80 group-hover:opacity-100 transition-opacity">{lang === 'pt' ? 'Inglês' : 'English'}</h4>
                <p className="text-white/30 text-[11px] font-medium leading-tight">Avançado / Técnico</p>
              </div>
            </div>

            {/* ITEM: Espanhol */}
            <div className="bg-[#141416]/50 p-6 rounded-[1.5rem] border border-white/5 flex items-center gap-5 group hover:border-accent/20 transition-all duration-500">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-white/10 shrink-0 shadow-lg transition-all group-hover:scale-105 group-hover:border-accent/30">
                 <img src="https://flagcdn.com/w80/es.png" alt="Espanha" className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all" />
              </div>
              <div>
                <h4 className="text-sm font-black uppercase text-white mb-1 tracking-widest opacity-80 group-hover:opacity-100 transition-opacity">{lang === 'pt' ? 'Espanhol' : 'Spanish'}</h4>
                <p className="text-white/30 text-[11px] font-medium leading-tight">Intermediário</p>
              </div>
            </div>

          </div>
        </section>

        {/* SEÇÃO: FORMAÇÃO E EXPERIÊNCIAS */}
        <div className="grid lg:grid-cols-2 gap-16 mb-32 pt-12">
          {/* LADO ESQUERDO: Formação */}
          <div className="space-y-24">
            <section>
              <h3 className={`${smoothTitleClass} text-3xl md:text-4xl mb-12 uppercase tracking-tight`}>
                {lang === 'pt' ? 'Formação' : 'Education'}
              </h3>
              <div className="relative pl-10 space-y-16 border-l border-white/5 ml-4">
                {[
                  { title: "Sistemas de Informação", date: "2011 - 2014", inst: "UNIP - Universidade Paulista", desc: "Disciplinas: Banco de Dados, Redes de Computadores, Segurança da Informação e Gestão de Projetos de TI." },
                  { title: "Pós-graduação em Marketing", date: "2021 - 2022", inst: "IESLA - Instituto de Educação Latino Americano", desc: "Disciplinas: Visualização de Dados, Bancos de Dados, Métricas na Web, Seo e Analytics, Gestão de Projetos e Metodologias Ágeis." },
                  { title: "Pós-graduação Ciência de Dados", date: "2026", inst: "GRAN Faculdade", desc: "Disciplinas: Modelagem de Banco de Dados, Business Intelligence, Integração de Dados e Data Lake, Probabilidade e Inferência para Ciência de Dados." },
                  { title: "Pós-graduação Segurança da Informação", date: "2026", inst: "GRAN Faculdade", desc: "Disciplinas: Modelagem de Banco de Dados, Business Intelligence, Integração de Dados e Data Lake, Probabilidade e Inferência para Ciência de Dados." },
                  { title: "Pós-graduação Engenharia de Dados", date: "2026", inst: "FOCUS Faculdade", desc: "Disciplinas: Modelagem de Banco de Dados, Business Intelligence, Integração de Dados e Data Lake, Probabilidade e Inferência para Ciência de Dados." }
                ].map((item, idx) => (
                  <div className="relative" key={idx}>
                    <div className="absolute -left-[50px] top-1 w-[20px] h-[20px] rounded-full border-4 border-accent bg-[#0A0A0B] shadow-[0_0_15px_rgba(176,141,32,0.2)]"></div>
                    <h4 className="text-2xl font-black uppercase text-accent mb-2 tracking-widest antialiased">{item.title}</h4>
                    <p className="text-[10px] font-black text-white/30 mb-3 tracking-[0.3em] uppercase">{item.date}</p>
                    <p className="text-xl font-bold text-white/90 mb-2 italic antialiased">{item.inst}</p>
                    <p className="text-lg md:text-xl text-white/50 font-light leading-relaxed antialiased">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* LADO DIREITO: Experiências */}
          <div className="space-y-24">
            <section>
              <h3 className={`${smoothTitleClass} text-3xl md:text-4xl mb-12 uppercase tracking-tight`}>
                {lang === 'pt' ? 'Experiências' : 'Experience'}
              </h3>
              <div className="relative pl-10 space-y-16 border-l border-white/5 ml-4">
                {[
                  { 
                    title: "Analista de Dados Pleno", 
                    date: "2023 - Present", 
                    company: "Empresa de Inteligência Analítica", 
                    tasks: [
                      "Desenvolvimento de pipelines de dados automatizados para visualização executiva.",
                      "Análise de churn e lifetime value (LTV) para otimização de campanhas de marketing.",
                      "Criação de dashboards interativos em Power BI e Looker Studio."
                    ]
                  }
                ].map((exp, idx) => (
                  <div className="relative" key={idx}>
                    <div className="absolute -left-[50px] top-1 w-[20px] h-[20px] rounded-full border-4 border-accent bg-[#0A0A0B] shadow-[0_0_15px_rgba(176,141,32,0.2)]"></div>
                    <h4 className="text-2xl font-black uppercase text-accent mb-2 tracking-widest antialiased">{exp.title}</h4>
                    <p className="text-[10px] font-black text-white/30 mb-3 tracking-[0.3em] uppercase">{exp.date}</p>
                    <p className="text-2xl md:text-3xl font-black text-white/90 mb-6 uppercase tracking-tight antialiased">{exp.company}</p>
                    <ul className="space-y-5 text-lg md:text-xl text-white/50 font-light leading-relaxed list-none antialiased">
                      {exp.tasks.map((task, tIdx) => (
                        <li key={tIdx} className="flex gap-4">
                          <span className="text-accent mt-1.5">•</span>
                          <span>{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>

        {/* SEÇÃO: TECNOLOGIAS */}
        <section className="mb-32">
          <h3 className={`${smoothTitleClass} text-3xl md:text-4xl mb-6 uppercase tracking-tight`}>{t.technologies.title}</h3>
          <p className="text-white/40 text-xl font-light mb-16 max-w-2xl">{t.technologies.subtitle}</p>
          <div className="grid md:grid-cols-3 gap-10">
            {TECH_GROUPS.map((group, idx) => (
              <div key={idx} className="bg-[#141416] p-10 rounded-[2.5rem] border border-white/5 shadow-xl group hover:border-accent/20 transition-all">
                <h3 className="text-xs font-black mb-10 text-accent/60 uppercase tracking-[0.3em] border-b border-white/5 pb-5">
                  {group.title}
                </h3>
                <div className="flex flex-wrap gap-4">
                  {group.items.map((tech) => (
                    <div 
                      key={tech} 
                      className="bg-white/[0.03] border border-white/5 px-6 py-4 rounded-2xl flex items-center justify-center hover:bg-accent hover:text-black transition-all duration-300 group cursor-default"
                    >
                      <span className="text-xs font-black uppercase tracking-widest text-white/50 group-hover:text-black transition-colors">
                        {tech}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SEÇÃO: CURSOS E CERTIFICADOS (ESTÁTICA PARA EDIÇÃO FÁCIL) */}
        <section className="mb-32">
          <h3 className={`${smoothTitleClass} text-3xl md:text-4xl mb-12 uppercase tracking-tight`}>{t.courses.title}</h3>
          <div className="grid gap-10">
            
            {/* ITEM: CURSO ENAP */}
            <div className="bg-[#141416] p-10 md:p-12 rounded-[3rem] border border-white/5 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-40 h-40 bg-accent/5 blur-3xl group-hover:bg-accent/10 transition-all"></div>
              
              <div className="flex justify-between items-start mb-8 flex-col md:flex-row gap-6">
                <div>
                  <h4 className="text-2xl font-black text-white mb-2 leading-tight tracking-tight uppercase">ENAP - Fundamentos de Análise de Dados - 120h</h4>
                  <span className="text-accent text-[10px] font-black uppercase tracking-[0.4em]">Período: 2025</span>
                </div>
                {/* Link para o certificado */}
                <a 
                  href="https://drive.google.com/file/d/1GRT6IbETHSetqloEuO76pAj-PKTv4TzH/view?usp=sharing" 
                  target="_blank"
                  className="bg-accent/10 border border-accent/20 text-accent text-[9px] font-black uppercase tracking-widest px-6 py-4 rounded-xl hover:bg-accent hover:text-black transition-all flex items-center gap-3 shrink-0"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                  {t.courses.viewCertificate}
                </a>
              </div>
              
              <p className="text-white/40 mb-8 text-lg md:text-xl font-light">O curso abordou temas essenciais como:</p>
              <ul className="space-y-4">
                <li className="flex gap-5 items-center text-white/60 text-lg md:text-xl font-light group/item transition-colors">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent opacity-40 group-hover/item:opacity-100"></div>
                  Análise de dados como suporte à tomada de decisão
                </li>
                <li className="flex gap-5 items-center text-white/60 text-lg md:text-xl font-light group/item transition-colors">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent opacity-40 group-hover/item:opacity-100"></div>
                  Análise de Dados em Linguagem R
                </li>
                <li className="flex gap-5 items-center text-white/60 text-lg md:text-xl font-light group/item transition-colors">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent opacity-40 group-hover/item:opacity-100"></div>
                  Governança de Dados e sua importância na Transformação Digital
                </li>
                <li className="flex gap-5 items-center text-white/60 text-lg md:text-xl font-light group/item transition-colors">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent opacity-40 group-hover/item:opacity-100"></div>
                  Introdução à Lei Geral de Proteção de Dados (LGPD)
                </li>
              </ul>
            </div>

             {/* ITEM: CURSO ENAP 2 */}
            <div className="bg-[#141416] p-10 md:p-12 rounded-[3rem] border border-white/5 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-40 h-40 bg-accent/5 blur-3xl group-hover:bg-accent/10 transition-all"></div>
              
              <div className="flex justify-between items-start mb-8 flex-col md:flex-row gap-6">
                <div>
                  <h4 className="text-2xl font-black text-white mb-2 leading-tight tracking-tight uppercase">ENAP - Engenharia de Dados e IA Aplicada para Gestores de TIC - 104h</h4>
                  <span className="text-accent text-[10px] font-black uppercase tracking-[0.4em]">Período: 2025</span>
                </div>
                {/* Link para o certificado */}
                <a 
                  href="#" 
                  target="_blank"
                  className="bg-accent/10 border border-accent/20 text-accent text-[9px] font-black uppercase tracking-widest px-6 py-4 rounded-xl hover:bg-accent hover:text-black transition-all flex items-center gap-3 shrink-0"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                  {t.courses.viewCertificate}
                </a>
              </div>
              
              <p className="text-white/40 mb-8 text-lg md:text-xl font-light">O curso abordou temas essenciais como:</p>
              <ul className="space-y-4">
                <li className="flex gap-5 items-center text-white/60 text-lg md:text-xl font-light group/item transition-colors">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent opacity-40 group-hover/item:opacity-100"></div>
                  Engenharia de dados e infraestrutura moderna
                </li>
                <li className="flex gap-5 items-center text-white/60 text-lg md:text-xl font-light group/item transition-colors">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent opacity-40 group-hover/item:opacity-100"></div>
                  Implementação de IA em processos de negócio
                </li>
                <li className="flex gap-5 items-center text-white/60 text-lg md:text-xl font-light group/item transition-colors">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent opacity-40 group-hover/item:opacity-100"></div>
                  Gestão estratégica de ativos de TI
                </li>
              </ul>
            </div>

          </div>
        </section>

        {/* SEÇÃO: LIVROS (ESTÁTICA PARA EDIÇÃO FÁCIL) */}
        <section className="mb-32">
          <h3 className={`${smoothTitleClass} text-3xl md:text-4xl mb-6 uppercase tracking-tight`}>{t.books.title}</h3>
          <p className="text-white/40 text-xl font-light mb-16 max-w-2xl">{t.books.recommendation}</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            
            {/* ITEM: LIVRO STORYTELLING */}
            <div className="bg-[#141416] rounded-[3rem] border border-white/5 overflow-hidden group shadow-2xl hover:border-accent/30 transition-all duration-500">
              <div className="aspect-[3/4] overflow-hidden relative">
                 <img 
                   src="https://m.media-amazon.com/images/I/71PPqjBUIuL._SY425_.jpg" 
                   alt="Storytelling com Dados" 
                   className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" 
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#141416] via-[#141416]/20 to-transparent"></div>
              </div>
              <div className="p-10 -mt-20 relative z-10">
                <h4 className="text-2xl font-black text-white mb-2 leading-tight tracking-tight uppercase">Storytelling com Dados</h4>
                <p className="text-accent text-[10px] font-black uppercase tracking-[0.3em] mb-6">Cole Nussbaumer Knaflic</p>
                <p className="text-white/40 text-lg font-light leading-relaxed">
                  Um guia essencial para profissionais que desejam transformar dados abstratos em visualizações claras e narrativas persuasivas que impulsionam a ação.
                </p>
              </div>
            </div>

            {/* ITEM: LIVRO BI BIG DATA */}
            <div className="bg-[#141416] rounded-[3rem] border border-white/5 overflow-hidden group shadow-2xl hover:border-accent/30 transition-all duration-500">
              <div className="aspect-[3/4] overflow-hidden relative">
                 <img 
                   src="https://m.media-amazon.com/images/I/91UcdIbdrZL._SY466_.jpg" 
                   alt="BI na era do Big Data" 
                   className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" 
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#141416] via-[#141416]/20 to-transparent"></div>
              </div>
              <div className="p-10 -mt-20 relative z-10">
                <h4 className="text-2xl font-black text-white mb-2 leading-tight tracking-tight uppercase">BI na era do Big Data</h4>
                <p className="text-accent text-[10px] font-black uppercase tracking-[0.3em] mb-6">Stanley Loh</p>
                <p className="text-white/40 text-lg font-light leading-relaxed">
                  Indo além de cubos e dashboards na busca pelos porquês, explicações e padrões ocultos nos grandes volumes de dados.
                </p>
              </div>
            </div>

            {/* ITEM: LIVRO COMO MENTIR COM ESTATISTICA */}
            <div className="bg-[#141416] rounded-[3rem] border border-white/5 overflow-hidden group shadow-2xl hover:border-accent/30 transition-all duration-500">
              <div className="aspect-[3/4] overflow-hidden relative">
                 <img 
                   src="https://m.media-amazon.com/images/I/61CaO+WCQ8L._SY466_.jpg" 
                   alt="Como mentir com estatística" 
                   className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" 
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#141416] via-[#141416]/20 to-transparent"></div>
              </div>
              <div className="p-10 -mt-20 relative z-10">
                <h4 className="text-2xl font-black text-white mb-2 leading-tight tracking-tight uppercase">Como mentir com estatística</h4>
                <p className="text-accent text-[10px] font-black uppercase tracking-[0.3em] mb-6">Darrell Huff</p>
                <p className="text-white/40 text-lg font-light leading-relaxed">
                  Uma leitura crítica sobre como dados podem ser manipulados e como desenvolver um olhar analítico para evitar armadilhas visuais.
                </p>
              </div>
            </div>
            
          </div>
        </section>

        {/* CTA FINAL */}
        <div className="bg-accent p-16 md:p-24 rounded-[4rem] text-center shadow-[0_20px_80px_rgba(176,141,32,0.15)] relative overflow-hidden group">
          <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <h2 className="text-black text-4xl md:text-6xl font-black mb-8 tracking-tighter antialiased">
            {lang === 'pt' ? 'Vamos construir algo inteligente?' : 'Let’s build something intelligent?'}
          </h2>
          <p className="text-black/60 text-lg md:text-2xl font-bold mb-12 max-w-2xl mx-auto uppercase tracking-wider leading-relaxed antialiased">
            {lang === 'pt' ? 'Estou pronto para o próximo desafio técnico de alto impacto.' : 'I am ready for the next high-impact technical challenge.'}
          </p>
          <a 
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-black text-white font-black px-16 py-6 rounded-2xl text-xs md:text-sm uppercase tracking-[0.4em] hover:bg-[#1A1A1C] transition-all transform hover:-translate-y-1 shadow-2xl"
          >
            {lang === 'pt' ? 'Entrar em Contato Agora' : 'Get in Touch Now'}
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutDetail;
