import { useEffect, useState } from "react";

const DOG_IMAGE =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Visitor_walking_happy_dog_leash_hoh_campground_camping_pets_d_archuleta_march_05_2015_%2816751947833%29.jpg/1920px-Visitor_walking_happy_dog_leash_hoh_campground_camping_pets_d_archuleta_march_05_2015_%2816751947833%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail";

const slides = [
  {
    src: DOG_IMAGE,
    alt: "Cão feliz passeando na natureza",
    position: "object-center",
    label: "Passeios ao ar livre",
    tint: "bg-primary/25 mix-blend-multiply",
  },
  {
    src: DOG_IMAGE,
    alt: "Cão feliz em primeiro plano",
    position: "object-left",
    label: "Banho e tosa",
    tint: "bg-accent/30 mix-blend-multiply",
  },
  {
    src: DOG_IMAGE,
    alt: "Detalhe do cão aproveitando o passeio",
    position: "object-right",
    label: "Saúde e carinho",
    tint: "bg-primary/20 mix-blend-multiply",
  },
];

export default function DogCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [paused]);

  return (
    <div
      className="relative h-[440px] w-full overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {slides.map((slide, i) => {
        const active = i === index;
        return (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${active ? "opacity-100" : "opacity-0"}`}
            aria-hidden={!active}
          >
            <img
              src={slide.src}
              alt={slide.alt}
              className={`w-full h-full object-cover ${slide.position} ${active ? "hero-carousel-zoom" : ""}`}
            />
            <div className={`absolute inset-0 ${slide.tint}`} />
            <div className="absolute bottom-5 left-4">
              <span className="inline-block bg-black/45 backdrop-blur-sm text-white text-xs font-medium px-3 py-1.5 rounded-full">
                {slide.label}
              </span>
            </div>
          </div>
        );
      })}

      <div className="absolute bottom-4 right-4 z-10 flex items-center gap-1.5">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${i === index ? "w-6 bg-white" : "w-1.5 bg-white/50 hover:bg-white/80"}`}
            aria-label={`Ir para o slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
