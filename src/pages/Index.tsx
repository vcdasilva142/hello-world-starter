import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="relative flex min-h-screen items-center justify-center bg-background overflow-hidden px-4 md:px-8">
      {/* Glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-primary/15 blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] rounded-full bg-accent/20 blur-[80px] pointer-events-none" />

          <div className="relative w-full max-w-6xl mx-auto z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-12 md:py-24">
        {/* Coluna Esquerda: Textos e Botões */}
        <div className="flex flex-col space-y-6 text-left">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-3 py-1.5 rounded-full text-sm font-semibold w-fit">
            🐾 Seu pet em excelentes mãos
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground leading-tight">
            Cuidado e amor para seu melhor amigo
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
            No UnkoynXPetszadas oferecemos atendimento veterinário de ponta, banho & tosa premium e hotel pet com monitoramento 24h.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <Button size="lg" className="text-base px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
              Agende uma consulta
            </Button>
            <Button variant="outline" size="lg" className="text-base px-8 py-6 rounded-xl">
              Conheça os serviços
            </Button>
          </div>
        </div>

        {/* Coluna Direita: Imagem e Elemento Visual */}
        <div className="relative flex justify-center items-center w-full">
          <div className="absolute -inset-2 bg-gradient-to-r from-primary to-accent opacity-20 blur-2xl rounded-3xl pointer-events-none" />
          <div className="relative bg-card border rounded-3xl p-4 shadow-2xl overflow-hidden max-w-md w-full">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/0/04/Pets_and_how_to_care_for_them_%281921%29_%2814759489366%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original" 
              alt="Pet care illustration" 
              className="w-full h-80 object-cover rounded-2xl hover:scale-[1.02] transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
