import React from 'react';
import { SectionWrapper } from './sections/SectionWrapper';
import { Button } from './ui/Button';

const FinalCta: React.FC = () => {
  return (
    <SectionWrapper id="final-cta" className="bg-black flex flex-col items-center justify-center">
      <div className="max-w-4xl mx-auto text-left w-full">
        <h2 className="font-display font-black text-4xl md:text-6xl mb-8 leading-tight">
            Vamos conversar de <br/>
            <span className="text-neon-green highlight-text">empresário para empresário?</span>
        </h2>
        
        <div className="text-lg md:text-xl text-gray-300 mb-10 space-y-4 max-w-3xl">
            <p>
                O próximo passo não é uma contratação; é um diagnóstico. Convido você para uma reunião de 30 minutos, onde aplicaremos nossa <span className="text-white font-bold">Anamnese Comercial</span> em sua empresa. Sem letras miúdas ou pressão de vendas.
            </p>
            <p>
                O objetivo é que você saia dessa conversa com uma clareza inédita sobre seus gargalos e oportunidades. Se decidirmos caminhar juntos, será uma decisão baseada em fatos, não em promessas.
            </p>
        </div>

        <div className="flex">
            <Button className="w-full md:w-auto text-lg py-6">AGENDAR MEU DIAGNÓSTICO ESTRATÉGICO</Button>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default FinalCta;