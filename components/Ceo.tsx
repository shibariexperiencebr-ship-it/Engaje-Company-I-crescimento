import React from 'react';
import { SectionWrapper } from './sections/SectionWrapper';
import { Button } from './ui/Button';
import { Clock, Target, ArrowDown } from 'lucide-react';

const Ceo: React.FC = () => {
  return (
    <>
        {/* DOBRA 10A: O PROBLEMA */}
        <SectionWrapper id="ceo-problema" className="bg-warm-gray text-white border-t border-white/5 relative overflow-hidden">
            {/* Background Image: Sand/Time Abstract */}
            <div 
                className="absolute inset-0 z-0 opacity-20 pointer-events-none mix-blend-soft-light"
                style={{ 
                    backgroundImage: "url('https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=2668&auto=format&fit=crop')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            ></div>
            <div className="absolute inset-0 bg-black/80 z-0"></div>

            <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto h-full relative z-10">
                <span className="font-mono text-xs text-red-400 tracking-widest uppercase mb-8 border border-red-900/30 px-4 py-2 rounded-full bg-red-900/10 backdrop-blur-md">
                    Custo de Oportunidade
                </span>
                
                <h2 className="font-display font-medium text-3xl md:text-5xl mb-8 leading-tight">
                    O maior custo da sua empresa é você preso no <span className="text-gray-500 line-through decoration-red-500/50">operacional.</span>
                </h2>
                
                <p className="text-xl text-gray-400 font-light leading-relaxed max-w-2xl">
                    Cada hora que você passa apagando incêndios é uma hora a menos planejando o próximo nível da sua expansão.
                </p>

                <div className="mt-16 opacity-30 animate-bounce">
                    <ArrowDown strokeWidth={1} />
                </div>
            </div>
        </SectionWrapper>

        {/* DOBRA 10B: A SOLUÇÃO */}
        <SectionWrapper id="ceo-solucao" className="bg-matte-black relative overflow-hidden">
             {/* Background Abstract Geometry */}
             <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

             <div className="grid md:grid-cols-2 gap-20 items-center max-w-6xl mx-auto relative z-10">
                <div className="order-2 md:order-1">
                     <div className="bg-zinc-900/40 border border-white/5 p-10 rounded-sm backdrop-blur-md">
                        <div className="flex justify-between items-end mb-8">
                            <span className="font-mono text-xs text-gray-500 tracking-widest uppercase">Nova Alocação</span>
                            <span className="font-display text-4xl text-neon-green">80%</span>
                        </div>
                        
                        <div className="w-full h-1 bg-gray-800 mb-2 rounded-full overflow-hidden">
                            <div className="h-full w-[80%] bg-neon-green shadow-[0_0_20px_rgba(0,255,148,0.4)]"></div>
                        </div>
                        <span className="text-xs text-gray-400 block mb-10 text-right">Tempo Estratégico</span>

                        <div className="grid grid-cols-2 gap-4">
                             <div className="p-4 border border-white/5 text-center hover:bg-white/5 transition-colors">
                                <Clock className="w-6 h-6 text-gray-500 mx-auto mb-2" strokeWidth={1} />
                                <span className="text-white font-mono text-sm block">+40h Livres</span>
                             </div>
                             <div className="p-4 border border-white/5 text-center hover:bg-white/5 transition-colors">
                                <Target className="w-6 h-6 text-gray-500 mx-auto mb-2" strokeWidth={1} />
                                <span className="text-white font-mono text-sm block">Foco Total</span>
                             </div>
                        </div>
                     </div>
                </div>

                <div className="order-1 md:order-2">
                    <h2 className="font-display font-semibold text-3xl md:text-5xl mb-6 leading-tight text-white">
                        Retome o <span className="text-neon-green">comando.</span>
                    </h2>
                    <p className="text-lg text-gray-400 font-light leading-relaxed mb-10">
                        Queremos que você tenha tempo para olhar para o mercado, para sua família e para si mesmo, enquanto a máquina comercial gira com precisão.
                    </p>
                    <Button variant="outline">RETOMAR O COMANDO</Button>
                </div>
             </div>
        </SectionWrapper>
    </>
  );
};

export default Ceo;