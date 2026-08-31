import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-background/80 border-b border-border/40 shadow-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 md:px-8 py-4">
        <div className="flex items-center gap-2 font-bold text-xl text-foreground">
          <span className="text-2xl">🐾</span> PetShop Amigo
        </div>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium text-muted-foreground">
          <a href="#hero" className="hover:text-primary transition-colors">Início</a>
          <a href="#servicos" className="hover:text-primary transition-colors">Serviços</a>
          <a href="#produtos" className="hover:text-primary transition-colors">Produtos</a>
          <a href="#depoimentos" className="hover:text-primary transition-colors">Depoimentos</a>
          <a href="#contato" className="hover:text-primary transition-colors">Contato</a>
        </nav>
        <Button size="sm" className="rounded-xl font-bold bg-primary text-primary-foreground">
          Agendar
        </Button>
      </div>
    </header>
  );
}
