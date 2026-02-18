export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full border-t bg-background py-6 mt-auto">
      <div className="container max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-4 text-xs text-muted-foreground">
        
        {/* Bloco Legal (Esquerda no Desktop) */}
        <div className="text-center md:text-left">
          <p>
            &copy; {currentYear} 1080 Araguaína. Todos os direitos reservados.
          </p>
        </div>

        {/* Bloco Técnico (Direita no Desktop) */}
        <div className="flex items-center gap-1 opacity-80 hover:opacity-100 transition-opacity">
          <span>Desenvolvido por</span>
          <a 
            href="https://joaoof.com.br" 
            target="_blank" 
            rel="noopener noreferrer"
            className="font-semibold text-foreground hover:text-primary transition-colors"
          >
            Joaoof
          </a>
        </div>

      </div>
    </footer>
  )
}