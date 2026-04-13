
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
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

  const whatsappNumber = "5531988447394";
  const whatsappMessage = encodeURIComponent(
    lang === 'pt' 
      ? "Olá Waldo, vi seu perfil detalhado no portfólio e gostaria de conversar sobre um projeto." 
      : "Hi Waldo, I saw your detailed profile in your portfolio and would like to talk about a project."
  );
  
  const t = translations[lang].aboutDetail;

  const pageTitle = lang === 'pt' ? 'Perfil Completo | Waldo Eller' : 'Full Profile | Waldo Eller';
  const pageDescription = lang === 'pt' 
    ? 'Conheça a trajetória, formação e experiências de Waldo Eller, especialista em Análise de Dados e Desenvolvimento Web.'
    : 'Learn about the trajectory, education, and experiences of Waldo Eller, Data Analysis and Web Development specialist.';

  return (
    <div className="bg-gray-50 min-h-screen pt-20 pb-16">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="twitter:title" content={pageTitle} />
        <meta property="twitter:description" content={pageDescription} />
      </Helmet>
      <div className="container mx-auto px-6 max-w-5xl">
        
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-gray-500 hover:text-accent transition-colors mb-10"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span className="text-sm font-medium">{t.back}</span>
        </button>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 md:p-12 mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {lang === 'pt' ? 'Dados são o ' : 'Data is the '}
            <span className="text-accent italic">DNA</span> 
            {lang === 'pt' ? ' das decisões.' : ' of modern decisions.'}
          </h1>
          <p className="text-lg text-gray-600">
            {lang === 'pt' 
              ? 'Transformo dados e tecnologia em soluções práticas que aumentam eficiência e geram crescimento real.'
              : 'I transform data and technology into practical solutions that increase efficiency and generate real growth.'
            }
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-10">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">{lang === 'pt' ? 'Como eu atuo' : 'How I work'}</h3>
          <p className="text-gray-600 mb-4">
            {lang === 'pt' 
              ? 'Desenvolvo soluções que resolvem problemas reais.'
              : 'I develop solutions that solve real problems.'
            }
          </p>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-center gap-2">
              <span className="text-accent">•</span>
              {lang === 'pt' ? 'Análise de dados orientada a decisão' : 'Decision-oriented data analysis'}
            </li>
            <li className="flex items-center gap-2">
              <span className="text-accent">•</span>
              {lang === 'pt' ? 'Desenvolvimento de sistemas web' : 'Web systems development'}
            </li>
            <li className="flex items-center gap-2">
              <span className="text-accent">•</span>
              {lang === 'pt' ? 'Automação e IA estratégica' : 'Automation and strategic AI'}
            </li>
          </ul>
        </div>

        <section className="mb-10">
          <h3 className="text-xl font-bold text-gray-900 mb-6">{t.languages.title}</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-xl border border-gray-200 flex items-center gap-3">
              <img src="https://flagcdn.com/w80/br.png" alt="BR" className="w-8 h-8 rounded-full" />
              <div>
                <p className="font-medium text-gray-900">{lang === 'pt' ? 'Português' : 'Portuguese'}</p>
                <p className="text-xs text-gray-500">Nativo</p>
              </div>
            </div>
            <div className="bg-white p-4 rounded-xl border border-gray-200 flex items-center gap-3">
              <img src="https://flagcdn.com/w80/us.png" alt="US" className="w-8 h-8 rounded-full" />
              <div>
                <p className="font-medium text-gray-900">{lang === 'pt' ? 'Inglês' : 'English'}</p>
                <p className="text-xs text-gray-500">Técnico</p>
              </div>
            </div>
            <div className="bg-white p-4 rounded-xl border border-gray-200 flex items-center gap-3">
              <img src="https://flagcdn.com/w80/es.png" alt="ES" className="w-8 h-8 rounded-full" />
              <div>
                <p className="font-medium text-gray-900">{lang === 'pt' ? 'Espanhol' : 'Spanish'}</p>
                <p className="text-xs text-gray-500">Básico</p>
              </div>
            </div>
          </div>
        </section>

        <div className="grid lg:grid-cols-2 gap-8 mb-10">
          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-6">{lang === 'pt' ? 'Formação' : 'Education'}</h3>
            <div className="space-y-6">
              {[
                { title: "Sistemas de Informação", date: "2011 - 2014", inst: "UNIP - Universidade Paulista" },
                { title: "Pós-graduação em Marketing", date: "2021 - 2022", inst: "IESLA" },
                { title: "Pós-graduação Ciência de Dados", date: "2026", inst: "GRAN Faculdade" }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-5 rounded-xl border border-gray-200">
                  <p className="text-sm font-semibold text-accent">{item.title}</p>
                  <p className="text-xs text-gray-400 mb-1">{item.date}</p>
                  <p className="text-sm text-gray-600">{item.inst}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-6">{lang === 'pt' ? 'Experiências' : 'Experience'}</h3>
            <div className="space-y-6">
              {[
                { title: "Freelancer", date: "2025 - Present", company: "Desenvolvimento Freelancer" },
                { title: "IT Support Analyst", date: "2022 - 2024", company: "High Speed Delivery" },
                { title: "Assessor Editorial", date: "2009 - 2019", company: "Editora Edebê Brasil" }
              ].map((exp, idx) => (
                <div key={idx} className="bg-white p-5 rounded-xl border border-gray-200">
                  <p className="text-sm font-semibold text-accent">{exp.title}</p>
                  <p className="text-xs text-gray-400 mb-1">{exp.date}</p>
                  <p className="text-sm text-gray-600">{exp.company}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        <section className="mb-10">
          <h3 className="text-xl font-bold text-gray-900 mb-6">{t.technologies.title}</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {TECH_GROUPS.map((group, idx) => (
              <div key={idx} className="bg-white p-5 rounded-xl border border-gray-200">
                <h4 className="text-xs font-semibold text-accent uppercase tracking-wide mb-3">{group.title}</h4>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((tech) => (
                    <span key={tech} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="bg-accent p-8 rounded-2xl text-center">
          <h2 className="text-2xl font-bold text-white mb-3">
            {lang === 'pt' ? 'Vamos construir algo inteligente?' : 'Let\'s build something intelligent?'}
          </h2>
          <p className="text-white/80 mb-6">
            {lang === 'pt' ? 'Estou pronto para o próximo desafio.' : 'I am ready for the next challenge.'}
          </p>
          <a 
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-accent font-medium py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {lang === 'pt' ? 'Entrar em Contato' : 'Get in Touch'}
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutDetail;
