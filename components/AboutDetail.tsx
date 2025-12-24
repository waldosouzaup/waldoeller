import React, { useEffect } from 'react';

interface AboutDetailProps {
  onBack: () => void;
}

const AboutDetail: React.FC<AboutDetailProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const whatsappNumber = "5561991161854";
  const whatsappMessage = encodeURIComponent("Olá Waldo, vi seu perfil detalhado no portfólio e gostaria de conversar sobre um projeto.");

  // Estilo de texto suavizado e otimizado para leitura longa
  const smoothTextClass = "antialiased text-white/75 text-[20.33px] leading-[1.85] font-light tracking-tight selection:bg-accent/30";
  const smoothTitleClass = "antialiased text-white/95 font-black tracking-tighter leading-[1.1] selection:bg-accent/30";
  const sectionLabelClass = "text-accent font-black text-[11px] uppercase tracking-[0.4em] mb-4 block opacity-90";

  return (
    <div className="bg-[#0A0A0B] min-h-screen pt-32 pb-20 selection:bg-accent selection:text-black" style={{ textRendering: 'optimizeLegibility' }}>
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Breadcrumb / Back button */}
        <button 
          onClick={onBack}
          className="flex items-center gap-4 text-white/40 hover:text-accent transition-all mb-16 group"
        >
          <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-accent group-hover:bg-accent/5 transition-all">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </div>
          <span className="text-[10px] font-black uppercase tracking-[0.3em]">Voltar para o Início</span>
        </button>

        {/* Hero Section of About Page */}
        <div className="grid lg:grid-cols-2 gap-20 items-start mb-32">
          <div className="relative">
            <div className="absolute -top-10 -left-10 text-[12rem] font-black text-white/[0.01] select-none pointer-events-none uppercase -z-10 tracking-tighter">
              PROFILE
            </div>
            <h1 className={`${smoothTitleClass} text-5xl md:text-8xl mb-8`}>
              Dados são o <span className="text-accent italic font-serif">DNA</span> de decisões modernas.
            </h1>
            <p className="text-xl md:text-3xl text-white/60 font-light leading-relaxed max-w-xl antialiased">
              Como especialista em tecnologia e dados, meu trabalho é garantir que cada byte de informação seja transformado em uma vantagem competitiva tangível.
            </p>
          </div>
          
          <div className="space-y-10">
            <div className="p-10 rounded-[2.5rem] bg-[#141416] border border-white/5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 blur-3xl group-hover:bg-accent/10 transition-all"></div>
              <h3 className={sectionLabelClass}>A Filosofia</h3>
              <p className="text-white/80 leading-relaxed text-lg md:text-xl font-light antialiased">
                Não acredito em tecnologia pela tecnologia. Acredito em soluções que resolvem problemas reais. Meu foco está na intersecção entre a precisão da engenharia de dados e a agilidade do desenvolvimento web moderno.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="p-8 rounded-[2rem] border border-white/5 bg-[#0F0F0F]">
                <span className="text-4xl md:text-5xl font-black text-white/90 block mb-2 tracking-tighter">05+</span>
                <span className="text-accent font-black uppercase tracking-widest text-[10px] opacity-70">Anos de Atuação</span>
              </div>
              <div className="p-8 rounded-[2rem] border border-white/5 bg-[#0F0F0F]">
                <span className="text-4xl md:text-5xl font-black text-white/90 block mb-2 tracking-tighter">100%</span>
                <span className="text-accent font-black uppercase tracking-widest text-[10px] opacity-70">Foco em Resultados</span>
              </div>
            </div>
          </div>
        </div>

        {/* Narrative Section - Texto atualizado com suavização */}
        <div className="max-w-4xl mx-auto mb-32 py-16 border-y border-white/5">
          <h2 className="text-center text-3xl md:text-4xl font-black uppercase mb-16 tracking-[0.3em] text-white/40 antialiased">Trajetória e Visão</h2>
          <div className="space-y-16">
            <div className="space-y-6">
              <h3 className="text-accent font-black text-[12px] uppercase tracking-[0.4em] flex items-center gap-4">
                <span className="w-8 h-[1px] bg-accent/30"></span>
                Analista de Dados & Estratégia de Negócios
              </h3>
              <p className={smoothTextClass}>
                Minha trajetória profissional combina uma sólida formação em Sistemas de Informação com Pós-graduação em Marketing Digital e Inovação, com especial foco em Análise de Negócios. Há mais de dois anos, atuo como Analista de Dados, utilizando minha expertise em análise de dados e inferência estatística para otimizar resultados e descobrir novas oportunidades de crescimento.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-accent font-black text-[12px] uppercase tracking-[0.4em] flex items-center gap-4">
                <span className="w-8 h-[1px] bg-accent/30"></span>
                Evolução para Ciência de Dados
              </h3>
              <p className={smoothTextClass}>
                Motivado pela busca por soluções baseadas em dados, estou em transição para a área de Ciência de Dados. Atualmente, dedico-me a aprofundar meus conhecimentos, desenvolvendo projetos práticos que visam aprimorar o domínio em ferramentas de análise avançada e machine learning para solucionar desafios de negócio complexos.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-accent font-black text-[12px] uppercase tracking-[0.4em] flex items-center gap-4">
                <span className="w-8 h-[1px] bg-accent/30"></span>
                Especialização e Futuro
              </h3>
              <p className={smoothTextClass}>
                Como especialista em Dados e Web, busco o domínio contínuo de tecnologias de ponta como Big Data, Machine Learning e Cloud Computing (AWS/Azure). Meu objetivo é claro: construir soluções robustas para que as organizações com as quais colaboro estejam totalmente preparadas para prosperar na próxima era digital.
              </p>
            </div>
          </div>
        </div>

        {/* Timeline Inspired Section */}
        <div className="grid lg:grid-cols-2 gap-16 mb-32 pt-12">
          
          {/* LADO ESQUERDO: Formação e Tecnologias */}
          <div className="space-y-24">
            {/* Formação */}
            <section>
              <h3 className={`${smoothTitleClass} text-3xl md:text-4xl mb-12 uppercase tracking-tight`}>Formação</h3>
              <div className="relative pl-10 space-y-16 border-l border-white/5 ml-4">
                {/* Itens de formação com suavização */}
                {[
                  { title: "Sistemas de Informação", date: "2011 - 2014", inst: "UNIP, Belo Horizonte, MG", desc: "Disciplinas: Banco de Dados, Redes de Computadores, Segurança da Informação e Gestão de Projetos de TI." },
                  { title: "Pós-graduação em Marketing", date: "2021 - 2022", inst: "IESLA - Instituto de Educação Latino Americano", desc: "Disciplinas: Visualização de Dados, Bancos de Dados, Métricas na Web, Seo e Analytics, Gestão de Projetos e Metodologias Ágeis." },
                  { title: "Pós-graduação Ciência de Dados", date: "2026", inst: "GRAN Faculdade", desc: "Disciplinas: Modelagem de Banco de Dados, Business Intelligence, Integração de Dados e Data Lake, Probabilidade e Inferência para Ciência de Dados." },
                  { title: "Pós-graduação Segurança da Informação", date: "2026", inst: "GRAN Faculdade", desc: "Disciplinas: Fundamentos de Segurança da Informação, Gestão de Segurança da Informação e Normas 27001 - 27002 e 27005, Forense Computacional, Redes de Computadores, Segurança da Infraestrutura de TI." },
                  { title: "Pós-graduação Engenharia de Dados", date: "2026", inst: "FOCUS Faculdade", desc: "Disciplinas: Engenharia de Dados, Big Data Ciência de Dados, Inteligência Artificial, Mineração de Dados, Computação em Nuvem, Python, Governança de Dados." }
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

            {/* Tecnologias Suavizadas */}
            <section>
              <h3 className={`${smoothTitleClass} text-3xl md:text-4xl mb-12 uppercase tracking-tight`}>Tecnologias</h3>
              <p className="text-white/40 mb-10 text-lg md:text-xl leading-relaxed uppercase tracking-[0.2em] font-black antialiased">Ferramentas e domínios técnicos.</p>
              
              <div className="space-y-12 bg-[#141416] p-12 rounded-[3rem] border border-white/5 shadow-2xl">
                {/* Visualização de Dados */}
                <div>
                  <h4 className="text-xl md:text-2xl font-black text-white/90 mb-8 tracking-tight antialiased">Plataforma de Visualização de Dados</h4>
                  <div className="space-y-10">
                    {[
                      { name: 'Excel', value: '70%' },
                      { name: 'Google Sheet', value: '75%' },
                      { name: 'Power BI', value: '80%' },
                      { name: 'Looker Studio', value: '80%' },
                      { name: 'Tableau', value: '80%' },
                    ].map((tech) => (
                      <div key={tech.name}>
                        <div className="flex justify-between text-xs font-black uppercase tracking-[0.3em] text-white/40 mb-3 antialiased">
                          <span>{tech.name}</span>
                          <span className="text-accent">{tech.value}</span>
                        </div>
                        <div className="h-1.5 w-full bg-white/[0.03] rounded-full overflow-hidden">
                          <div className="h-full bg-accent rounded-full shadow-[0_0_20px_rgba(176,141,32,0.4)] transition-all duration-1000" style={{ width: tech.value }}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Linguagens */}
                <div>
                  <h4 className="text-xl md:text-2xl font-black text-white/90 mb-8 tracking-tight antialiased">Linguagens de Programação</h4>
                  <div className="space-y-10">
                    {[
                      { name: 'Programação Python', value: '100%' },
                      { name: 'Programação SQL', value: '100%' },
                      { name: 'Programação Spark', value: '80%' },
                    ].map((tech) => (
                      <div key={tech.name}>
                        <div className="flex justify-between text-xs font-black uppercase tracking-[0.3em] text-white/40 mb-3 antialiased">
                          <span>{tech.name}</span>
                          <span className="text-accent">{tech.value}</span>
                        </div>
                        <div className="h-1.5 w-full bg-white/[0.03] rounded-full overflow-hidden">
                          <div className="h-full bg-accent rounded-full shadow-[0_0_20px_rgba(176,141,32,0.4)] transition-all duration-1000" style={{ width: tech.value }}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Machine Learning */}
                <div>
                  <h4 className="text-xl md:text-2xl font-black text-white/90 mb-8 tracking-tight antialiased">Machine Learning</h4>
                  <div className="space-y-10">
                    {[
                      { name: 'Algoritmos de Classificação', value: '100%' },
                      { name: 'Algoritmos de Regressão', value: '100%' },
                      { name: 'Algoritmos de Clusterização', value: '80%' },
                      { name: 'Séries Temporais', value: '40%' },
                      { name: 'Sistemas de Recomendação', value: '80%' },
                      { name: 'Análise de Sobrevivência', value: '30%' },
                    ].map((tech) => (
                      <div key={tech.name}>
                        <div className="flex justify-between text-xs font-black uppercase tracking-[0.3em] text-white/40 mb-3 antialiased">
                          <span>{tech.name}</span>
                          <span className="text-accent">{tech.value}</span>
                        </div>
                        <div className="h-1.5 w-full bg-white/[0.03] rounded-full overflow-hidden">
                          <div className="h-full bg-accent rounded-full shadow-[0_0_20px_rgba(176,141,32,0.4)] transition-all duration-1000" style={{ width: tech.value }}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* LADO DIREITO: Experiências Suavizadas */}
          <div className="space-y-24">
            <section>
              <h3 className={`${smoothTitleClass} text-3xl md:text-4xl mb-12 uppercase tracking-tight`}>Experiência</h3>
              <div className="relative pl-10 space-y-16 border-l border-white/5 ml-4">
                
                {/* Itens de experiência com tipografia refinada */}
                {[
                  { 
                    title: "Cientista de Dados Sênior", 
                    date: "2026 - Present", 
                    company: "XXXXX", 
                    tasks: [
                      "Liderança e mentoria de um time de analistas de dados para executar o roadmap de produtos de dados.",
                      "Construção de um data warehouse usando os serviços do Google Cloud Platform (GCP).",
                      "Criação e manutenção de dashboards com os principais KPIs dos times de vendas e marketing.",
                      "Desenvolvimento de modelo de Machine Learning para prever faturamento mensal com algoritmos de séries temporais."
                    ],
                    stack: "Python, SQL, GCP, BigQuery, Machine Learning, Looker Studio"
                  },
                  { 
                    title: "Cientista de Dados Sênior", 
                    date: "Março/2026 - Agosto/2026", 
                    company: "XXXXX", 
                    tasks: [
                      "Desenvolvimento da estratégia de Engenharia de Machine Learning para deploy de modelos em produção.",
                      "Criação de um projeto para classificar Leads e priorizar a comunicação dos times de marketing e comercial.",
                      "Contribuição no desenvolvimento de feed automatizado de marketing com as melhores fotos de apartamentos, o que reduziu o CAC em 68%.",
                      "Criação da estratégia de Sistema de Recomendação com diversos modelos para áreas de negócio.",
                      "Implementação de testes A/B Bayesianos com estratégia de Multi-Armed Bandit."
                    ],
                    stack: "Python, SQL, GCP, BigQuery, Machine Learning, Looker Studio"
                  },
                  { 
                    title: "Cientista de Dados Pleno", 
                    date: "Novembro/2026 - Março/2026", 
                    company: "XXXXX", 
                    tasks: [
                      "Construção de pipeline de dados (camada batch) com AWS, Spark e Airflow.",
                      "Classificação de imagens de modelos de moda usando CNN com Transfer Learning em Tensorflow e Keras.",
                      "Sistema de Recomendação com análise de cestas de compras (Basket Analysis).",
                      "Desenvolvimento de modelo de previsão de vendas com acurácia superior a 80%. O modelo reduziu o estoque em 12% e aumentou as vendas em 9%.",
                      "Criação de ambiente de produção para hospedar modelos de ML com acesso via API e automação de re-treinamento."
                    ],
                    stack: "Spark, Airflow, AWS, Tensorflow, Keras, SQL, Flask, Amazon Redshift, Snowflake, Looker, Python, Séries Temporais, LSTM, Random Forest, XGBoost"
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
                    <p className="mt-10 text-[11px] font-black text-white/30 uppercase tracking-[0.25em] antialiased leading-relaxed">
                      <span className="text-accent/60">Stack:</span> {exp.stack}
                    </p>
                  </div>
                ))}

              </div>
            </section>
          </div>
        </div>

        {/* CTA Suavizado */}
        <div className="bg-accent p-16 md:p-24 rounded-[4rem] text-center shadow-[0_20px_80px_rgba(176,141,32,0.15)] relative overflow-hidden group">
          <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <h2 className="text-black text-4xl md:text-6xl font-black mb-8 tracking-tighter antialiased">Vamos construir algo inteligente?</h2>
          <p className="text-black/60 text-lg md:text-2xl font-bold mb-12 max-w-2xl mx-auto uppercase tracking-wider leading-relaxed antialiased">Estou pronto para o próximo desafio técnico de alto impacto.</p>
          <a 
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-black text-white font-black px-16 py-6 rounded-2xl text-xs md:text-sm uppercase tracking-[0.4em] hover:bg-[#1A1A1C] transition-all transform hover:-translate-y-1 shadow-2xl"
          >
            Entrar em Contato Agora
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutDetail;