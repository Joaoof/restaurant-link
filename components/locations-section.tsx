import Image from "next/image"

const locations = [
  {
    name: "Centro",
    address: "Rua das Flores, 123 - Centro",
    hours: "Seg a Sab, 18h - 00h",
    image: "/images/store-centro.jpg",
    mapsUrl: "https://maps.google.com/?q=Rua+das+Flores+123+Centro",
  },
  {
    name: "Jardins",
    address: "Av. Brasil, 456 - Jardins",
    hours: "Seg a Dom, 18h - 01h",
    image: "/images/store-jardins.jpg",
    mapsUrl: "https://maps.google.com/?q=Av+Brasil+456+Jardins",
  },
  {
    name: "Praia",
    address: "Rua do Mar, 789 - Praia Grande",
    hours: "Qui a Dom, 17h - 23h",
    image: "/images/store-praia.jpg",
    mapsUrl: "https://maps.google.com/?q=Rua+do+Mar+789+Praia+Grande",
  },
]

function MapPinIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary shrink-0" aria-hidden="true">
      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary shrink-0" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}

function NavigationIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0" aria-hidden="true">
      <polygon points="3 11 22 2 13 21 11 13 3 11" />
    </svg>
  )
}

export function LocationsSection() {
  return (
    <section className="px-4 pb-10">
      <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-foreground text-center mb-5">
        {"Nossas unidades"}
      </h2>
      <div className="flex flex-col gap-4 max-w-md mx-auto">
        {locations.map((loc) => (
          <a
            key={loc.name}
            href={loc.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative rounded-xl overflow-hidden border border-border bg-card transition-all hover:border-primary/50 active:scale-[0.98]"
          >
            <div className="relative w-full aspect-[16/9]">
              <Image
                src={loc.image}
                alt={`Unidade ${loc.name} do Zezao Lanches`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 512px) 100vw, 448px"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
            </div>
            <div className="relative px-5 pb-4 -mt-10">
              <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-foreground mb-2">
                {loc.name}
              </h3>
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center gap-2 text-muted-foreground text-xs">
                  <MapPinIcon />
                  <span>{loc.address}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground text-xs">
                  <ClockIcon />
                  <span>{loc.hours}</span>
                </div>
              </div>
              <div className="flex items-center gap-1.5 mt-3 text-primary text-xs font-medium">
                <NavigationIcon />
                <span>{"Ver no Google Maps"}</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
