import { Dumbbell, Instagram, MessageSquare, ArrowUp, MapPin } from "lucide-react";
import { ACADEMY_INFO } from "../data";

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="footer-comp" className="bg-[#0a0a0a] border-t border-white/5 pt-16 pb-8 relative z-10 text-left">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        
        {/* Core grid Footer (4-cols) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Col 1: Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-brand-red rounded-xs text-black font-black">
                IP
              </div>
              <span className="font-display font-black text-xl text-white uppercase tracking-tighter italic">
                IRON PULSE <span className="text-brand-red">FITNESS</span>
              </span>
            </div>
            
            <p className="text-xs text-zinc-400 leading-relaxed font-light">
              “{ACADEMY_INFO.slogan}”
            </p>
            
            <p className="text-xs text-zinc-500 leading-relaxed font-light">
              Protótipo de apresentação de alta conversão estruturado para venda. Ideal para academias locais que buscam posicionamento sério no topo do Google.
            </p>

            <div className="flex items-center gap-2.5">
              <a
                href={ACADEMY_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-xs bg-zinc-900 border border-white/5 flex items-center justify-center text-zinc-400 hover:text-pink-500 hover:border-pink-500/30 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={ACADEMY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-xs bg-zinc-900 border border-white/5 flex items-center justify-center text-zinc-400 hover:text-green-500 hover:border-green-500/30 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: SEO and Targets anchor tags */}
          <div className="space-y-4">
            <h4 className="text-[10px] font-bold text-white uppercase tracking-widest font-mono">
              Buscas em Guareí (SEO)
            </h4>
            
            <nav className="flex flex-col gap-2.5 text-xs text-zinc-400">
              <span className="hover:text-brand-red transition-colors cursor-pointer flex items-center gap-1.5">
                <span className="h-1 w-1 bg-brand-red rounded-full"></span>
                Academia em Guareí
              </span>
              <span className="hover:text-brand-red transition-colors cursor-pointer flex items-center gap-1.5">
                <span className="h-1 w-1 bg-brand-red rounded-full"></span>
                Musculação em Guareí
              </span>
              <span className="hover:text-brand-red transition-colors cursor-pointer flex items-center gap-1.5">
                <span className="h-1 w-1 bg-brand-red rounded-full"></span>
                Academia perto de mim SP
              </span>
              <span className="hover:text-brand-red transition-colors cursor-pointer flex items-center gap-1.5">
                <span className="h-1 w-1 bg-brand-red rounded-full"></span>
                Hipertrofia e Zumba Guareí
              </span>
            </nav>
          </div>

          {/* Col 3: Quick Navigation */}
          <div className="space-y-4">
            <h4 className="text-[10px] font-bold text-white uppercase tracking-widest font-mono">
              Páginas do Demo
            </h4>
            
            <nav className="flex flex-col gap-2.5 text-xs text-zinc-400">
              <a href="#home" className="hover:text-white transition-colors">Home Principal</a>
              <a href="#sobre" className="hover:text-white transition-colors">A Academia</a>
              <a href="#planos" className="hover:text-white transition-colors">Planos de Assinatura</a>
              <a href="#aulas" className="hover:text-white transition-colors">Grade de Aulas</a>
              <a href="#contato" className="hover:text-white transition-colors">Fale Conosco</a>
            </nav>
          </div>

          {/* Col 4: Location details */}
          <div className="space-y-4">
            <h4 className="text-[10px] font-bold text-white uppercase tracking-widest font-mono">
              Onde Treinar
            </h4>
            
            <div className="space-y-3 text-xs text-zinc-400">
              <p className="flex items-start gap-2 leading-relaxed">
                <MapPin className="w-4 h-4 text-brand-red flex-shrink-0 mt-0.5" />
                <span>
                  {ACADEMY_INFO.address}, {ACADEMY_INFO.neighborhood} <br />
                  {ACADEMY_INFO.city} — {ACADEMY_INFO.state}
                </span>
              </p>
              
              <p className="text-[10px] text-zinc-550 uppercase tracking-widest font-mono border-t border-white/5 pt-3">
                Contato comercial da venda: <br />
                <span className="text-zinc-500 font-semibold lowercase">cristianalmeida98.hi@gmail.com</span>
              </p>
            </div>
          </div>

        </div>

        {/* Divider bar */}
        <div className="h-px bg-white/5 w-full mb-8"></div>

        {/* Copy footnote */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center">
          <div className="text-xs text-zinc-500">
            <p>© {new Date().getFullYear()} {ACADEMY_INFO.name}. Todos os direitos reservados.</p>
            <p className="text-[10px] text-zinc-600 mt-1 uppercase tracking-widest font-mono">
              Criado para demonstração profissional e validação comercial
            </p>
          </div>

          <button
            onClick={handleScrollToTop}
            className="p-3 bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white rounded-xs border border-white/5 transition-colors flex items-center justify-center gap-1.5 group cursor-pointer"
            aria-label="Voltar para o topo"
          >
            <span className="text-[10px] uppercase font-bold tracking-wider font-mono">Topo</span>
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
}
