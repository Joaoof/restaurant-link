import Link from "next/link"
import Image from "next/image"

// --- ÍCONES OTIMIZADOS ---
const CheckIcon = ({ className = "w-5 h-5 text-cyan-400" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="20 6 9 17 4 12" /></svg>
)

const ArrowRightIcon = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
)

export default function PlatformLandingPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 font-sans overflow-x-hidden selection:bg-violet-600 selection:text-white">
      
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/80 backdrop-blur-md">
        <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
          <div className="text-xl font-extrabold tracking-tighter text-slate-900">
            LinkMenu<span className="text-violet-600">.</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 font-medium text-sm text-slate-600">
            <Link href="#recursos" className="hover:text-violet-600 transition-colors">Recursos</Link>
            <Link href="#templates" className="hover:text-violet-600 transition-colors">Exemplos</Link>
            <Link href="#planos" className="hover:text-violet-600 transition-colors">Planos</Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login" className="hidden md:block text-sm font-medium text-slate-600 hover:text-slate-900">
              Entrar
            </Link>
            <Link href="#planos" className="rounded-full bg-violet-600 px-5 py-2 text-sm font-bold text-white hover:bg-violet-700 transition-colors">
              Criar página
            </Link>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative pt-24 pb-20 px-4 text-center flex flex-col items-center">
        {/* Glow de Fundo Simulado */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-violet-400/20 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute top-20 left-1/4 w-[400px] h-[300px] bg-cyan-400/20 blur-[100px] rounded-full pointer-events-none" />

        <h1 className="relative z-10 max-w-4xl font-extrabold text-5xl md:text-7xl tracking-tighter leading-[1.05] text-slate-900 mb-6">
          Seu link na bio pode ser <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-cyan-500">muito mais.</span>
        </h1>
        
        <p className="relative z-10 max-w-2xl text-lg md:text-xl text-slate-600 mb-10 font-medium tracking-tight">
          O único link que o seu restaurante precisa. Centralize cardápios, direcione clientes para o WhatsApp da unidade correta e aumente seus pedidos.
        </p>

        <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4 mb-16">
          <Link href="#planos" className="w-full sm:w-auto rounded-full bg-violet-600 px-8 py-4 text-base font-bold text-white shadow-[0_0_40px_rgba(124,58,237,0.3)] hover:bg-violet-700 hover:scale-105 transition-all duration-300">
            Começar de graça
          </Link>
          
          <div className="flex items-center gap-3 px-4 py-2">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                  {/* Simulando avatares reais com cor sólida para o placeholder */}
                  <div className={`w-full h-full bg-gradient-to-br from-slate-300 to-slate-400`} />
                </div>
              ))}
            </div>
            <div className="flex flex-col text-left">
              <span className="text-sm font-bold text-slate-900 leading-tight">+2.000 locais</span>
              <span className="text-xs text-slate-500 font-medium">já utilizam</span>
            </div>
          </div>
        </div>

        {/* FAIXA DE TEMPLATES (MOCKUPS Simulação) */}
        <div id="templates" className="relative w-full max-w-[100vw] overflow-hidden py-10">
          <div className="flex gap-6 justify-center px-4 min-w-max">
            {/* Mockup 1: Exemplo Hamburgueria (Seu cliente real) */}
            <Link href="/1808" target="_blank" className="group relative w-[280px] h-[550px] bg-zinc-900 rounded-[2.5rem] border-8 border-slate-100 shadow-2xl overflow-hidden flex flex-col hover:-translate-y-4 transition-transform duration-500 cursor-pointer">
              <div className="h-40 bg-[url('/hero.jpg')] bg-cover bg-center opacity-80" />
              <div className="absolute top-32 left-1/2 -translate-x-1/2 w-20 h-20 bg-black rounded-full border-4 border-zinc-900 overflow-hidden">
                 <Image src="/202105052240_Qs9g_i.avif" alt="1808" fill className="object-cover" />
              </div>
              <div className="pt-16 pb-6 px-4 text-center">
                <h3 className="text-white font-bold text-xl">1808 Hamburgueria</h3>
                <p className="text-zinc-400 text-sm mt-1">Lanches artesanais</p>
                <div className="w-full bg-zinc-800 rounded-xl p-3 mt-6 text-white text-sm font-medium">Unidade São João</div>
                <div className="w-full bg-zinc-800 rounded-xl p-3 mt-3 text-white text-sm font-medium">Unidade Entroncamento</div>
              </div>
              <div className="absolute inset-0 bg-violet-600/0 group-hover:bg-violet-600/20 transition-colors flex items-center justify-center">
                <div className="translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all bg-white text-violet-900 font-bold px-6 py-3 rounded-full flex items-center gap-2">Ver página <ArrowRightIcon /></div>
              </div>
            </Link>

            {/* Mockup 2: Açaí Simulação */}
            <div className="relative w-[280px] h-[550px] bg-purple-900 rounded-[2.5rem] border-8 border-slate-100 shadow-xl overflow-hidden flex flex-col translate-y-8">
              <div className="h-40 bg-purple-800" />
              <div className="absolute top-32 left-1/2 -translate-x-1/2 w-20 h-20 bg-purple-500 rounded-full border-4 border-purple-900" />
              <div className="pt-16 pb-6 px-4 text-center opacity-50">
                <div className="h-6 bg-purple-800 rounded w-3/4 mx-auto mb-2" />
                <div className="h-4 bg-purple-800 rounded w-1/2 mx-auto" />
                <div className="w-full bg-purple-800 rounded-xl h-12 mt-6" />
                <div className="w-full bg-purple-800 rounded-xl h-12 mt-3" />
              </div>
            </div>

            {/* Mockup 3: Pizza Simulação */}
            <div className="relative w-[280px] h-[550px] bg-orange-50 rounded-[2.5rem] border-8 border-slate-100 shadow-xl overflow-hidden flex flex-col translate-y-4 hidden md:flex">
              <div className="h-40 bg-orange-200" />
              <div className="absolute top-32 left-1/2 -translate-x-1/2 w-20 h-20 bg-orange-400 rounded-full border-4 border-orange-50" />
              <div className="pt-16 pb-6 px-4 text-center opacity-50">
                <div className="h-6 bg-orange-200 rounded w-3/4 mx-auto mb-2" />
                <div className="h-4 bg-orange-200 rounded w-1/2 mx-auto" />
                <div className="w-full bg-orange-200 rounded-xl h-12 mt-6" />
                <div className="w-full bg-orange-200 rounded-xl h-12 mt-3" />
              </div>
            </div>
          </div>
        </div>
        
        <p className="text-slate-500 font-medium text-sm mt-8">Tudo que o seu negócio precisa no <span className="text-violet-600 font-bold">template perfeito</span></p>
      </section>

      {/* BENTO GRID - FUNCIONALIDADES PRINCIPAIS (Referência Entrai) */}
      <section id="recursos" className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Card 1: Horizontal Largo */}
          <div className="col-span-1 md:col-span-2 bg-violet-600 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-500 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/4" />
            <div className="relative z-10 max-w-lg">
              <h4 className="text-violet-200 font-semibold mb-2">Para quem tem mais de um endereço</h4>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight mb-4">Múltiplas unidades em uma só tela.</h2>
              <p className="text-violet-100/80 text-lg">Acabe com a confusão. O cliente escolhe a loja mais próxima e o pedido cai direto no WhatsApp certo.</p>
            </div>
            {/* Elemento visual do Card 1 */}
            <div className="relative z-10 w-full max-w-sm bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 shadow-2xl">
              <div className="h-10 w-full bg-white rounded-lg mb-3 flex items-center px-4"><div className="w-4 h-4 rounded-full bg-violet-600 mr-3" /><div className="h-3 w-32 bg-slate-200 rounded" /></div>
              <div className="h-10 w-full bg-white rounded-lg flex items-center px-4"><div className="w-4 h-4 rounded-full bg-violet-600 mr-3" /><div className="h-3 w-40 bg-slate-200 rounded" /></div>
            </div>
          </div>

          {/* Card 2: Quadrado */}
          <div className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-100 flex flex-col justify-between">
            <div>
              <h4 className="text-violet-600 font-semibold mb-2">Para quem quer aumentar as vendas</h4>
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 mb-4 leading-tight">Cardápio a um clique.</h2>
              <p className="text-slate-500">Coloque o link do seu sistema de pedidos (Menudino, Goomer, iFood) em destaque. Menos cliques, mais conversão.</p>
            </div>
            <div className="mt-8 flex justify-center">
              <div className="w-full max-w-[250px] bg-white shadow-xl rounded-2xl border border-slate-100 p-4">
                <div className="h-12 w-full bg-violet-600 rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-md">Fazer Pedido Online</div>
              </div>
            </div>
          </div>

          {/* Card 3: Quadrado */}
          <div className="bg-violet-600 rounded-3xl p-8 md:p-12 text-white flex flex-col justify-between relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-violet-900/50 to-transparent" />
            <div className="relative z-10">
              <h4 className="text-violet-200 font-semibold mb-2">Para quem não tem tempo</h4>
              <h2 className="text-3xl font-extrabold tracking-tight mb-4 leading-tight">Configuração instantânea.</h2>
              <p className="text-violet-100/80">Sem sistemas complexos. Você passa os dados, nós entregamos a página pronta e otimizada para o seu delivery.</p>
            </div>
            <div className="relative z-10 mt-8 flex justify-end">
               <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-32 h-32 text-violet-400 opacity-50"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </div>
          </div>

        </div>
      </section>

      {/* GRID DE FUNCIONALIDADES MENORES (3 colunas estilo Entrai) */}
      <section className="border-t border-slate-100 bg-white py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
             <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 mb-4">Tudo o que é importante em um lugar só</h2>
             <p className="text-slate-500 text-lg">Sem enrolação. Apenas o que dá resultado.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 gap-x-8">
            {/* Item 1 */}
            <div>
              <div className="w-12 h-12 rounded-xl bg-violet-100 text-violet-600 flex items-center justify-center mb-4">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">Mapas Diretos</h3>
              <p className="text-slate-500 text-sm leading-relaxed">Integração nativa com Google Maps para os clientes acharem sua loja física sem erro.</p>
            </div>
            {/* Item 2 */}
            <div>
              <div className="w-12 h-12 rounded-xl bg-violet-100 text-violet-600 flex items-center justify-center mb-4">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">Mensagens Prontas</h3>
              <p className="text-slate-500 text-sm leading-relaxed">Links de WhatsApp já configurados com textos do tipo "Quero pedir na unidade X".</p>
            </div>
            {/* Item 3 */}
            <div>
              <div className="w-12 h-12 rounded-xl bg-violet-100 text-violet-600 flex items-center justify-center mb-4">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">Redes Sociais</h3>
              <p className="text-slate-500 text-sm leading-relaxed">Conecte seu Instagram, TikTok e Facebook. Transforme seguidores em compradores.</p>
            </div>
            {/* Item 4 */}
            <div>
              <div className="w-12 h-12 rounded-xl bg-violet-100 text-violet-600 flex items-center justify-center mb-4">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">Carregamento Rápido</h3>
              <p className="text-slate-500 text-sm leading-relaxed">Criado com Next.js. Abre instantaneamente no 4G do seu cliente, sem demoras.</p>
            </div>
            {/* Item 5 */}
            <div>
              <div className="w-12 h-12 rounded-xl bg-violet-100 text-violet-600 flex items-center justify-center mb-4">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">Botões de Destaque</h3>
              <p className="text-slate-500 text-sm leading-relaxed">Sinalize a unidade que mais vende ou crie escassez com tags exclusivas.</p>
            </div>
            {/* Item 6 */}
            <div>
              <div className="w-12 h-12 rounded-xl bg-violet-100 text-violet-600 flex items-center justify-center mb-4">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">Personalização Total</h3>
              <p className="text-slate-500 text-sm leading-relaxed">Cores, logo, capas. O link na bio terá a mesma cara e essência da sua marca.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PLANOS / PRICING (Branco x Roxo) */}
      <section id="planos" className="bg-slate-50 py-24 border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-slate-900 mb-4">Escolha o plano que melhor se encaixa</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-center">
            
            {/* Plano Grátis (Cartão Branco) */}
            <div className="bg-white rounded-3xl p-8 md:p-10 border border-slate-200 shadow-xl flex flex-col h-full">
              <div className="mb-8">
                <span className="inline-block px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-bold mb-4 uppercase tracking-wider">Básico</span>
                <h3 className="text-3xl font-extrabold text-slate-900">Grátis</h3>
                <p className="text-slate-500 mt-2 font-medium">O essencial para quem está começando agora no digital.</p>
              </div>
              <ul className="space-y-4 flex-1 mb-8">
                <li className="flex items-center gap-3 text-slate-600 font-medium"><CheckIcon className="w-5 h-5 text-violet-600" /> Link padrão</li>
                <li className="flex items-center gap-3 text-slate-600 font-medium"><CheckIcon className="w-5 h-5 text-violet-600" /> 1 unidade de loja</li>
                <li className="flex items-center gap-3 text-slate-600 font-medium"><CheckIcon className="w-5 h-5 text-violet-600" /> Link direto para o WhatsApp</li>
              </ul>
              <button className="w-full py-4 rounded-xl bg-violet-100 text-violet-700 font-bold hover:bg-violet-200 transition-colors">
                Criar conta grátis
              </button>
            </div>

            {/* Plano Pro (Cartão Roxo Vibrante - Referência direta à imagem) */}
            <div className="bg-violet-600 rounded-3xl p-8 md:p-10 shadow-[0_20px_50px_rgba(109,40,217,0.3)] flex flex-col h-full relative overflow-hidden transform md:scale-105 border border-violet-500">
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-cyan-400 opacity-20 blur-[80px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
              
              <div className="relative z-10 mb-8">
                <span className="inline-block px-3 py-1 bg-white/20 text-white rounded-full text-xs font-bold mb-4 uppercase tracking-wider">Profissional</span>
                <div className="flex items-baseline gap-2">
                  <h3 className="text-4xl font-extrabold text-white">R$ 49</h3>
                  <span className="text-violet-200 font-medium">/mês</span>
                </div>
                <p className="text-violet-100 mt-2 font-medium">Sem taxas em cima dos seus pedidos. Domine o seu delivery.</p>
              </div>
              
              <ul className="relative z-10 space-y-4 flex-1 mb-8">
                <li className="flex items-center gap-3 text-white font-medium"><CheckIcon /> Link exclusivo (/seunome)</li>
                <li className="flex items-center gap-3 text-white font-medium"><CheckIcon /> Até 5 unidades/filiais</li>
                <li className="flex items-center gap-3 text-white font-medium"><CheckIcon /> Configuração Maps e WhatsApp</li>
                <li className="flex items-center gap-3 text-white font-medium"><CheckIcon /> Destaque "Mais Pedidos"</li>
                <li className="flex items-center gap-3 text-white font-medium"><CheckIcon /> Suporte VIP no WhatsApp</li>
              </ul>
              
              <Link 
                href="https://wa.me/55SEUNUMERO?text=Quero%20assinar%20o%20plano%20PRO"
                target="_blank"
                className="relative z-10 w-full py-4 rounded-xl bg-cyan-400 text-slate-900 font-extrabold hover:bg-cyan-300 transition-colors text-center"
              >
                Assinar Pro
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ BÁSICO (Perguntas Comuns) */}
      <section className="py-24 max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 mb-10">Perguntas comuns</h2>
        
        <div className="space-y-4">
          {/* Usando <details> nativo do HTML para máxima performance e zero dependências */}
          <details className="group border-b border-slate-200 pb-4 cursor-pointer">
            <summary className="flex justify-between items-center font-bold text-lg text-slate-800 list-none">
              Vocês cobram taxa por pedido?
              <span className="transition group-open:rotate-180">
                <svg fill="none" height="24" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="24"><polyline points="6 9 12 15 18 9"/></svg>
              </span>
            </summary>
            <p className="text-slate-500 mt-3 font-medium">Não. Diferente do iFood, nós somos apenas a ponte de contato. O cliente cai direto no seu WhatsApp ou sistema de cardápio próprio. Todo o lucro é 100% seu.</p>
          </details>

          <details className="group border-b border-slate-200 pb-4 cursor-pointer">
            <summary className="flex justify-between items-center font-bold text-lg text-slate-800 list-none">
              Eu mesmo configuro minha página?
              <span className="transition group-open:rotate-180">
                <svg fill="none" height="24" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="24"><polyline points="6 9 12 15 18 9"/></svg>
              </span>
            </summary>
            <p className="text-slate-500 mt-3 font-medium">No plano PRO, nossa equipe pega as fotos, logo e links da sua lanchonete e deixa tudo pronto. Entregamos a página "chave na mão".</p>
          </details>

          <details className="group border-b border-slate-200 pb-4 cursor-pointer">
            <summary className="flex justify-between items-center font-bold text-lg text-slate-800 list-none">
              Como funciona o botão de WhatsApp?
              <span className="transition group-open:rotate-180">
                <svg fill="none" height="24" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="24"><polyline points="6 9 12 15 18 9"/></svg>
              </span>
            </summary>
            <p className="text-slate-500 mt-3 font-medium">Nós deixamos uma mensagem pré-pronta. Quando o cliente clica na "Unidade Centro", por exemplo, seu atendente recebe: "Oi! Quero fazer um pedido na unidade Centro". Isso corta a confusão pela metade.</p>
          </details>
        </div>
      </section>

      {/* BOTTOM CTA (Banner Roxo) */}
      <section className="px-6 pb-24 max-w-5xl mx-auto">
        <div className="bg-violet-600 rounded-[2.5rem] p-10 md:p-16 text-center flex flex-col items-center justify-center relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-cyan-400 opacity-30 blur-[80px] rounded-full" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-violet-400 opacity-50 blur-[80px] rounded-full" />
          
          <h2 className="relative z-10 text-3xl md:text-5xl font-extrabold tracking-tighter text-white mb-8 leading-tight max-w-2xl">
            Construa o link que o seu restaurante sempre precisou.
          </h2>
          <Link 
            href="#planos"
            className="relative z-10 px-8 py-4 rounded-full bg-cyan-400 text-slate-900 font-extrabold text-lg hover:bg-cyan-300 hover:scale-105 transition-all duration-300 shadow-xl"
          >
            Começar agora
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-100 py-10 bg-white">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="font-extrabold tracking-tighter text-slate-900 text-xl">
            LinkMenu<span className="text-violet-600">.</span>
          </div>
          <div className="text-slate-400 text-sm font-medium">
            © {new Date().getFullYear()} Todos os direitos reservados.
          </div>
          <div className="flex gap-4">
             <a href="#" className="text-slate-400 hover:text-violet-600"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg></a>
          </div>
        </div>
      </footer>
    </main>
  )
}