import React from "react";
import Image from "next/image";
import { IconList } from "@/data/IconList";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 shadow bg-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-2 px-4">
      <Link href="/" className="flex items-center gap-2">
        <Image src={IconList.code} alt="Logo" width={35} height={35} />
        <span className="text-2xl font-bold text-gray-900">
          Maia.<span className="text-orange-500">Th</span>
        </span>
      </Link>
      <div className="flex items-center gap-6">
        <a
          href="https://www.linkedin.com/in/maiath/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition hover:opacity-70"
          aria-label="LinkedIn"
        >
          <Image src={IconList.linkedin} alt="LinkedIn" width={25} height={25} />
        </a>
        <a
          href="https://github.com/Maia-th"
          target="_blank"
          rel="noopener noreferrer"
          className="transition hover:opacity-70"
          aria-label="GitHub"
        >
          <Image src={IconList.github} alt="GitHub" width={25} height={25} />
        </a>
        <a
          href="/assets/docs/Maia_Curriculo.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="transition hover:opacity-70"
          aria-label="Currículo"
        >
          <Image src={IconList.cv} alt="Currículo" width={25} height={25} />
        </a>
      </div>
      </div>
    </nav>
  );
}