// lib/restaurants.ts

export const restaurantsData = {
    "1808": {
      name: "1808 Hamburgueria Artesanal",
      subtitle: "Lanches artesanais desde 2018",
      logo: "/202105052240_Qs9g_i.avif",
      heroImage: "/hero.jpg",
      instagram: "@1808hamburgueria",
      instagramUrl: "https://www.instagram.com/1808hamburgueria/",
      locations: [
        {
          name: "São João",
          address: "Av. 1º de Janeiro, 2888 - São João",
          hours: "Seg a Sab, 18h - 00h",
          image: "/{0B6B25D4-1A43-4986-B4A7-3FC04D1A6D44}.png",
          mapsUrl: "https://maps.google.com/?q=Av.+1º+de+Janeiro+2888+Araguaína+TO", // Alerta: Atualizar este link genérico
          phone: "5563992833754",
          whatsappMessage: "Oi! Quero fazer um pedido na unidade São João",
          orderUrl: "https://1808entroncamento.menudino.com/", // Alerta: Aqui está com link do entroncamento
          highlight: true, // Tag de "Mais pedidos"
        },
        {
          name: "Entroncamento",
          address: "Entroncamento, Araguaína - TO",
          hours: "Seg a Dom, 18h - 01h",
          image: "/{2B22EB4B-D4B4-4E88-821D-ED328C057B59}.png",
          mapsUrl: "https://maps.google.com/?q=Entroncamento+Araguaína+TO", // Alerta: Atualizar este link genérico
          phone: "5563992662592",
          whatsappMessage: "Oi! Quero fazer um pedido na unidade Entroncamento",
          orderUrl: "https://1808entroncamento.menudino.com/",
          highlight: false,
        },
        // ADICIONE A TERCEIRA UNIDADE AQUI SE ELA REALMENTE EXISTIR
      ]
    },
    "lu-lanches": {
      name: "Lu Lanches",
      subtitle: "O melhor lanche da cidade",
      logo: "/lu-logo.png",
      heroImage: "/lu-hero.jpg",
      instagram: "@lulanches",
      instagramUrl: "https://www.instagram.com/lulanches/",
      locations: [
        // ... unidades da Lu Lanches
      ]
    }
  }
  
  export type RestaurantSlug = keyof typeof restaurantsData;