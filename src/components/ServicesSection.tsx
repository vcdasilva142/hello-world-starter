import { Sparkles, Stethoscope, Home, GraduationCap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "Banho e Tosa",
    description: "Higienização completa, cortes da raça ou tesoura, hidratação e muito carinho para deixar seu pet cheiroso e estiloso.",
    icon: Sparkles,
    badge: "Mais Popular",
  },
  {
    title: "Consulta Veterinária",
    description: "Atendimento clínico especializado, exames laboratoriais, vacinação e acompanhamento preventivo completo.",
    icon: Stethoscope,
    badge: "Cuidados Médicos",
  },
  {
    title: "Hotelzinho Pet",
    description: "Hospedagem confortável com ambiente climatizado, monitoramento 24h, atividades recreativas e momentos de lazer.",
    icon: Home,
    badge: "Conforto 24h",
  },
  {
    title: "Adestramento",
    description: "Treinamento comportamental positivo para cães de todas as idades, focado no bem-estar e convivência harmoniosa.",
    icon: GraduationCap,
    badge: "Educação Pet",
  },
];

export default function ServicesSection() {
  return (
    <section className="relative w-full max-w-7xl mx-auto z-10 py-16 px-4 md:px-8">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground">
          Nossos <span className="text-primary">Serviços</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Tudo o que seu companheiro precisa em um só lugar, com profissionais apaixonados por animais e estrutura completa.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <Card key={index} className="bg-card/80 border-border/60 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 shadow-lg flex flex-col justify-between">
              <CardHeader className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-2xl bg-primary/10 text-primary w-fit">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground">
                    {service.badge}
                  </span>
                </div>
                <CardTitle className="text-xl font-bold text-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
