import React from 'react';
import { SectionWrapper } from './sections/SectionWrapper';
import { Button } from './ui/Button';
import { Play, BarChart3 } from 'lucide-react';

const Comercial: React.FC = () => {
  return (
    <>
        {/* DOBRA 6A: A DOR */}
        <SectionWrapper id="comercial-dor" className="bg-warm-gray text-white border-t border-white/5 relative overflow-hidden">
             {/* Background Image Minimalist - Dark Office */}
             <div 
                className="absolute inset-0 z-0 opacity-10 pointer-events-none mix-blend-overlay"
                style={{ 
                    backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2600&auto=format&fit=crop')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-r from-matte-black via-matte-black/95 to-transparent z-0"></div>

            <div className="max-w-5xl mx-auto flex flex-col justify-center h-full relative z-10">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="flex items-center gap-4 mb-8">
                            <div className="h-px w-8 bg-gray-500"></div>
                            <span className="font-mono text-xs text-gray-500 uppercase tracking-widest">Cultura Comercial</span>
                        </div>

                        <h2 className="font-display font-medium text-3xl md:text-5xl mb-8 leading-tight">
                            Transformando seu time em embaixadores da qualidade.
                        </h2>
                        
                        <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed">
                            Eu sei que dói ver um lead caro ser atendido de qualquer jeito. Mas, na maioria das vezes, sua equipe não precisa de cobrança; <span className="text-white border-b border-neon-green/50 pb-1">ela precisa de método.</span>
                        </p>
                    </div>
                    
                    <div className="bg-white/5 p-8 rounded-sm border border-white/5 backdrop-blur-md relative overflow-hidden">
                        <div className="absolute -right-10 -top-10 w-32 h-32 bg-neon-green/10 rounded-full blur-3xl"></div>
                        <BarChart3 className="w-8 h-8 text-gray-600 mb-6 relative z-10" strokeWidth={1} />
                        <p className="font-serif italic text-gray-400 text-lg leading-relaxed relative z-10">
                            "O talento ganha jogos, mas o trabalho em equipe e a inteligência ganham campeonatos."
                        </p>
                    </div>
                </div>
            </div>
        </SectionWrapper>

        {/* DOBRA 6B: O MÉTODO (VISUAL) */}
        <SectionWrapper id="comercial-metodo" className="bg-matte-black relative overflow-hidden">
             {/* Background Image - Tech/Data Texture */}
             <div 
                className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none"
                style={{ 
                    backgroundImage: "url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            ></div>

             <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto relative z-10">
                <div>
                     <span className="font-mono text-xs text-neon-green tracking-widest uppercase block mb-4">Solução</span>
                     <h3 className="font-display font-semibold text-3xl md:text-4xl mb-6 text-white">
                        O Braço Direito Comercial
                     </h3>
                     <p className="text-lg text-gray-400 font-light leading-relaxed mb-10">
                        Alinhamos o discurso, criamos scripts e instalamos uma cultura de fechamento. Você sentirá orgulho ao ouvir seu vendedor, sabendo que ele entrega a mesma excelência que você.
                     </p>
                     
                     <Button>PROFISSIONALIZAR MEU COMERCIAL</Button>
                </div>

                <div className="relative">
                    <div className="bg-zinc-900/80 border border-white/10 rounded-xl p-8 shadow-2xl backdrop-blur-xl">
                        <div className="flex justify-between items-center mb-8 border-b border-white/5 pb-4">
                            <span className="font-mono text-[10px] text-gray-500 tracking-widest uppercase">Treinamento de Objeções</span>
                            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                        </div>
                        
                        {/* Clean Chat UI */}
                        <div className="space-y-6 font-sans text-sm mb-10">
                            <div className="flex gap-4">
                                <div className="bg-white/5 py-3 px-4 rounded-tr-lg rounded-b-lg text-gray-400 max-w-[80%]">
                                    "Gostei, mas achei o valor alto..."
                                </div>
                            </div>
                            <div className="flex gap-4 justify-end">
                                <div className="bg-neon-green/10 border border-neon-green/10 py-3 px-4 rounded-tl-lg rounded-b-lg text-white max-w-[90%]">
                                    "Entendo. Mas se esse investimento trouxer o retorno de 3x que projetamos, o preço ainda seria o problema?"
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <button className="w-10 h-10 border border-neon-green text-neon-green rounded-full flex items-center justify-center hover:bg-neon-green hover:text-black transition-all shadow-[0_0_15px_rgba(0,255,148,0.2)]">
                                <Play size={14} fill="currentColor" />
                            </button>
                            <div className="h-px bg-gray-800 flex-1 relative">
                                <div className="absolute top-1/2 -translate-y-1/2 left-0 h-1 w-2/3 bg-gray-600 rounded-full"></div>
                            </div>
                            <span className="font-mono text-xs text-gray-600">00:42</span>
                        </div>
                    </div>
                </div>
             </div>
        </SectionWrapper>
    </>
  );
};

export default Comercial;