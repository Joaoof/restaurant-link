import Image from "next/image"

const MapPinIcon = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
    <circle cx="12" cy="10" r="3" />
  </svg>
)

const ArrowDownIcon = () => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2.5" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className="w-5 h-5 animate-bounce" // Animação de "quicar" na seta
  >
    <path d="M12 5v14" />
    <path d="m19 12-7 7-7-7" />
  </svg>
)

export function HeroSection() {
  return (
    <>
      <section className="relative flex flex-col items-center pt-12 pb-16 px-4 max-w-5xl mx-auto">

        {/* Logo & Título */}
        <div className="flex flex-col items-center gap-4 mb-10 text-center">
          <div className="relative flex items-center justify-center w-24 h-24 rounded-full border-4 border-primary/10 bg-background overflow-hidden shadow-sm">
            <Image src="/202105052240_Qs9g_i.avif" alt="Logo 1808 Hamburgueria Artesanal" fill sizes="96px" className="object-cover" />
          </div>
          <div>
            <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground text-balance">
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
            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-30 animate-ping duration-1000">
              
            </span>
            <button
              className="group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-full bg-emerald-600 px-8 py-3.5 text-base font-bold text-white shadow-[0_4px_14px_0_rgba(5,150,105,0.39)] transition-all duration-300 hover:bg-emerald-700 hover:shadow-[0_6px_20px_rgba(5,150,105,0.23)] hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-emerald-600 w-full sm:w-auto shrink-0"
            >
              <ArrowDownIcon />
              <span className="tracking-wide text-white">Ver nossas unidades</span>
            </button>
          </div>
        </div>

        {/* Rodapé Informativo */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 text-secondary-foreground text-sm font-medium border border-border">
          <MapPinIcon className="w-4 h-4 text-primary shrink-0" />
          <span>3 unidades para te atender</span>
        </div>
      </section>
    </>
  )
}