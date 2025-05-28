import React from "react";
import Image from "next/image";
import { projectsData } from "@/data/ProjectsData";

const iconList = {
  code: "/assets/images/icons/codigo.png",
  site: "/assets/images/icons/site.png",
  youtube: "/assets/images/icons/youtube.png",
  linkedin: "/assets/images/icons/linkedin.png",
  github: "/assets/images/icons/github.png",
  cv: "/assets/images/icons/curriculum-vitae.png",
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between py-4 px-4 md:px-8 shadow bg-white">
        <div className="flex items-center gap-2">
          <Image
            src="/assets/images/icons/codigo.png"
            alt="Logo"
            width={30}
            height={30}
          />
          <span className="text-lg font-bold text-gray-900">
            Maia.<span className="text-orange-500">Th</span>
          </span>
        </div>
        <div className="flex items-center gap-6">
          <a
            href="https://www.linkedin.com/in/maiath/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-orange-500"
            aria-label="LinkedIn"
          >
            <Image
              src={iconList.linkedin}
              alt="LinkedIn"
              width={25}
              height={25}
            />
          </a>
          <a
            href="https://github.com/Maia-th"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-orange-500"
            aria-label="GitHub"
          >
            <Image src={iconList.github} alt="GitHub" width={25} height={25} />
          </a>
          <a
            href="/assets/docs/Maia_Curriculo.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-orange-500"
            aria-label="Currículo"
          >
            <Image src={iconList.cv} alt="Currículo" width={25} height={25} />
          </a>
        </div>
      </nav>

      <main className="flex-1 w-full max-w-7xl mx-auto px-4 py-10 pt-24">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-left relative w-fit pb-1">
            Projetos
            <span className="absolute left-0 -bottom-1 w-full h-1 bg-orange-500 rounded"></span>
          </h2>
        </div>
        <div className="flex flex-wrap gap-8 justify-center">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="bg-white border border-gray-200 rounded-lg shadow-md w-[88vw] max-w-xs lg:max-w-sm flex flex-col"
            >
              {project.coverPath && (
                <div className="w-full h-45 md:h-50 relative shadow-sm rounded-t-lg">
                  <Image
                    src={project.coverPath}
                    alt={project.title}
                    fill
                    className="object-cover rounded-t-lg"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              )}
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-700 mb-3">{project.description}</p>
                <span>
                  Tecnologias:
                  <span className="text-sm text-orange-500 font-medium mb-3 ml-1">
                    {project.languages}
                  </span>
                </span>
                <div className="flex gap-4 justify-end pt-2">
                  {project.videoLink && (
                    <a
                      href={project.videoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 group text-gray-800 transition hover:text-orange-500"
                    >
                      <Image
                        src={iconList.youtube}
                        alt="Vídeo"
                        width={22}
                        height={22}
                      />
                      <span className="text-sm">Vídeo</span>
                    </a>
                  )}
                  {project.codeLink && (
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 group text-gray-800 transition hover:text-orange-500"
                    >
                      <Image
                        src={iconList.code}
                        alt="Código"
                        width={22}
                        height={22}
                      />
                      <span className="text-sm">Código</span>
                    </a>
                  )}
                  {project.siteLink && (
                    <a
                      href={project.siteLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 group text-gray-800 transition hover:text-orange-500"
                    >
                      <Image
                        src={iconList.site}
                        alt="Site"
                        width={22}
                        height={22}
                      />
                      <span className="text-sm">Site</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="w-full text-center py-4 text-gray-500 text-sm bg-white mt-2 border-t">
        &copy; {new Date().getFullYear()} Maia-Th. Todos os direitos reservados.
      </footer>
    </div>
  );
}
