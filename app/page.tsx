import { HeroSection } from "@/components/hero-section"
import { WhatsAppSection } from "@/components/whatsapp-section"
import { LocationsSection } from "@/components/locations-section"
import { MenuSection } from "@/components/menu-section"
import { SocialSection } from "@/components/social-section"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main className="min-h-screen max-w-lg mx-auto">
      <HeroSection />

      {/* Divider */}
      <div className="flex items-center gap-3 px-8 pb-6 max-w-md mx-auto">
        <div className="flex-1 h-px bg-border" />
        <span className="text-muted-foreground text-[10px] uppercase tracking-widest">
          {"Pedido rapido"}
        </span>
        <div className="flex-1 h-px bg-border" />
      </div>

      <WhatsAppSection />

      <LocationsSection />

      <MenuSection />

      <SocialSection />

      <Footer />
    </main>
  )
}
