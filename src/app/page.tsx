import React from "react";
import Image from "next/image";
import { IconList } from "@/data/IconList";

export default function IndexPage() {
  return (
    <>
      <div className="min-h-screen flex flex-col bg-gray-50">
      <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between py-4 px-4 md:px-8 shadow bg-white">
        <div className="flex items-center gap-2">
          <Image
            src={IconList.code}
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
              src={IconList.linkedin}
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
            <Image src={IconList.github} alt="GitHub" width={25} height={25} />
          </a>
          <a
            href="/assets/docs/Maia_Curriculo.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-orange-500"
            aria-label="Currículo"
          >
            <Image src={IconList.cv} alt="Currículo" width={25} height={25} />
          </a>
        </div>
      </nav>

      <main className="flex-1 w-full max-w-7xl mx-auto px-8 py-10 pt-24">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-left relative w-fit pb-1">
            Projetos
            <span className="absolute left-0 -bottom-1 w-full h-1 bg-orange-500 rounded"></span>
          </h2>
        </div>
        
      </main>

      <footer className="w-full text-center py-4 text-gray-500 text-sm bg-white mt-2 border-t">
        &copy; {new Date().getFullYear()} Maia-Th. Todos os direitos reservados.
      </footer>
    </div>
    </>
  );
}
