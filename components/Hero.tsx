import React from 'react';
import { translations } from '../translations';

interface HeroProps {
  onNavigate?: (id: string) => void;
  lang: 'pt' | 'en';
}

const Hero: React.FC<HeroProps> = ({ onNavigate, lang }) => {
  const profileImageUrl = "https://pmartinsimob.com.br/wp-content/uploads/2025/12/waldo-terno-preto_baixa.png?auto=format&fit=crop&q=80&w=800";
  const t = translations[lang].hero;

  const handleLinkClick = (e: React.MouseEvent, id: string) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(id);
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full mb-6">
              <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
              {lang === 'pt' ? 'Disponível para novos projetos' : 'Available for new projects'}
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900">
              {lang === 'pt' 
                ? <>Ajudo negócios a <span className="text-accent">crescer</span> com tecnologia e dados</>
                : <>I help businesses <span className="text-accent">grow</span> with technology and data</>
              }
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg leading-relaxed">
              {lang === 'pt'
                ? "Pequenos negócios que perdem dinheiro por desorganização têm potencial de crescer 30% só com os sistemas certos."
                : "Small businesses losing money from disorganization can grow 30% just with the right systems."
              }
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#clientes" 
                onClick={(e) => handleLinkClick(e, 'clientes')}
                className="inline-flex items-center justify-center gap-2 bg-accent text-white font-semibold py-4 px-8 rounded-xl hover:bg-blue-700 transition-colors text-base"
              >
                <span>🚀</span>
                {lang === 'pt' ? 'Quero melhorar meu negócio' : 'I want to improve my business'}
              </a>
              <a 
                href="#projetos" 
                onClick={(e) => handleLinkClick(e, 'projetos')}
                className="inline-flex items-center justify-center gap-2 border-2 border-gray-200 bg-white text-gray-700 font-medium py-4 px-8 rounded-xl hover:border-accent hover:text-accent transition-colors text-base"
              >
                <span>💼</span>
                {lang === 'pt' ? 'Ver meus projetos' : 'View my projects'}
              </a>
            </div>
            
            <div className="flex items-center gap-4 mt-8 text-sm text-gray-500">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-xs font-medium border-2 border-white">A</div>
                <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-xs font-medium border-2 border-white">B</div>
                <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center text-xs font-medium text-white border-2 border-white">+</div>
              </div>
              <span>{lang === 'pt' ? 'Negócios atendidos com crescimento real' : 'Businesses with real growth'}</span>
            </div>
          </div>
        
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-72 h-80 md:w-80 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl bg-gray-100">
                <img 
                  src={profileImageUrl} 
                  alt="Waldo Eller" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-xl border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">+30%</p>
                    <p className="text-xs text-gray-500">{lang === 'pt' ? 'Crescimento médio' : 'Average growth'}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;