import { ArrowRight, Flame, MapPin, Sparkles, TrendingUp } from "lucide-react";
import { ACADEMY_INFO } from "../data";

interface HeroProps {
  onOpenEnroll: () => void;
}

export default function Hero({ onOpenEnroll }: HeroProps) {
  const handleScrollToPlans = () => {
    const plansEl = document.getElementById("planos");
    if (plansEl) {
      plansEl.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#0a0a0a]"
    >
      {/* Background Cover Image with extreme fitness mood: dark overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=1920&auto=format&fit=crop&q=80"
          alt="Academia Musculação Guareí - Iron Pulse Fitness"
          className="w-full h-full object-cover object-center opacity-15"
          referrerPolicy="no-referrer"
        />
        {/* Radial vignette gradient overlay */}
        <div className="absolute inset-0 bg-radial from-transparent via-[#0a0a0a]/80 to-[#0a0a0a]" />
        {/* Linear dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent" />
      </div>

      {/* Decorative Neon red ambient lights */}
      <div className="absolute top-1/4 left-10 w-72 h-72 rounded-full bg-brand-red/5 blur-[100px] z-0 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-brand-red/5 blur-[120px] z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8 w-full text-center lg:text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Main Copywriting Block */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6 md:space-y-8 bg-gradient-to-br from-brand-red/10 to-zinc-900/50 border border-white/5 rounded-xl p-6 sm:p-10 relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/5 blur-[100px] rounded-full pointer-events-none"></div>
            
            <div className="space-y-6">
              {/* Promo Tag */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-red/10 border border-brand-red/20 text-xs text-brand-red font-bold uppercase tracking-widest leading-none mx-auto lg:mx-0">
                <Flame className="w-3.5 h-3.5" />
                <span>Unidade Guareí — SP</span>
              </div>

              {/* Headline with strategic SEO words and premium typography */}
              <h1 className="font-display font-black text-5xl sm:text-6xl md:text-7xl italic tracking-tighter leading-none text-left">
                TREINE <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-450">FORTE.</span><br/>
                EVOLUA <span className="text-brand-red">SEMPRE.</span>
              </h1>
              
              {/* Subheading focusing on target audience and "academia perto de mim" */}
              <p className="text-zinc-400 text-sm md:text-base text-left leading-relaxed font-normal">
                Procurando uma <strong className="text-white font-semibold">academia perto de mim</strong> ou musculação qualificada em Guareí? Na <span className="text-brand-red font-semibold">Iron Pulse Fitness</span>, você encontra musculação completa, aparelhos modernos e suporte de professores especializado inclusos. Ideal para emagrecimento, hipertrofia ou iniciar com segurança.
              </p>

              {/* Bullet points structure for SEO visual cues */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-left pt-2 border-t border-white/5">
                <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wider text-zinc-350">
                  <div className="w-2.5 h-2.5 bg-brand-red rotate-45"></div>
                  <span>Musculação Completa</span>
                </div>
                <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wider text-zinc-350">
                  <div className="w-2.5 h-2.5 bg-brand-red rotate-45"></div>
                  <span>Área de Treino Funcional</span>
                </div>
                <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wider text-zinc-350">
                  <div className="w-2.5 h-2.5 bg-brand-red rotate-45"></div>
                  <span>Ar-Condicionado Climatizado</span>
                </div>
                <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wider text-zinc-350">
                  <div className="w-2.5 h-2.5 bg-brand-red rotate-45"></div>
                  <span>Professores em Sala</span>
                </div>
              </div>
            </div>

            {/* CTAs and social proof info */}
            <div className="pt-6 border-t border-white/5 space-y-4">
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start">
                <button
                  onClick={onOpenEnroll}
                  className="w-full sm:w-auto px-6 py-3 bg-brand-red hover:bg-brand-red-hover text-white font-bold uppercase text-xs tracking-wider rounded-xs transition-all duration-300 hover:scale-[1.03] cursor-pointer"
                >
                  Matricule-se Agora
                </button>
                <button
                  onClick={handleScrollToPlans}
                  className="w-full sm:w-auto px-6 py-3 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-white/5 hover:text-white font-bold uppercase text-xs tracking-wider rounded-xs transition-colors cursor-pointer"
                >
                  Conhecer Planos
                </button>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full border-2 border-brand-metal-dark bg-zinc-700 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&auto=format&fit=crop&q=80" alt="aluno" className="w-full h-full object-cover" />
                  </div>
                  <div className="w-8 h-8 rounded-full border-2 border-brand-metal-dark bg-zinc-650 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&auto=format&fit=crop&q=80" alt="aluno" className="w-full h-full object-cover" />
                  </div>
                  <div className="w-8 h-8 rounded-full border-2 border-brand-metal-dark bg-zinc-600 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&auto=format&fit=crop&q=80" alt="aluno" className="w-full h-full object-cover" />
                  </div>
                </div>
                <p className="text-[11px] text-zinc-500 font-medium tracking-wide">
                  +350 alunos ativos treinando no Centro de Guareí — SP
                </p>
              </div>
            </div>

          </div>

          {/* Quick interactive stats/form frame for visual density */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            <div className="bg-zinc-900/50 border border-white/5 rounded-xl p-6 sm:p-8 space-y-6 flex-1 flex flex-col justify-between">
              
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-brand-red font-bold font-mono block">Status Atual</span>
                    <h3 className="text-xl font-display font-bold text-white uppercase tracking-tight mt-0.5">
                      Academia Operante
                    </h3>
                  </div>
                  <span className="flex h-3.5 w-3.5 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-green-500"></span>
                  </span>
                </div>
                
                <p className="text-xs text-zinc-400 leading-relaxed font-light">
                  Ambiente climatizado regulado, som ambiente motivador, higienização impecável de halteres e pesos a cada hora.
                </p>
              </div>

              {/* Dynamic stats row styled per Sophisticated dark */}
              <div className="grid grid-cols-2 gap-4 border-t border-white/5 pt-5 text-left">
                <div>
                  <span className="block text-[10px] uppercase tracking-widest text-zinc-500 font-mono">Endereço Principal</span>
                  <span className="text-sm font-semibold text-white block mt-1">Rua das Forças, 1200</span>
                  <span className="text-xs text-zinc-500">Centro, Guareí — SP</span>
                </div>
                <div>
                  <span className="block text-[10px] uppercase tracking-widest text-zinc-500 font-mono">Funcionamento</span>
                  <span className="text-sm font-semibold text-white block mt-1">Seg–Sex: 06h às 22h</span>
                  <span className="text-xs text-zinc-500">Sáb: 08h às 14h</span>
                </div>
              </div>

              {/* Quick WhatsApp conversion CTA */}
              <div className="pt-4 border-t border-white/5">
                <a
                  href={ACADEMY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4.5 bg-green-600 hover:bg-green-700 text-white text-xs font-bold uppercase tracking-wider rounded-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-white animate-pulse"></span>
                  Falar no WhatsApp (Inscrição Rápida)
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
