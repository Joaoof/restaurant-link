// app/[slug]/page.tsx
import { notFound } from "next/navigation"
import { restaurantsData, RestaurantSlug } from "@/lib/restaurante"
import { HeroSection } from "@/components/hero-section"
import { WhatsAppSection } from "@/components/whatsapp-section"
import { LocationsSection } from "@/components/locations-section"
import { SocialSection } from "@/components/social-section"
import { Footer } from "@/components/footer"
import { WelcomeToast } from "@/components/welcome-start"

// 1. Atualizamos a interface para refletir que params agora é uma Promise
interface PageProps {
  params: Promise<{
    slug: string
  }>
}

// 2. Transformamos a função em async
export default async function RestaurantPage({ params }: PageProps) {
  // 3. Aguardamos a resolução da Promise antes de extrair o slug
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  // Busca os dados do restaurante com base na URL
  const restaurant = restaurantsData[slug as RestaurantSlug]

  // Se a rota não existir (ex: /restaurante-inexistente), retorna página 404
  if (!restaurant) {
    notFound()
  }

  return (
    <main className="min-h-screen max-w-lg mx-auto">
      <HeroSection data={restaurant} />

      <div className="flex items-center gap-3 px-8 pb-6 max-w-md mx-auto">
        <div className="flex-1 h-px bg-border" />
        <span className="text-muted-foreground text-[10px] uppercase tracking-widest">
          {"Pedido rápido"}
        </span>
        <div className="flex-1 h-px bg-border" />
      </div>

      <WhatsAppSection locations={restaurant.locations} />
      <LocationsSection locations={restaurant.locations} />
      <SocialSection instagram={restaurant.instagram} instagramUrl={restaurant.instagramUrl} />
      
      <Footer />
      <WelcomeToast />
    </main>
  )
}