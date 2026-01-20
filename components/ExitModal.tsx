import React, { useEffect, useState } from 'react';
import { Button } from './ui/Button';
import { X } from 'lucide-react';

const ExitModal: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [hasShown]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="glass-card max-w-lg w-full p-8 rounded-2xl relative border-neon-green/30 shadow-[0_0_50px_rgba(0,255,148,0.1)]">
        <button 
            onClick={() => setIsVisible(false)}
            className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
        >
            <X size={24} />
        </button>

        <h3 className="font-display font-bold text-2xl mb-4 text-white">Não vá embora ainda.</h3>
        <p className="text-gray-400 mb-8 leading-relaxed">
            Seu negócio pode estar a um diagnóstico de distância da escala real. Deseja baixar nosso mapa de Anamnese?
        </p>
        
        <div className="flex flex-col gap-3">
            <Button className="w-full justify-center">QUERO O MAPA</Button>
            <button 
                onClick={() => setIsVisible(false)}
                className="text-sm text-gray-500 hover:text-white underline decoration-gray-700 underline-offset-4 mt-2"
            >
                Vou continuar navegando
            </button>
        </div>
      </div>
    </div>
  );
};

export default ExitModal;