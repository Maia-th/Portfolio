import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedProjectCard from "@/components/FeaturedProjectCard";
import { featuredProjectsData } from "@/data/ProjectsData";

export default function IndexPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navegação Fixa */}
      <Navbar />

      {/* Seção Inicial (Apresentação e Partículas) */}
      <Hero />

      {/* Seção de Projetos (O id="projetos" permite que o link da Navbar role até aqui) */}
      <main id="projetos" className="flex-1 w-full max-w-7xl mx-auto px-4 min-[1350px]:px-0 py-16">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-left relative w-fit pt-8 pb-1 text-gray-900">
            Projetos
            <span className="absolute left-0 -bottom-1 w-full h-1 bg-orange-500 rounded"></span>
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl">
            Abaixo estão alguns dos meus principais trabalhos, unindo desenvolvimento de interfaces modernas e soluções estratégicas com dados.
          </p>
        </div>
        
        {/* Renderizando os projetos com layout alternado */}
        <div className="flex flex-col gap-24">
          {featuredProjectsData.map((project, index) => (
            <FeaturedProjectCard
              key={project.id}
              project={project}
              isReversed={index % 2 !== 0} // Transforma ímpares em true para inverter a imagem
            />
          ))}
        </div>
      </main>

      {/* Rodapé Temporário (Podemos transformar em componente depois) */}
      <footer className="w-full text-center py-6 text-gray-500 text-sm bg-white mt-12 border-t border-gray-200 shadow-inner">
        &copy; {new Date().getFullYear()} Maia-Th. Todos os direitos reservados.
      </footer>
    </div>
  );
}