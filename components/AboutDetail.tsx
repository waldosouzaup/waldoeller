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

  return (
    <div className="bg-[#0A0A0B] min-h-screen pt-32 pb-20">
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
          <span className="text-xs font-black uppercase tracking-[0.3em]">Voltar para o Início</span>
        </button>

        {/* Hero Section of About Page */}
        <div className="grid lg:grid-cols-2 gap-20 items-start mb-32">
          <div className="relative">
            <div className="absolute -top-10 -left-10 text-[12rem] font-black text-white/[0.02] select-none pointer-events-none uppercase -z-10 tracking-tighter">
              PROFILE
            </div>
            <h1 className="text-5xl md:text-8xl font-black mb-8 leading-none tracking-tighter">
              Dados são o <span className="text-accent italic">DNA</span> de decisões modernas.
            </h1>
            <p className="text-xl md:text-3xl text-white/60 font-light leading-relaxed max-w-xl">
              Como especialista em tecnologia e dados, meu trabalho é garantir que cada byte de informação seja transformado em uma vantagem competitiva tangível.
            </p>
          </div>
          
          <div className="space-y-10">
            <div className="p-10 rounded-[2.5rem] bg-[#141416] border border-white/5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 blur-3xl group-hover:bg-accent/10 transition-all"></div>
              <h3 className="text-accent font-black uppercase tracking-[0.2em] text-xs mb-4">A Filosofia</h3>
              <p className="text-white/80 leading-relaxed text-lg md:text-xl font-light">
                Não acredito em tecnologia pela tecnologia. Acredito em soluções que resolvem problemas reais. Meu foco está na intersecção entre a precisão da engenharia de dados e a agilidade do desenvolvimento web moderno.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="p-8 rounded-[2rem] border border-white/5 bg-[#0F0F0F]">
                <span className="text-4xl md:text-5xl font-black text-white block mb-2 tracking-tighter">05+</span>
                <span className="text-accent font-black uppercase tracking-widest text-xs">Anos de Atuação</span>
              </div>
              <div className="p-8 rounded-[2rem] border border-white/5 bg-[#0F0F0F]">
                <span className="text-4xl md:text-5xl font-black text-white block mb-2 tracking-tighter">100%</span>
                <span className="text-accent font-black uppercase tracking-widest text-xs">Foco em Resultados</span>
              </div>
            </div>
          </div>
        </div>

        {/* Narrative Section */}
        <div className="max-w-4xl mx-auto mb-32">
          <h2 className="text-center text-3xl md:text-4xl font-black uppercase mb-16 tracking-widest text-white/80">Trajetória e Visão</h2>
          <div className="space-y-10 text-white/70 text-lg md:text-xl leading-relaxed font-light">
            <p>
              Iniciei minha jornada fascinado pela capacidade de processamento das máquinas, mas logo percebi que o verdadeiro valor não reside no processamento, mas na <span className="text-white font-bold">interpretação</span>. Minha carreira evoluiu de um desenvolvedor curioso para um engenheiro focado em arquiteturas orientadas a dados.
            </p>
            <p>
              Em cada projeto que assumo, busco entender primeiro o objetivo de negócio. Seja automatizando um relatório que antes tomava horas de uma equipe ou desenvolvendo um dashboard que revela tendências ocultas de vendas, meu compromisso é com a clareza e a precisão.
            </p>
            <p>
              Hoje, como especialista em <span className="text-accent font-bold">Dados e Web</span>, dedico meu tempo a dominar tecnologias como Big Data, Machine Learning e Cloud Computing (AWS/Azure), garantindo que as empresas com as quais colaboro estejam prontas para a próxima era digital.
            </p>
          </div>
        </div>

        {/* Timeline Inspired Section */}
        <div className="grid lg:grid-cols-2 gap-16 mb-32 border-t border-white/5 pt-24">
          
          {/* LADO ESQUERDO: Formação e Tecnologias */}
          <div className="space-y-24">
            {/* Formação */}
            <section>
              <h3 className="text-3xl md:text-4xl font-black uppercase mb-12 tracking-tight text-white">Formação</h3>
              <div className="relative pl-10 space-y-16 border-l border-accent/30 ml-4">
                {/* Item 1 */}
                <div className="relative">
                  <div className="absolute -left-[50px] top-1 w-[20px] h-[20px] rounded-full border-4 border-accent bg-[#0A0A0B]"></div>
                  <h4 className="text-2xl font-black uppercase text-accent mb-2 tracking-widest">Sistemas de Informação</h4>
                  <p className="text-sm font-black text-white/40 mb-3 tracking-widest">2011 - 2014</p>
                  <p className="text-xl font-bold text-white mb-2 italic">UNIP, Belo Horizonte, MG</p>
                  <p className="text-xl md:text-2xl text-white/80 font-light leading-relaxed">Disciplinas: Banco de Dados, Redes de Computadores, Segurança da Informação e Gestão de Projetos de TI.</p>
                </div>
                {/* Item 2 */}
                <div className="relative">
                  <div className="absolute -left-[50px] top-1 w-[20px] h-[20px] rounded-full border-4 border-accent bg-[#0A0A0B]"></div>
                  <h4 className="text-2xl font-black uppercase text-accent mb-2 tracking-widest">Pós-graduação em Marketing</h4>
                  <p className="text-sm font-black text-white/40 mb-3 tracking-widest">2021 - 2022</p>
                  <p className="text-xl font-bold text-white mb-2 italic">IESLA - Instituto de Educação Latino Americano</p>
                  <p className="text-xl md:text-2xl text-white/80 font-light leading-relaxed">Disciplinas: Visualização de Dados, Bancos de Dados, Métricas na Web, Seo e Analytics, Gestão de Projetos e Metodologias Ágeis.</p>
                </div>
                 {/* Item 2 */}
                <div className="relative">
                  <div className="absolute -left-[50px] top-1 w-[20px] h-[20px] rounded-full border-4 border-accent bg-[#0A0A0B]"></div>
                  <h4 className="text-2xl font-black uppercase text-accent mb-2 tracking-widest">Pós-graduação Ciência de Dados
</h4>
                  <p className="text-sm font-black text-white/40 mb-3 tracking-widest">2026</p>
                  <p className="text-xl font-bold text-white mb-2 italic">GRAN Faculdade</p>
                  <p className="text-xl md:text-2xl text-white/80 font-light leading-relaxed">Disciplinas: Modelagem de Banco de Dados, Business Intelligence, Integração de Dados e Data Lake, Probabilidade e Inferência para Ciência de Dados.</p>
                </div>
                 <div className="relative">
                  <div className="absolute -left-[50px] top-1 w-[20px] h-[20px] rounded-full border-4 border-accent bg-[#0A0A0B]"></div>
                  <h4 className="text-2xl font-black uppercase text-accent mb-2 tracking-widest">Pós-graduação Segurança da Informação

</h4>
                  <p className="text-sm font-black text-white/40 mb-3 tracking-widest">2026</p>
                  <p className="text-xl font-bold text-white mb-2 italic">GRAN Faculdade</p>
                  <p className="text-xl md:text-2xl text-white/80 font-light leading-relaxed">Disciplinas: Fundamentos de Segurança da Informação, Gestão de Segurança da Informação e Normas 27001 - 27002 e 27005, 
Forense Computacional, 
Redes de Computadores, 
Segurança da Infraestrutura de TI
.</p>
                </div>
                 <div className="relative">
                  <div className="absolute -left-[50px] top-1 w-[20px] h-[20px] rounded-full border-4 border-accent bg-[#0A0A0B]"></div>
                  <h4 className="text-2xl font-black uppercase text-accent mb-2 tracking-widest">Pós-graduação Engenharia de Dados
</h4>
                  <p className="text-sm font-black text-white/40 mb-3 tracking-widest">2026</p>
                  <p className="text-xl font-bold text-white mb-2 italic">FOCUS Faculdade</p>
                  <p className="text-xl md:text-2xl text-white/80 font-light leading-relaxed">Disciplinas: Engenharia de Dados, Big Data Ciência de Dados, Inteligência Artificial, Mineração de Dados, Computação em Nuvem, Python, Governança de Dados
.</p>
                </div>
              </div>
            </section>

            {/* Tecnologias */}
            <section>
              <h3 className="text-3xl md:text-4xl font-black uppercase mb-12 tracking-tight text-white">Tecnologias</h3>
              <p className="text-white/40 mb-10 text-lg md:text-xl leading-relaxed uppercase tracking-widest font-black">As principais ferramentas e técnicas que utilizo em contextos de negócio.</p>
              
              <div className="space-y-12 bg-[#141416] p-12 rounded-[3rem] border border-white/5">
                {/* Linguagens */}
                <div>
                  <h4 className="text-xl md:text-2xl font-black text-white mb-8 tracking-tight">Linguagens de Programação</h4>
                  <div className="space-y-10">
                    {[
                      { name: 'Programação Python', value: '100%' },
                      { name: 'Programação SQL', value: '100%' },
                      { name: 'Programação Spark', value: '80%' },
                    ].map((tech) => (
                      <div key={tech.name}>
                        <div className="flex justify-between text-base md:text-lg font-black uppercase tracking-widest text-white/70 mb-3">
                          <span>{tech.name}</span>
                          <span>{tech.value}</span>
                        </div>
                        <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                          <div className="h-full bg-accent rounded-full shadow-[0_0_15px_rgba(176,141,32,0.3)]" style={{ width: tech.value }}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Machine Learning */}
                <div>
                  <h4 className="text-xl md:text-2xl font-black text-white mb-8 tracking-tight">Machine Learning</h4>
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
                        <div className="flex justify-between text-base md:text-lg font-black uppercase tracking-widest text-white/70 mb-3">
                          <span>{tech.name}</span>
                          <span>{tech.value}</span>
                        </div>
                        <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                          <div className="h-full bg-accent rounded-full shadow-[0_0_15px_rgba(176,141,32,0.3)]" style={{ width: tech.value }}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* LADO DIREITO: Experiências */}
          <div className="space-y-24">
            <section>
              <h3 className="text-3xl md:text-4xl font-black uppercase mb-12 tracking-tight text-white">Experiência</h3>
              <div className="relative pl-10 space-y-16 border-l border-accent/30 ml-4">
                
                {/* Exp 1 */}
                <div className="relative">
                  <div className="absolute -left-[50px] top-1 w-[20px] h-[20px] rounded-full border-4 border-accent bg-[#0A0A0B]"></div>
                  <h4 className="text-2xl font-black uppercase text-accent mb-2 tracking-widest">Cientista de Dados Sênior</h4>
                  <p className="text-sm font-black text-white/40 mb-3 tracking-widest">2022 - Present</p>
                  <p className="text-2xl md:text-3xl font-black text-white mb-6 uppercase tracking-tight">Comunidade DS</p>
                  <ul className="space-y-5 text-xl md:text-2xl text-white/80 font-light leading-relaxed list-disc ml-5">
                    <li>Liderança e mentoria de um time de analistas de dados para executar o roadmap de produtos de dados.</li>
                    <li>Construção de um data warehouse usando os serviços do Google Cloud Platform (GCP).</li>
                    <li>Criação e manutenção de dashboards com os principais KPIs dos times de vendas e marketing.</li>
                    <li>Desenvolvimento de modelo de Machine Learning para prever faturamento mensal com algoritmos de séries temporais.</li>
                  </ul>
                  <p className="mt-10 text-base font-black text-white/40 uppercase tracking-[0.2em]"><span className="text-accent/60">Stack:</span> Python, SQL, GCP, BigQuery, Machine Learning, Looker Studio.</p>
                </div>

                {/* Exp 2 */}
                <div className="relative">
                  <div className="absolute -left-[50px] top-1 w-[20px] h-[20px] rounded-full border-4 border-accent bg-[#0A0A0B]"></div>
                  <h4 className="text-2xl font-black uppercase text-accent mb-2 tracking-widest">Cientista de Dados Sênior</h4>
                  <p className="text-sm font-black text-white/40 mb-3 tracking-widest">Março/2020 - Agosto/2022</p>
                  <p className="text-2xl md:text-3xl font-black text-white mb-6 uppercase tracking-tight">Loft Real State Startup</p>
                  <ul className="space-y-5 text-xl md:text-2xl text-white/80 font-light leading-relaxed list-disc ml-5">
                    <li>Desenvolvimento da estratégia de Engenharia de Machine Learning para deploy de modelos em produção.</li>
                    <li>Criação de um projeto para classificar Leads e priorizar a comunicação dos times de marketing e comercial.</li>
                    <li>Contribuição no desenvolvimento de feed automatizado de marketing com as melhores fotos de apartamentos, o que reduziu o CAC em 68%.</li>
                    <li>Criação da estratégia de Sistema de Recomendação com diversos modelos para áreas de negócio.</li>
                    <li>Implementação de testes A/B Bayesianos com estratégia de Multi-Armed Bandit.</li>
                  </ul>
                  <p className="mt-10 text-base font-black text-white/40 uppercase tracking-[0.2em]"><span className="text-accent/60">Stack:</span> Python, SQL, GCP, BigQuery, Machine Learning, Looker Studio.</p>
                </div>

                {/* Exp 3 */}
                <div className="relative">
                  <div className="absolute -left-[50px] top-1 w-[20px] h-[20px] rounded-full border-4 border-accent bg-[#0A0A0B]"></div>
                  <h4 className="text-2xl font-black uppercase text-accent mb-2 tracking-widest">Cientista de Dados Pleno</h4>
                  <p className="text-sm font-black text-white/40 mb-3 tracking-widest">Novembro/2017 - Março/2022</p>
                  <p className="text-2xl md:text-3xl font-black text-white mb-6 uppercase tracking-tight">Loft Real State Startup</p>
                  <ul className="space-y-5 text-xl md:text-2xl text-white/80 font-light leading-relaxed list-disc ml-5">
                    <li>Construção de pipeline de dados (camada batch) com AWS, Spark e Airflow.</li>
                    <li>Classificação de imagens de modelos de moda usando CNN com Transfer Learning em Tensorflow e Keras.</li>
                    <li>Sistema de Recomendação com análise de cestas de compras (Basket Analysis).</li>
                    <li>Desenvolvimento de modelo de previsão de vendas com acurácia superior a 80%. O modelo reduziu o estoque em 12% e aumentou as vendas em 9%.</li>
                    <li>Criação de ambiente de produção para hospedar modelos de ML com acesso via API e automação de re-treinamento.</li>
                  </ul>
                  <p className="mt-10 text-base font-black text-white/40 uppercase tracking-[0.2em]"><span className="text-accent/60">Stack:</span> Spark, Airflow, AWS, Tensorflow, Keras, SQL, Flask, Amazon Redshift, Snowflake, Looker, Python, Séries Temporais, LSTM, Random Forest, XGBoost.</p>
                </div>

              </div>
            </section>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-accent p-16 md:p-24 rounded-[4rem] text-center shadow-3xl shadow-accent/20">
          <h2 className="text-black text-4xl md:text-6xl font-black mb-8 tracking-tighter">Vamos construir algo inteligente?</h2>
          <p className="text-black/60 text-lg md:text-2xl font-bold mb-12 max-w-2xl mx-auto uppercase tracking-wider leading-relaxed">Estou pronto para o próximo desafio técnico de alto impacto.</p>
          <a 
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-black text-white font-black px-16 py-6 rounded-2xl text-sm md:text-base uppercase tracking-[0.3em] hover:bg-[#1A1A1C] transition-all transform hover:-translate-y-1"
          >
            Entrar em Contato Agora
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutDetail;