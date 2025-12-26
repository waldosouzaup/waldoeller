
export enum ProjectCategory {
  ALL = 'Todos',
  DATA = 'Dados',
  WEB = 'Web',
  OTHER = 'IA'
}

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  description: string;
  technologies: string[];
  imageUrl: string;
  galleryImages?: string[];
  // Imagens das Seções
  businessProblemImage?: string;
  contextImage?: string;
  premisesImage?: string;
  strategyImage?: string;
  resultsImage?: string;
  nextStepsImage?: string;
  // Estrutura Documental (Case Study)
  businessProblem: string;
  context: string;
  premises: string[];
  strategy: string[];
  insights: string[];
  results: string[];
  nextSteps: string[];
  links: {
    github?: string;
    demo?: string;
  };
}

export interface SkillGroup {
  title: string;
  skills: string[];
}

export interface TechCategory {
  title: string;
  items: string[];
}

export interface ExperienceItem {
  type: 'Curso' | 'Certificação' | 'Acadêmico' | 'Estudo';
  title: string;
  institution: string;
  description?: string;
}