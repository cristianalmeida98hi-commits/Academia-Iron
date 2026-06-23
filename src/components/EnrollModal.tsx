import { useState, useEffect, FormEvent } from "react";
import { X, Check, Dumbbell, Sparkles } from "lucide-react";
import { PLANS_DATA, ACADEMY_INFO } from "../data";
import { Plan } from "../types";

interface EnrollModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlanId?: string;
}

export default function EnrollModal({ isOpen, onClose, selectedPlanId }: EnrollModalProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedPlan, setSelectedPlan] = useState<string>("fit");
  const [goal, setGoal] = useState<string>("hypertrophy");
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (selectedPlanId) {
      setSelectedPlan(selectedPlanId);
    }
  }, [selectedPlanId]);

  if (!isOpen) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    
    setIsSubmitted(true);
  };

  const selectedPlanDetails = PLANS_DATA.find(p => p.id === selectedPlan);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-lg bg-[#0a0a0a] border border-white/5 rounded-xl overflow-hidden shadow-2xl">
        
        {/* Border Glow for visual premium look */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-brand-red" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-zinc-400 hover:text-white hover:bg-zinc-900 rounded-full transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center p-2 rounded-sm bg-brand-red/10 border border-brand-red/25">
                <Dumbbell className="w-6 h-6 text-brand-red animate-pulse" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-display font-black text-white uppercase tracking-tighter italic">
                  Quero me Matricular
                </h3>
                <p className="text-xs text-zinc-400">
                  Preencha para garantir descontos e agendar seu primeiro dia
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {/* Name field */}
              <div>
                <label className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-2">
                  Seu nome completo
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ex: João da Silva"
                  className="w-full px-4 py-3 rounded-xs bg-[#0a0a0a] border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-all text-xs"
                />
              </div>

              {/* Phone / Whatsapp */}
              <div>
                <label className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-2">
                  WhatsApp / Telefone
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Ex: (15) 99999-8888"
                  className="w-full px-4 py-3 rounded-xs bg-[#0a0a0a] border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-all text-xs"
                />
              </div>

              {/* Grid 2-cols: Plan and Goal */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-2">
                    Escolha seu Plano
                  </label>
                  <select
                    value={selectedPlan}
                    onChange={(e) => setSelectedPlan(e.target.value)}
                    className="w-full px-3 py-3 rounded-xs bg-[#0a0a0a] border border-white/10 text-white text-xs focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-all"
                  >
                    {PLANS_DATA.map((plan) => (
                      <option key={plan.id} value={plan.id}>
                        {plan.name} — R$ {plan.price.toFixed(2).replace(".", ",")}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-2">
                    Objetivo Principal
                  </label>
                  <select
                    value={goal}
                    onChange={(e) => setGoal(e.target.value)}
                    className="w-full px-3 py-3 rounded-xs bg-[#0a0a0a] border border-white/10 text-white text-xs focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-all"
                  >
                    <option value="hypertrophy font-sans">Hipertrofia / Massa Magra</option>
                    <option value="weightloss font-sans">Emagrecimento Saudável</option>
                    <option value="beginner font-sans">Iniciante / Saúde Total</option>
                    <option value="conditioning font-sans">Condicionamento Físico</option>
                  </select>
                </div>
              </div>

              {/* Informational feature review */}
              {selectedPlanDetails && (
                <div className="p-4 rounded-xs bg-zinc-900/40 border border-white/5 space-y-2 mt-2">
                  <div className="flex justify-between items-center border-b border-white/5 pb-2">
                    <span className="text-xs text-zinc-500">Plano Selecionado:</span>
                    <span className="text-sm font-bold text-brand-red font-display">{selectedPlanDetails.name}</span>
                  </div>
                  <ul className="space-y-1">
                    {selectedPlanDetails.features.slice(0, 3).map((feat, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-zinc-400">
                        <Check className="w-3 h-3 text-brand-red flex-shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Submit button */}
            <button
              type="submit"
              className="w-full mt-6 py-4 bg-brand-red hover:bg-brand-red-hover text-white font-bold uppercase text-xs tracking-wider rounded-xs transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-brand-red/10 flex items-center justify-center gap-2 cursor-pointer"
            >
              Completar Inscrição
            </button>

            <p className="text-[10px] text-zinc-500 text-center mt-3">
              *Este formulário faz parte da demonstração de fechamento visual de alta conversão.
            </p>
          </form>
        ) : (
          <div className="p-8 text-center space-y-5">
            <div className="w-16 h-16 bg-[#0a0a0a] border border-brand-red/25 rounded-full flex items-center justify-center mx-auto text-brand-red">
              <Check className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-display font-black text-white uppercase tracking-tighter italic">
                Inscrição Iniciada!
              </h3>
              <p className="text-sm text-zinc-350 max-w-sm mx-auto font-light leading-relaxed">
                Parabéns, <span className="font-bold text-brand-red">{name}</span>! Se este fosse um site real, sua matrícula no <span className="font-bold text-brand-red">{selectedPlanDetails?.name}</span> seria registrada instantaneamente no banco de dados.
              </p>
              <p className="text-xs text-zinc-500">
                Como este é um protótipo de alta fidelidade para venda, você pode testar a experiência com o cliente final enviando uma simulação direto para o WhatsApp deles!
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={`${ACADEMY_INFO.whatsappUrl}&text=Ol%C3%A1!%20Sou%20${encodeURIComponent(name)}%20e%20gostaria%20de%20confirmar%20minha%20matr%C3%ADcula%20no%20${encodeURIComponent(selectedPlanDetails?.name || "Plano")}.%20Meu%20foco%20%C3%A3%20${encodeURIComponent(goal)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 bg-green-600 hover:bg-green-700 text-white font-bold text-xs uppercase tracking-wider rounded-xs transition-all duration-350 flex items-center justify-center gap-2"
              >
                Simular no WhatsApp
              </a>
              <button
                type="button"
                onClick={() => {
                  setIsSubmitted(false);
                  setName("");
                  setPhone("");
                  onClose();
                }}
                className="px-5 py-3 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white font-bold text-xs uppercase tracking-wider rounded-xs border border-white/5 transition-all duration-350"
              >
                Voltar ao Site
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
