import { Dumbbell, Activity, Users, Heart, Wind, UserCheck, Award } from "lucide-react";
import { STRUCTURE_HIGHLIGHTS } from "../data";

export default function Sobre() {
  // Map structure items dynamic icon name to actual lucide react icon
  const getStructureIcon = (iconName: string) => {
    switch (iconName) {
      case "Dumbbell":
        return <Dumbbell className="w-5 h-5 text-brand-red" />;
      case "Activity":
        return <Activity className="w-5 h-5 text-brand-red" />;
      case "Users":
        return <Users className="w-5 h-5 text-brand-red" />;
      case "HeartPulse":
        return <Heart className="w-5 h-5 text-brand-red animate-pulse" />;
      case "Wind":
        return <Wind className="w-5 h-5 text-brand-red" />;
      case "UserCheck":
        return <UserCheck className="w-5 h-5 text-brand-red" />;
      default:
        return <Award className="w-5 h-5 text-brand-red" />;
    }
  };

  return (
    <section id="sobre" className="py-20 bg-[#0a0a0a] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        
        {/* Pitch introductory grid - Split 2-cols */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          
          <div className="space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-brand-red/10 border border-brand-red/20 text-[10px] text-brand-red font-bold uppercase tracking-widest">
              <Award className="w-4 h-4" />
              <span>Diferencial de Verdade</span>
            </div>
            
            <h2 className="font-display font-black text-4xl sm:text-5xl text-white uppercase tracking-tighter italic">
              A ESTRUTURA MAIS COMPLETA DE <span className="text-brand-red">GUAREÍ</span>
            </h2>
            
            <p className="text-zinc-400 text-sm leading-relaxed font-normal">
              Na <strong className="text-white">Iron Pulse Fitness</strong>, o treino é levado a sério em um ambiente planejado para o seu bem-estar. Não somos apenas um espaço de aparelhos — preparamos uma experiência acolhedora que acompanha você desde o primeiro agachamento até os treinos de alta intensidade.
            </p>

            <div className="p-5 bg-zinc-900/50 rounded-xl border border-white/5 space-y-2 text-left">
              <span className="font-display font-bold text-xs text-white uppercase tracking-widest block text-brand-red">
                ★ SUPORTE REAL DOS INSTRUTORES
              </span>
              <p className="text-xs text-zinc-405 leading-relaxed">
                Esqueça academias baratas onde você é abandonado. Nosso time de profissionais registrados está sempre na sala de musculação pronto para te ensinar, ajustar suas cargas e garantir que sua postura esteja 100% segura para evitar incômodos.
              </p>
            </div>
          </div>

          {/* Large illustration mockup with high rating badge */}
          <div className="relative">
            <div className="aspect-video w-full rounded-xl overflow-hidden border border-white/5 shadow-2xl relative">
              <img
                src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=800&auto=format&fit=crop&q=80"
                alt="Musculação em Guareí - Equipamentos Iron Pulse"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent"></div>
            </div>

            {/* Float badge widget */}
            <div className="absolute -bottom-6 -left-6 bg-zinc-900 border border-white/5 rounded-xl p-4 flex items-center gap-3 shadow-2xl">
              <div className="w-12 h-12 rounded-full bg-brand-red/10 border border-brand-red/20 flex items-center justify-center text-brand-red font-display font-bold">
                5★
              </div>
              <div>
                <span className="block text-xs font-bold text-white tracking-tight uppercase">Avaliação Máxima</span>
                <span className="block text-[10px] text-zinc-500 font-mono">Guareí — SP</span>
              </div>
            </div>
          </div>

        </div>

        {/* Dynamic Highlights Bento Grid */}
        <div className="text-center mb-12">
          <h3 className="font-display font-black text-2xl md:text-3xl text-white uppercase tracking-tighter italic">
            DESTAQUES DE NOSSA INFRAESTRUTURA
          </h3>
          <p className="text-xs text-zinc-500 uppercase tracking-widest font-mono mt-1">
            Qualidade, higiene e conforto ao seu alcance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {STRUCTURE_HIGHLIGHTS.map((item) => (
            <div
              key={item.id}
              className="bg-zinc-900/40 border border-white/5 hover:border-brand-red/35 rounded-xl overflow-hidden transition-all duration-300 flex flex-col justify-between"
            >
              <div className="h-48 overflow-hidden relative">
                <img
                  src={item.imagePlaceholderUrl}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 p-2 bg-[#0a0a0a] border border-white/5 rounded-sm shadow-lg">
                  {getStructureIcon(item.iconName)}
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div className="space-y-2 text-left">
                  <h4 className="font-display font-bold text-base text-white uppercase tracking-wider">
                    {item.title}
                  </h4>
                  <p className="text-xs text-zinc-400 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
                
                <div className="border-t border-white/5 mt-4 pt-3 flex items-center justify-between text-[10px] uppercase font-mono tracking-widest text-zinc-500">
                  <span>Equipamento Premium</span>
                  <span className="text-brand-red font-bold">Disponível</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
