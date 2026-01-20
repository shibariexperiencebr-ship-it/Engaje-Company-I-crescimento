import React from 'react';
import { SectionWrapper } from './sections/SectionWrapper';
import { Check, X } from 'lucide-react';

const Boutique: React.FC = () => {
  return (
    <>
        {/* DOBRA 11A: A FILOSOFIA */}
        <SectionWrapper id="boutique-filosofia" className="bg-zinc-950 flex items-center justify-center border-t border-white/5">
            <div className="max-w-4xl mx-auto text-center px-6">
                <span className="font-mono text-xs text-gray-600 tracking-[0.4em] uppercase block mb-8">
                    Posicionamento
                </span>
                
                <h2 className="font-display font-semibold text-3xl md:text-5xl mb-12 leading-tight text-white">
                    Não somos uma agência de "volume". <br />
                    Somos uma <span className="text-neon-green">esteira de resultados.</span>
                </h2>

                <p className="text-xl text-gray-400 font-light leading-relaxed max-w-2xl mx-auto">
                    Não buscamos centenas de clientes, mas sim parceiros que levam o negócio a sério. Nossa entrega é artesanal, profunda e focada em lucro líquido.
                </p>
            </div>
        </SectionWrapper>

        {/* DOBRA 11B: O COMPARATIVO (SPEC SHEET) */}
        <SectionWrapper id="boutique-comparativo" className="bg-black">
            <div className="max-w-5xl mx-auto w-full">
                <div className="grid md:grid-cols-2 gap-20 items-center">
                    <div>
                         <h3 className="font-display font-medium text-2xl text-white mb-6">
                            Por que somos seletivos?
                         </h3>
                         <p className="text-gray-400 font-light text-lg leading-relaxed mb-8">
                            Só avançamos se tivermos a certeza de que podemos gerar um impacto real no seu caixa. Se você busca alguém que se sinta tão dono dos resultados quanto você, encontrou o lugar certo.
                         </p>
                         <div className="h-px w-24 bg-neon-green"></div>
                    </div>

                    <div className="border border-white/10 rounded-sm overflow-hidden">
                        <div className="grid grid-cols-2 text-[10px] uppercase font-mono tracking-widest border-b border-white/10 text-gray-500">
                            <div className="p-4 border-r border-white/10 text-center">Agência Comum</div>
                            <div className="p-4 text-center text-neon-green bg-neon-green/5">Engaje</div>
                        </div>

                        <div className="divide-y divide-white/5">
                            <Row label="Foco" bad="Likes / Alcance" good="Lucro Líquido" />
                            <Row label="Time" bad="Estagiários / Jr." good="Sócios Estrategistas" />
                            <Row label="Escopo" bad="Posts soltos" good="Funil de Vendas" />
                            <Row label="Entrega" bad="Passiva" good="Hands-on (Playbook)" />
                        </div>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    </>
  );
};

const Row: React.FC<{ label: string, bad: string, good: string }> = ({ label, bad, good }) => (
    <div className="grid grid-cols-2 group hover:bg-white/5 transition-colors text-sm">
        <div className="p-5 border-r border-white/5 text-gray-500 flex flex-col items-center text-center gap-1">
            <div className="flex items-center gap-2 line-through decoration-white/10">
                {bad}
            </div>
        </div>
        <div className="p-5 text-white flex flex-col items-center text-center gap-1 bg-neon-green/5 group-hover:bg-neon-green/10 transition-colors font-medium">
            <div className="flex items-center gap-2">
                {good}
            </div>
        </div>
    </div>
);

export default Boutique;