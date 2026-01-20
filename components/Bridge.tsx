import React from 'react';
import { SectionWrapper } from './sections/SectionWrapper';

const Bridge: React.FC = () => {
  return (
    <SectionWrapper id="bridge" className="bg-zinc-950 flex items-center justify-center border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 relative w-full">
        {/* Elemento Visual Sutil - Cantos Técnicos */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-white/10"></div>
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-white/10"></div>

        <div className="py-20 md:py-32 flex flex-col items-center text-center">
            <h2 className="font-display font-semibold text-3xl md:text-5xl mb-16 leading-snug text-white max-w-3xl">
              Erguer uma empresa do zero exige um fôlego que poucos têm.
            </h2>
            
            {/* Elemento Minimalista Solicitado */}
            <div className="relative max-w-lg mx-auto text-left group mt-4">
                {/* Linha lateral técnica */}
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-white/10 group-hover:bg-neon-green/50 transition-colors duration-500"></div>
                
                <div className="pl-6 py-2">
                    <p className="font-mono text-xs md:text-sm text-gray-500 font-light leading-relaxed tracking-wide">
                        "SE VOCÊ CHEGOU ATÉ AQUI, É PORQUE SUA COMPETÊNCIA É INEGÁVEL. MAS EU SEI QUE, NO SILÊNCIO DO FIM DO DIA, EXISTE UM CANSAÇO QUE O FATURAMENTO NÃO CURA."
                    </p>
                </div>
            </div>

            <div className="mt-16 opacity-60">
                 <p className="font-mono text-[10px] text-gray-600 tracking-[0.2em] uppercase border-t border-white/10 pt-4 inline-block">
                    Sintoma: Centralização Excessiva
                </p>
            </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Bridge;