import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative w-full max-w-7xl mx-auto z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-12 md:py-24 px-4 md:px-8">
      {/* Coluna Esquerda: Textos e Botões */}
      <div className="flex flex-col space-y-6 text-left">
        <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold w-fit">
          🐾 Amor, saúde e carinho para o seu melhor amigo
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground leading-tight">
          O melhor cuidado que o seu pet merece!
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
          Oferecemos banho e tosa carinhosos, consultas veterinárias completas e espaço de hospedagem confortável com acompanhamento integral.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 pt-2">
          <Button size="lg" className="text-base px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all bg-primary text-primary-foreground font-bold">
            Agendar Atendimento
          </Button>
          <Button variant="outline" size="lg" className="text-base px-8 py-6 rounded-xl">
            Conhecer Serviços
          </Button>
        </div>
      </div>

      {/* Coluna Direita: Imagem e Elemento Visual */}
      <div className="relative flex justify-center items-center w-full">
        <div className="absolute -inset-2 bg-gradient-to-r from-primary to-accent opacity-20 blur-2xl rounded-3xl pointer-events-none" />
        <div className="relative bg-card border rounded-3xl p-4 shadow-2xl overflow-hidden max-w-md w-full">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Visitor_walking_happy_dog_leash_hoh_campground_camping_pets_d_archuleta_march_05_2015_%2816751947833%29.jpg/1920px-Visitor_walking_happy_dog_leash_hoh_campground_camping_pets_d_archuleta_march_05_2015_%2816751947833%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail" 
            alt="Cão feliz no petshop"
            className="w-full h-80 object-cover rounded-2xl hover:scale-[1.02] transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  );
}
