import { useState } from "react";
import { Info, X, Sparkles, ShieldAlert, Check } from "lucide-react";

export default function DemoBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div 
      id="commercial-demo-banner"
      className="bg-neutral-950 border-b border-brand-red/20 text-white relative z-50 transition-all duration-300 font-sans"
    >
      <div className="max-w-7xl mx-auto px-4 py-2.5 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-3">
        
        {/* Banner Left: Core info */}
        <div className="flex items-center gap-2 text-center md:text-left flex-wrap justify-center">
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-xs bg-brand-red/15 border border-brand-red/30 text-[9px] text-brand-red font-black uppercase tracking-widest animate-pulse">
            <Sparkles className="w-3 h-3" />
            Amostra Digital
          </span>
          <p className="text-[11px] text-zinc-300 font-normal">
            Você está visualizando um <strong className="text-white font-bold uppercase tracking-wider">Protótipo Demonstrativo</strong> de alta fidelidade para a <strong className="text-brand-red">Iron Pulse Fitness</strong> (Guareí - SP).
          </p>
        </div>

        {/* Banner Right: Actions or dismiss */}
        <div className="flex items-center gap-3">
          <div className="hidden lg:flex items-center gap-1.5 text-[10px] text-zinc-500 uppercase tracking-widest font-mono">
            <Check className="w-3.5 h-3.5 text-green-500" />
            PRONTO PARA PRODUÇÃO
          </div>

          <button
            onClick={() => setIsVisible(false)}
            className="p-1 rounded-xs hover:bg-zinc-900 border border-transparent hover:border-white/10 text-zinc-400 hover:text-white transition-all cursor-pointer"
            title="Ocultar aviso de amostra"
            aria-label="Ocultar"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}
