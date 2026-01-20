import React from 'react';
import { SectionWrapper } from './sections/SectionWrapper';
import { Quote } from 'lucide-react';

const Depoimentos: React.FC = () => {
  const testimonials = [
    {
      name: "José Fernando",
      role: "Diretor, Cafés Seleção",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2574&auto=format&fit=crop",
      quote: "Tínhamos um produto premium vendido como commodity. A Engaje reconstruiu nossa oferta e hoje vendemos valor, não preço. A margem triplicou.",
      tag: "Reposicionamento"
    },
    {
      name: "Maria Fernanda",
      role: "Produtora Executiva, SMDS",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2576&auto=format&fit=crop",
      quote: "O caos criativo nos impedia de crescer. Eles implementaram processos que profissionalizaram nosso comercial sem matar nossa essência artística.",
      tag: "Processos"
    },
    {
      name: "Roni Jose Soares",
      role: "Diretor, Grupo Decola",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2574&auto=format&fit=crop",
      quote: "Eu era o gargalo da minha própria empresa. Com a estruturação comercial, saí do operacional e tivemos o maior faturamento da história em 6 meses.",
      tag: "Escala & Gestão"
    }
  ];

  return (
    <SectionWrapper id="depoimentos" className="bg-zinc-950 border-t border-white/5 relative overflow-hidden">
      {/* Background Decorativo */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      <div className="flex flex-col items-center max-w-7xl mx-auto w-full relative z-10">
        <div className="text-center mb-16">
            <span className="font-mono text-xs text-neon-green tracking-[0.2em] uppercase block mb-4">
                Track Record
            </span>
            <h2 className="font-display font-semibold text-3xl md:text-5xl text-white">
                Quem já <span className="text-gray-500 italic font-serif">escalou</span> conosco.
            </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 w-full">
            {testimonials.map((t, i) => (
                <div key={i} className="group relative bg-zinc-900/40 border border-white/5 p-8 rounded-sm hover:border-white/10 transition-all duration-500 hover:-translate-y-2">
                    {/* Aspas Decorativas */}
                    <div className="absolute top-6 right-6 opacity-20 group-hover:opacity-100 transition-opacity duration-500">
                        <Quote className="text-neon-green w-8 h-8 fill-neon-green/20" />
                    </div>

                    {/* Imagem & Header */}
                    <div className="flex items-center gap-4 mb-6">
                        <div className="relative w-14 h-14 rounded-full overflow-hidden border border-white/10 group-hover:border-neon-green/50 transition-colors">
                            <img 
                                src={t.image} 
                                alt={t.name} 
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                            />
                        </div>
                        <div>
                            <h4 className="font-display font-medium text-white text-lg leading-none mb-1">{t.name}</h4>
                            <p className="font-mono text-xs text-gray-500 uppercase tracking-tight">{t.role}</p>
                        </div>
                    </div>

                    {/* Texto */}
                    <p className="text-gray-400 font-light leading-relaxed text-sm mb-8 relative z-10">
                        "{t.quote}"
                    </p>

                    {/* Footer Card */}
                    <div className="pt-6 border-t border-white/5 flex justify-between items-center">
                        <span className="font-mono text-[10px] text-neon-green uppercase tracking-wider bg-neon-green/5 px-2 py-1 rounded">
                            {t.tag}
                        </span>
                        <div className="flex gap-1">
                            {[1,2,3,4,5].map(star => (
                                <div key={star} className="w-1 h-1 bg-neon-green rounded-full opacity-60"></div>
                            ))}
                        </div>
                    </div>
                    
                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-sm"></div>
                </div>
            ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Depoimentos;