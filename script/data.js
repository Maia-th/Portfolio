// ===============================
// ESTRUTURA UNIFICADA DE PROJETOS 
// ===============================
const projectsData = [
  {
    id: 'bi-gestao-standby',
    title: 'Gestão de Ativos Standby',
    technologies: ['Power BI', 'Power Apps', 'Power Automate', 'ETL & Modelagem'],
    description: 'O projeto reestruturou a gestão de equipamentos Standby. Apesar dos indicadores legados estarem dentro da meta, a usina sofria paradas operacionais pois os ativos falhavam quando solicitados. O problema raiz era o monitoramento focado apenas em "tentativas de inversão", mascarando a real indisponibilidade e a falta de tratativas. Assumi a reformulação do processo ponta a ponta: na camada analítica, estruturei novos pipelines de dados (ETL) e refiz a arquitetura do Power BI com foco em UX, evidenciando a aderência real da planta e o histórico de falhas recorrentes. Na camada de operação, desenvolvi novos módulos no Power Apps criando uma arquitetura de integração bidirecional (Write-back). Orquestrada via Power Automate, essa solução estabelece um fluxo onde as falhas mapeadas no BI direcionam as ações no aplicativo, e as tratativas de campo atualizam a base de dados, refletindo imediatamente de volta nos indicadores. Essa solução uniu dados e operação, garantindo um acompanhamento semanal prático e maior confiabilidade para a planta.',
    galleryPaths: [
      './assets/images/bi/standby-inicial.png',
      './assets/images/bi/standby-detalhamento.png',
      './assets/images/bi/standby-pendencias.png',
      './assets/images/bi/standby-powerapps1.png',
      './assets/images/bi/standby-powerapps2.png',
    ]
  },
  {
    id: 'rpa-extracao',
    title: 'RPA para Extração de Dados',
    technologies: ['Python', 'Playwright', 'Web Scraping', 'Automação'],
    coverPath: './assets/images/projects/rpa-cover.png',
    description: 'O projeto resolveu uma limitação crítica de monitoramento: o sistema de origem não possuía API nem inteligência de priorização, gerando cerca de 50 alarmes por hora. Como a tomada de decisão dependia de um BI para cruzar dados e elencar os ativos mais críticos, a extração manual para alimentar o dashboard a cada 30 minutos era humanamente impossível. Desenvolvi um script de RPA em Python (Playwright) que roda 24/7, realizando o web scraping e atualizando o SharePoint a cada 5 minutos. Essa arquitetura de alta disponibilidade garante que o BI sempre consuma dados atualizados, viabilizando a priorização automática de falhas e a atuação preventiva sem qualquer intervenção manual na extração.',
    videoLink: 'https://youtu.be/IycyvkLRweY',
    codeLink: 'https://github.com/CMA-Itabira/Alarmes-CMA-Web',
  },
  {
    id: 'bi-saude-ativos',
    title: 'Projeto Saúde dos Ativos',
    technologies: ['Power BI', 'DAX Avançado', 'ETL & Modelagem', 'UI/UX Analítico'],
    galleryPaths: [
    './assets/images/bi/saude-ativos-inicial-1.png',
    './assets/images/bi/saude-ativos-inicial-2.png',
    './assets/images/bi/saude-ativos-fluxograma.png'
  ],
    description: 'Produto de dados ponta a ponta (End-to-End) focado em transformar a manutenção reativa da usina em inteligência operacional orientada à confiabilidade. Liderei o projeto desde o levantamento de requisitos com engenheiros e especialistas até a entrega da solução. A engenharia de dados envolveu rotinas complexas de ETL para integrar e normalizar múltiplas fontes descentralizadas (laudos sensitivos e preditivos, análise de óleo, inspeção de correias e alarmes). No Power BI, estruturei um algoritmo em DAX com pesos exponenciais e matriz de agravantes para calcular um Score de Criticidade automatizado para cada equipamento. A interface foi desenhada com alto rigor de UX analítico: uso estratégico de indicativos visuais para evitar poluição cognitiva, navegação hierárquica rápida e fluxogramas dos processos. O resultado foi a eliminação da subjetividade e a capacidade de direcionar intervenções de forma cirúrgica, maximizando a disponibilidade operacional.',
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
    id: "btec-incubadora",
    title: "Incubadora de Negócios - BTec",
    technologies: ["React.js", "Node.js", "TypeScript", "SQL", "Eng. de Software", "Kanban"],
    description: "Atuação abrangente no desenvolvimento Full Stack do site institucional e sistema de gestão da Incubadora de Negócios de Base Tecnológica de Itabira. A participação cobriu todo o ciclo de vida do software (SDLC), iniciando na engenharia de requisitos com a elaboração da documentação de visão (RF e RNF). A execução técnica englobou a arquitetura da informação completa (diagramas ER e dicionário de dados em SQL), desenvolvimento do back-end (Node.js/TypeScript) com versionamento via GitFlow, prototipação de UI/UX no Figma e implementação da interface em React.js. Todo o ecossistema foi gerido sob metodologias ágeis (Kanban).",
    galleryPaths: [
        "./assets/images/projects/btec-1.png",
        "./assets/images/projects/btec-2.png", 
        "./assets/images/projects/btec-3.png", 
        "./assets/images/projects/btec-4.png",  
        "./assets/images/projects/btec-5.png",  
        "./assets/images/projects/btec-6.png",  
        "./assets/images/projects/btec-7.png",  
        "./assets/images/projects/btec-8.png",  
        "./assets/images/projects/btec-9.png",  
        "./assets/images/projects/btec-10.png",  
        "./assets/images/projects/btec-11.png",  
        "./assets/images/projects/btec-12.png",  
        "./assets/images/projects/btec-13.png",  
        "./assets/images/projects/btec-14.png",  
        "./assets/images/projects/btec-15.png",  
        "./assets/images/projects/btec-16.png",  
        "./assets/images/projects/btec-17.png",  
        "./assets/images/projects/btec-18.png",  
        "./assets/images/projects/btec-19.png",  
        "./assets/images/projects/btec-20.png"
    ],
    siteLink: "https://btec-itabira.vercel.app/"
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
    description: 'Atuação no ciclo completo do dado: orquestração de automações (Python/RPA) e pipelines ETL, unida à modelagem de dashboards gerenciais (Power BI) para a confiabilidade de ativos.'
  },
  {
    role: 'Desenvolvedor Front-End (Freelance)',
    company: 'Pratiquei Educacional',
    date: 'Jan/2025 – Jun/2025',
    description: 'Liderança técnica na arquitetura de interfaces com Next.js e TypeScript. Foco em componentização avançada, alta performance, rigor em UI/UX e consumo otimizado de APIs.'
  },
  {
    role: 'Desenvolvedor Full Stack (Extensão)',
    company: 'Universidade Federal de Itajubá (BTec)',
    date: 'Mai/2024 – Dez/2024',
    description: 'Engenharia de software de ponta a ponta sob metodologias ágeis. Atuação desde o levantamento de requisitos e modelagem relacional (SQL) até a construção da interface em React.js.'
  },
  {
    role: 'Analista de Dados (Estágio)',
    company: 'Prefeitura Municipal de Itabira',
    date: 'Mai/2023 – Abr/2024',
    description: 'Liderança em processos de Data Quality de bases governamentais e desenvolvimento de painéis de missão crítica (Looker Studio) para monitoramento estratégico da saúde pública.'
  }
];