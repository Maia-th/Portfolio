// ===============================
// ESTRUTURA UNIFICADA DE PROJETOS 
// ===============================
const projectsData = [
  {
    id: 'bi-gestao-standby',
    title: 'Gestão de Ativos Standby',
    technologies: ['Power BI', 'Power Apps', 'Power Automate', 'ETL'],
    description: 'O projeto reestruturou a gestão de equipamentos Standby. Apesar dos indicadores legados estarem dentro da meta, a usina sofria paradas operacionais pois os ativos falhavam quando solicitados. O problema raiz era o monitoramento focado apenas em "tentativas de inversão", mascarando a real indisponibilidade e a falta de tratativas. Assumi a reformulação do processo ponta a ponta: na camada analítica, estruturei novos pipelines de dados (ETL) e refiz a arquitetura do Power BI com foco em UX, evidenciando a aderência real da planta e o histórico de falhas recorrentes. Na camada de operação, desenvolvi novos módulos no Power Apps criando uma arquitetura de integração bidirecional (Write-back). Orquestrada via Power Automate, essa solução estabelece um fluxo onde as falhas mapeadas no BI direcionam as ações no aplicativo, e as tratativas de campo atualizam a base de dados, refletindo imediatamente de volta nos indicadores. Essa solução uniu dados e operação, garantindo um acompanhamento semanal prático e maior confiabilidade para a planta.',
    galleryPaths: [
      './assets/images/bi/standby-inicial.png',
      './assets/images/bi/standby-detalhamento.png',
      './assets/images/bi/standby-pendencias.png',
      './assets/images/bi/standby-powerautomate.png',
      './assets/images/bi/standby-powerapps1.png',
      './assets/images/bi/standby-powerapps2.png',
    ]
  },
  {
    id: 'rpa-extracao',
    title: 'RPA para Extração de Dados',
    technologies: ['Python', 'Playwright', 'Web Scraping', 'Automação'],
    coverPath: './assets/images/projects/rpa-cover.png',
    description: 'O projeto resolveu uma limitação crítica de monitoramento: o sistema de origem não possuía API nem inteligência de priorização, gerando cerca de 50 alarmes por hora. Como a tomada de decisão dependia de um BI para cruzar dados e elencar os ativos mais críticos, a extração manual para alimentar o dashboard a cada 30 minutos era humanamente impossível. Desenvolvi um script de RPA em Python (Playwright) que roda 24/7, realizando o web scraping e atualizando o SharePoint a cada 5 minutos. Essa arquitetura de alta disponibilidade garante que o BI sempre consuma dados atualizados, viabilizando a priorização automática de falhas e a atuação corretiva sem qualquer intervenção manual na extração.',
    videoLink: 'https://youtu.be/IycyvkLRweY',
    codeLink: 'https://github.com/CMA-Itabira/Alarmes-CMA-Web',
  },
  {
    id: 'bi-saude-ativos',
    title: 'Dashboard Saúde dos Ativos',
    technologies: ['Power BI', 'DAX Avançado', 'ETL & Modelagem', 'UI/UX Analítico'],
    galleryPaths: [
    './assets/images/bi/saude-ativos-inicial-1.png',
    './assets/images/bi/saude-ativos-inicial-2.png',
    './assets/images/bi/saude-ativos-fluxograma.png'
  ],
    description: 'Produto de dados ponta a ponta (End-to-End) focado em transformar a manutenção reativa da usina em inteligência operacional orientada à confiabilidade. Liderei o projeto desde o levantamento de requisitos com engenheiros e especialistas até a entrega da solução. A engenharia de dados envolveu rotinas complexas de ETL para integrar e normalizar múltiplas fontes descentralizadas (laudos sensitivos e preditivos, análise de óleo, inspeção de correias e alarmes). No Power BI, estruturei um algoritmo em DAX com pesos exponenciais e matriz de agravantes para calcular um Score de Criticidade automatizado para cada equipamento. A interface foi desenhada com alto rigor de UX analítico: uso estratégico de indicativos visuais (emojis e cores) para evitar poluição cognitiva, navegação hierárquica rápida e fluxogramas operacionais. O resultado foi a eliminação da subjetividade e a capacidade de direcionar intervenções de forma cirúrgica, maximizando a disponibilidade operacional.',
  },
  {
    id: 'bi-correias',
    title: 'Dashboard Controle das Correias',
    technologies: ['Power BI', 'DAX', 'Python', 'Tratamento de Dados'],
    galleryPaths: [
      './assets/images/bi/correias-inicial-1.png',
      './assets/images/bi/correias-inicial-2.png',
      './assets/images/bi/correias-historico.png'
    ],
    description: 'Desenvolvimento de solução analítica para dar visibilidade às condições das correias transportadoras, mitigando o risco de rasgos que resultam em paradas da planta e altos custos de manutenção corretiva. O monitoramento viabilizou a programação estratégica de trocas e a identificação preventiva de desgastes anormais, maximizando a vida útil dos ativos e gerando forte retorno econômico. Tecnicamente, atuei do planejamento à construção do BI, realizando o tratamento de dados, modelagem complexa em DAX e utilização de scripts em Python para geração de gráficos customizados.',
  },
  {
    id: 'pratiquei-edu',
    title: 'Pratiquei Edu / Estudie',
    technologies: ['Next.js', 'TypeScript', 'Shadcn UI', 'Zustand'],
    coverPath: './assets/images/projects/pratiquei-cover.png',
    description: 'Plataforma educacional com foco em performance e escalabilidade. Fui o responsável integral pelo desenvolvimento de todo o Front-End da aplicação e pela sua integração com o Back-End via consumo de APIs. O sistema conta com uma área do usuário complexa (banco de questões, flashcards personalizados, caderno de erros, revisão inteligente e painel de métricas) e um painel administrativo robusto. A arquitetura moderna adotada garantiu alta fidelidade ao design e uma ótima experiência de usuário.',
    videoLink: 'https://youtu.be/Hw2meQwEuyw',
    siteLink: 'https://app.pratiquei.com/login',
  },
  {
    id: 'portal-cma',
    title: 'Portal CMA',
    technologies: ['React', 'JavaScript', 'SPA', 'TailwindCSS'],
    coverPath: './assets/images/projects/portal-cover.png',
    description: 'Agrupador de links desenvolvido para otimizar o dia a dia da equipe, centralizando os principais acessos da operação. Construído como uma SPA (Single Page Application) componentizada em React, o portal possui arquitetura modular que simplifica a manutenção. Sua estrutura facilita a escalabilidade, permitindo a fácil adição de novos recursos.',
    siteLink: 'https://portal-cma.vercel.app/',
    codeLink: 'https://github.com/CMA-Itabira/Portal-CMA',
  }
];

