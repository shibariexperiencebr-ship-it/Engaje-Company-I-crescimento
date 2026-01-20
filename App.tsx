import React from 'react';
import { MessageCircle } from 'lucide-react';
import Hero from './components/Hero';
import Bridge from './components/Bridge';
import Anamnese from './components/Anamnese';
import Oferta from './components/Oferta';
import Comercial from './components/Comercial';
import Marketing from './components/Marketing';
import Previsibilidade from './components/Previsibilidade';
import Triangulo from './components/Triangulo';
import Ceo from './components/Ceo';
import Boutique from './components/Boutique';
import Depoimentos from './components/Depoimentos';
import FinalCta from './components/FinalCta';
import Faq from './components/Faq';
import Footer from './components/Footer';
import ExitModal from './components/ExitModal';

const App: React.FC = () => {
  return (
    <div className="bg-matte-black text-off-white font-sans grain-overlay selection:bg-neon-green selection:text-black">
      
      {/* Sticky WhatsApp */}
      <a 
        href="https://wa.me/seunumeroaqui" 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-8 right-8 z-[60] group"
        aria-label="Falar com um estrategista"
      >
        <div className="relative flex items-center justify-center w-14 h-14 bg-green-600 rounded-full shadow-[0_0_20px_rgba(0,255,148,0.4)] hover:bg-green-500 transition-all duration-300">
          <span className="absolute w-full h-full rounded-full border border-green-400 animate-pulse-ring"></span>
          <MessageCircle className="w-7 h-7 text-white" />
        </div>
      </a>

      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 px-6 py-6 mix-blend-difference text-white">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="font-display font-bold text-2xl tracking-tighter">
            ENGAJE<span className="text-neon-green">COMPANY</span>
          </div>
        </div>
      </header>

      {/* Main Snap Container - 11 Dobras (Ruptura removida) + FAQ + Footer */}
      <main className="snap-container h-screen w-full overflow-y-scroll overflow-x-hidden">
        <Hero />
        <Bridge />
        <Anamnese />
        <Oferta />
        <Comercial />
        <Marketing />
        <Previsibilidade />
        <Triangulo />
        <Ceo />
        <Boutique />
        <Depoimentos />
        <FinalCta />
        <Faq />
        <Footer />
      </main>

      <ExitModal />
    </div>
  );
};

export default App;