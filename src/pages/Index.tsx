import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ProductsSection from "@/components/ProductsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="relative flex flex-col min-h-screen items-center justify-start bg-background overflow-hidden">
      <Header />
      <div className="w-full flex flex-col items-center justify-start px-4 md:px-8 py-8 space-y-12">
      {/* Glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-primary/15 blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] rounded-full bg-accent/20 blur-[80px] pointer-events-none" />

      <HeroSection />
      <ServicesSection />
      <ProductsSection />
      <TestimonialsSection />
      <ContactSection />
      </div>
    </div>
  );
};

export default Index;
