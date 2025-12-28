
import React from 'react';
import { translations } from '../translations';

interface SkillsProps {
  lang: 'pt' | 'en';
}

const Skills: React.FC<SkillsProps> = ({ lang }) => {
  const t = translations[lang].skills;

  return (
    <section id="competencias" className="py-32 relative overflow-hidden bg-[#0A0A0B] scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black mb-4 uppercase">{t.title}</h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {t.groups.map((group, idx) => (
            <div 
              key={idx} 
              className="bg-[#141416] p-12 rounded-[2.5rem] border border-white/5 hover:border-accent/40 transition-all duration-500 group shadow-2xl"
            >
              <div className="mb-8 flex items-center gap-5">
                <span className="w-14 h-14 flex items-center justify-center bg-accent text-black font-black text-xl rounded-2xl shadow-lg shadow-accent/10">
                  0{idx + 1}
                </span>
                <h3 className="text-2xl font-bold">{group.title}</h3>
              </div>
              <ul className="space-y-5">
                {group.skills.map((skill, sIdx) => (
                  <li key={sIdx} className="flex items-center gap-4 text-white/50 group-hover:text-white/90 transition-colors">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
