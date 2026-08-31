import { MapPin, Clock, Phone, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ContactSection() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Mensagem enviada com sucesso! Entraremos em contato em breve.");
  };

  return (
    <section className="relative w-full max-w-6xl mx-auto z-10 py-16 px-4 md:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Informações de Contato e Localização */}
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold">
              <span>Contato & Endereço</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
              Venha nos fazer uma <span className="text-primary">visita!</span>
            </h2>
            <p className="text-muted-foreground">
              Estamos prontos para receber você e seu pet de braços abertos. Tire suas dúvidas, faça sugestões ou agende sua visita.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-primary/10 text-primary shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-foreground text-base">Endereço</h4>
                <p className="text-muted-foreground text-sm">Av. das Nações Unidas, 1250 - Brooklin, São Paulo - SP</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-primary/10 text-primary shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-foreground text-base">Horário de Funcionamento</h4>
                <p className="text-muted-foreground text-sm">
                  Segunda a Sexta: 08:00 às 19:00<br />
                  Sábados e Feriados: 08:00 às 16:00<br />
                  <span className="text-primary font-medium">Hotelzinho: Atendimento 24h</span>
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-primary/10 text-primary shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-foreground text-base">Telefone & WhatsApp</h4>
                <p className="text-muted-foreground text-sm">(11) 99999-8888 / (11) 3333-4444</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-primary/10 text-primary shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-foreground text-base">E-mail</h4>
                <p className="text-muted-foreground text-sm">contato@petshopamigo.com.br</p>
              </div>
            </div>
          </div>
        </div>

        {/* Formulário de Contato */}
        <Card className="lg:col-span-7 bg-card/80 border-border/60 shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Envie uma mensagem</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">Seu Nome</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="Ex: Maria Silva" 
                    className="w-full p-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:border-primary transition-colors text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">Seu WhatsApp/Telefone</label>
                  <input 
                    type="tel" 
                    required 
                    placeholder="Ex: (11) 99999-9999" 
                    className="w-full p-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:border-primary transition-colors text-sm"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground">Nome do seu Pet & Espécie</label>
                <input 
                  type="text" 
                  placeholder="Ex: Floquinho (Gato)" 
                  className="w-full p-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:border-primary transition-colors text-sm"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground">Mensagem / Dúvida</label>
                <textarea 
                  required 
                  rows={4} 
                  placeholder="Como podemos ajudar você e seu melhor amigo hoje?" 
                  className="w-full p-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:border-primary transition-colors text-sm resize-none"
                />
              </div>

              <Button type="submit" className="w-full font-bold flex items-center justify-center gap-2 py-6 text-base rounded-xl bg-primary text-primary-foreground hover:opacity-90">
                <Send className="w-5 h-5" /> Enviar Mensagem
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
