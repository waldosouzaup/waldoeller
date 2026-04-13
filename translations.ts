
export const translations = {
  pt: {
    clients: {
      title: 'Para Pequenos Negócios',
      subtitle: 'Você perde clientes por falta de organização?',
      description: 'A maioria dos pequenos negócios tem potencial de crescer 30% só com os processos corretos. O problema não é falta de clientes — é falta de sistema.',
      problems: {
        title: 'O problema real:',
        items: [
          { problem: 'Agenda no WhatsApp', description: 'Você perde clientes porque não consegue gerenciar agenda, orçamentos e follow-ups no WhatsApp?' },
          { problem: 'Falta de controle', description: 'Não sabe quanto fatura, quanto deve, nem onde perde dinheiro no mês?' },
          { problem: 'Perda de faturamento', description: 'Clientes esquecem do agendamento, orçamento expira, e você perde venda sem perceber?' }
        ]
      },
      solutions: {
        title: 'A solução:',
        items: [
          { title: 'Sistemas simples', description: 'Organização que funciona sem complicação, sem mensalidade cara.' },
          { title: 'Automação', description: 'Clientes lembrados automaticamente. Nada caindo no esquecimento.' },
          { title: 'Visão de dados', description: 'Veja claramente onde você ganha e perde dinheiro. Decisões baseadas em dados.' }
        ]
      },
      cta: 'Ver como posso te ajudar',
      ctaText: 'Resposta em até 24h. Sem compromisso.'
    },
    authority: {
      title: 'Visão de Mercado',
      subtitle: 'Como eu penso:',
      description: 'Insights que aprendi trabalhando com pequenos negócios que crescem de verdade.',
      insights: [
        { title: 'Pequenos negócios não precisam de complexidade', description: 'A maioria tenta implementar o que grandes empresas fazem. Errado. Você precisa de 20% do esforço que gera 80% do resultado.', icon: '💡' },
        { title: 'Dados sem ação é apenas informação', description: 'Se você olha relatórios mas não toma decisão diferente depois, está desperdiçando tempo. Dados servem para mudar comportamento.', icon: '📊' },
        { title: 'O melhor sistema é o que realmente se usa', description: 'Não importa se é Excel, Notion ou sistema robusto. O que importa é consistência. Sistemas que você usa todo dia supera o sistema perfeito que você não usa.', icon: '🎯' }
      ]
    },
    nav: {
      inicio: 'Início',
      sobre: 'Sobre',
      servicos: 'Serviços',
      competencias: 'Competências',
      projetos: 'Portfólio',
      contato: 'Contato',
      baixarCv: 'Baixar CV'
    },
    hero: {
      welcome: 'Olá, seja bem vindo(a)!',
      specialist: 'Especialista em',
      roles: 'Data, Technology & AI',
      description: 'Transformando dados em decisões estratégicas com tecnologia e IA.',
      explore: 'Explorar Projetos',
      contact: 'Fale Comigo',
      years: 'Anos de',
      experience: 'Experiência'
    },
    about: {
      trajectory: 'Trajetória',
      title: 'Sobre',
      mim: 'Mim',
      activeProjects: 'Projetos Ativos',
      quote: '"Quer entender como transformo dados em valor?"',
      description1: 'Sou Waldo Eller, profissional de dados com 2+ anos de experiência entre análise, visualização e engenharia. Comecei minha trajetória resolvendo problemas reais com dados: atrasos logísticos, perda de receita por falta de visibilidade, processos manuais que consumiam horas do time.',
      description2: 'Hoje atuo na interseção entre análise e engenharia construindo desde o dashboard que o gestor abre toda manhã até o pipeline que alimenta esse dashboard de forma confiável e automatizada.',
      description3: 'Estou em transição ativa para Engenharia de Dados, aprofundando conhecimentos em Airflow, Spark, Snowflake e arquiteturas modernas de dados.',
      status: 'STATUS',
      available: 'Disponível para oportunidades remotas ou híbridas.',
      fullProfile: 'Ver Perfil Completo'
    },
    services: {
      title: 'Especialidades',
      subtitle: 'Da engenharia de dados à conversão digital',
      blocks: {
        main: 'Dados & Inteligência',
        secondary: 'Marketing & Produto Digital'
      },
      items: {
        dataEngineering: {
          title: 'Engenharia de Dados & Arquitetura',
          description: 'Construo pipelines de dados robustos e arquiteturas escaláveis que garantem que seus dados cheguem limpos, atualizados e prontos para uso, eliminando processos manuais e gargalos na tomada de decisão.',
          features: ['Extração e transformação (ETL/ELT) com Python e SQL', 'Orquestração de fluxos de dados com Apache Airflow', 'Modelagem de dados em Cloud Data Warehouses (Snowflake)', 'Integração de múltiplas fontes via APIs REST/GraphQL'],
          cta: 'Ver Projetos de Engenharia →'
        },
        bi: {
          title: 'Dashboards & Business Intelligence (BI)',
          description: 'Desenvolvo painéis de Business Intelligence e visualização de dados que respondem exatamente às perguntas do seu time, transformando planilhas confusas em visões claras e estratégicas de negócio.',
          features: ['Dashboards interativos em Power BI e Looker Studio', 'Modelagem semântica para Data Analytics e autoatendimento', 'KPIs focados em receita, ROI e redução de custos', 'Relatórios automatizados para diretoria e stakeholders'],
          cta: 'Ver Dashboards →'
        },
        aiAutomation: {
          title: 'Automação de Processos com IA',
          description: 'Implemento fluxos inteligentes de automação de processos (RPA) que assumem tarefas repetitivas, conectando sistemas e Inteligência Artificial (LLMs) para otimizar a produtividade da sua equipe.',
          features: ['Agentes de IA e Chatbots com OpenAI e TypeBot', 'Automação de fluxos de trabalho via n8n e Make', 'Integração de WhatsApp com API oficial', 'Extração automatizada de dados (Web Scraping)'],
          cta: 'Ver Projetos de IA →'
        },
        googleAds: {
          title: 'Gestão de Tráfego Pago: Google Ads',
          description: 'Posiciono sua oferta no momento exato em que seu cliente busca por ela no Google, otimizando o custo por aquisição (CPA) com base em dados reais de conversão e estratégias avançadas de Search Engine Marketing (SEM).',
          features: ['Pesquisa avançada de palavras-chave e intenção de compra', 'Otimização contínua de lances e ROI', 'Estruturação de campanhas de Pesquisa e Performance Max', 'Rastreamento preciso de conversões ponta a ponta (Tag Manager)'],
          cta: 'Ver Resultados de Ads →',
          headline: 'Cada real investido em Google Ads precisa voltar, com lucro.',
          subheadline: 'Chega de campanhas que gastam sem converter. Eu construo estratégias de Google Ads orientadas a resultado real: mais cliques qualificados, mais leads, mais vendas.',
          problem: 'Você já se perguntou por que seus anúncios aparecem, mas ninguém compra? A maioria das campanhas no Google falha pelo mesmo motivo: foram configuradas para parecer que estão funcionando, impressões altas, cliques baratos, mas sem nenhuma conexão real com o que gera receita. Palavras-chave erradas. Segmentação ampla demais. Lances automáticos sem estratégia. Landing pages que não convertem. O resultado? Budget indo embora. Concorrente crescendo.',
          solution: [
            'Pesquisa profunda de palavras-chave com intenção de compra',
            'Estrutura de campanhas e ad groups otimizados para Quality Score alto',
            'Copies de anúncio que param o scroll e geram cliques qualificados',
            'Rastreamento de conversões preciso (sem achismo)',
            'Otimização contínua baseada em dados reais'
          ],
          authority: 'Eu sou Waldo Eller, especialista em tráfego pago com foco em performance. Trabalho com negócios que querem parar de desperdiçar orçamento e começar a escalar com previsibilidade.',
          ctaText: 'Quero uma análise gratuita das minhas campanhas',
          ctaLink: 'https://form.respondi.app/HwjEhHMS'
        },
        metaAds: {
          title: 'Gestão de Tráfego Pago: Meta Ads',
          description: 'Crio campanhas de alta performance no Facebook e Instagram focadas em escalar vendas e gerar leads qualificados, testando criativos e públicos com rigor analítico e foco em ROAS.',
          features: ['Estruturação de funis de tráfego pago (Topo, Meio e Fundo)', 'Testes A/B sistemáticos de criativos e copys', 'Configuração avançada de Pixel e API de Conversões', 'Escala horizontal e vertical de orçamento para e-commerce e infoprodutos'],
          cta: 'Ver Resultados de Meta →',
          headline: 'Seu público ideal está no Instagram e no Facebook. O problema é que ele ainda não sabe que você existe.',
          subheadline: 'Com a estratégia certa de Meta Ads, você para de empurrar anúncio para todo mundo e começa a aparecer para quem realmente vai comprar.',
          problem: 'Boostar post não é estratégia. Segmentação por interesse genérico não escala. Criativo bonito sem copy que converte não vende. O Meta Ads é uma das plataformas mais poderosas do mundo, mas ela pune quem não sabe usá-la. CPC sobe, alcance cai, e o algoritmo simplesmente para de entregar. Se seus anúncios estão caros e sem resultado, o problema não é a plataforma. É a estratégia.',
          solution: [
            'Criação e segmentação de públicos frios, quentes e de retargeting',
            'Estrutura de campanhas com objetivo alinhado à etapa do funil',
            'Criação de copies e briefings de criativos que param o feed',
            'Testes A/B estruturados para descobrir o que escala',
            'Relatórios claros com métricas que importam: CAC, ROAS, CPL'
          ],
          authority: 'Entendo o comportamento do consumidor dentro da plataforma e sei como fazer o algoritmo trabalhar a seu favor, não contra você.',
          ctaText: 'Quero uma estratégia de Meta Ads para o meu negócio',
          ctaLink: 'https://form.respondi.app/HwjEhHMS'
        },
        sitesSaas: {
          title: 'Desenvolvimento Web: Sites & SaaS',
          description: 'Desenvolvo desde landing pages de alta conversão até plataformas web completas (SaaS), unindo design premium, velocidade de carregamento (Core Web Vitals) e arquitetura de software escalável.',
          features: ['Landing pages focadas em conversão e SEO Técnico', 'Desenvolvimento de sistemas web sob medida (React, Node.js)', 'Integração de gateways de pagamento (Stripe, Mercado Pago)', 'Bancos de dados relacionais e modelagem (PostgreSQL)'],
          cta: 'Ver Projetos Web →',
          headline: 'Seu site é o melhor vendedor que você tem, ou o maior buraco no seu funil.',
          subheadline: 'Desenvolvo sites e produtos SaaS que não só ficam bonitos, mas são construídos para converter visitantes em clientes e ideias em receita recorrente.',
          problem: 'Não importa quanto você investe em tráfego: se a página não transmite confiança, não carrega rápido e não conduz o usuário até a ação certa, você está jogando dinheiro fora. E se você tem uma ideia de SaaS, o risco de construir o produto errado, ou do jeito errado, pode custar meses e muito dinheiro.',
          solution: [
            'Para Sites:',
            'Landing pages e sites institucionais otimizados para conversão',
            'Design focado na experiência do usuário e na identidade da marca',
            'Performance, SEO técnico e responsividade desde o primeiro pixel',
            'Para SaaS:',
            'Arquitetura pensada para escalar desde o MVP',
            'UX/UI que reduz churn e aumenta ativação de usuários',
            'Integração com pagamentos, autenticação e APIs externas',
            'Foco em produto que resolve problema real, e que as pessoas pagam para usar'
          ],
          authority: 'Combino visão de produto, design e desenvolvimento para entregar soluções digitais completas, sem a necessidade de coordenar cinco fornecedores diferentes.',
          ctaText: 'Quero conversar sobre meu projeto',
          ctaLink: 'https://form.respondi.app/xqV7x60p'
        }
      }
    },
    skills: {
      title: 'Competências',
      groups: [
        {
          title: 'Análise de Dados',
          skills: ['Apresentação / Storytelling', 'Limpeza e Tratamento (ETL)', 'Visualização de Dados', 'Estatística Aplicada', 'Excel, SQL, Python, Power BI, Looker']
        },
        {
          title: 'Web / Sites',
          skills: ['Google Ads, Meta ADS', 'Easy Panel, N8n, TypeBot', 'Noco DB, Data Tables', 'Web Scrapping', 'Elementor, WordPress']
        },
        {
          title: 'Estudando',
          skills: ['Machine Learning', 'Amazon SageMaker', 'Apache Spark, Databricks', 'Snowflake', 'Apache Airflow']
        }
      ]
    },
    projects: {
      title: 'Projetos',
      subtitle: 'Resultados práticos e aplicados',
      details: 'Ver Detalhes do Projeto',
      categories: {
        all: 'Todos',
        data: 'Dados',
        web: 'Web',
        ia: 'IA'
      }
    },
    contact: {
      title: 'Vamos Conversar',
      description1: 'Aberto a posições estratégicas em Engenharia e Análise de Dados para fortalecer o seu time.',
      description2: 'Se você não está contratando para uma vaga fixa, mas tem um gargalo de automação, IA ou estruturação de dados no seu negócio, também atuo como parceiro técnico em projetos pontuais.',
      quickResponse: 'Linha Direta',
      whatsappText: 'Sem formulários ou burocracia. Me mande uma mensagem detalhando a vaga ou o desafio do seu projeto e respondo em poucas horas.',
      whatsappCta: 'Iniciar Conversa no WhatsApp',
      availability: 'Seg a Sex, 07h às 19h',
      closingPhrase: 'Data is the <s>Future</s> Present.'
    },
    footer: {
      rights: 'TODOS OS DIREITOS RESERVADOS.',
      location: 'BRASÍLIA, DF, BRASIL'
    },
    aboutDetail: {
      back: 'Voltar para o Início',
      languages: {
        title: 'Idiomas',
        pt: 'Português',
        ptDesc: 'Compreende Bem, Fala Bem, Lê Bem, Escreve Bem.',
        en: 'Inglês',
        enDesc: 'Compreende Razoavelmente, Fala Razoavelmente, Lê Bem, Escreve Razoavelmente.',
        es: 'Espanhol',
        esDesc: 'Compreende Pouco, Fala Pouco, Lê Razoavelmente.'
      },
      technologies: {
        title: 'Tecnologias',
        subtitle: 'Stack técnico e ferramentas de domínio.'
      },
      courses: {
        title: 'Cursos e Certificados',
        viewCertificate: 'Ver Certificado',
        enapTitle: 'ENAP - Análise de Dados - Fundamentos - 120h',
        enapDesc: 'O curso abordou temas essenciais como:',
        enapPoints: [
          'Análise de dados como suporte à tomada de decisão',
          'Análise de Dados em Linguagem R',
          'Governança de Dados e sua importância na Transformação Digital',
          'Introdução à Lei Geral de Proteção de Dados (LGPD)'
        ]
      },
      books: {
        title: 'Livros',
        recommendation: 'Leituras recomendadas que moldaram minha visão estratégica.',
        book1: {
          title: 'Storytelling com Dados',
          author: 'Cole Nussbaumer Knaflic',
          summary: 'Um guia essencial para profissionais que desejam transformar dados abstratos em visualizações claras e narrativas persuasivas que impulsionam a ação.'
        }
      }
    }
  },
  en: {
    nav: {
      inicio: 'Home',
      sobre: 'About',
      servicos: 'Services',
      competencias: 'Skills',
      projetos: 'Portfolio',
      contato: 'Contact',
      baixarCv: 'Download CV'
    },
    hero: {
      welcome: 'Hello, welcome!',
      specialist: 'Expert in',
      roles: 'Data, Technology & AI',
      description: 'Transforming data into strategic decisions with technology and AI.',
      explore: 'Explore Projects',
      contact: 'Contact Me',
      years: 'Years of',
      experience: 'Experience'
    },
    about: {
      trajectory: 'Trajectory',
      title: 'About',
      mim: 'Me',
      activeProjects: 'Active Projects',
      quote: '"Want to understand how I turn data into value?"',
      description1: 'I am Waldo Eller, a data professional with 2+ years of experience across analytics, visualization, and engineering. I started my journey solving real problems with data: logistical delays, revenue loss due to lack of visibility, manual processes that consumed hours of the team.',
      description2: 'Today I work at the intersection of analytics and engineering, building everything from the dashboard the manager opens every morning to the pipeline that feeds that dashboard reliably and automatically.',
      description3: 'I am actively transitioning to Data Engineering, deepening my knowledge in Airflow, Spark, Snowflake, and modern data architectures.',
      status: 'STATUS',
      available: 'Available for remote or hybrid opportunities.',
      fullProfile: 'View Full Profile'
    },
    services: {
      title: 'Specialties',
      subtitle: 'From data engineering to digital conversion',
      blocks: {
        main: 'Data & Intelligence',
        secondary: 'Marketing & Digital Product'
      },
      items: {
        dataEngineering: {
          title: 'Data Engineering',
          description: 'I build robust pipelines that ensure your data arrives clean, updated, and ready to use, eliminating manual processes and bottlenecks.',
          features: ['Extraction and transformation (ETL/ELT) with Python and SQL', 'Workflow orchestration with Apache Airflow', 'Data modeling in Data Warehouses (Snowflake)', 'Multi-source integration via APIs'],
          cta: 'View Engineering Projects →'
        },
        bi: {
          title: 'Dashboards & Business Intelligence',
          description: 'I develop dashboards that answer exactly the questions your team asks every morning, turning confusing spreadsheets into clear business views.',
          features: ['Interactive dashboards in Power BI and Looker Studio', 'Semantic modeling for self-service analytics', 'KPIs focused on revenue and cost reduction', 'Automated reporting for management'],
          cta: 'View Dashboards →'
        },
        aiAutomation: {
          title: 'AI Automation',
          description: 'I implement intelligent workflows that take over repetitive tasks, connecting systems and LLMs to save your team dozens of hours every week.',
          features: ['AI agents with OpenAI and TypeBot', 'Process automation via n8n', 'WhatsApp integration with API', 'Automated data extraction (Web Scraping)'],
          cta: 'View AI Projects →'
        },
        googleAds: {
          title: 'Google Ads',
          description: 'I position your offer at the exact moment your client searches for it, optimizing cost per acquisition based on real conversion data.',
          features: ['Advanced purchase intent research', 'Continuous bid and ROI optimization', 'Search and Performance Max campaign structuring', 'Precise end-to-end conversion tracking'],
          cta: 'View Ads Results →',
          headline: 'Every dollar invested in Google Ads needs to return, with profit.',
          subheadline: 'Enough of campaigns that spend without converting. I build Google Ads strategies oriented towards real results: more qualified clicks, more leads, more sales.',
          problem: 'Have you ever wondered why your ads appear, but no one buys? Most Google campaigns fail for the same reason: they were set up to look like they are working, high impressions, cheap clicks, but with no real connection to what generates revenue. Wrong keywords. Segmentation too broad. Automated bidding without strategy. Landing pages that don\'t convert. The result? Budget going away. Competitor growing.',
          solution: [
            'Deep keyword research with purchase intent',
            'Campaign structure and ad groups optimized for high Quality Score',
            'Ad copies that stop the scroll and generate qualified clicks',
            'Precise conversion tracking (no guesswork)',
            'Continuous optimization based on real data'
          ],
          authority: 'I am Waldo Eller, a paid traffic specialist focused on performance. I work with businesses that want to stop wasting budget and start scaling with predictability.',
          ctaText: 'I want a free analysis of my campaigns',
          ctaLink: 'https://form.respondi.app/HwjEhHMS'
        },
        metaAds: {
          title: 'Meta Ads',
          description: 'I create Facebook and Instagram campaigns focused on scaling sales and generating qualified leads, testing creatives and audiences with analytical rigor.',
          features: ['Paid traffic funnel structuring', 'Systematic A/B testing of creatives and copy', 'Advanced Pixel and Conversions API setup', 'Horizontal and vertical budget scaling'],
          cta: 'View Meta Results →',
          headline: 'Your ideal audience is on Instagram and Facebook. The problem is they still don\'t know you exist.',
          subheadline: 'With the right Meta Ads strategy, you stop pushing ads to everyone and start appearing to those who will actually buy.',
          problem: 'Boosting posts is not a strategy. Generic interest targeting doesn\'t scale. Beautiful creatives without copy that converts don\'t sell. Meta Ads is one of the most powerful platforms in the world, but it punishes those who don\'t know how to use it. CPC goes up, reach drops, and the algorithm simply stops delivering. If your ads are expensive and yielding no results, the problem isn\'t the platform. It\'s the strategy.',
          solution: [
            'Creation and segmentation of cold, warm, and retargeting audiences',
            'Campaign structure with objective aligned to the funnel stage',
            'Creation of copies and creative briefs that stop the feed',
            'Structured A/B testing to discover what scales',
            'Clear reports with metrics that matter: CAC, ROAS, CPL'
          ],
          authority: 'I understand consumer behavior within the platform and know how to make the algorithm work for you, not against you.',
          ctaText: 'I want a Meta Ads strategy for my business',
          ctaLink: 'https://form.respondi.app/HwjEhHMS'
        },
        sitesSaas: {
          title: 'Sites & SaaS',
          description: 'I develop everything from high-conversion landing pages to full web platforms, combining premium design, speed, and scalable architecture.',
          features: ['Conversion-focused landing pages', 'Custom web system development', 'Payment gateway integration', 'Relational databases (PostgreSQL)'],
          cta: 'View Web Projects →',
          headline: 'Your website is the best salesperson you have, or the biggest hole in your funnel.',
          subheadline: 'I develop websites and SaaS products that not only look beautiful but are built to convert visitors into customers and ideas into recurring revenue.',
          problem: 'It doesn\'t matter how much you invest in traffic: if the page doesn\'t convey trust, doesn\'t load fast, and doesn\'t guide the user to the right action, you\'re throwing money away. And if you have a SaaS idea, the risk of building the wrong product, or the wrong way, can cost months and a lot of money.',
          solution: [
            'For Sites:',
            'Conversion-optimized landing pages and institutional websites',
            'Design focused on user experience and brand identity',
            'Performance, technical SEO, and responsiveness from the first pixel',
            'For SaaS:',
            'Architecture designed to scale from the MVP',
            'UX/UI that reduces churn and increases user activation',
            'Integration with payments, authentication, and external APIs',
            'Focus on a product that solves a real problem, and that people pay to use'
          ],
          authority: 'I combine product vision, design, and development to deliver complete digital solutions, without the need to coordinate five different suppliers.',
          ctaText: 'I want to talk about my project',
          ctaLink: 'https://form.respondi.app/xqV7x60p'
        }
      }
    },
    skills: {
      title: 'Skills',
      groups: [
        {
          title: 'Data Analysis',
          skills: ['Presentation / Storytelling', 'Data Cleaning (ETL)', 'Data Visualization', 'Applied Statistics', 'Excel, SQL, Python, Power BI, Looker']
        },
        {
          title: 'Web / Sites',
          skills: ['Google Ads, Meta ADS', 'Easy Panel, N8n, TypeBot', 'Noco DB, Data Tables', 'Web Scrapping', 'Elementor, WordPress']
        },
        {
          title: 'Studying',
          skills: ['Machine Learning', 'Amazon SageMaker', 'Apache Spark, Databricks', 'Snowflake', 'Apache Airflow']
        }
      ]
    },
    projects: {
      title: 'Projects',
      subtitle: 'Practical and applied results',
      details: 'View Project Details',
      categories: {
        all: 'All',
        data: 'Data',
        web: 'Web',
        ia: 'AI'
      }
    },
    contact: {
      title: 'Let\'s Talk',
      description1: 'Open to strategic positions in Data Engineering and Analytics to strengthen your team.',
      description2: 'If you are not hiring for a fixed position, but have a bottleneck in automation, AI, or data structuring in your business, I also act as a technical partner on specific projects.',
      quickResponse: 'Direct Line',
      whatsappText: 'No forms or bureaucracy. Send me a message detailing the position or your project\'s challenge, and I\'ll reply in a few hours.',
      whatsappCta: 'Start WhatsApp Conversation',
      availability: 'Mon - Fri, 7am to 7pm',
      closingPhrase: 'Data is the <s>Future</s> Present.'
    },
    footer: {
      rights: 'ALL RIGHTS RESERVED.',
      location: 'BRASILIA, DF, BRAZIL'
    },
    aboutDetail: {
      back: 'Back to Home',
      languages: {
        title: 'Languages',
        pt: 'Portuguese',
        ptDesc: 'Understands well, Speaks well, Reads well, Writes well.',
        en: 'English',
        enDesc: 'Understands moderately, Speaks moderately, Reads well, Writes moderately.',
        es: 'Spanish',
        esDesc: 'Understands little, Speaks little, Reads moderately.'
      },
      technologies: {
        title: 'Technologies',
        subtitle: 'Technical stack and proficiency tools.'
      },
      courses: {
        title: 'Courses and Certificates',
        viewCertificate: 'View Certificate',
        enapTitle: 'ENAP - Data Analysis - Fundamentals - 120h',
        enapDesc: 'The course covered essential topics such as:',
        enapPoints: [
          'Data analysis as decision-making support',
          'Data Analysis in R Language',
          'Data Governance and its importance in Digital Transformation',
          'Introduction to General Data Protection Law (LGPD)'
        ]
      },
      books: {
        title: 'Books',
        recommendation: 'Recommended readings that shaped my strategic vision.',
        book1: {
          title: 'Storytelling with Data',
          author: 'Cole Nussbaumer Knaflic',
          summary: 'An essential guide for professionals who want to turn abstract data into clear visualizations and persuasive narratives that drive action.'
        }
      }
    }
  }
};
