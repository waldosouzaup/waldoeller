
import React from 'react';
import { TECH_GROUPS } from '../constants';

const Technologies: React.FC = () => {
  return (
    <section id="tecnologias" className="py-32 bg-[#141416] scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black mb-4 uppercase">Tecnologias</h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {TECH_GROUPS.map((group, idx) => (
            <div key={idx} className="bg-[#0A0A0B]/60 p-10 rounded-[2.5rem] border border-white/5 shadow-xl">
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
      </div>
    </section>
  );
};

export default Technologies;
