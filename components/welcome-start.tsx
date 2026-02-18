"use client"

import { useState, useEffect } from "react"

function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  )
}

function InfoIcon({ className }: { className?: string }) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="16" x2="12" y2="12" />
        <line x1="12" y1="8" x2="12.01" y2="8" />
      </svg>
    )
  }

export function WelcomeToast() {
  const [isVisible, setIsVisible] = useState(false)
  const [shouldRender, setShouldRender] = useState(false)

  useEffect(() => {
    // 1. Verificação de UX: O usuário já viu isso nesta sessão?
    const hasSeen = sessionStorage.getItem("hasSeenWelcome")

    if (!hasSeen) {
      setShouldRender(true)
      
      // Delay pequeno para não assustar o usuário assim que a página carrega
      const timerShow = setTimeout(() => {
        setIsVisible(true)
      }, 1000)

      // Auto-dismiss: Fecha sozinho após 8 segundos (tempo suficiente para ler)
      const timerHide = setTimeout(() => {
        handleClose()
      }, 8000)

      return () => {
        clearTimeout(timerShow)
        clearTimeout(timerHide)
      }
    }
  }, [])

  const handleClose = () => {
    setIsVisible(false)
    // Marca que o usuário já viu/fechou
    sessionStorage.setItem("hasSeenWelcome", "true")
    
    // Aguarda a animação de saída antes de remover do DOM
    setTimeout(() => {
      setShouldRender(false)
    }, 500) 
  }

  if (!shouldRender) return null

  return (
    <div 
      className={`
        fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50
        flex items-center gap-3 px-4 py-3 
        bg-foreground/90 text-background backdrop-blur-md
        rounded-full shadow-2xl border border-white/10
        transition-all duration-500 ease-out
        max-w-[90vw] w-max
        ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}
      `}
    >
      <InfoIcon className="w-5 h-5 text-primary shrink-0" />
      
      <span className="text-sm font-medium pr-2 leading-tight">
        Seja bem-vindo ao menu de nossas unidades
      </span>

      <button 
        onClick={handleClose}
        className="p-1 rounded-full hover:bg-white/20 transition-colors ml-auto"
        aria-label="Fechar aviso"
      >
        <XIcon className="w-4 h-4" />
      </button>
    </div>
  )
}