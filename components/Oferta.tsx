import React, { useState, useRef, useEffect } from 'react';
import { SectionWrapper } from './sections/SectionWrapper';
import { Button } from './ui/Button';
import { ArrowDown, MoveHorizontal } from 'lucide-react';

const Oferta: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const { left, width } = containerRef.current.getBoundingClientRect();
    const position = ((clientX - left) / width) * 100;
    setSliderPosition(Math.min(100, Math.max(0, position)));
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (isDragging) handleMove(e.clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleInteractionStart = (clientX: number) => {
    setIsDragging(true);
    handleMove(clientX);
  };

  // Stop dragging when mouse leaves or goes up globally
  useEffect(() => {
    const stopDragging = () => setIsDragging(false);
    window.addEventListener('mouseup', stopDragging);
    return () => window.removeEventListener('mouseup', stopDragging);
  }, []);

  return (
    <>
        {/* DOBRA 5A: O CONCEITO */}
        <SectionWrapper id="oferta-conceito" className="bg-zinc-950 flex items-center justify-center border-t border-white/5">
            <div className="max-w-4xl mx-auto text-center px-6">
                <h2 className="font-display font-medium text-3xl md:text-5xl mb-16 leading-tight text-white">
                    Seu produto é excelente, mas será que a sua <span className="text-neon-green italic font-serif">oferta</span> faz justiça a ele?
                </h2>
                
                <div className="relative border-l border-white/10 pl-8 text-left max-w-2xl mx-auto">
                    <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed font-serif italic">
                        "Existe uma diferença cruel entre o que você entrega e o que o cliente percebe. Se você sente que precisa explicar demais para vender, sua oferta pode estar sendo vista como mais do mesmo."
                    </p>
                </div>

                <div className="mt-20 opacity-40 animate-bounce">
                    <ArrowDown className="mx-auto" strokeWidth={1} />
                </div>
            </div>
        </SectionWrapper>

        {/* DOBRA 5B: A TRANSFORMAÇÃO (Visual) */}
        <SectionWrapper id="oferta-visual" className="bg-black">
            <div className="flex flex-col h-full justify-center max-w-6xl mx-auto w-full relative z-10 py-12 md:py-0">
                
                {/* Header Verticalizado */}
                <div className="text-center mb-10 md:mb-16">
                    <span className="font-mono text-xs text-gray-500 tracking-widest uppercase block mb-4">Engenharia de Valor</span>
                    <h3 className="font-display font-semibold text-3xl md:text-4xl text-white mb-6">
                        Redesenho de Oferta
                    </h3>
                    <p className="text-gray-400 font-light leading-relaxed max-w-2xl mx-auto mb-8">
                        Tornamos sua solução tão clara e valiosa que a comparação com a concorrência deixa de existir.
                    </p>
                    <div className="flex justify-center">
                        <Button variant="outline" className="text-xs">QUERO UMA OFERTA IRRESISTÍVEL</Button>
                    </div>
                </div>

                {/* Slider Component - Fixed & Touch Friendly */}
                <div className="relative w-full h-[40vh] md:h-[50vh] border border-white/10 rounded-sm shadow-2xl overflow-hidden select-none">
                    <div 
                        ref={containerRef}
                        className="relative h-full w-full cursor-col-resize group"
                        onMouseDown={(e) => handleInteractionStart(e.clientX)}
                        onMouseMove={onMouseMove}
                        onTouchStart={(e) => handleInteractionStart(e.touches[0].clientX)}
                        onTouchMove={onTouchMove}
                        style={{ touchAction: 'none' }} // Crucial para mobile não scrollar
                    >
                        {/* Camada AFTER (Fundo) - Engaje/High-End */}
                        <div className="absolute inset-0 bg-zinc-900 flex items-center justify-center">
                             {/* Imagem Arquitetura Limpa */}
                            <div 
                                className="absolute inset-0 bg-cover bg-center opacity-60 mix-blend-normal"
                                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2600&auto=format&fit=crop')" }}
                            ></div>
                            <div className="absolute inset-0 bg-black/60"></div>
                            
                            <div className="relative z-10 text-center p-8 backdrop-blur-md bg-black/40 rounded-xl border border-white/20 shadow-2xl animate-in fade-in zoom-in duration-700">
                                <span className="text-neon-green font-mono text-[10px] uppercase tracking-[0.3em] mb-4 block">Futuro</span>
                                <h3 className="text-4xl md:text-6xl font-serif italic text-white mb-2">Objeto de Desejo</h3>
                                <p className="text-gray-300 text-xs font-mono mt-4 tracking-widest border-t border-white/20 pt-4 inline-block">VALOR PERCEBIDO ALTO</p>
                            </div>
                        </div>

                        {/* Camada BEFORE (Frente - Recortada) - Caos/Comum */}
                        <div 
                            className="absolute inset-0 bg-gray-200 flex items-center justify-center overflow-hidden border-r border-white/50"
                            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                        >
                            {/* Imagem Caos Urbano */}
                            <div 
                                className="absolute inset-0 bg-cover bg-center grayscale opacity-100"
                                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1533073526757-2c8ca1df9f1c?q=80&w=2670&auto=format&fit=crop')" }}
                            ></div>
                            <div className="absolute inset-0 bg-white/10 mix-blend-overlay"></div>
                            
                            <div className="relative z-10 text-center p-8 w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl mx-auto max-w-md">
                                <span className="text-white font-mono text-[10px] uppercase tracking-[0.3em] mb-4 block bg-black/50 px-2 py-1 inline-block rounded">Atual</span>
                                <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-2 drop-shadow-md">Commodity</h3>
                                <p className="text-white text-xs font-mono mt-4 tracking-widest font-bold border-t border-white/50 pt-4 inline-block drop-shadow-sm">COMPARAÇÃO POR PREÇO</p>
                            </div>
                        </div>

                        {/* Slider Handle */}
                        <div 
                            className="absolute top-0 bottom-0 w-1 bg-neon-green/50 z-20 cursor-col-resize hover:bg-neon-green transition-colors"
                            style={{ left: `${sliderPosition}%` }}
                        >
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-black border-2 border-neon-green rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(0,255,148,0.5)]">
                               <MoveHorizontal className="text-neon-green w-6 h-6" />
                            </div>
                        </div>
                    </div>
                </div>
                
                <p className="text-center text-xs text-gray-600 font-mono mt-6 animate-pulse">
                    ARRASTE PARA COMPARAR
                </p>
            </div>
        </SectionWrapper>
    </>
  );
};

export default Oferta;