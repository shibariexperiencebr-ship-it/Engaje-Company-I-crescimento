import React from 'react';
import { SectionWrapper } from './sections/SectionWrapper';
import { Button } from './ui/Button';
import { BarChart2, Filter } from 'lucide-react';

const Marketing: React.FC = () => {
  return (
    <SectionWrapper id="marketing" className="bg-matte-black">
      <div className="max-w-5xl mx-auto text-center md:text-left flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
            <h2 className="font-display font-bold text-3xl md:text-5xl mb-6">
                Chega de métricas que você não consegue depositar no banco.
            </h2>
            <div className="space-y-6 text-lg text-gray-400 mb-8">
                <p>
                    Curtidas e alcance são bonitos no relatório, mas o que mantém as portas abertas é o lucro. Nosso foco não é apenas trazer pessoas, mas atrair as pessoas certas — aquelas que têm urgência e valorizam o seu trabalho.
                </p>
                <p>
                    Criamos uma estratégia de presença digital que respeita a sua autoridade regional e foca em gerar oportunidades reais de negócio, filtrando quem "só quer saber o preço".
                </p>
            </div>
            
            <Button variant="outline">QUERO MARKETING DE PERFORMANCE</Button>
          </div>
          
          <div className="flex-1 flex justify-center items-center">
              <div className="relative">
                  <div className="absolute inset-0 bg-neon-green blur-[60px] opacity-20"></div>
                  <Filter className="w-32 h-32 text-white relative z-10" />
                  <BarChart2 className="w-16 h-16 text-neon-green absolute -bottom-4 -right-4 z-20" />
              </div>
          </div>
      </div>
    </SectionWrapper>
  );
};

export default Marketing;