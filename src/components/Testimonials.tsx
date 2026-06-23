import { Star, MessageSquare } from "lucide-react";
import { TESTIMONIALS_DATA } from "../data";

export default function Testimonials() {
  return (
    <section className="py-20 bg-[#0a0a0a] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-brand-red/10 border border-brand-red/20 text-[10px] text-brand-red font-bold uppercase tracking-widest">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Depoimentos Reais</span>
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-white uppercase tracking-tighter italic">
            QUEM TREINA NA <span className="text-brand-red">PULSE</span> RECOMENDA
          </h2>
          <p className="text-zinc-400 text-sm max-w-2xl mx-auto font-normal leading-relaxed">
            Veja a opinião de quem vive a nossa experiência fitness diariamente em Guareí. Orgulho de transformar esforço em saúde!
          </p>
        </div>

        {/* Testimonials cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((item) => (
            <div
              key={item.id}
              className="bg-zinc-900/30 border border-white/5 p-6 md:p-8 rounded-xl flex flex-col justify-between hover:border-brand-red/25 transition-all duration-300"
            >
              <div className="space-y-4">
                {/* Custom Stars */}
                <div className="flex gap-1">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-brand-red text-brand-red" />
                  ))}
                </div>

                <p className="text-zinc-300 text-xs italic font-normal leading-relaxed text-left">
                  "{item.comment}"
                </p>
              </div>

              {/* Profile layout */}
              <div className="flex items-center gap-3.5 pt-6 mt-6 border-t border-white/5 font-sans">
                <img
                  src={item.avatarUrl}
                  alt={item.name}
                  className="w-11 h-11 rounded-full object-cover border border-white/5"
                  referrerPolicy="no-referrer"
                />
                <div className="text-left font-sans">
                  <span className="block text-xs font-bold text-white uppercase tracking-wide">
                    {item.name}
                  </span>
                  <span className="block text-[9px] text-zinc-500 uppercase font-mono tracking-wider">
                    {item.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
