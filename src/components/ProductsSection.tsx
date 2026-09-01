import { ShoppingCart, Calendar, Tag } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const products = [
  {
    id: 1,
    title: "Ração Premium Cães Adultos 15kg",
    category: "Alimentação",
    originalPrice: "R$ 219,90",
    price: "R$ 179,90",
    badge: "-18% OFF",
    image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=500&auto=format&fit=crop&q=80",
    type: "buy"
  },
  {
    id: 2,
    title: "Pacote Banho + Hidratação Ouro",
    category: "Estética",
    originalPrice: "R$ 130,00",
    price: "R$ 89,90",
    badge: "Oferta Especial",
    image: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=500&auto=format&fit=crop&q=80",
    type: "book"
  },
  {
    id: 3,
    title: "Arranhador Torre com Cama para Gatos",
    category: "Acessórios",
    originalPrice: "R$ 189,90",
    price: "R$ 149,90",
    badge: "Destaque",
    image: "https://images.unsplash.com/photo-1545249390-6bdfa286032f?w=500&auto=format&fit=crop&q=80",
    type: "buy"
  },
  {
    id: 4,
    title: "Check-up Preventivo + Vacina V10",
    category: "Saúde",
    originalPrice: "R$ 250,00",
    price: "R$ 199,00",
    badge: "Popular",
    image: "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=500&auto=format&fit=crop&q=80",
    type: "book"
  }
];

export default function ProductsSection() {
  return (
    <section className="relative w-full max-w-7xl mx-auto z-10 py-16 px-4 md:px-8">
      <div className="text-center space-y-4 mb-12">
        <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mx-auto">
          <Tag className="w-4 h-4" />
          <span>Promoções da Semana</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground">
          Produtos & Destaques em <span className="text-primary">Oferta</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Aproveite os melhores descontos em rações, acessórios e pacotes promocionais de estética e saúde para o seu pet.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="bg-card/90 border-border/60 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 shadow-lg flex flex-col justify-between overflow-hidden group">
            <div>
              <div className="relative overflow-hidden h-48 bg-muted">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-3 right-3 bg-primary text-primary-foreground text-xs font-bold px-2.5 py-1 rounded-full shadow-md">
                  {product.badge}
                </span>
              </div>
              <CardHeader className="p-4 pb-2">
                <span className="text-xs font-semibold text-primary tracking-wider">
                  {product.category}
                </span>
                <CardTitle className="text-base font-bold text-foreground line-clamp-2 min-h-[3rem]">
                  {product.title}
                </CardTitle>
              </CardHeader>
            </div>
            <CardContent className="p-4 pt-0 space-y-4">
              <div className="flex items-baseline space-x-2">
                <span className="text-2xl font-extrabold text-foreground">{product.price}</span>
                <span className="text-sm text-muted-foreground line-through">{product.originalPrice}</span>
              </div>
              <Button className="w-full font-bold flex items-center justify-center gap-2">
                {product.type === "buy" ? (
                  <>
                    <ShoppingCart className="w-4 h-4" /> Comprar Agora
                  </>
                ) : (
                  <>
                    <Calendar className="w-4 h-4" /> Agendar Pacote
                  </>
                )}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
