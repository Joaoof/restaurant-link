const menuCategories = [
  {
    icon: "flame",
    label: "Smash Burgers",
    items: ["Zezao Classico", "Duplo Bacon", "Frango Crispy", "Veggie Burger"],
  },
  {
    icon: "utensils",
    label: "Porcoes",
    items: ["Batata Frita", "Onion Rings", "Nuggets", "Mandioca Frita"],
  },
  {
    icon: "icecream",
    label: "Sobremesas",
    items: ["Milk Shake", "Brownie", "Sundae", "Churros"],
  },
  {
    icon: "beer",
    label: "Bebidas",
    items: ["Refrigerante", "Suco Natural", "Cerveja Artesanal", "Agua"],
  },
]

function CategoryIcon({ type }: { type: string }) {
  const base = "w-4 h-4 text-primary"
  switch (type) {
    case "flame":
      return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={base} aria-hidden="true">
          <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
        </svg>
      )
    case "utensils":
      return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={base} aria-hidden="true">
          <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" /><path d="M7 2v20" /><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
        </svg>
      )
    case "icecream":
      return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={base} aria-hidden="true">
          <path d="m7 11 4.08 10.35a1 1 0 0 0 1.84 0L17 11" /><path d="M17 7A5 5 0 0 0 7 7" /><path d="M17 7a2 2 0 0 1 0 4H7a2 2 0 0 1 0-4" />
        </svg>
      )
    case "beer":
      return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={base} aria-hidden="true">
          <path d="M17 11h1a3 3 0 0 1 0 6h-1" /><path d="M9 12v6" /><path d="M13 12v6" /><path d="M14 7.5c-1 0-1.44.5-3 .5s-2-.5-3-.5-1.72.5-2.5.5a2.5 2.5 0 0 1 0-5c.78 0 1.57.5 2.5.5S9.44 2 11 2s2 1.5 3 1.5 1.72-.5 2.5-.5a2.5 2.5 0 0 1 0 5c-.78 0-1.5-.5-2.5-.5Z" /><path d="M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8" />
        </svg>
      )
    default:
      return null
  }
}

export function MenuSection() {
  return (
    <section className="px-4 pb-10">
      <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-foreground text-center mb-5">
        {"Cardapio"}
      </h2>
      <div className="grid grid-cols-2 gap-3 max-w-md mx-auto">
        {menuCategories.map((cat) => (
          <div
            key={cat.label}
            className="rounded-xl bg-card border border-border p-4 transition-colors hover:border-primary/30"
          >
            <div className="flex items-center gap-2 mb-3">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/15">
                <CategoryIcon type={cat.icon} />
              </div>
              <h3 className="font-semibold text-foreground text-sm">{cat.label}</h3>
            </div>
            <ul className="flex flex-col gap-1.5">
              {cat.items.map((item) => (
                <li
                  key={item}
                  className="text-muted-foreground text-xs leading-relaxed"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="text-center text-muted-foreground text-xs mt-4 max-w-md mx-auto">
        {"Cardapio completo com precos disponiveis pelo WhatsApp."}
      </p>
    </section>
  )
}
