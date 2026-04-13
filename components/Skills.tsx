
import React from 'react';
import { translations } from '../translations';

interface SkillsProps {
  lang: 'pt' | 'en';
}

const Skills: React.FC<SkillsProps> = ({ lang }) => {
  const t = translations[lang].skills;

  return (
    <section id="competencias" className="py-20 bg-white scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">{t.title}</h2>
          <div className="w-16 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {t.groups.map((group, idx) => (
            <div 
              key={idx} 
              className="bg-gray-50 p-8 rounded-xl border border-gray-100 hover:border-accent hover:shadow-md transition-all duration-300"
            >
              <div className="mb-6 flex items-center gap-4">
                <span className="w-10 h-10 flex items-center justify-center bg-accent text-white font-bold text-lg rounded-lg">
                  {idx + 1}
                </span>
                <h3 className="text-lg font-semibold text-gray-900">{group.title}</h3>
              </div>
              <ul className="space-y-3">
                {group.skills.map((skill, sIdx) => (
                  <li key={sIdx} className="flex items-center gap-3 text-gray-600 text-sm">
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
