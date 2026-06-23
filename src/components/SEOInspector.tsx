import { useState } from "react";
import { Search, Eye, Settings, X, Sparkles, Check } from "lucide-react";
import { SEO_METRICS, TARGET_AUDIENCES } from "../data";

export default function SEOInspector() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"serp" | "keywords" | "structure">("serp");

  return (
    <>
      {/* Absolute fixed launcher trigger */}
      <div className="fixed bottom-24 right-6 z-40">
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 px-4 py-2.5 bg-[#0a0a0a] hover:bg-zinc-900 text-white text-xs font-bold uppercase tracking-wider rounded-xs border border-white/10 hover:border-brand-red shadow-xl transition-all duration-300"
        >
          <Sparkles className="w-4 h-4 text-brand-red animate-pulse" />
          <span>Inspetor SEO Demo</span>
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-y-0 right-0 w-full max-w-sm z-50 bg-[#0a0a0a] border-l border-white/5 shadow-2xl flex flex-col animate-slide-in">
          {/* Header */}
          <div className="p-4 border-b border-white/5 bg-zinc-900/30 flex justify-between items-center">
            <div className="flex items-center gap-2 font-sans">
              <Search className="w-5 h-5 text-brand-red" />
              <div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-0.5">
                  Painel do Comprador: SEO
                </h4>
                <p className="text-[10px] text-zinc-550">
                  Ferramenta de vendas de sites demonstrativa
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-xs hover:bg-zinc-900 text-zinc-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick info banner */}
          <div className="p-4 bg-brand-red/5 border-b border-white/5 font-sans">
            <p className="text-xs text-zinc-400 leading-relaxed">
              💡 <span className="font-semibold text-white">Quer fechar venda da academia?</span> Mostre esta aba para o dono da Iron Pulse e explique que o site já foi construído otimizado para o Google atrair cliques locais!
            </p>
          </div>

          {/* Tabs */}
          <div className="flex border-b border-white/5 bg-[#0a0a0a] font-sans">
            <button
              onClick={() => setActiveTab("serp")}
              className={`flex-1 py-3 text-center text-[10px] font-bold border-b-2 uppercase tracking-wide transition-colors ${
                activeTab === "serp"
                  ? "border-brand-red text-brand-red bg-zinc-900/10"
                  : "border-transparent text-zinc-500 hover:text-white hover:bg-zinc-900/5"
              }`}
            >
              Google Preview
            </button>
            <button
              onClick={() => setActiveTab("keywords")}
              className={`flex-1 py-3 text-center text-[10px] font-bold border-b-2 uppercase tracking-wide transition-colors ${
                activeTab === "keywords"
                  ? "border-brand-red text-brand-red bg-zinc-900/10"
                  : "border-transparent text-zinc-500 hover:text-white hover:bg-zinc-900/5"
              }`}
            >
              Palavras-Chave
            </button>
            <button
              onClick={() => setActiveTab("structure")}
              className={`flex-1 py-3 text-center text-[10px] font-bold border-b-2 uppercase tracking-wide transition-colors ${
                activeTab === "structure"
                  ? "border-brand-red text-brand-red bg-zinc-900/10"
                  : "border-transparent text-zinc-500 hover:text-white hover:bg-zinc-900/5"
              }`}
            >
              Estrutura SEO
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 font-sans">
            {activeTab === "serp" && (
              <div className="space-y-4">
                <h5 className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
                  Pré-visualização do Google (SERP)
                </h5>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Como este site aparecerá nos resultados de pesquisa de Guareí:
                </p>

                {/* Google mockup card */}
                <div className="p-4 bg-white rounded-xs text-black text-left shadow-md space-y-1 font-sans">
                  <div className="flex items-center gap-2 text-xs text-[#202124]">
                    <div className="w-5 h-5 rounded-full bg-[#f1f3f4] flex items-center justify-center font-bold text-[9px]">
                      IP
                    </div>
                    <div>
                      <span className="block font-medium">Iron Pulse Fitness</span>
                      <span className="block text-[11px] text-[#5f6368] leading-none">https://www.ironpulsefitness.com.br</span>
                    </div>
                  </div>
                  
                  <h3 className="text-[18px] text-[#1a0dab] font-normal hover:underline leading-tight mt-1 cursor-pointer">
                    Iron Pulse Fitness | A melhor Academia em Guareí - SP
                  </h3>
                  
                  <p className="text-[13px] text-[#4d5156] leading-relaxed">
                    <span className="font-semibold text-black">Treine forte. Evolua sempre</span> na Iron Pulse Fitness, a maior academia de <span className="font-semibold text-black">musculação em Guareí</span>. Planos a partir de R$ 79,90. Área funcional e aulas coletivas climatizadas.
                  </p>
                </div>

                <div className="space-y-2 bg-zinc-900/30 p-3 rounded-xs border border-white/5">
                  <h6 className="text-[10px] font-bold text-zinc-450 uppercase tracking-wider">
                    ⚙️ Meta Tags Configuradas no Código:
                  </h6>
                  <div className="text-[11px] font-mono text-zinc-400 space-y-1 leading-normal">
                    <p><span className="text-brand-red">&lt;title&gt;</span>Iron Pulse Fitness | Academia em Guareí - SP&lt;/title&gt;</p>
                    <p><span className="text-brand-red">&lt;meta name="description"</span> content="Treine na Iron Pulse, melhor musculação em Guareí..." /&gt;</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "keywords" && (
              <div className="space-y-4">
                <h5 className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
                  Configuração de Palavras-Chave Ocultas
                </h5>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Palavras estrategicamente espalhadas pelo texto do site para indexação eficiente:
                </p>

                <div className="space-y-3">
                  {SEO_METRICS.map((metric, i) => (
                    <div key={i} className="p-3 bg-zinc-900/30 border border-white/5 rounded-xs">
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="text-[9px] font-bold text-white bg-brand-red/10 border border-brand-red/25 px-2 py-0.5 rounded-xs">
                          "{metric.keyword}"
                        </span>
                        <span className="text-[9px] text-zinc-500 font-mono">
                          Vol: {metric.volume}
                        </span>
                      </div>
                      <p className="text-xs text-zinc-400 font-light leading-relaxed">{metric.purpose}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "structure" && (
              <div className="space-y-4">
                <h5 className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
                  Arquitetura de Público e Conversão
                </h5>

                <div className="space-y-3">
                  <div className="p-3 bg-zinc-900/30 border border-white/5 rounded-xs">
                    <h6 className="text-xs font-bold text-white mb-2 flex items-center gap-1.5 uppercase tracking-wide">
                      <Check className="w-3.5 h-3.5 text-brand-red" />
                      Público Alvo Mapeado (SEO)
                    </h6>
                    <ul className="space-y-2.5 text-xs text-zinc-400">
                      {TARGET_AUDIENCES.map((target, i) => (
                        <li key={i} className="border-l border-brand-red/40 pl-2">
                          <span className="font-semibold text-white block text-xs">{target.title}</span>
                          <span className="font-light text-[11px] block text-zinc-400 mt-0.5 leading-relaxed">{target.description}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-3 bg-zinc-900/30 border border-white/5 rounded-xs space-y-2">
                    <h6 className="text-xs font-bold text-white flex items-center gap-1.5 uppercase tracking-wide">
                      <Check className="w-3.5 h-3.5 text-brand-red" />
                      Técnicas de Conversão (CRO)
                    </h6>
                    <ul className="list-disc pl-4 text-xs text-zinc-400 space-y-1.5 font-light leading-relaxed">
                      <li>Botão flutuante de WhatsApp persistente para contato instantâneo.</li>
                      <li>CTA de Matrícula Visível no Header e na Seção Hero.</li>
                      <li>Ficha de agendamento inclusa (recolhe o objetivo do aluno).</li>
                      <li>Social Proof (Depoimentos) com rostos e tempos de academia.</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Footer of inspector */}
          <div className="p-4 border-t border-white/5 bg-zinc-900/40 text-center font-sans">
            <p className="text-[10px] text-zinc-550 uppercase tracking-wider">
              Desenvolvido em <span className="font-semibold text-zinc-300">Vite + React + Tailwind</span>
            </p>
            <p className="text-[9px] text-zinc-650 mt-1">
              Pronto para colocar em ambiente de produção sob domínio customizado.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
