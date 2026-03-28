import React from "react";
import Image from "next/image";
import { IconList } from "@/data/IconList";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 shadow bg-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-4 md:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src={IconList.code} alt="Logo" width={35} height={35} />
          <span className="text-xl min-[375px]:text-[22.7px] font-bold text-gray-900">
            Maia.<span className="text-orange-500">Th</span>
          </span>
        </Link>

        {/* Links de Navegação e Botão CV */}
        <div className="flex items-center gap-2 min-[375px]:gap-6 md:gap-8">
          <Link
            href="/"
            className="text-gray-700 font-semibold hover:text-orange-500 transition"
          >
            Início
          </Link>

          {/* Supondo que a seção de projetos terá um id="projetos" no futuro */}
          <Link
            href="/#projetos"
            className="text-gray-700 font-semibold hover:text-orange-500 transition"
          >
            Projetos
          </Link>

          {/* Botão de Currículo com destaque (Outline com Ícone) */}
          <a
            href="/assets/docs/Maia_Curriculo.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-2 min-[490px]:px-3 py-1 border border-orange-500 text-orange-500 text-sm font-bold rounded-md hover:bg-orange-50 hover:shadow-md transition"
            aria-label="Abrir Currículo"
          >
            <Image
              src={IconList.cv}
              alt="Ícone Currículo"
              width={20}
              height={20}
            />
            {/* Esconde abaixo de 490px, exibe a partir de 490px */}
            <span className="hidden min-[490px]:inline">Currículo</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
