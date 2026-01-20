import React from 'react';
import { Button } from './ui/Button';

const Footer: React.FC = () => {
  return (
    <footer className="snap-section min-h-[50vh] bg-black border-t border-white/10 px-6 py-16 flex flex-col justify-center">
        <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center">
            
            <div className="glass-card p-8 md:p-12 rounded-2xl border-neon-green/20">
                <h4 className="font-display font-bold text-2xl mb-6">Pronto para profissionalizar seu crescimento?</h4>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <input 
                        type="text" 
                        placeholder="Nome" 
                        className="w-full bg-black/50 border border-white/10 rounded p-4 text-white focus:border-neon-green outline-none transition-colors"
                        required 
                    />
                    <input 
                        type="tel" 
                        placeholder="WhatsApp" 
                        className="w-full bg-black/50 border border-white/10 rounded p-4 text-white focus:border-neon-green outline-none transition-colors"
                        required 
                    />
                    <Button className="w-full justify-center">Enviar</Button>
                </form>
            </div>

            <div className="flex flex-col justify-between h-full space-y-8">
                <div>
                     <div className="font-display font-bold text-2xl tracking-tighter mb-4">
                        ENGAJE<span className="text-neon-green">COMPANY</span>
                    </div>
                    <p className="text-gray-500 max-w-sm">
                        Arquitetura de crescimento para quem não aceita menos que a liderança do mercado.
                    </p>
                </div>
                
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between text-sm text-gray-600 gap-4">
                    <p>&copy; 2026 Engaje Company. Todos os direitos reservados.</p>
                    <nav className="flex gap-6">
                        <a href="#" className="hover:text-neon-green transition-colors">Políticas de Privacidade</a>
                        <a href="#" className="hover:text-neon-green transition-colors">Termos de Uso</a>
                    </nav>
                </div>
            </div>
        </div>
    </footer>
  );
};

export default Footer;