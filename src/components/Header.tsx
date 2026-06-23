import { useState, useEffect } from "react";
import { Dumbbell, Menu, X, ArrowRight } from "lucide-react";
import { ACADEMY_INFO } from "../data";

interface HeaderProps {
  onOpenEnroll: (planId?: string) => void;
}

export default function Header({ onOpenEnroll }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const menuItems = [
    { id: "home", label: "Home" },
    { id: "sobre", label: "A Academia" },
    { id: "planos", label: "Planos" },
    { id: "aulas", label: "Aulas & Horários" },
    { id: "contato", label: "Contato" },
  ];

  // Track page scroll to style header & highlight active section
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Simple active section detector based on element offset
      const offsets = menuItems.map(item => {
        const el = document.getElementById(item.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          return { id: item.id, top: Math.abs(rect.top) };
        }
        return { id: item.id, top: Infinity };
      });

      const closest = offsets.reduce((prev, curr) => (prev.top < curr.top ? prev : curr));
      if (closest && closest.top < window.innerHeight / 2) {
        setActiveSection(closest.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offsetY = 80; // height of sticky header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offsetY;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header
      id="main-app-header"
      className={`sticky top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-[#111111]/95 backdrop-blur-md py-4 border-b border-white/5 shadow-xl"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Text Styled Logo with aggressive active fitness feel */}
        <button
          onClick={() => handleNavClick("home")}
          className="flex items-center gap-2 group cursor-pointer text-left"
        >
          <div className="relative flex items-center justify-center w-8 h-8 rounded-xs bg-brand-red text-black transition-transform duration-300 group-hover:rotate-12 font-black">
            IP
          </div>
          <div>
            <span className="block font-display font-black text-xl text-white tracking-tighter leading-none italic uppercase">
              IRON PULSE <span className="text-brand-red">FITNESS</span>
            </span>
            <span className="block text-[8px] font-mono font-bold text-zinc-500 uppercase tracking-[0.2em] leading-none mt-1">
              UNID. GUAREÍ — SP
            </span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav id="desktop-nav-menu" className="hidden lg:flex items-center gap-8">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`text-xs font-bold uppercase transition-colors relative py-1 tracking-widest cursor-pointer ${
                activeSection === item.id
                  ? "text-brand-red"
                  : "text-zinc-450 hover:text-white"
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand-red rounded-full" />
              )}
            </button>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden sm:flex items-center gap-4">
          <button
            onClick={() => onOpenEnroll()}
            className="px-4 py-2 bg-brand-red hover:bg-brand-red-hover text-white text-xs font-bold uppercase tracking-wider rounded-xs transition-all duration-300 hover:scale-[1.03] shadow-md shadow-brand-red/10 cursor-pointer flex items-center gap-1.5"
          >
            Matricule-se
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 text-zinc-300 hover:text-white focus:outline-none transition-colors"
          aria-label="Abrir menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6 border border-zinc-800 rounded bg-zinc-900 p-0.5" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Drawer Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-zinc-950 border-b border-zinc-900 px-6 py-6 space-y-4 shadow-2xl animate-fade-in">
          <div className="flex flex-col gap-3">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`py-3 text-left text-sm font-bold tracking-wider uppercase border-b border-zinc-900 transition-colors ${
                  activeSection === item.id ? "text-brand-red" : "text-zinc-300"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-4 flex flex-col gap-3">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenEnroll();
              }}
              className="w-full py-3.5 bg-brand-red text-white text-center text-xs font-extrabold uppercase tracking-widest rounded shadow-lg shadow-brand-red/20 active:scale-95 transition-transform"
            >
              Matrícula On-line
            </button>
            <p className="text-[10px] text-zinc-500 text-center uppercase tracking-widest font-mono">
              Unidade Guareí - SP
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
