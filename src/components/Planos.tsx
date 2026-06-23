import { Check, Star, ShieldCheck } from "lucide-react";
import { PLANS_DATA } from "../data";

interface PlanosProps {
  onOpenEnroll: (planId?: string) => void;
}

export default function Planos({ onOpenEnroll }: PlanosProps) {
  return (
    <section id="planos" className="py-20 bg-[#0a0a0a] border-t border-white/5 relative">
      
      {/* Decorative gradient blur background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-brand-red/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-brand-red/10 border border-brand-red/20 text-[10px] text-brand-red font-bold uppercase tracking-widest">
            <Star className="w-3.5 h-3.5 animate-spin-slow" />
            <span>Planos Flexíveis</span>
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-white uppercase tracking-tighter italic">
            ESCOLHA SEU PLANO DE <span className="text-brand-red">EVOLUÇÃO</span>
          </h2>
          <p className="text-zinc-400 text-sm max-w-2xl mx-auto font-normal leading-relaxed">
            Selecione o plano ideal para atingir sua meta de <strong className="text-white font-semibold">emagrecimento</strong> ou <strong className="text-white font-semibold">hipertrofia</strong> com o melhor custo-benefício de Guareí. Todos incluem suporte básico dos instrutores! Temos cancelamento facilitado sem pegadinhas.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {PLANS_DATA.map((plan) => (
            <div
              key={plan.id}
              className={`relative flex flex-col justify-between rounded-xl p-6 md:p-8 bg-zinc-900/40 border transition-all duration-300 ${
                plan.recommended
                  ? "border-brand-red/50 shadow-2xl shadow-brand-red/10 bg-gradient-to-b from-zinc-900/50 via-zinc-900/40 to-black"
                  : "border-white/5 bg-zinc-900/30 hover:border-brand-red/20"
              }`}
            >
              
              {/* Highlight Ribbon */}
              {plan.recommended && (
                <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-brand-red text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg">
                  ★ {plan.badge} ★
                </div>
              )}
              
              {!plan.recommended && plan.badge && (
                <div className="absolute top-4 right-4 bg-zinc-900 text-zinc-400 text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded border border-white/5">
                  {plan.badge}
                </div>
              )}

              {/* Top content */}
              <div>
                <h3 className="font-display font-bold text-xl text-white uppercase tracking-wider mt-2">
                  {plan.name}
                </h3>
                
                {/* Visual Price tag */}
                <div className="my-6">
                  <span className="text-[10px] text-zinc-550 uppercase tracking-widest block font-mono">Mensalidade</span>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="text-sm font-bold text-zinc-400">R$</span>
                    <span className="text-4xl md:text-5xl font-display font-black text-white tracking-tighter">
                      {plan.price.toFixed(2).split(".")[0]}
                    </span>
                    <span className="text-xl font-bold text-white">
                      ,{plan.price.toFixed(2).split(".")[1]}
                    </span>
                    <span className="text-xs text-zinc-500 font-mono ml-1">/ {plan.period}</span>
                  </div>
                </div>

                <div className="h-px bg-white/5 w-full mb-6"></div>

                {/* Features List */}
                <ul className="space-y-3.5 mb-8 text-left">
                  {plan.features.map((feat, index) => (
                    <li key={index} className="flex items-start gap-3 text-xs">
                      <div className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full bg-brand-red/10 border border-brand-red/20 flex items-center justify-center text-brand-red">
                        <Check className="w-2.5 h-2.5 font-bold" />
                      </div>
                      <span className="text-zinc-400 font-normal leading-snug">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Subscription CTA buttons */}
              <button
                onClick={() => onOpenEnroll(plan.id)}
                className={`w-full py-3.5 uppercase font-bold text-xs tracking-wider rounded-xs transition-all duration-300 cursor-pointer ${
                  plan.recommended
                    ? "bg-brand-red hover:bg-brand-red-hover text-white shadow-xl shadow-brand-red/10 hover:scale-[1.02]"
                    : "bg-zinc-900 border border-white/10 hover:bg-zinc-800 text-white"
                }`}
              >
                Iniciar no {plan.name}
              </button>

            </div>
          ))}
        </div>

        {/* Legal footprint summary */}
        <div className="mt-12 text-center text-xs text-zinc-500 max-w-lg mx-auto flex items-center justify-center gap-2">
          <ShieldCheck className="w-4 h-4 text-brand-red" />
          <span>Garantia de cancelamento simplificado. Sem pegadinhas burocráticas na Iron Pulse.</span>
        </div>

      </div>
    </section>
  );
}
