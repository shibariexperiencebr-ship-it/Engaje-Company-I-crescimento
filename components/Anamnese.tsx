import React from 'react';
import { SectionWrapper } from './sections/SectionWrapper';
import { FileSearch, AlertCircle, ArrowDown, Activity, XCircle } from 'lucide-react';

const Anamnese: React.FC = () => {
  return (
    <>
      {/* DOBRA 4A: O SINTOMA */}
      <SectionWrapper id="anamnese-problema" className="bg-matte-black relative border-t border-white/5">
        <div className="flex flex-col justify-center h-full max-w-5xl mx-auto">
             
             <div className="grid md:grid-cols-12 gap-16 items-center">
                <div className="md:col-span-6">
                    <h2 className="font-display font-bold text-3xl md:text-5xl text-white leading-tight mb-6">
                        Por que alguns problemas parecem "voltar" mesmo quando você troca de agência?
                    </h2>
                    <p className="text-lg text-gray-400 font-light leading-relaxed">
                        Existe um ciclo vicioso no mercado. Contrata-se tráfego esperando milagre, demite-se a agência por falta de leads, contrata-se o comercial e descobre-se que o lead é desqualificado.
                    </p>
                </div>

                {/* Card "O Erro Comum" Aprimorado */}
                <div className="md:col-span-6">
                    <div className="relative bg-zinc-900 border border-white/10 rounded-sm overflow-hidden group hover:border-red-500/30 transition-colors duration-500">
                        {/* Header do Card */}
                        <div className="bg-black/50 p-4 border-b border-white/5 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <AlertCircle className="text-red-500 w-4 h-4" />
                                <span className="font-mono text-xs text-red-400 tracking-widest uppercase">DIAGNÓSTICO DE FALHA</span>
                            </div>
                            <div className="flex gap-1">
                                <div className="w-1.5 h-1.5 bg-white/20 rounded-full"></div>
                                <div className="w-1.5 h-1.5 bg-white/20 rounded-full"></div>
                            </div>
                        </div>

                        {/* Corpo do Card */}
                        <div className="p-8">
                            <h3 className="text-white font-display font-medium text-xl mb-4">Tratar o sintoma, ignorar a causa.</h3>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3 p-3 bg-red-500/5 border-l-2 border-red-500/20">
                                    <XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                                    <p className="text-sm text-gray-400">
                                        Focar apenas na <span className="text-white">quantidade de leads</span> (Sintoma).
                                    </p>
                                </div>
                                <div className="flex items-start gap-3 p-3 bg-white/5 border-l-2 border-white/10">
                                    <Activity className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" />
                                    <p className="text-sm text-gray-400">
                                        Ignorar a <span className="text-white">estrutura de vendas desalinhada</span> (Causa Raiz).
                                    </p>
                                </div>
                            </div>
                            <p className="mt-6 text-xs text-gray-500 font-mono border-t border-white/5 pt-4">
                                STATUS: Otimização Incompleta
                            </p>
                        </div>
                    </div>
                </div>
             </div>

             <div className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-30 animate-pulse">
                <ArrowDown size={20} strokeWidth={1} />
            </div>
        </div>
      </SectionWrapper>

      {/* DOBRA 4B: A ANAMNESE */}
      <SectionWrapper id="anamnese-solucao" className="bg-black relative">
         <div className="grid md:grid-cols-2 gap-20 items-center max-w-6xl mx-auto">
            
            <div className="order-2 md:order-1 relative p-8 md:p-12 border border-white/5 bg-zinc-900/20">
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-neon-green"></div>
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-neon-green"></div>
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-neon-green"></div>
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-neon-green"></div>
                
                <div className="space-y-6 font-mono text-xs md:text-sm text-gray-400">
                    <div className="flex items-center justify-between pb-4 border-b border-white/5">
                        <span className="text-neon-green">DIAGNÓSTICO_INICIAL.DAT</span>
                        <Activity size={16} className="text-neon-green" />
                    </div>
                    <div className="grid grid-cols-2 gap-y-4">
                        <span>CAC Atual:</span> <span className="text-red-400 text-right">R$ 142,00</span>
                        <span>LTV Projetado:</span> <span className="text-white text-right">R$ 1.2k</span>
                        <span>Taxa Conv.:</span> <span className="text-yellow-500 text-right">2.1%</span>
                    </div>
                    <div className="pt-4 border-t border-white/5 text-center text-neon-green tracking-widest uppercase">
                        Análise em andamento...
                    </div>
                </div>
            </div>

            <div className="order-1 md:order-2">
                <div className="mb-6">
                    <span className="font-mono text-xs text-neon-green tracking-[0.2em] uppercase">
                        Método Engaje
                    </span>
                </div>

                <h3 className="font-display font-semibold text-3xl md:text-5xl text-white mb-8 leading-tight">
                    Começamos como um médico: com uma <span className="text-gray-500">Anamnese.</span>
                </h3>

                <p className="text-lg text-gray-400 font-light leading-relaxed mb-8">
                    Não fazemos promessas antes de entender seus números. É um olhar técnico e honesto sobre a saúde real da sua operação, para que a solução seja definitiva — e não apenas um "curativo" temporário.
                </p>
            </div>
         </div>
      </SectionWrapper>
    </>
  );
};

export default Anamnese;