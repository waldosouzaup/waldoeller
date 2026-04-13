import React from 'react';
import { translations } from '../translations';

interface AboutProps {
  lang: 'pt' | 'en';
  onViewFullProfile?: () => void;
}

const About: React.FC<AboutProps> = ({ lang, onViewFullProfile }) => {
  const profileImageUrl = "https://pmartinsimob.com.br/wp-content/uploads/2025/12/waldo-terno-preto_baixa.png?auto=format&fit=crop&q=80&w=800";
  const t = translations[lang].about;

  const highlights = [
    {
      icon: '🎯',
      title: lang === 'pt' ? 'O que eu resolvo' : 'What I solve',
      description: lang === 'pt'
        ? 'Pequenos negócios que querem crescer mas se perdem em planilhas, WhatsApp e processos manuais.'
        : 'Small businesses that want to grow but get lost in spreadsheets, WhatsApp, and manual processes.'
    },
    {
      icon: '🧠',
      title: lang === 'pt' ? 'Como eu penso' : 'How I think',
      description: lang === 'pt'
        ? 'Resultados práticos > relatórios bonito. 20% de esforço que gera 80% de resultado.'
        : 'Practical results > pretty reports. 20% effort that generates 80% of results.'
    },
    {
      icon: '⚡',
      title: lang === 'pt' ? 'Diferencial' : 'Differentiator',
      description: lang === 'pt'
        ? 'Não sou developer que bolou teoria. Já lutei com problemas reais do dia a dia.'
        : 'I am not a developer who read theory. I already fought with real day-to-day problems.'
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-gray-50 scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="w-full max-w-md mx-auto">
              <img 
                src={profileImageUrl} 
                alt="Waldo Eller" 
                className="w-full h-auto object-cover rounded-2xl shadow-xl"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg border border-gray-100 hidden md:block">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <span className="text-xl">💰</span>
                </div>
                <div>
                  <p className="font-bold text-gray-900">+30%</p>
                  <p className="text-xs text-gray-500">{lang === 'pt' ? 'Crescimento médio' : 'Average growth'}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <span className="inline-block bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full mb-4">
              {lang === 'pt' ? ' SOBRE ' : ' ABOUT '}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Waldo <span className="text-accent">Eller</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {lang === 'pt'
                ? 'Ajudo pequenos negócios a parar de perder dinheiro com desorganização através de sistemas simples, automação e visão de dados.'
                : 'I help small businesses stop losing money from disorganization through simple systems, automation, and data vision.'
              }
            </p>

            <div className="space-y-6">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="text-2xl">{item.icon}</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {onViewFullProfile && (
              <div className="mt-8">
                <a 
                  href="#sobre-detalhes"
                  onClick={(e) => { e.preventDefault(); onViewFullProfile(); }}
                  className="inline-flex items-center gap-2 text-accent font-medium hover:text-blue-700 transition-colors"
                >
                  {lang === 'pt' ? 'Ver perfil completo →' : 'View full profile →'}
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;