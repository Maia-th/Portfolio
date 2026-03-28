export interface ProjectContent {
  id: string;
  title: string;
  technologies: string[];
  description: string;
  coverPath?: string; 
  galleryPaths?: string[];
  videoLink?: string;
  siteLink?: string;
  codeLink?: string;
  internalLink?: string;
}