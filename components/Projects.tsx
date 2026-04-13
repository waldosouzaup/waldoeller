import React, { useState } from 'react';
import { Project, ProjectCategory } from '../types';
import { translations } from '../translations';

interface ProjectsProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
  lang: 'pt' | 'en';
  limit?: number;
  onViewAll?: () => void;
  onBack?: () => void;
}

const Projects: React.FC<ProjectsProps> = ({ projects, onSelectProject, lang, limit, onViewAll, onBack }) => {
  const [filter, setFilter] = useState<ProjectCategory>(ProjectCategory.ALL);
  const t = translations[lang].projects;

  const filteredProjects = projects.filter(p => 
    filter === ProjectCategory.ALL || p.category === filter
  );

  const displayedProjects = limit ? filteredProjects.slice(0, limit) : filteredProjects;

  const categories = [
    { label: lang === 'pt' ? 'Todos' : 'All', value: ProjectCategory.ALL },
    { label: lang === 'pt' ? 'Dados' : 'Data', value: ProjectCategory.DATA },
    { label: lang === 'pt' ? 'Sistemas' : 'Systems', value: ProjectCategory.WEB },
    { label: lang === 'pt' ? 'Automação' : 'Automation', value: ProjectCategory.OTHER }
  ];

  return (
    <section id="projetos" className="py-20 bg-white scroll-mt-24">
      <div className="container mx-auto px-6">
        {onBack && (
          <button 
            onClick={onBack}
            className="flex items-center gap-3 text-gray-500 hover:text-accent transition-colors mb-10"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span className="text-sm font-medium">{lang === 'pt' ? 'Voltar' : 'Back'}</span>
          </button>
        )}
        
        <div className="text-center mb-12">
          <span className="inline-block bg-amber-100 text-amber-700 text-xs font-bold px-3 py-1 rounded-full mb-4">
            {lang === 'pt' ? ' CASES REAIS ' : ' REAL CASES '}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            {lang === 'pt' ? 'Projetos que geraram resultado' : 'Projects that generated results'}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {lang === 'pt'
              ? 'Cada projeto abaixo resolveu um problema real. Clique para ver como.'
              : 'Each project below solved a real problem. Click to see how.'
            }
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setFilter(cat.value)}
              className={`px-5 py-2 rounded-full font-medium text-sm transition-all duration-300 ${filter === cat.value ? 'bg-accent text-white' : 'bg-gray-50 border border-gray-200 text-gray-500 hover:border-accent hover:text-accent'}`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedProjects.map((project) => (
            <div 
              key={project.id} 
              className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:shadow-lg hover:border-amber-200 transition-all duration-300 cursor-pointer group"
              onClick={() => onSelectProject(project)}
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">
                  {project.category === 'Dados' ? '📊' : project.category === 'WEB' ? '⚙️' : '🤖'}
                </span>
                <span className="text-xs font-bold text-amber-600 uppercase tracking-wide">
                  {project.category}
                </span>
              </div>
              
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                {project.description}
              </p>

              <div className="pt-4 border-t border-gray-200">
                <div className="flex items-center gap-2 text-green-600 font-medium text-sm">
                  <span>✅</span>
                  {lang === 'pt' ? 'Resultado: ' : 'Result: '}
                  {project.results?.[0]?.substring(0, 50) || (lang === 'pt' ? 'Melhorias significativas' : 'Significant improvements')}
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between text-sm">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span key={tech} className="text-xs bg-white text-gray-500 px-2 py-1 rounded border border-gray-200">
                      {tech}
                    </span>
                  ))}
                </div>
                <span className="text-accent font-medium group-hover:text-blue-700 transition-colors">
                  {lang === 'pt' ? 'Ver case →' : 'View case →'}
                </span>
              </div>
            </div>
          ))}
        </div>

        {limit && filteredProjects.length > limit && onViewAll && (
          <div className="mt-12 text-center">
            <button 
              onClick={onViewAll}
              className="inline-flex items-center gap-2 px-8 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors"
            >
              {lang === 'pt' ? 'Ver todos os cases' : 'View all cases'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;