"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { IconList } from "@/data/IconList";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function Hero() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    <section 
      id="inicio" 
      className="w-full h-screen flex items-center justify-center px-4 md:px-8 pt-15"
    >
      {/* Container Interno (O "Card" colorido) */}

      <div className="relative w-full max-w-7xl h-[75vh] min-h-[500px] bg-[#36454F] rounded-2xl overflow-hidden shadow-2xl flex flex-col items-center justify-center">
        
        {/* Fundo de Partículas (Fica restrito aos limites do Card graças ao overflow-hidden) */}
        {init && (
          <Particles
            id="tsparticles"
            className="absolute inset-0 z-0"
            options={{
              background: {
                color: { value: "transparent" },
              },
              fpsLimit: 120,
              interactivity: {
                events: {
                  onHover: { enable: true, mode: "repulse" },
                },
                modes: {
                  repulse: { distance: 100, duration: 0.4 },
                },
              },
              particles: {
                color: { value: "#ffffff" },
                links: {
                  color: "#ffffff",
                  distance: 150,
                  enable: true,
                  opacity: 0.2,
                  width: 1,
                },
                move: {
                  enable: true,
                  speed: 1.5,
                  direction: "none",
                  random: false,
                  straight: false,
                  outModes: { default: "bounce" },
                },
                number: {
                  density: { enable: true, width: 800, height: 800 },
                  value: 80,
                },
                opacity: { value: 0.3 },
                shape: { type: "circle" },
                size: { value: { min: 1, max: 3 } },
              },
              detectRetina: true,
            }}
          />
        )}

        {/* Conteúdo Central (Nome e Profissão) */}
        <div className="relative z-10 flex flex-col items-center text-center px-4">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tight drop-shadow-lg">
            Thiago Maia
          </h1>
          <h2 className="text-lg md:text-2xl lg:text-3xl text-gray-300 font-medium mt-4 md:mt-6 tracking-wide">
            Dev Front-End & Data Analytics
          </h2>
        </div>

        {/* Ícones Sociais (Rodapé do Card) */}
        <div className="absolute bottom-8 md:bottom-12 z-10 flex items-center gap-6 md:gap-8">
          <a
            href="https://github.com/Maia-th"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/5 rounded-full hover:bg-white/20 hover:scale-110 transition-all duration-300 backdrop-blur-sm"
            aria-label="GitHub"
          >
            <Image src={IconList.github} alt="GitHub" width={32} height={32} className="bg-white rounded"/>
          </a>
          <a
            href="https://www.linkedin.com/in/maiath/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/5 rounded-full hover:bg-white/20 hover:scale-110 transition-all duration-300 backdrop-blur-sm"
            aria-label="LinkedIn"
          >
            <Image src={IconList.linkedin} alt="LinkedIn" width={32} height={32} className="bg-white rounded"/>
          </a>
          <a
            href="https://wa.me/5533988940553" 
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/5 rounded-full hover:bg-white/20 hover:scale-110 transition-all duration-300 backdrop-blur-sm"
            aria-label="WhatsApp"
          >
            <Image src={IconList.whatsapp} alt="WhatsApp" width={32} height={32} className="bg-white rounded"/>
          </a>
        </div>

      </div>
    </section>
  );
}