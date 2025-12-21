
import React from 'react';
import { EXPERIENCE_STUDIES } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experiencia" className="py-32 bg-[#0A0A0B] scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black mb-4 uppercase">Experiência e Estudos</h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {EXPERIENCE_STUDIES.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-[#141416] p-10 rounded-3xl border border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-6 group hover:border-accent/30 transition-all duration-500"
            >
              <div className="flex flex-col gap-2">
                <span className="text-[9px] font-black uppercase tracking-[0.3em] text-accent/70 group-hover:text-accent transition-colors">
                  {item.type}
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-white/90 group-hover:text-white transition-colors">
                  {item.title}
                </h3>
                <p className="text-white/30 text-sm font-semibold uppercase tracking-wider">
                  {item.institution}
                </p>
              </div>
              <div className="hidden md:block">
                <div className="w-12 h-12 rounded-full border border-white/5 flex items-center justify-center group-hover:border-accent/40 group-hover:bg-accent/5 transition-all">
                  <svg className="w-5 h-5 text-white/10 group-hover:text-accent transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
