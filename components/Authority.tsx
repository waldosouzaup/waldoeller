import React from 'react';
import { translations } from '../translations';

interface AuthorityProps {
  lang: 'pt' | 'en';
}

const Authority: React.FC<AuthorityProps> = ({ lang }) => {
  const t = translations[lang].authority;

  const insights = [
    {
      title: lang === 'pt' 
        ? 'Pequenos negócios não precisam de complexidade'
        : 'Small businesses do not need complexity',
      description: lang === 'pt'
        ? 'A maioria tenta implementar o que grandes empresas fazem. Errado. Você precisa de 20% do esforço que gera 80% do resultado.'
        : 'Most try to implement what big companies do. Wrong. You need 20% of the effort that generates 80% of the results.',
      icon: '💡'
    },
    {
      title: lang === 'pt'
        ? 'Dados sem ação é apenas informação'
        : 'Data without action is just information',
      description: lang === 'pt'
        ? 'Se você olha relatórios mas não toma decisão diferente depois, está desperdiçando tempo. Dados servem para mudar comportamento.'
        : 'If you look at reports but do not make different decisions after, you are wasting time. Data serves to change behavior.',
      icon: '📊'
    },
    {
      title: lang === 'pt'
        ? 'O melhor sistema é o que realmente se usa'
        : 'The best system is the one that is actually used',
      description: lang === 'pt'
        ? 'Não importa se é Excel, Notion ou sistema robusto. O que importa é consistency. systems que você usa todo dia supera o sistema perfeito que você não usa.'
        : 'It does not matter if it is Excel, Notion, or robust system. What matters is consistency. Systems you use every day beat the perfect system you do not use.',
      icon: '🎯'
    }
  ];

  return (
    <section id="autoridade" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block bg-purple-100 text-purple-700 text-xs font-bold px-3 py-1 rounded-full mb-4">
            {lang === 'pt' ? ' VISÃO DE MERCADO ' : ' MARKET VISION '}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {lang === 'pt' ? 'Como eu penso:' : 'How I think:'}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {lang === 'pt'
              ? 'Insights que aprendi trabalhando com pequenos negócios que cresceem de verdade.'
              : 'Insights I learned working with small businesses that actually grow.'
            }
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {insights.map((item, idx) => (
            <div key={idx} className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 mb-6">
            {lang === 'pt'
              ? 'Mais insights no meu LinkedIn'
              : 'More insights on my LinkedIn'
            }
          </p>
          <a 
            href="https://linkedin.com/in/waldoeller"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-accent font-medium hover:text-blue-700 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
            {lang === 'pt' ? 'Ver LinkedIn' : 'View LinkedIn'}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Authority;