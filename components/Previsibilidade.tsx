import React from 'react';
import { SectionWrapper } from './sections/SectionWrapper';
import { Button } from './ui/Button';

const Previsibilidade: React.FC = () => {
  return (
    <SectionWrapper id="previsibilidade" className="bg-black">
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <h2 className="font-display font-bold text-4xl md:text-5xl leading-tight text-white">
            O alívio de saber que o próximo mês <span className="text-neon-green">já está garantido.</span>
          </h2>
          <div className="mt-6 text-gray-400 text-lg space-y-6 mb-8">
            <p>
                A indicação é maravilhosa, mas é passiva — você não tem controle sobre quando ela acontece. A verdadeira paz de espírito de um dono de empresa vem da <span className="text-white font-bold">Previsibilidade.</span>
            </p>
            <p>
                Nós construímos uma máquina de aquisição de clientes que você pode monitorar e escalar. Quando você sabe exatamente quantas oportunidades o seu marketing gerará, o domingo à noite deixa de ser um peso e volta a ser um momento de descanso.
            </p>
          </div>
          
          <Button variant="outline">QUERO PREVISIBILIDADE</Button>
        </div>

        <div className="flex-1 w-full relative h-64 overflow-hidden mask-gradient-x border-t border-b border-white/10 bg-white/5">
           {/* Moving Dots Animation */}
           <div className="absolute top-1/2 -translate-y-1/2 left-0 flex space-x-24 animate-marquee">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="flex flex-col items-center gap-4 min-w-[100px]">
                  <div className="w-3 h-3 bg-neon-green rounded-full shadow-[0_0_15px_#00FF94]"></div>
                  <span className="font-mono text-xs text-neon-green tracking-widest">LEADS_Q{i}</span>
                </div>
              ))}
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={`dup-${i}`} className="flex flex-col items-center gap-4 min-w-[100px]">
                  <div className="w-3 h-3 bg-neon-green rounded-full shadow-[0_0_15px_#00FF94]"></div>
                  <span className="font-mono text-xs text-neon-green tracking-widest">LEADS_Q{i}</span>
                </div>
              ))}
           </div>
        </div>
      </div>
      
      <style>{`
        @keyframes marquee {
          0% { transform: translate(0, -50%); }
          100% { transform: translate(-50%, -50%); }
        }
        .animate-marquee {
          animation: marquee 15s linear infinite;
        }
      `}</style>
    </SectionWrapper>
  );
};

export default Previsibilidade;