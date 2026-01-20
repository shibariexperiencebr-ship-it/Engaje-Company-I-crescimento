import React from 'react';
import { SectionWrapper } from './sections/SectionWrapper';

const Ruptura: React.FC = () => {
  return (
    <SectionWrapper id="ruptura" className="bg-black flex items-center justify-center">
      <div className="max-w-5xl mx-auto w-full">
        <div className="relative pl-8 md:pl-16 py-8">
            {/* Linha Guia Principal da Sessão */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-white/10"></div>

            <h2 className="font-display font-semibold text-3xl md:text-6xl mb-10 leading-tight text-white max-w-3xl">
              Nosso papel não é te ensinar a trabalhar mais.
            </h2>
            
            {/* Elemento Minimalista Solicitado */}
            <div className="relative max-w-sm mb-12">
                <div className="pl-4 border-l border-neon-green/30 py-1">
                    <p className="font-sans text-sm text-gray-500 font-light italic">
                        "Você já faz isso melhor que ninguém."
                    </p>
                </div>
            </div>
            
            <div className="w-12 h-1 bg-neon-green mb-10 shadow-[0_0_15px_rgba(0,255,148,0.3)]"></div>

            <p className="font-sans text-xl md:text-3xl text-gray-300 font-light leading-relaxed max-w-2xl">
              Nós queremos que sua empresa tenha <span className="text-white font-medium">vida própria.</span>
            </p>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Ruptura;