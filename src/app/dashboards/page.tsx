import React from "react";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { biDashboardsData } from "@/data/ProjectsData";

export default function DashboardsGalleryPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      <main className="flex-1 w-full max-w-7xl mx-auto px-4 min-[1350px]:px-0 py-16">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-left relative w-fit pt-8 pb-1">
            Galeria de Dashboards
            <span className="absolute left-0 -bottom-1 w-full h-1 bg-orange-500 rounded"></span>
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl">
            Projetos focados em Business Intelligence, Data Analytics e modelagem de regras de negócios utilizando ferramentas do ecossistema de dados.
          </p>
        </div>

        <div className="flex flex-col gap-16">
          {biDashboardsData.map((bi) => (
            <div key={bi.id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{bi.title}</h3>
              <p className="text-gray-600 mb-6">{bi.description}</p>
              
              {/* Galeria de Imagens do Dashboard */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {bi.galleryPaths?.map((imagePath, index) => (
                  <div key={index} className="relative w-full aspect-video rounded-lg overflow-hidden border border-gray-200 shadow-md">
                    <Image
                      src={imagePath}
                      alt={`${bi.title} - Visualização ${index + 1}`}
                      fill
                      className="object-cover hover:scale-105 transition duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="w-full text-center py-4 text-gray-500 text-sm bg-white mt-10 border-t">
        &copy; {new Date().getFullYear()} Maia-Th. Todos os direitos reservados.
      </footer>
    </div>
  );
}