import { Star, Quote } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const testimonials = [
  {
    name: "Mariana Silva",
    pet: "Bolinha (Shih Tzu)",
    role: "Cliente há 2 anos",
    content: "O atendimento é impecável! O carinho que eles têm com o Bolinha no banho e tosa é visível. Ele entra feliz e sai cheiroso e super tranquilo.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80"
  },
  {
    name: "Ricardo Souza",
    pet: "Thor (Golden Retriever)",
    role: "Cliente há 1 ano",
    content: "Excelente clínica veterinária. O Dr. Henrique foi super atencioso e preciso no diagnóstico do Thor. Confiança total no trabalho de toda a equipe.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80"
  },
  {
    name: "Ana Beatriz",
    pet: "Mingau (Persa)",
    role: "Cliente há 3 anos",
    content: "Deixar o Mingau no hotelzinho foi a melhor decisão para as minhas férias. Recebi fotos diárias, ele foi super paparicado e o espaço é incrivelmente limpo.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="relative w-full max-w-7xl mx-auto z-10 py-16 px-4 md:px-8">
      <div className="text-center space-y-4 mb-12">
        <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mx-auto">
          <Star className="w-4 h-4 fill-primary" />
          <span>Depoimentos</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground">
          O que dizem os <span className="text-primary">Pet Parents</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          A felicidade dos nossos clientes (e de seus companheiros de quatro patas) é a nossa maior recompensa.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, idx) => (
          <Card key={idx} className="bg-card/80 border-border/60 hover:border-primary/30 transition-all duration-300 shadow-xl relative">
            <div className="absolute top-6 right-6 text-primary/10">
              <Quote className="w-12 h-12" />
            </div>
            <CardHeader className="flex flex-row items-center gap-4 pb-4">
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
              />
              <div>
                <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                <p className="text-xs text-muted-foreground">{testimonial.role} • <span className="text-primary font-medium">{testimonial.pet}</span></p>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex text-amber-500">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-500 stroke-none" />
                ))}
              </div>
              <p className="text-muted-foreground text-sm italic leading-relaxed">
                "{testimonial.content}"
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
