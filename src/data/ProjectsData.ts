import { ProjectContent } from '@/types/ProjectContent';

// ==========================================
// PROJETOS EM DESTAQUE (Página Inicial)
// ==========================================
export const featuredProjectsData: ProjectContent[] = [
  {
    id: 'bi-dashboards',
    title: 'Business Intelligence & Data Analytics',
    technologies: ['Power BI', 'DAX', 'Python', 'ETL', 'SQL'],
    coverPath: '/images/projects/bi-cover.jpg',
    description: 'Desenvolvimento ponta a ponta de soluções de Business Intelligence para o setor industrial. O trabalho envolve desde o mapeamento de requisitos, extração e tratamento de dados (ETL) de múltiplas fontes, até a criação de modelagens complexas em DAX e visuais interativos. Atuação direta na otimização de tomadas de decisão táticas e operacionais através de dados.',
    internalLink: '/dashboards',
  },
  {
    id: 'pratiquei-edu',
    title: 'Pratiquei Edu / Estudie',
    technologies: ['Next.js', 'TypeScript', 'React', 'Node.js'],
    coverPath: '/images/projects/pratiquei-cover.jpg',
    description: 'Plataforma educacional completa com foco em performance e escalabilidade. O sistema conta com uma área do usuário (banco de questões, flashcards personalizados, caderno de erros, revisão inteligente baseada em algoritmo de desempenho e painel de métricas) e um painel administrativo robusto para gestão de usuários e conteúdo. Arquitetura moderna garantindo uma ótima experiência de usuário.',
    videoLink: 'https://youtube.com/...',
    siteLink: 'https://...',
  },
  {
    id: 'rpa-extracao',
    title: 'RPA para Extração de Dados',
    technologies: ['Python', 'Playwright', 'Web Scraping', 'Automação'],
    coverPath: '/images/projects/rpa-cover.jpg',
    description: 'O projeto surgiu da necessidade de atualizar pontos alarmados de ativos em um dashboard a cada 30 minutos, num cenário onde o sistema de origem não possuía API. Desenvolvi um script em Python com Playwright que automatiza a navegação e o web scraping das bases, exportando os dados para o SharePoint a cada 5 minutos. A solução eliminou o trabalho manual e garantiu monitoramento contínuo e confiável em tempo real.',
    videoLink: 'https://youtube.com/...',
    codeLink: 'https://github.com/...',
  },
  {
    id: 'portal-cma',
    title: 'Portal CMA',
    technologies: ['React', 'JavaScript', 'SPA', 'TailwindCSS'],
    coverPath: '/images/projects/portal-cover.jpg',
    description: 'Agrupador de links desenvolvido para otimizar o dia a dia da equipe, centralizando os principais acessos da operação. Construído como uma SPA (Single Page Application) componentizada em React, o portal possui arquitetura modular que simplifica a manutenção. Sua estrutura facilita a escalabilidade, permitindo a fácil adição de novos recursos, como um módulo unificado para verificação de logs dos scripts de automação.',
    siteLink: 'https://...',
    codeLink: 'https://github.com/...',
  }
];

// ==========================================
// GALERIA DE DASHBOARDS (Página Interna)
// ==========================================
export const biDashboardsData: ProjectContent[] = [
  {
    id: 'bi-saude-ativos',
    title: 'Dashboard Saúde dos Ativos',
    technologies: ['Power BI', 'DAX', 'ETL'],
    galleryPaths: [
      '/images/bi/saude-ativos-inicial.jpg',
      '/images/bi/saude-ativos-fluxograma.jpg'
    ],
    description: 'Extração e tratamento de dados de múltiplas fontes, com modelagem de KPI de criticidade em DAX baseado em pesos exponenciais, permitindo priorização de ativos e visualização em rankings e indicadores no dashboard.',
  },
  {
    id: 'bi-correias',
    title: 'Dashboard Monitoramento de Correias',
    technologies: ['Power BI', 'DAX', 'Python', 'Tratamento de Dados'],
    galleryPaths: [
      '/images/bi/correias-inicial.jpg',
      '/images/bi/correias-historico.jpg'
    ],
    description: 'Atuação desde o planejamento até a construção do BI, com tratamento e padronização de dados, correção de inconsistências e modelagem de regras de negócio em DAX. Utilização de Python para geração de gráfico avançado conforme requisitos do projeto.',
  },
  {
    id: 'bi-lubrificacao',
    title: 'Acompanhamento de Notas de Lubrificação',
    technologies: ['Power BI', 'Power Apps', 'Power Automate', 'ETL'],
    galleryPaths: [
      '/images/bi/notas-inicial.jpg',
      '/images/bi/notas-detalhamento.jpg'
    ],
    description: 'Desenvolvimento de BI com integração de dados de diferentes sistemas, tratamento via ETL e integração com Power Apps e Power Automate para atualização contínua de previsões de execução e observações pelos usuários.',
  }
];