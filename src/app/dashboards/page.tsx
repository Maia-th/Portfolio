import React from "react";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { biDashboardsData } from "@/data/ProjectsData";

export default function DashboardsGalleryPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />

      <main className="flex-1 w-full max-w-7xl mx-auto px-4 min-[1350px]:px-0 py-16 pt-25">
        {/* Cabeçalho da Página */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-left relative w-fit pb-2 tracking-tight">
            Galeria de Dashboards
            <span className="absolute left-0 -bottom-2 w-2/3 h-1.5 bg-orange-500 rounded-full"></span>
          </h2>
          <p className="text-gray-500 mt-6 text-lg max-w-2xl leading-relaxed">
            Projetos focados em Business Intelligence, Data Analytics e
            modelagem de regras de negócios utilizando ferramentas do
            ecossistema de dados.
          </p>
        </div>

        {/* Lista de Projetos BI - Layout Sticky Scroll */}
        <div className="flex flex-col gap-32 pb-20">
          {biDashboardsData.map((bi, index) => (
            <div
              key={bi.id}
              className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start relative"
            >
              {/* Coluna Esquerda: Texto (Fica fixa no Desktop) */}
              <div className="w-full lg:w-1/3 lg:sticky lg:top-32 flex flex-col gap-6 z-10">
                {/* Número do Projeto (Estilo Editorial) */}
                <span className="text-6xl md:text-7xl font-black text-gray-300 opacity-50 absolute -top-10 -z-10 select-none">
                  {(index + 1).toString().padStart(2, "0")}
                </span>

                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight ml-6">
                  {bi.title}
                </h3>

                {bi.technologies && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {bi.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-1.5 text-xs font-bold text-orange-600 bg-orange-500/10 rounded-full border border-orange-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                <div className="w-12 h-1 bg-gray-300 rounded mt-2"></div>

                <p className="text-gray-600 text-lg leading-relaxed text-justify">
                  {bi.description}
                </p>
              </div>

              {/* Coluna Direita: Galeria de Imagens com Scroll */}
              <div className="w-full lg:w-2/3 flex flex-col gap-10">
                {bi.galleryPaths?.map((imagePath, imgIndex) => (
                  <div
                    key={imgIndex}
                    // Adicionado p-2 para o respiro e bg-white para a "moldura" não ficar transparente
                    className="relative w-full aspect-[16/9] p-2 bg-white rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 group transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)]"
                  >
                    {/* Wrapper interno: Garante que a imagem respeite o p-2 do pai */}
                    <div className="relative w-full h-full rounded-xl overflow-hidden">
                      <Image
                        src={imagePath}
                        alt={`${bi.title} - Tela ${imgIndex + 1}`}
                        fill
                        quality={100}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 66vw"
                        // object-center garante que a imagem fique perfeitamente no meio
                        className="object-contain object-center"
                      />
                    </div>

                    {/* Efeito de brilho/overlay sutil (Adicionado pointer-events-none para não bugar cliques) */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="w-full text-center py-8 text-gray-400 text-sm bg-white mt-auto border-t">
        &copy; {new Date().getFullYear()} Maia-Th. Todos os direitos reservados.
      </footer>
    </div>
  );
}
