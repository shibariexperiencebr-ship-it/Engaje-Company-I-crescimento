import React from 'react';
import { SectionWrapper } from './sections/SectionWrapper';
import { Plus } from 'lucide-react';

const Faq: React.FC = () => {
  return (
    <SectionWrapper id="faq" className="bg-zinc-950">
      <div className="max-w-4xl mx-auto w-full">
        <h3 className="font-display font-bold text-white text-3xl mb-12">PERGUNTAS FREQUENTES</h3>
        
        <div className="space-y-4">
            <details className="group bg-zinc-900/50 border-b border-white/10 transition-all duration-300">
                <summary className="flex justify-between items-center cursor-pointer p-6 list-none font-bold text-lg text-white hover:text-neon-green transition-colors">
                    <span>"Isso é só gestão de tráfego ou anúncios?"</span>
                    <Plus className="w-5 h-5 text-neon-green transition-transform group-open:rotate-45" />
                </summary>
                <div className="px-6 pb-6 text-gray-400 leading-relaxed">
                    Não. Anúncios são apenas o combustível. De nada serve acelerar se o seu motor (sua oferta) está falhando ou se os pneus (seu comercial) estão murchos. Nós cuidamos da engenharia completa: da oferta ao fechamento.
                </div>
            </details>

            <details className="group bg-zinc-900/50 border-b border-white/10 transition-all duration-300">
                <summary className="flex justify-between items-center cursor-pointer p-6 list-none font-bold text-lg text-white hover:text-neon-green transition-colors">
                    <span>"Vou precisar dedicar muito tempo ao acompanhamento?"</span>
                    <Plus className="w-5 h-5 text-neon-green transition-transform group-open:rotate-45" />
                </summary>
                <div className="px-6 pb-6 text-gray-400 leading-relaxed">
                   Pelo contrário. Nosso objetivo é devolver seu tempo. Embora sua visão seja fundamental na largada, construímos processos que rodam sem a sua supervisão constante.
                </div>
            </details>

            <details className="group bg-zinc-900/50 border-b border-white/10 transition-all duration-300">
                <summary className="flex justify-between items-center cursor-pointer p-6 list-none font-bold text-lg text-white hover:text-neon-green transition-colors">
                    <span>"Minha equipe comercial vai aceitar essas mudanças?"</span>
                    <Plus className="w-5 h-5 text-neon-green transition-transform group-open:rotate-45" />
                </summary>
                <div className="px-6 pb-6 text-gray-400 leading-relaxed">
                   Sim. Nós não chegamos para criticar, mas para dar ferramentas que facilitam o trabalho deles. Vendedor que fecha mais com menos esforço torna-se nosso maior aliado.
                </div>
            </details>

            <details className="group bg-zinc-900/50 border-b border-white/10 transition-all duration-300">
                <summary className="flex justify-between items-center cursor-pointer p-6 list-none font-bold text-lg text-white hover:text-neon-green transition-colors">
                    <span>"Por que eu deveria confiar na Engaje e não em uma agência comum?"</span>
                    <Plus className="w-5 h-5 text-neon-green transition-transform group-open:rotate-45" />
                </summary>
                <div className="px-6 pb-6 text-gray-400 leading-relaxed">
                   Porque agências comuns focam em entregáveis (posts e cliques). Nós focamos em <span className="font-bold text-white">ativos de negócio</span>. Falamos a sua língua: margem, CAC, LTV e lucro líquido.
                </div>
            </details>

            <details className="group bg-zinc-900/50 border-b border-white/10 transition-all duration-300">
                <summary className="flex justify-between items-center cursor-pointer p-6 list-none font-bold text-lg text-white hover:text-neon-green transition-colors">
                    <span>"Para quem a Engaje NÃO é indicada?"</span>
                    <Plus className="w-5 h-5 text-neon-green transition-transform group-open:rotate-45" />
                </summary>
                <div className="px-6 pb-6 text-gray-400 leading-relaxed">
                   Para quem busca atalhos mágicos ou não acredita em processos. Trabalhamos com negócios reais que exigem seriedade e construção estratégica. Se não houver disposição para profissionalizar a operação, não somos o parceiro certo.
                </div>
            </details>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Faq;