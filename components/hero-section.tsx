"use client" // Aviso: Esta diretiva está "contaminando" o SEO da seção inteira.

import Image from "next/image"
import { useState, useEffect, useCallback } from "react"

// ============================================================================
// 1. DADOS ESTÁTICOS (Movidos para fora para não recriar a cada renderização)
// ============================================================================
const UNIDADES = [
  { id: 1, nome: "Unidade Centro", endereco: "Rua Principal, 123 - Centro", status: "Aberto agora" },
  { id: 2, nome: "Unidade Zona Sul", endereco: "Av. das Nações, 456 - Jardim Sul", status: "Aberto agora" },
  { id: 3, nome: "Unidade Shopping", endereco: "Praça de Alimentação - Piso 2", status: "Fechado" },
]

// ============================================================================
// 2. ÍCONES (Componentes visuais puros)
// ============================================================================
const MapPinIcon = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
    <circle cx="12" cy="10" r="3" />
  </svg>
)

const BagIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-6 h-6 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3">
    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
    <path d="M3 6h18" />
    <path d="M16 10a4 4 0 0 1-8 0" />
  </svg>
)

const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M18 6 6 18" /><path d="m6 6 12 12" />
  </svg>
)

// ============================================================================
// 3. SUB-COMPONENTES (Isolando a complexidade da UI)
// ============================================================================

// Componente isolado para o Modal, garantindo reuso e limpeza do componente principal
function StoreSelectionModal({ isOpen, onClose }) {
  // Otimização: useCallback evita que a função seja recriada em cada render
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") onClose()
  }, [onClose])

  useEffect(() => {
    if (!isOpen) return

    document.body.style.overflow = "hidden"
    document.addEventListener("keydown", handleKeyDown)

    return () => {
      document.body.style.overflow = "unset"
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [isOpen, handleKeyDown])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-sm transition-opacity p-0 sm:p-4" role="dialog" aria-modal="true">
      <div className="absolute inset-0" onClick={onClose} aria-hidden="true" />

      <div className="relative w-full max-w-md bg-background rounded-t-2xl sm:rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-in slide-in-from-bottom-8 sm:slide-in-from-bottom-0 sm:zoom-in-95 duration-200">

        <div className="flex items-center justify-between p-5 border-b border-border">
          <h2 className="text-lg font-bold text-foreground">Escolha uma Unidade</h2>
          <button onClick={onClose} className="p-2 -mr-2 text-muted-foreground hover:text-foreground hover:bg-secondary rounded-full transition-colors" aria-label="Fechar modal">
            <XIcon />
          </button>
        </div>

        <div className="p-5 flex flex-col gap-3 max-h-[60vh] overflow-y-auto">
          {UNIDADES.map((unidade) => (
            <button
              key={unidade.id}
              disabled={unidade.status === "Fechado"}
              className="flex items-start gap-4 p-4 text-left border border-border rounded-xl hover:border-primary hover:bg-primary/5 transition-colors disabled:opacity-50 disabled:pointer-events-none group/card focus-visible:outline focus-visible:outline-primary"
            >
              <div className="p-2 rounded-full bg-secondary text-secondary-foreground group-hover/card:bg-primary group-hover/card:text-primary-foreground transition-colors shrink-0">
                <MapPinIcon className="w-5 h-5" />
              </div>
              <div className="flex flex-col flex-1">
                <span className="font-bold text-foreground">{unidade.nome}</span>
                <span className="text-sm text-muted-foreground mt-0.5">{unidade.endereco}</span>
                <span className={`text-xs font-semibold mt-2 ${unidade.status === 'Fechado' ? 'text-destructive' : 'text-emerald-600'}`}>
                  {unidade.status}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

// ============================================================================
// 4. COMPONENTE PRINCIPAL
// ============================================================================
export function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <section className="relative flex flex-col items-center pt-12 pb-16 px-4 max-w-5xl mx-auto">

        {/* Logo & Título */}
        <div className="flex flex-col items-center gap-4 mb-10 text-center">
          <div className="relative flex items-center justify-center w-24 h-24 rounded-full border-4 border-primary/10 bg-background overflow-hidden shadow-sm">
            <Image src="/202105052240_Qs9g_i.avif" alt="Logo 1808 Hamburgueria Artesanal" fill sizes="96px" className="object-cover" />
          </div>
          <div>
            <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-3xl font-extrabold tracking-tight text-foreground text-balance">
              1808 Hamburgueria Artesanal
            </h1>
            <p className="text-muted-foreground text-base sm:text-lg mt-2 font-medium">
              Lanches artesanais desde 2018
            </p>
          </div>
        </div>

        {/* Hero Image & CTA */}
        <div className="relative w-full max-w-3xl aspect-[4/3] sm:aspect-[21/9] rounded-2xl overflow-hidden mb-8 shadow-xl border border-border/50 group/hero">
          <Image src="/hero.jpg" alt="Smash burger artesanal da 1808 Hamburgueria" fill className="object-cover transition-transform duration-700 group-hover/hero:scale-105" priority sizes="(max-width: 768px) 100vw, 800px" />

          <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />

          <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 sm:gap-4">
            <div>
              <p className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold text-white drop-shadow-md">
                O sabor que você conhece.
              </p>
              <p className="text-white/80 text-sm sm:text-base font-medium mt-1 drop-shadow">
                Agora com tudo em um só lugar.
              </p>
            </div>

            <button
              onClick={() => setIsModalOpen(true)}
              className="group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-full bg-emerald-600 px-8 py-3.5 text-base font-bold text-white shadow-[0_4px_14px_0_rgba(5,150,105,0.39)] transition-all duration-300 hover:bg-emerald-700 hover:shadow-[0_6px_20px_rgba(5,150,105,0.23)] hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-emerald-600 w-full sm:w-auto shrink-0"
            >
              <BagIcon />
              <span className="tracking-wide text-white">Fazer Pedido Agora</span>
            </button>
          </div>
        </div>

        {/* Rodapé Informativo */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 text-secondary-foreground text-sm font-medium border border-border">
          <MapPinIcon className="w-4 h-4 text-primary shrink-0" />
          <span>2 unidades para te atender</span>
        </div>
      </section>

      {/* Modal Desacoplado */}
      <StoreSelectionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  )
}