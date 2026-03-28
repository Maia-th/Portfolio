import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ProjectContent } from "@/types/ProjectContent";
import { IconList } from "@/data/IconList";

interface Props {
  project: ProjectContent;
  isReversed: boolean;
}

export default function FeaturedProjectCard({ project, isReversed }: Props) {
  return (
    <div
      className={`flex flex-col gap-8 items-center ${
        isReversed ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      {/* Imagem de Capa */}
      <div className="w-full md:w-1/2 flex justify-center">
        {project.coverPath && (
          <div className="relative w-full max-w-lg aspect-video rounded-xl overflow-hidden shadow-lg border border-gray-200">
            <Image
              src={project.coverPath}
              alt={`Capa do projeto ${project.title}`}
              fill
              className="object-cover"
            />
          </div>
        )}
      </div>

      {/* Conteúdo (Texto e Botões) */}
      <div className="w-full md:w-1/2 flex flex-col gap-4">
        <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>
        
        {/* Tecnologias */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs font-semibold text-orange-600 bg-orange-100 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        <p className="text-gray-600 leading-relaxed text-justify">
          {project.description}
        </p>

        {/* Links / Botões de Ação */}
        <div className="flex flex-wrap gap-6 mt-2 items-center">
          {project.siteLink && (
            <a 
              href={project.siteLink} 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center gap-2 hover:text-orange-500 transition text-sm font-semibold text-gray-700"
            >
              <Image src={IconList.site} alt="Site" width={24} height={24} />
              <span>Site</span>
            </a>
          )}
          
          {project.videoLink && (
            <a 
              href={project.videoLink} 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center gap-2 hover:text-orange-500 transition text-sm font-semibold text-gray-700"
            >
              <Image src={IconList.youtube} alt="Vídeo" width={24} height={24} />
              <span>Vídeo</span>
            </a>
          )}
          
          {project.codeLink && (
            <a 
              href={project.codeLink} 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center gap-2 hover:text-orange-500 transition text-sm font-semibold text-gray-700"
            >
              <Image src={IconList.code} alt="Código" width={24} height={24} />
              <span>Código</span>
            </a>
          )}
          
          {project.internalLink && (
            <Link 
              href={project.internalLink} 
              className="px-4 py-2 bg-orange-500 text-white text-sm font-bold rounded-md hover:bg-orange-600 transition shadow-md"
            >
              Ver Dashboards
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}