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
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-black"
    >
      {/* Background Cover Image with extreme fitness mood: dark overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=1920&auto=format&fit=crop&q=80"
          alt="Academia Musculação Guareí - Iron Pulse Fitness"
          className="w-full h-full object-cover object-center opacity-30 scale-105 motion-safe:animate-[pulse_10s_ease-in-out_infinite]"
          referrerPolicy="no-referrer"
        />
        {/* Radial vignette gradient overlay */}
        <div className="absolute inset-0 bg-radial from-transparent via-black/85 to-black" />
        {/* Linear dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-transparent" />
      </div>

      {/* Decorative Neon red glowing lights */}
      <div className="absolute top-10 left-10 w-96 h-96 rounded-full bg-brand-red/10 blur-[120px] z-0 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-brand-red/10 blur-[130px] z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8 w-full text-center lg:text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Copywriting Block */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6 md:space-y-8 bg-zinc-950/90 border border-white/10 rounded-xl p-6 sm:p-10 relative shadow-2xl overflow-hidden">
            {/* Elegant Corner Laser Accents for premium design */}
            <div className="absolute top-0 left-0 w-24 h-[2px] bg-gradient-to-r from-brand-red to-transparent"></div>
            <div className="absolute top-0 left-0 w-[2px] h-24 bg-gradient-to-b from-brand-red to-transparent"></div>
            <div className="absolute bottom-0 right-0 w-24 h-[2px] bg-gradient-to-l from-brand-red to-transparent"></div>
            <div className="absolute bottom-0 right-0 w-[2px] h-24 bg-gradient-to-t from-brand-red to-transparent"></div>

            <div className="absolute top-0 right-0 w-72 h-72 bg-brand-red/10 blur-[90px] rounded-full pointer-events-none"></div>
            
            <div className="space-y-6">
              {/* Promo Tag */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-red/15 border border-brand-red/35 text-[11px] text-brand-red font-black uppercase tracking-widest leading-none mx-auto lg:mx-0 shadow-md">
                <Flame className="w-4 h-4 text-brand-red animate-pulse" />
                <span>UNIDADE OFICIAL — GUAREÍ / SP</span>
              </div>

              {/* Headline with strategic SEO words and premium typography */}
              <h1 className="font-display font-black text-5xl sm:text-6xl md:text-7xl italic tracking-tighter leading-none text-left">
                TREINE <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400">FORTE.</span><br/>
                EVOLUA <span className="text-brand-red drop-shadow-[0_0_15px_rgba(202,18,22,0.4)]">SEMPRE.</span>
              </h1>
              
              {/* Subheading focusing on target audience and "academia perto de mim" */}
              <p className="text-zinc-350 text-sm md:text-base text-left leading-relaxed font-light">
                Conheça a <strong className="text-white font-bold">Iron Pulse Fitness</strong>, a mais moderna <strong className="text-white font-semibold">academia em Guareí</strong>. Aqui você tem estrutura completa de musculação, aparelhos ergonômicos novos e suporte de instrutores especializado sempre presente. Pronto para hipertrofia, emagrecimento rápido ou mais saúde.
              </p>

              {/* Bullet points structure for SEO visual cues */}
              <div className="grid grid-cols-2 gap-4 text-left pt-5 border-t border-white/10">
                <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-white">
                  <div className="w-1.5 h-1.5 bg-brand-red rotate-45 shadow-sm shadow-brand-red/50"></div>
                  <span>Musculação Nova</span>
                </div>
                <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-white">
                  <div className="w-1.5 h-1.5 bg-brand-red rotate-45 shadow-sm shadow-brand-red/50"></div>
                  <span>Espaço Funcional</span>
                </div>
                <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-white">
                  <div className="w-1.5 h-1.5 bg-brand-red rotate-45 shadow-sm shadow-brand-red/50"></div>
                  <span>100% Climatizado</span>
                </div>
                <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-white">
                  <div className="w-1.5 h-1.5 bg-brand-red rotate-45 shadow-sm shadow-brand-red/50"></div>
                  <span>Instrutor Incluso</span>
                </div>
              </div>
            </div>

            {/* CTAs and social proof info */}
            <div className="pt-6 border-t border-white/10 space-y-5">
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start">
                <button
                  onClick={onOpenEnroll}
                  className="w-full sm:w-auto px-8 py-4 bg-brand-red hover:bg-brand-red-hover text-white font-black uppercase text-xs tracking-widest rounded-xs transition-all duration-300 hover:scale-[1.03] shadow-lg shadow-brand-red/20 active:scale-95 cursor-pointer flex items-center justify-center gap-2"
                >
                  Matricule-se Agora
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={handleScrollToPlans}
                  className="w-full sm:w-auto px-8 py-4 bg-zinc-900 hover:bg-zinc-800 text-zinc-350 border border-white/10 hover:text-white font-black uppercase text-xs tracking-widest rounded-xs transition-all cursor-pointer"
                >
                  Conhecer Planos
                </button>
              </div>

              <div className="flex items-center gap-3 pt-1">
                <div className="flex -space-x-2.5">
                  <div className="w-8 h-8 rounded-full border border-zinc-800 bg-zinc-700 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=100&auto=format&fit=crop&q=80" alt="aluno" className="w-full h-full object-cover" />
                  </div>
                  <div className="w-8 h-8 rounded-full border border-zinc-800 bg-zinc-650 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1507398941214-572c25f4b1dc?w=100&auto=format&fit=crop&q=80" alt="aluno" className="w-full h-full object-cover" />
                  </div>
                  <div className="w-8 h-8 rounded-full border border-zinc-800 bg-zinc-600 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=100&auto=format&fit=crop&q=80" alt="aluno" className="w-full h-full object-cover" />
                  </div>
                </div>
                <p className="text-[11px] text-zinc-400 font-medium font-sans">
                  Mais de <span className="text-white font-bold">350 alunos ativos</span> treinando diariamente no Centro!
                </p>
              </div>
            </div>

          </div>

          {/* Quick interactive stats/form frame for visual density */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            <div className="bg-zinc-950/90 border border-white/10 rounded-xl p-6 sm:p-8 space-y-6 flex-1 flex flex-col justify-between relative overflow-hidden shadow-2xl">
              {/* Corner accent for the right-hand panel */}
              <div className="absolute top-0 right-0 w-16 h-[2px] bg-gradient-to-l from-brand-red to-transparent"></div>
              <div className="absolute top-0 right-0 w-[2px] h-16 bg-gradient-to-b from-brand-red to-transparent"></div>

              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[9px] uppercase tracking-widest text-brand-red font-black font-mono block">Status Operacional</span>
                    <h3 className="text-lg font-display font-black text-white uppercase tracking-tight mt-1 italic">
                      ABERTA AGORA
                    </h3>
                  </div>
                  <span className="flex h-3 w-3 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </span>
                </div>
                
                <p className="text-xs text-zinc-400 leading-relaxed font-light">
                  Ambiente sob temperatura controlada ideal para musculação, playlist motivacional selecionada e vestiários limpos.
                </p>
              </div>

              {/* Dynamic stats row styled per Sophisticated dark */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-white/10 pt-5 text-left">
                <div>
                  <span className="block text-[9px] uppercase tracking-widest text-zinc-500 font-bold font-mono">Endereço Principal</span>
                  <span className="text-xs font-bold text-white block mt-1">Rua das Palmeiras, 245</span>
                  <span className="text-[10px] text-zinc-400 leading-none">Centro, Guareí — SP</span>
                </div>
                <div>
                  <span className="block text-[9px] uppercase tracking-widest text-zinc-500 font-bold font-mono">Funcionamento</span>
                  <span className="text-xs font-bold text-white block mt-1">Seg–Sex: 06h às 22h</span>
                  <span className="text-[10px] text-zinc-400 leading-none">Sáb: 08h às 14h</span>
                </div>
              </div>

              {/* Quick WhatsApp conversion CTA */}
              <div className="pt-4 border-t border-white/10">
                <a
                  href={ACADEMY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 bg-green-600 hover:bg-green-700 text-white text-xs font-black uppercase tracking-wider rounded-xs transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-green-950/25"
                >
                  <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                  Bora Treinar! Falar no Whats
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
