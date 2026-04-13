import React from 'react';
import { translations } from '../translations';

interface ServicesProps {
  lang: 'pt' | 'en';
  onSelectService: (serviceId: string) => void;
}

const Services: React.FC<ServicesProps> = ({ lang, onSelectService }) => {
  const t = translations[lang].services;

  const mainServices = [
    {
      id: 'dataEngineering',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
      data: t.items.dataEngineering
    },
    {
      id: 'bi',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      data: t.items.bi
    },
    {
      id: 'aiAutomation',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      data: t.items.aiAutomation
    }
  ];

  const secondaryServices = [
    {
      id: 'googleAds',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      data: t.items.googleAds
    },
    {
      id: 'metaAds',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      data: t.items.metaAds
    },
    {
      id: 'sitesSaas',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      data: t.items.sitesSaas
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <span className="text-accent font-medium uppercase text-xs tracking-widest">{t.title}</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
            {t.subtitle}
          </h2>
        </div>

        <div className="mb-12">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">{t.blocks.main}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mainServices.map((service) => (
              <div 
                key={service.id}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:border-accent hover:shadow-md transition-all duration-300 flex flex-col"
              >
                <div className="text-accent mb-5 bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center">
                  {service.icon}
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.data.title}</h3>
                <p className="text-gray-500 text-sm mb-4 flex-grow leading-relaxed">
                  {service.data.description}
                </p>
                
                <ul className="space-y-2 mb-4">
                  {service.data.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                      <svg className="w-4 h-4 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a 
                  href={`#servico-${service.id}`}
                  onClick={(e) => { e.preventDefault(); onSelectService(service.id); }}
                  className="text-sm font-medium text-accent hover:text-blue-700 transition-colors"
                >
                  {service.data.cta} →
                </a>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-base font-semibold text-gray-700 mb-6">{t.blocks.secondary}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {secondaryServices.map((service) => (
              <div 
                key={service.id}
                className="bg-white border border-gray-100 rounded-xl p-6 hover:border-gray-300 transition-all duration-300 flex flex-col"
              >
                <div className="text-gray-400 mb-5 bg-gray-50 w-12 h-12 rounded-lg flex items-center justify-center">
                  {service.icon}
                </div>
                
                <h3 className="text-base font-semibold text-gray-900 mb-2">{service.data.title}</h3>
                <p className="text-gray-500 text-sm mb-4 flex-grow">
                  {service.data.description}
                </p>
                
                <ul className="space-y-2 mb-4">
                  {service.data.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-gray-500">
                      <svg className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a 
                  href={`#servico-${service.id}`}
                  onClick={(e) => { e.preventDefault(); onSelectService(service.id); }}
                  className="text-sm font-medium text-gray-500 hover:text-gray-700 transition-colors"
                >
                  {service.data.cta} →
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
