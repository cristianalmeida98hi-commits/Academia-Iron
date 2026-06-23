import { useState, FormEvent } from "react";
import { Phone, Instagram, MapPin, Clock, MessageSquare, Mail, Send, Check } from "lucide-react";
import { ACADEMY_INFO } from "../data";

export default function Contato() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    setIsSent(true);
  };

  return (
    <section id="contato" className="py-20 bg-[#0a0a0a] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-brand-red/10 border border-brand-red/20 text-[10px] text-brand-red font-bold uppercase tracking-widest">
            <Phone className="w-3.5 h-3.5" />
            <span>Contato & Atendimento</span>
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-white uppercase tracking-tighter italic">
            FALE CONOSCO OU <span className="text-brand-red">VISITE-NOS</span>
          </h2>
          <p className="text-zinc-400 text-sm max-w-2xl mx-auto font-normal leading-relaxed">
            Estamos prontos para clarear suas dúvidas sobre os treinos na <strong className="text-white font-semibold">Iron Pulse</strong>. Comece hoje mesmo sua jornada fitness em Guareí.
          </p>
        </div>

        {/* Contact info grid & Form layout (2-cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Col 1: Visual detail cards (Grid 5 columns span) */}
          <div className="lg:col-span-5 space-y-6">
            
            <h3 className="font-display font-bold text-lg text-white uppercase tracking-wider mb-2 text-left">
              CANAIS DE SUPORTE
            </h3>

            {/* Address */}
            <div className="p-5 bg-zinc-900/30 border border-white/5 rounded-xl flex items-start gap-4 hover:border-brand-red/20 transition-colors text-left">
              <div className="p-3 bg-[#0a0a0a] rounded-sm border border-white/5 text-brand-red">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="space-y-1 font-sans">
                <span className="block text-[9px] uppercase font-mono tracking-wider text-zinc-500">Nosso Endereço</span>
                <span className="block text-sm font-bold text-white uppercase">Centro de Guareí</span>
                <p className="text-xs text-zinc-400 font-light leading-snug">
                  {ACADEMY_INFO.address}, {ACADEMY_INFO.neighborhood} <br />
                  {ACADEMY_INFO.city} — {ACADEMY_INFO.state}
                </p>
              </div>
            </div>

            {/* WhatsApp */}
            <a
              href={ACADEMY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 bg-zinc-900/30 border border-white/5 rounded-xl flex items-start gap-4 hover:border-green-500/30 transition-all text-left block group"
            >
              <div className="p-3 bg-[#0a0a0a] rounded-sm border border-white/5 text-green-500 group-hover:bg-green-500/10 transition-colors">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div className="space-y-1 font-sans">
                <span className="block text-[9px] uppercase font-mono tracking-wider text-zinc-500">WhatsApp Oficial</span>
                <span className="block text-sm font-bold text-white group-hover:text-green-400 transition-colors">
                  {ACADEMY_INFO.whatsapp}
                </span>
                <p className="text-xs text-zinc-400 font-light">
                  Chame agora para simular descontos instantâneos.
                </p>
              </div>
            </a>

            {/* Instagram */}
            <a
              href={ACADEMY_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 bg-zinc-900/30 border border-white/5 rounded-xl flex items-start gap-4 hover:border-pink-500/30 transition-all text-left block group"
            >
              <div className="p-3 bg-[#0a0a0a] rounded-sm border border-white/5 text-pink-500 group-hover:bg-pink-500/10 transition-colors">
                <Instagram className="w-5 h-5" />
              </div>
              <div className="space-y-1 font-sans">
                <span className="block text-[9px] uppercase font-mono tracking-wider text-zinc-500">Siga no Instagram</span>
                <span className="block text-sm font-bold text-white group-hover:text-pink-400 transition-colors">
                  {ACADEMY_INFO.instagram}
                </span>
                <p className="text-xs text-zinc-400 font-light">
                  Acompanhe dicas diárias, treinos de alunos e novidades.
                </p>
              </div>
            </a>

            {/* Operation Hours */}
            <div className="p-5 bg-zinc-900/30 border border-white/5 rounded-xl flex items-start gap-4 text-left">
              <div className="p-3 bg-[#0a0a0a] rounded-sm border border-white/5 text-brand-red">
                <Clock className="w-5 h-5" />
              </div>
              <div className="space-y-1 font-sans">
                <span className="block text-[9px] uppercase font-mono tracking-wider text-zinc-500">Horário de Funcionamento</span>
                <span className="block text-sm font-bold text-white uppercase">Grade Semanal</span>
                <ul className="text-xs text-zinc-400 font-light space-y-1">
                  {ACADEMY_INFO.hours.map((hr, idx) => (
                    <li key={idx} className="flex justify-between gap-6">
                      <span>{hr.label}:</span>
                      <strong className="text-zinc-300 font-semibold">{hr.time}</strong>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>

          {/* Col 2: Simple Contact query form (Grid 7 columns span) */}
          <div className="lg:col-span-7 bg-zinc-900/30 border border-white/5 rounded-xl p-6 sm:p-8 relative">
            
            {!isSent ? (
              <form onSubmit={handleSubmit} className="space-y-5 text-left">
                <div className="border-b border-white/5 pb-4 mb-4">
                  <h4 className="font-display font-bold text-base text-white uppercase tracking-wider">
                    Envie-nos uma Mensagem
                  </h4>
                  <p className="text-xs text-zinc-500 mt-1">
                    Retornamos no seu email em até 2 horas úteis.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-2">
                      Seu Nome
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Ex: Carlos de Almeida"
                      className="w-full px-4 py-3 rounded-xs bg-[#0a0a0a] border border-white/10 text-white placeholder-zinc-650 focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-all text-xs"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-2">
                      Seu Email
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Ex: carlos@gmail.com"
                      className="w-full px-4 py-3 rounded-xs bg-[#0a0a0a] border border-white/10 text-white placeholder-zinc-650 focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-all text-xs"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-2">
                    Como podemos te ajudar?
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Escreva sua pergunta ou dúvida sobre os treinos..."
                    className="w-full px-4 py-3 rounded-xs bg-[#0a0a0a] border border-white/10 text-white placeholder-zinc-650 focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-all resize-none text-xs"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-brand-red hover:bg-brand-red-hover text-white text-xs font-bold uppercase tracking-wider rounded-xs transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-brand-red/10"
                >
                  <Send className="w-3.5 h-3.5" />
                  Enviar Mensagem
                </button>

                <p className="text-[10px] text-zinc-550 text-center">
                  🔒 Seus dados estão seguros. Responderemos em poucas horas no seu e-mail cadastrado.
                </p>

              </form>
            ) : (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 bg-brand-red/10 border border-brand-red/20 rounded-full flex items-center justify-center text-brand-red mx-auto">
                  <Check className="w-8 h-8" />
                </div>
                
                <h4 className="text-lg font-display font-bold text-white uppercase tracking-wider">
                  Mensagem Enviada!
                </h4>
                
                <p className="text-xs text-zinc-400 max-w-sm mx-auto">
                  Olá <span className="text-brand-red font-bold">{name}</span>! Sua mensagem foi transmitida com sucesso. Fique de olho na sua caixa de entrada no e-mail: <span className="text-white font-semibold">{email}</span>.
                </p>

                <button
                  onClick={() => {
                    setIsSent(false);
                    setName("");
                    setEmail("");
                    setMessage("");
                  }}
                  className="px-5 py-2.5 bg-[#0a0a0a] hover:bg-zinc-900 text-white text-xs font-bold uppercase tracking-wider rounded-xs border border-white/5"
                >
                  Enviar Outra Mensagem
                </button>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