// =========================================================================
// ESTRUTURA REUTILIZÁVEL PARA AS EXPERIÊNCIAS PROFISSIONAIS (Linha do Tempo)
// =========================================================================
const experiencesData = [
  {
    role: 'Analista de Dados',
    company: 'Vale S.A. (Monitoramento de Ativos - CMA)',
    date: 'Jul/2025 – Presente',
    description: 'Desenvolvimento de pipelines ETL, dashboards estratégicos (Power BI/DAX) e automações (Python/Power Platform) para monitoramento e confiabilidade de ativos.'
  },
  {
    role: 'Desenvolvedor Front-End (Freelance)',
    company: 'Pratiquei Educacional',
    date: 'Jan/2025 – Jun/2025',
    description: 'Liderança técnica na construção da interface com Next.js e TypeScript, focando em alta performance, UI/UX e consumo de APIs RESTful.'
  },
  {
    role: 'Desenvolvedor Full Stack (Extensão)',
    company: 'Universidade Federal de Itajubá (BTec)',
    date: 'Mai/2024 – Dez/2024',
    description: 'Desenvolvimento ponta a ponta do sistema de gestão, unindo modelagem de banco de dados relacional (SQL) e Front-End (React.js).'
  },
  {
    role: 'Analista de Dados (Estágio)',
    company: 'Prefeitura Municipal de Itabira',
    date: 'Mai/2023 – Abr/2024',
    description: 'Atuação em Data Quality de bases governamentais e criação de dashboards de missão crítica (Looker Studio) para KPIs de saúde pública.'
  }
];