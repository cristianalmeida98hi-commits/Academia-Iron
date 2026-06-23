import { Calendar, Clock, Dumbbell, Zap, Music, Bike } from "lucide-react";
import { SCHEDULE_DAYS } from "../data";

export default function Aulas() {
  // Map class name to corresponding icon
  const getClassIcon = (className: string) => {
    const name = className.toLowerCase();
    if (name.includes("hiit")) {
      return <Zap className="w-6 h-6 text-yellow-500" />;
    }
    if (name.includes("zumba")) {
      return <Music className="w-6 h-6 text-pink-500" />;
    }
    if (name.includes("spinning")) {
      return <Bike className="w-6 h-6 text-brand-red animate-pulse" />;
    }
    return <Dumbbell className="w-6 h-6 text-blue-500" />;
  };

  // Get difficulty suggestions based on classes
  const getClassDifficulty = (className: string) => {
    const name = className.toLowerCase();
    if (name.includes("hiit")) return "Avançado / Alto Gasto";
    if (name.includes("zumba")) return "Iniciante / Intermediário";
    if (name.includes("spinning")) return "Moderado / Elevado";
    return "Todos os Níveis";
  };

  return (
    <section id="aulas" className="py-20 bg-[#0a0a0a] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-brand-red/10 border border-brand-red/20 text-[10px] text-brand-red font-bold uppercase tracking-widest">
            <Calendar className="w-3.5 h-3.5" />
            <span>Grade de Horários</span>
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-white uppercase tracking-tighter italic">
            NOSSAS <span className="text-brand-red">AULAS</span> E HORÁRIOS
          </h2>
          <p className="text-zinc-400 text-sm max-w-2xl mx-auto font-normal leading-relaxed">
            Organize sua rotina de treinos com flexibilidade na maior academia de <strong className="text-white font-semibold">musculação em Guareí</strong>. Temos turmas preparadas para diversos níveis de condicionamento físico.
          </p>
        </div>

        {/* Visual Class cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SCHEDULE_DAYS.map((sched, index) => (
            <div
              key={index}
              className="group bg-zinc-900/30 border border-white/5 rounded-xl p-6 transition-all duration-300 hover:border-brand-red/25 flex flex-col justify-between"
            >
              <div>
                {/* Header card */}
                <div className="flex items-center justify-between mb-4 pb-4 border-b border-white/5">
                  <div className="p-2.5 bg-[#0a0a0a] border border-white/5 rounded-sm transition-all group-hover:bg-brand-red/10">
                    {getClassIcon(sched.className)}
                  </div>
                  <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest bg-zinc-900 px-2.5 py-0.5 rounded border border-white/5">
                    {getClassDifficulty(sched.className)}
                  </span>
                </div>

                <h3 className="font-display font-bold text-lg text-white group-hover:text-brand-red uppercase transition-colors mb-2">
                  {sched.className}
                </h3>
                
                <p className="text-xs text-brand-red font-semibold mb-6 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-brand-red rounded-full animate-pulse"></span>
                  {sched.highlight}
                </p>

                {/* Date hours blocks */}
                <div className="space-y-3">
                  {sched.details.map((detail, idx) => (
                    <div key={idx} className="p-2.5 bg-[#0a0a0a]/60 rounded-xs border border-white/5 flex flex-col gap-1 text-left">
                      <span className="text-xs text-zinc-400 block font-semibold">
                        {detail.days}
                      </span>
                      <span className="text-xs text-white flex items-center gap-1.5 font-mono">
                        <Clock className="w-3.5 h-3.5 text-zinc-500 flex-shrink-0" />
                        {detail.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer cue */}
              <div className="pt-6 mt-4 border-t border-white/5 text-center">
                <span className="text-[10px] text-zinc-500 uppercase font-mono tracking-widest">
                  Garantia de Qualidade
                </span>
              </div>

            </div>
          ))}
        </div>

        {/* Informational SEO and Audience Target Box */}
        <div className="mt-12 p-6 bg-zinc-900/30 border border-white/5 rounded-xl max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-left items-center">
          <div className="md:col-span-1 border-b md:border-b-0 md:border-r border-white/5 pb-4 md:pb-0 md:pr-6">
            <h4 className="text-sm font-display font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-brand-red animate-ping" />
              Treino Guiado Inclusivo
            </h4>
            <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
              Todos os planos dão acesso à sala sob o cuidado de nossos profissionais qualificados.
            </p>
          </div>
          
          <div className="md:col-span-2 text-xs text-zinc-350 space-y-2.5 leading-relaxed">
            <p>
              🏋️‍♂️ <strong className="text-white">Para iniciantes:</strong> Não se preocupe! Te ensinamos a postura correta, regulagem de aparelhos e criamos sua ficha inicial adaptada.
            </p>
            <p>
              🔥 <strong className="text-white">Para performance (hipertrofia e secagem):</strong> Ajustamos treinos avançados periódicos (drop-sets, pirâmides, super-séries) sem cobranças misteriosas.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
