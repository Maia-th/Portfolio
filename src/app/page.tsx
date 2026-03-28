import React from "react";
import Navbar from "@/components/Navbar";
import FeaturedProjectCard from "@/components/FeaturedProjectCard";
import { featuredProjectsData } from "@/data/ProjectsData";

export default function IndexPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      <main className="flex-1 w-full max-w-7xl mx-auto px-8 py-10 pt-24">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-left relative w-fit pb-1">
            Projetos
            <span className="absolute left-0 -bottom-1 w-full h-1 bg-orange-500 rounded"></span>
          </h2>
        </div>
        
        {/* Renderizando os projetos com layout alternado */}
        <div className="flex flex-col gap-20">
          {featuredProjectsData.map((project, index) => (
            <FeaturedProjectCard
              key={project.id}
              project={project}
              isReversed={index % 2 !== 0} // Ímpar inverte a posição
            />
          ))}
        </div>
      </main>

      <footer className="w-full text-center py-4 text-gray-500 text-sm bg-white mt-10 border-t">
        &copy; {new Date().getFullYear()} Maia-Th. Todos os direitos reservados.
      </footer>
    </div>
  );
}