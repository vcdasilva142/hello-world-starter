import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative w-full max-w-7xl mx-auto z-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center py-16 md:py-28 px-4 md:px-8">
      {/* Coluna Esquerda: Textos e Botões */}
      <div className="flex flex-col space-y-6 text-left">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-5 py-1.5 rounded-full text-sm font-normal uppercase tracking-wide w-fit">
          🐾 AMOR, SAÚDE E CARINHO PARA O SEU MELHOR AMIGO
        </div>
          <h1 className="text-4xl md:text-6xl font-normal uppercase tracking-tight text-foreground leading-tight">
          O MELHOR CUIDADO QUE O SEU PET MERECE!
        </h1>
          <p className="text-lg md:text-xl uppercase text-muted-foreground max-w-lg">
          OFERECEMOS BANHO E TOSA CARINHOSOS, CONSULTAS VETERINÁRIAS COMPLETAS E ESPAÇO DE HOSPEDAGEM CONFORTÁVEL COM ACOMPANHAMENTO INTEGRAL.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <Button size="lg" className="text-base uppercase font-normal px-8 py-6 rounded-2xl shadow-lg shadow-primary/20 hover:shadow-xl transition-all bg-primary text-primary-foreground">
            Agendar Atendimento
          </Button>
            <Button variant="outline" size="lg" className="text-base uppercase font-normal px-8 py-6 rounded-2xl">
            Conhecer Serviços
          </Button>
        </div>
      </div>

      {/* Coluna Direita: Mock de iPhone com contornos redondos ao fundo */}
      <div className="relative flex justify-center items-center w-full py-8">
        <div className="absolute w-60 h-[460px] rounded-[3rem] border border-primary/15 pointer-events-none" />
        <div className="absolute w-72 h-[500px] rounded-[3.6rem] border border-primary/10 pointer-events-none" />
        <div className="absolute w-80 h-[540px] rounded-[4.2rem] border border-primary/5 pointer-events-none" />
        <div className="absolute w-[21rem] h-[570px] rounded-[4.6rem] border border-primary/5 pointer-events-none" />
        <div className="absolute w-96 h-[600px] rounded-[5rem] border border-primary/5 pointer-events-none" />

        <div className="relative bg-card border border-black/10 rounded-[2.6rem] p-3 shadow-2xl shadow-black/20 w-64">
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-6 bg-black rounded-full z-20" />
          <div className="relative overflow-hidden rounded-[2rem]">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Visitor_walking_happy_dog_leash_hoh_campground_camping_pets_d_archuleta_march_05_2015_%2816751947833%29.jpg/1920px-Visitor_walking_happy_dog_leash_hoh_campground_camping_pets_d_archuleta_march_05_2015_%2816751947833%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
              alt="Cão feliz no petshop"
              className="w-full h-[440px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
