import React from 'react';
import { SectionWrapper } from './sections/SectionWrapper';
import { Button } from './ui/Button';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <SectionWrapper id="hero" className="bg-matte-black">
      <div className="flex flex-col justify-center h-full max-w-6xl mx-auto pt-20 md:pt-0 relative z-10">
        
        {/* Label Minimalista */}
        <div className="mb-8 flex items-center gap-4">
            <div className="h-px w-8 bg-neon-green"></div>
            <span className="font-mono text-neon-green text-xs tracking-[0.2em] uppercase">
                Arquitetura de Crescimento
            </span>
        </div>
        
        {/* Título Principal */}
        <h1 className="font-display font-bold text-5xl md:text-7xl leading-[1.1] tracking-tight mb-8 text-white">
          Você construiu um negócio que muitos invejam.
        </h1>

        {/* Bloco com Linha Lateral (Texto Menor) */}
        <div className="border-l-2 border-white/20 pl-6 md:pl-8 py-2 mb-10 max-w-2xl">
            <p className="text-xl md:text-2xl text-gray-400 font-medium leading-relaxed">
                Agora, vamos construir um que <span className="text-white">permita que você viva.</span>
            </p>
        </div>
        
        {/* Subtítulo em Itálico */}
        <p className="max-w-2xl text-lg md:text-xl text-gray-500 font-serif italic leading-relaxed mb-12">
            "Saia do operacional e transforme sua empresa em uma esteira de lucro previsível e autogerenciável."
        </p>

        <div className="flex flex-col md:flex-row gap-6 items-start">
            <Button className="md:text-sm px-12 py-5 shadow-[0_0_30px_rgba(0,255,148,0.15)]">AGENDAR DIAGNÓSTICO</Button>
        </div>

        <div className="absolute bottom-12 left-6 md:left-auto md:right-6 animate-bounce text-gray-600">
           <ChevronDown size={24} strokeWidth={1} />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Hero;