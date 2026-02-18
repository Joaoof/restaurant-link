"use client" // Obrigatório para usar interatividade (onClick/useState)

import { useState, useEffect } from "react"
import Image from "next/image"

const locations = [
  {
    name: "Unidade I - São João",
    address: "Av. 1º de Janeiro, 2888 - São João",
    hours: "Seg a Sab, 18h - 00h",
    image: "/{0B6B25D4-1A43-4986-B4A7-3FC04D1A6D44}.png", // Verifique se o caminho está correto
    mapsUrl: "https://maps.google.com/?q=Av.+1º+de+Janeiro+2888+Araguaína+TO",
    whatsappUrl: "https://wa.me/5563992833754",
    orderUrl: "https://1808entroncamento.menudino.com/",
  },
  {
    name: "Unidade II - Entroncamento",
    address: "Entroncamento, Araguaína - TO",
    hours: "Seg a Dom, 18h - 01h",
    image: "/{2B22EB4B-D4B4-4E88-821D-ED328C057B59}.png", // Verifique se o caminho está correto
    mapsUrl: "https://maps.google.com/?q=Entroncamento+Araguaína+TO",
    whatsappUrl: "https://wa.me/5563992662592",
    orderUrl: "https://1808entroncamento.menudino.com/",
  },
]

// --- SEUS ÍCONES (Placeholders) ---
function MapPinIcon({ className }: { className?: string }) {
  return <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>
}

function ClockIcon({ className }: { className?: string }) {
  return <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
}

function CloseIcon({ className }: { className?: string }) {
  return <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
}

export function LocationsSection() {
  // Estado para controlar qual loja foi clicada (null = modal fechada)
  const [selectedLocation, setSelectedLocation] = useState<typeof locations[0] | null>(null)

  // Fecha modal ao apertar ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedLocation(null)
    }
    window.addEventListener("keydown", handleEsc)
    return () => window.removeEventListener("keydown", handleEsc)
  }, [])

  return (
    <section className="px-4 py-8 max-w-5xl mx-auto">
      <h2 className="text-xl font-bold text-center mb-6 text-foreground">
        Nossas unidades
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {locations.map((loc) => (
          <div
            key={loc.name}
            onClick={() => setSelectedLocation(loc)} // Clicar no card abre a modal
            className="group cursor-pointer flex flex-row md:flex-col bg-card border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all h-32 md:h-auto ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {/* Imagem */}
            <div className="relative w-32 min-w-[128px] md:w-full md:h-48 md:min-h-[192px]">
              <Image
                src={loc.image}
                alt={`Fachada ${loc.name}`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 128px, 50vw"
              />
            </div>

            {/* Conteúdo */}
            <div className="flex-1 p-3 flex flex-col justify-between md:p-4">
              <div>
                <h3 className="font-semibold text-sm md:text-base leading-tight mb-1">
                  {loc.name}
                </h3>
                
                <div className="flex flex-col gap-1 text-[10px] md:text-xs text-muted-foreground">
                  <div className="flex gap-1.5 items-center line-clamp-1">
                    <MapPinIcon className="w-3 h-3 shrink-0" />
                    <span className="truncate">{loc.address}</span>
                  </div>

                  <div className="flex gap-1.5 items-center">
                    <ClockIcon className="w-3 h-3 shrink-0" />
                    <span>{loc.hours}</span>
                  </div>
                </div>
              </div>

              {/* Botão Visual de "Ação" (Gatilho) */}
              <div className="mt-2 md:mt-4">
                <button
                  type="button"
                  className="w-full bg-primary text-primary-foreground text-[10px] md:text-xs font-medium h-7 md:h-8 rounded flex items-center justify-center hover:opacity-90 transition shadow-sm pointer-events-none" // pointer-events-none pois o card pai já captura o clique
                >
                  Ver opções de contato
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* --- MODAL --- */}
      {selectedLocation && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedLocation(null)} // Clicar fora fecha
        >
          <div 
            className="bg-card text-card-foreground w-full max-w-sm rounded-xl shadow-lg border p-6 relative animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()} // Clicar dentro NÃO fecha
          >
            {/* Botão Fechar (X) */}
            <button 
              onClick={() => setSelectedLocation(null)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground p-1 rounded-md hover:bg-muted transition"
            >
              <CloseIcon className="w-5 h-5" />
            </button>

            {/* Cabeçalho Modal */}
            <div className="text-center mb-6">
              <h3 className="text-lg font-bold">{selectedLocation.name}</h3>
              <p className="text-sm text-muted-foreground mt-1">Como deseja entrar em contato?</p>
            </div>

            {/* Lista de Ações */}
            <div className="flex flex-col gap-3">
              
              {/* Botão Pedido */}
              <a
  href={selectedLocation.orderUrl}
  target="_blank"
  className="flex items-center justify-center w-full gap-3 p-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition shadow-sm"
>
  {/* Ajustado para w-6 h-6 (24px) e adicionei 'invert' caso seu tema seja escuro e o ícone preto */}
  <img 
    src="https://cdn-icons-png.freepik.com/256/5464/5464164.png?semt=ais_white_label" 
    alt="Ícone de pedido" 
    className="w-6 h-6 object-contain" 
  />
  <span>Fazer Pedido Online</span>
</a>

              {/* Botão WhatsApp */}
              <a
                href={selectedLocation.whatsappUrl}
                target="_blank"
                className="flex items-center justify-center w-full gap-3 p-3 bg-green-500 text-white rounded-lg font-medium hover:bg-green-600 transition shadow-sm"
              >
                <img 
    src="/md_5af2d4c95ac7b-removebg-preview.png" 
    alt="Ícone de pedido" 
    className="w-6 h-6 object-contain" 
  />
                {/* COLOQUE SEU ÍCONE DE WHATSAPP AQUI */}
                <span>Chamar no WhatsApp</span>
              </a>

              <div className="relative flex py-1 items-center">
                <div className="flex-grow border-t border-muted"></div>
                <span className="flex-shrink-0 mx-3 text-[10px] uppercase text-muted-foreground font-semibold">ou</span>
                <div className="flex-grow border-t border-muted"></div>
              </div>

              {/* Botão Mapa */}
              <a
                href={selectedLocation.mapsUrl}
                target="_blank"
                className="flex items-center justify-center w-full gap-3 p-3 border bg-background hover:bg-muted rounded-lg font-medium transition text-muted-foreground"
              >
                {/* COLOQUE SEU ÍCONE DE MAPA AQUI */}
                <MapPinIcon className="w-4 h-4" />
                <span>Ver rota no Mapa</span>
              </a>

            </div>
          </div>
        </div>
      )}
    </section>
  )
}