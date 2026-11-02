import {
  ArrowRight,
  CalendarCheck,
  CheckCircle2,
  Heart,
  PawPrint,
  ShieldCheck,
  Sparkles,
  Stethoscope,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import DogCarousel from "@/components/DogCarousel";

const highlights = [
  { icon: Sparkles, label: "Banho & tosa", detail: "Cuidado com carinho" },
  { icon: Stethoscope, label: "Saúde pet", detail: "Atenção especializada" },
  { icon: ShieldCheck, label: "Bem-estar", detail: "Segurança em primeiro lugar" },
];

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative isolate w-full overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl md:left-1/3 md:h-[30rem] md:w-[30rem]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-1/3 -z-10 h-64 w-64 rounded-full bg-primary/5 blur-3xl"
      />

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-4 py-16 md:grid-cols-2 md:gap-10 md:px-8 md:py-24 lg:gap-16 lg:py-28">
        <div className="flex flex-col items-start text-left">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary shadow-sm shadow-primary/5">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/15">
              <PawPrint className="h-3.5 w-3.5" aria-hidden="true" />
            </span>
            Um cuidado especial para cada pet
          </div>

          <h1 className="max-w-2xl text-4xl font-extrabold leading-[1.08] tracking-tight text-foreground sm:text-5xl md:text-5xl lg:text-6xl">
            Seu melhor amigo merece{" "}
            <span className="relative inline-block text-primary">
              todo amor
              <svg
                aria-hidden="true"
                viewBox="0 0 220 12"
                className="absolute -bottom-1 left-0 h-2.5 w-full text-primary/35"
                preserveAspectRatio="none"
              >
                <path
                  d="M3 8 C55 2, 145 2, 217 7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            {" "}e cuidado.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-muted-foreground sm:text-lg">
            Do banho e tosa aos cuidados veterinários, estamos aqui para deixar
            a vida do seu pet mais saudável, feliz e cheia de momentos especiais.
          </p>

          <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <a href="#contato" className="inline-flex">
              <Button
                size="lg"
                className="h-12 w-full rounded-xl bg-primary px-6 text-base font-bold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30 sm:w-auto"
              >
                <CalendarCheck className="mr-1 h-5 w-5" aria-hidden="true" />
                Agendar atendimento
                <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
              </Button>
            </a>
            <a href="#servicos" className="inline-flex">
              <Button
                variant="outline"
                size="lg"
                className="h-12 w-full rounded-xl border-border/80 bg-card/60 px-6 text-base font-semibold transition-all hover:border-primary/40 hover:bg-primary/5 sm:w-auto"
              >
                Conheça os serviços
              </Button>
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-primary" aria-hidden="true" />
              Atendimento atencioso
            </span>
            <span className="inline-flex items-center gap-2">
              <Heart className="h-4 w-4 fill-primary/15 text-primary" aria-hidden="true" />
              Amor em cada detalhe
            </span>
          </div>

          <div className="mt-10 grid w-full grid-cols-1 gap-3 border-t border-border/70 pt-6 sm:grid-cols-3 md:gap-4">
            {highlights.map(({ icon: Icon, label, detail }) => (
              <div key={label} className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-inset ring-primary/10">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-bold text-foreground">{label}</span>
                  <span className="mt-0.5 block text-xs leading-5 text-muted-foreground">{detail}</span>
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto flex w-full max-w-lg items-center justify-center py-8 md:py-4">
          <div
            aria-hidden="true"
            className="absolute inset-x-8 inset-y-6 rounded-[3rem] bg-primary/10 blur-2xl"
          />
          <div
            aria-hidden="true"
            className="absolute h-[25rem] w-[25rem] max-w-full rounded-full border border-primary/10"
          />
          <div
            aria-hidden="true"
            className="absolute h-[21rem] w-[21rem] max-w-[90%] rounded-full border border-dashed border-primary/20"
          />

          <div className="relative w-64 rotate-1 rounded-[2.8rem] border border-white/10 bg-card p-2.5 shadow-2xl shadow-primary/10 ring-1 ring-black/10 transition-transform duration-500 hover:rotate-0 sm:w-72">
            <div className="absolute left-1/2 top-3 z-20 h-5 w-24 -translate-x-1/2 rounded-full bg-black/90" />
            <div className="overflow-hidden rounded-[2.2rem]">
              <DogCarousel />
            </div>
            <div className="absolute -bottom-4 -left-8 flex items-center gap-3 rounded-2xl border border-border/70 bg-card/95 px-4 py-3 shadow-xl backdrop-blur-md sm:-left-12">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-primary">
                <Heart className="h-5 w-5 fill-current" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-sm font-bold text-foreground">Cuidado de verdade</span>
                <span className="mt-0.5 block text-xs text-muted-foreground">Seu pet em boas mãos</span>
              </span>
            </div>
            <div className="absolute -right-5 top-20 flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/20 bg-card text-primary shadow-lg sm:-right-7">
              <PawPrint className="h-6 w-6" aria-hidden="true" />
            </div>
          </div>

          <div className="absolute right-0 top-2 hidden items-center gap-2 rounded-full border border-border/70 bg-card/90 px-3 py-2 text-xs font-semibold text-foreground shadow-lg backdrop-blur-sm sm:flex md:right-0 lg:right-2">
            <Sparkles className="h-4 w-4 text-primary" aria-hidden="true" />
            Feito com carinho
          </div>
        </div>
      </div>
    </section>
  );
}
