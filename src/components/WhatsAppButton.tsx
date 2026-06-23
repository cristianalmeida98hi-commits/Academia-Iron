import { MessageCircle } from "lucide-react";
import { ACADEMY_INFO } from "../data";

export default function WhatsAppButton() {
  return (
    <a
      id="whatsapp-floating-action-btn"
      href={ACADEMY_INFO.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center p-4 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl transition-transform duration-300 hover:scale-110 active:scale-95 group"
      aria-label="Falar no WhatsApp"
    >
      {/* Pulse effect badge */}
      <span className="absolute -top-1 -right-1 flex h-4 w-4">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 text-[9px] font-bold text-white items-center justify-center">
          1
        </span>
      </span>
      
      <MessageCircle id="whatsapp-icon" className="w-7 h-7" />
      
      {/* Dynamic tooltip on hover */}
      <span className="absolute right-16 scale-0 transition-all rounded bg-zinc-900 border border-zinc-800 p-2 text-xs font-semibold text-white group-hover:scale-100 whitespace-nowrap shadow-lg">
        Fale Conosco (Matrícula Rápida)
      </span>
    </a>
  );
}
