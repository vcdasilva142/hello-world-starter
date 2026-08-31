import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-card border-t border-border mt-12 py-12 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-muted-foreground z-10">
      <div className="flex flex-col items-center md:items-start gap-2">
        <span className="font-bold text-foreground text-lg">Petshop</span>
        <p>© 2024 Todos os direitos reservados.</p>
      </div>
      <div className="flex gap-6">
        <a href="#services" className="hover:text-primary transition-colors">Serviços</a>
        <a href="#products" className="hover:text-primary transition-colors">Produtos</a>
        <a href="#contact" className="hover:text-primary transition-colors">Contato</a>
      </div>
    </footer>
  );
}
