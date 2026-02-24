function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.71a8.19 8.19 0 0 0 4.76 1.52v-3.4a4.85 4.85 0 0 1-1-.14z" />
    </svg>
  )
}

interface SocialSectionProps {
  instagram: string
  instagramUrl: string
}

export function SocialSection({ instagram, instagramUrl }: SocialSectionProps) {
  return (
    <section className="px-4 pb-10">
      <div className="flex flex-col items-center gap-4 max-w-md mx-auto">
        <h2 className="font-[var(--font-display)] text-xl font-semibold text-foreground text-center">
          {`Siga ${instagram}`}
        </h2>
        <div className="flex items-center gap-3">
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Siga no Instagram"
            className="flex items-center justify-center w-12 h-12 rounded-full bg-card border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
          >
            <InstagramIcon className="w-5 h-5" />
          </a>
        </div>
        <p className="text-muted-foreground text-xs text-center">
          {instagram}
        </p>
      </div>
    </section>
  )
}
