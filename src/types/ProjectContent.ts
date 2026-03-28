export interface ProjectContent {
  id: string; // Usar string (ex: 'rpa-extracao') ajuda caso queira gerar rotas dinâmicas no futuro
  title: string;
  technologies: string[]; // Array facilita o .map() na hora de renderizar as tags
  description: string;
  coverPath?: string; // Imagem principal (para a Home)
  galleryPaths?: string[]; // Múltiplas imagens (para a página de BI)
  videoLink?: string;
  siteLink?: string;
  codeLink?: string;
  internalLink?: string; // Usado para redirecionar para a página de BIs
}