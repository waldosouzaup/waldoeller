import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { translations } from '../translations';

interface ServiceDetailProps {
  serviceId: string;
  onBack: () => void;
  lang: 'pt' | 'en';
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ serviceId, onBack, lang }) => {
  const t = translations[lang].services;
  const serviceData = t.items[serviceId as keyof typeof t.items] as any;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!serviceData) return null;

  const whatsappNumber = "5531988447394";
  const whatsappMessage = encodeURIComponent(
    lang === 'pt'
      ? `Olá Waldo, gostaria de saber mais sobre o serviço de ${serviceData.title}.`
      : `Hi Waldo, I would like to know more about the ${serviceData.title} service.`
  );

  const defaultLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
  const ctaLink = serviceData.ctaLink || defaultLink;

  const pageTitle = `${serviceData.title} | Waldo Eller`;
  const pageDescription = 'headline' in serviceData ? serviceData.subheadline : serviceData.description;

  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="twitter:title" content={pageTitle} />
        <meta property="twitter:description" content={pageDescription} />
      </Helmet>
      <div className="container mx-auto px-6">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-gray-500 hover:text-accent transition-colors mb-10"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span className="text-sm font-medium">{lang === 'pt' ? 'Voltar' : 'Back'}</span>
        </button>

        <div className="max-w-3xl mx-auto">
          <span className="text-accent font-medium uppercase text-xs tracking-widest mb-4 block">{t.title}</span>

          {'headline' in serviceData ? (
            <div className="space-y-10">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {serviceData.headline}
                </h1>
                <p className="text-lg text-gray-600 mb-6">
                  {serviceData.subheadline}
                </p>
                <a 
                  href={ctaLink} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-accent text-white font-medium py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  {serviceData.ctaText}
                </a>
              </div>

              <div className="bg-red-50 border border-red-100 rounded-xl p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  {lang === 'pt' ? 'O Problema' : 'The Problem'}
                </h2>
                <p className="text-gray-600">
                  {serviceData.problem}
                </p>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                  {lang === 'pt' ? 'A Solução' : 'The Solution'}
                </h2>
                <div className="space-y-4">
                  {serviceData.solution?.map((item: string, idx: number) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                        <span className="text-accent text-sm">✓</span>
                      </div>
                      <p className="text-gray-600 pt-0.5">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 text-center">
                <p className="text-gray-600 italic">
                  "{serviceData.authority}"
                </p>
              </div>

              <div className="text-center">
                <a 
                  href={ctaLink} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-accent text-white font-medium py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  {serviceData.ctaText}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </a>
              </div>
            </div>
          ) : (
            <>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {serviceData.title}
              </h1>
              
              <p className="text-lg text-gray-600 mb-8">
                {serviceData.description}
              </p>

              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                  {lang === 'pt' ? 'O que está incluso' : 'What is included'}
                </h2>
                
                <div className="grid gap-4">
                  {serviceData.features.map((feature: string, idx: number) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-base font-medium text-gray-900">{feature}</h3>
                        <p className="text-gray-500 text-sm">
                          {lang === 'pt' 
                            ? 'Implementação estratégica'
                            : 'Strategic implementation'}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-center mt-10">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  {lang === 'pt' ? 'Pronto para começar?' : 'Ready to start?'}
                </h2>
                <a 
                  href={ctaLink} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-accent text-white font-medium py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  {lang === 'pt' ? 'Falar com Especialista' : 'Talk to an Expert'}
                </a>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
