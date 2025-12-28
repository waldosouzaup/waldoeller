
import { Project, ProjectCategory, SkillGroup, TechCategory, ExperienceItem } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'amazon-case',
    title: 'Análise de Atrasos de Entregas da Amazon',
    category: ProjectCategory.DATA,
    description: 'Estudo analítico focado em identificar padrões de atrasos e otimizar a eficiência logística.',
    technologies: ['Python', 'Pandas', 'Matplotlib', 'SQL'],
    imageUrl: 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaad5b?auto=format&fit=crop&q=80&w=800',
    businessProblem: 'A empresa enfrenta um aumento no número de entregas realizadas fora do prazo, gerando insatisfação e risco de perda de confiança na marca. O desafio é identificar onde os atrasos se concentram para reduzir a taxa e melhorar a previsibilidade.',
    context: 'A operação envolve variáveis como condições climáticas, tráfego, tipo de veículo, área de entrega, perfil do entregador e categoria do produto. O objetivo é transformar dados brutos em insights acionáveis para Operações e Logística.',
    premises: [
      'O status de entrega (Delivery_Status) é a fonte oficial para identificar atrasos (delay) e no prazo (ontime).',
      'O tempo de entrega (Delivery_Time) está representado em minutos.',
      'Valores ausentes em tráfego ou clima foram tratados como "informação desconhecida".'
    ],
    strategy: [
      'Entendimento do problema de negócio e impacto financeiro.',
      'Exploração e organização dos dados (Limpeza e Tipagem).',
      'Análise descritiva de métricas e estatísticas de tempo.',
      'Segmentação dos atrasos por dimensões (Clima, Tráfego, Veículo).',
      'Visualização de dados para comunicação executiva.'
    ],
    insights: [
      'O tempo médio de entrega é de 125 min (2h) com desvio-padrão de 52 min.',
      'A área "Semi-Urban" apresenta mais atrasos do que entregas no prazo.',
      'Atrasos aumentam significativamente em dias nublados e com neblina.',
      'Motocicletas apresentam maior taxa de entrega atrasada em relação a outros meios.',
      'O nível de tráfego forte (Jam) é o principal fator externo de atraso.',
      'Entregadores com idade acima de 30 anos tendem a atrasar mais que os mais jovens.'
    ],
    results: [
      'Diagnóstico visual dos pontos mais críticos da operação.',
      'Base analítica sólida para priorizar ações corretivas imediatas.',
      'Recomendação de mudança de veículos na área "Semi-Urban".',
      'Criação de relatórios acessíveis para áreas não técnicas.'
    ],
    nextSteps: [
      'Criar planos de ação específicos para as áreas e veículos críticos.',
      'Monitorar a taxa de atraso continuamente via Dashboards.',
      'Integrar análises preditivas para antecipar riscos de atraso.',
      'Aprofundar a análise com dados de distância e horário de pico.'
    ],
    links: {
      github: 'https://github.com/waldoeller/amazon-delivery-analysis'
    }
  },
  {
    id: '1',
    title: 'Dashboard de Inteligência Comercial',
    category: ProjectCategory.DATA,
    description: 'Centralização de KPIs de vendas e projeções automáticas em tempo real.',
    technologies: ['Power BI', 'SQL Server', 'DAX', 'Python'],
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bbda38a10ad5?auto=format&fit=crop&q=80&w=800',
    businessProblem: 'Dificuldade em consolidar dados de 15 filiais, levando dias para gerar relatórios de fechamento.',
    context: 'Criação de um hub centralizado de dados com atualização automática de hora em hora.',
    premises: ['Integração de 3 sistemas ERP.', 'Dados históricos de 24 meses.'],
    strategy: ['Arquitetura SQL.', 'Modelagem DAX.', 'Design UX.'],
    insights: ['Vendas concentradas no período da tarde.', 'Margem superior em produtos Premium.'],
    results: ['Redução de 95% no tempo de geração de relatórios.', 'Aumento de 12% na eficiência de estoque.'],
    nextSteps: ['Implementar IA para previsão de demanda.', 'Expansão para filiais internacionais.'],
    links: { github: 'https://github.com/waldoeller/bi-dashboard' }
  }
];

export const TECH_GROUPS: TechCategory[] = [
  {
    title: 'Uso frequente',
    items: ['Excel', 'SQL', 'Python', 'Power BI', 'Lovable', 'Google Studio', 'ETL']
  },
  {
    title: 'Uso intermediário',
    items: ['UI e UX', 'IA', 'DAX', 'DOCKER', 'POWER APPS']
  },
  {
    title: 'Estudando',
    items: ['Apache Spark', 'Databricks', 'Kubernetes', 'Machine Learning Avançado']
  }
];

export const EXPERIENCE_STUDIES: ExperienceItem[] = [
  {
    type: 'Certificação',
    title: 'Microsoft Certified: Azure Data Engineer Associate',
    institution: 'Microsoft'
  },
  {
    type: 'Certificação',
    title: 'Google Data Analytics Professional Certificate',
    institution: 'Google / Coursera'
  },
  {
    type: 'Curso',
    title: 'Desenvolvimento Full Stack Avançado',
    institution: 'Rocketseat'
  },
  {
    type: 'Acadêmico',
    title: 'Bacharelado em Sistemas de Informação',
    institution: 'Universidade de São Paulo (USP)'
  }
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    title: 'Análise de Dados',
    skills: [
      'Apresentação / Storytelling',
      'Limpeza e Tratamento (ETL)',
      'Visualização de Dados',
      'Estatística Aplicada',
      'Excel, SQL, Python, Power BI, Looker'
    ]
  },
  {
    title: 'Web / Sites',
    skills: [
      'Google Ads, Meta ADS',
      'Easy Panel, N8n, TypeBot',
      'Noco DB, Data Tables',
      'Web Scrapping',
      'Elementor, WordPress'
    ]
  },
  {
    title: 'Estudando',
    skills: [
      'Machine Learning',
      'Amazon SageMaker',
      'Apache Spark, Databricks',
      'Snowflake',
      'Apache Airflow'
    ]
  }
];
