import React, { useState } from 'react';
import { SectionWrapper } from './sections/SectionWrapper';
import { Button } from './ui/Button';
import { Gem, Target, CircleDollarSign } from 'lucide-react';

type Phase = 'oferta' | 'demanda' | 'conversao';

const Triangulo: React.FC = () => {
  const [activePhase, setActivePhase] = useState<Phase>('oferta');

  const content = {
    oferta: {
      title: "Oferta & Produto",
      desc: "Não vendemos o que você faz, mas a transformação que você gera. Transformamos seu serviço em um objeto de desejo que anula a comparação de preços.",
      item: "Engenharia de Valor"
    },
    demanda: {
      title: "Público de Valor",
      desc: "Chega de leads curiosos. Criamos sistemas de atração que filtram pelo bolso e pela urgência, trazendo para a mesa apenas quem está pronto para comprar.",
      item: "Tráfego Qualificado"
    },
    conversao: {
      title: "Processos Comerciais",
      desc: "Talento ganha jogo, processo ganha campeonato. Implementamos scripts, CRMs e rituais que transformam o atendimento em uma máquina de fechamento.",
      item: "Playbook de Vendas"
    }
  };

  return (
    <SectionWrapper id="triangulo" className="bg-zinc-950 border-t border-white/5 overflow-hidden">
        <div className="flex flex-col max-w-6xl mx-auto items-center relative z-10">
            <h2 className="font-display font-semibold text-3xl md:text-5xl mb-8 text-center text-white">
                A Engenharia do <span className="text-neon-green">Lucro Sustentável.</span>
            </h2>
            
            <p className="text-gray-400 text-center max-w-2xl mb-12 font-light">
                Clique nos pilares para entender como conectamos as pontas soltas da sua operação.
            </p>

            <div className="grid md:grid-cols-2 gap-12 items-center w-full">
                
                {/* Lado Esquerdo: O Triângulo Interativo */}
                <div className="relative h-[400px] w-full flex items-center justify-center select-none">
                    {/* SVG Connections */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 400 400">
                        <defs>
                            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#0A0A0A" />
                                <stop offset="50%" stopColor="#00FF94" />
                                <stop offset="100%" stopColor="#0A0A0A" />
                            </linearGradient>
                        </defs>
                        {/* Triangle Paths */}
                        <path d="M200 50 L50 350" stroke="url(#lineGrad)" strokeWidth="2" className="opacity-30" />
                        <path d="M200 50 L350 350" stroke="url(#lineGrad)" strokeWidth="2" className="opacity-30" />
                        <path d="M50 350 L350 350" stroke="url(#lineGrad)" strokeWidth="2" className="opacity-30" />
                        
                        {/* Active Indicator Pulse */}
                        <circle cx="200" cy="230" r="40" fill="#00FF94" fillOpacity="0.05" className="animate-pulse" />
                    </svg>

                    {/* Node 1: Top (Oferta) */}
                    <button 
                        onClick={() => setActivePhase('oferta')}
                        className={`absolute top-[10%] left-1/2 -translate-x-1/2 transition-all duration-300 flex flex-col items-center gap-2 group z-10 ${activePhase === 'oferta' ? 'scale-110' : 'opacity-60 hover:opacity-100'}`}
                    >
                        <div className={`w-16 h-16 rounded-full border border-neon-green flex items-center justify-center bg-black transition-all shadow-[0_0_20px_rgba(0,255,148,0.2)] ${activePhase === 'oferta' ? 'bg-neon-green text-black' : 'text-neon-green'}`}>
                            <Gem size={28} strokeWidth={1.5} />
                        </div>
                        <span className="font-mono text-xs uppercase tracking-widest text-white bg-black/50 px-2 rounded">Oferta</span>
                    </button>

                    {/* Node 2: Bottom Left (Demanda) */}
                    <button 
                        onClick={() => setActivePhase('demanda')}
                        className={`absolute bottom-[10%] left-[10%] transition-all duration-300 flex flex-col items-center gap-2 group z-10 ${activePhase === 'demanda' ? 'scale-110' : 'opacity-60 hover:opacity-100'}`}
                    >
                        <div className={`w-16 h-16 rounded-full border border-neon-green flex items-center justify-center bg-black transition-all shadow-[0_0_20px_rgba(0,255,148,0.2)] ${activePhase === 'demanda' ? 'bg-neon-green text-black' : 'text-neon-green'}`}>
                            <Target size={28} strokeWidth={1.5} />
                        </div>
                        <span className="font-mono text-xs uppercase tracking-widest text-white bg-black/50 px-2 rounded">Demanda</span>
                    </button>

                    {/* Node 3: Bottom Right (Conversão) */}
                    <button 
                        onClick={() => setActivePhase('conversao')}
                        className={`absolute bottom-[10%] right-[10%] transition-all duration-300 flex flex-col items-center gap-2 group z-10 ${activePhase === 'conversao' ? 'scale-110' : 'opacity-60 hover:opacity-100'}`}
                    >
                        <div className={`w-16 h-16 rounded-full border border-neon-green flex items-center justify-center bg-black transition-all shadow-[0_0_20px_rgba(0,255,148,0.2)] ${activePhase === 'conversao' ? 'bg-neon-green text-black' : 'text-neon-green'}`}>
                            <CircleDollarSign size={28} strokeWidth={1.5} />
                        </div>
                        <span className="font-mono text-xs uppercase tracking-widest text-white bg-black/50 px-2 rounded">Conversão</span>
                    </button>

                    {/* Center Connector */}
                    <div className="absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-20 bg-gradient-to-t from-neon-green/50 to-transparent"></div>
                </div>

                {/* Lado Direito: O Painel de Informação */}
                <div className="relative bg-zinc-900/50 border border-white/10 p-8 rounded-xl backdrop-blur-md min-h-[300px] flex flex-col justify-center transition-all duration-500">
                    <div className="absolute -top-4 -right-4 w-20 h-20 bg-neon-green/10 rounded-full blur-2xl"></div>
                    
                    <span className="font-mono text-neon-green text-xs tracking-[0.3em] uppercase mb-4 block animate-in fade-in slide-in-from-left-4 duration-500" key={activePhase + '-item'}>
                        {content[activePhase].item}
                    </span>
                    
                    <h3 className="font-display font-medium text-3xl text-white mb-6 animate-in fade-in slide-in-from-bottom-2 duration-500" key={activePhase + '-title'}>
                        {content[activePhase].title}
                    </h3>
                    
                    <p className="text-lg text-gray-400 font-light leading-relaxed mb-8 animate-in fade-in duration-700" key={activePhase + '-desc'}>
                        {content[activePhase].desc}
                    </p>

                    <Button className="w-full md:w-auto self-start">
                        QUERO ESSA ESTRUTURA
                    </Button>
                </div>
            </div>
        </div>
    </SectionWrapper>
  );
};

export default Triangulo;