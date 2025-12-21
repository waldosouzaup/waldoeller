
import React, { useState } from 'react';
import { Project, ProjectCategory } from '../types';

interface ProjectsProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
}

const Projects: React.FC<ProjectsProps> = ({ projects, onSelectProject }) => {
  const [filter, setFilter] = useState<ProjectCategory>(ProjectCategory.ALL);

  const filteredProjects = projects.filter(p => 
    filter === ProjectCategory.ALL || p.category === filter
  );

  const categories = Object.values(ProjectCategory);

  return (
    <section id="projetos" className="py-32 bg-[#0F0F0F] scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black mb-4 uppercase">Projetos</h2>
          <p className="text-accent uppercase tracking-[0.3em] font-black text-[10px]">Resultados práticos e aplicados</p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-20">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-10 py-3 rounded-full font-black text-[10px] uppercase tracking-[0.2em] transition-all duration-300 ${filter === cat ? 'bg-accent text-black shadow-lg shadow-accent/20' : 'bg-[#141416] border border-white/5 text-white/40 hover:text-white hover:border-white/20'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="group bg-[#141416] rounded-[2.5rem] overflow-hidden border border-white/5 flex flex-col h-full hover:transform hover:-translate-y-3 transition-all duration-500 shadow-2xl"
            >
              <div className="relative h-80 overflow-hidden cursor-pointer" onClick={() => onSelectProject(project)}>
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100"
                />
                <div className="absolute top-6 right-6 bg-accent text-black text-[9px] font-black uppercase px-4 py-1.5 rounded-full shadow-xl">
                  {project.category}
                </div>
              </div>
              
              <div className="p-12 flex flex-col flex-grow">
                <h3 className="text-4xl font-black mb-6 group-hover:text-accent transition-colors leading-tight tracking-tight">
                  {project.title}
                </h3>
                <p className="text-white/70 text-lg md:text-xl mb-10 leading-relaxed font-light">
                  {project.description}
                </p>
                
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-3 mb-10">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span 
                        key={tech} 
                        className="text-[10px] font-black uppercase tracking-widest bg-white/[0.03] border border-white/5 px-4 py-2 rounded-xl text-white/30 group-hover:text-white/50 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button 
                    onClick={() => onSelectProject(project)}
                    className="w-full py-5 bg-accent text-black font-black uppercase tracking-[0.3em] text-[11px] rounded-2xl hover:bg-white transition-all duration-500 shadow-xl shadow-accent/20 hover:scale-[1.02]"
                  >
                    Ver Detalhes do Projeto
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
