const Index = () => {
  return (
    <div className="relative flex min-h-screen items-center justify-center bg-background overflow-hidden">
      {/* Glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-primary/15 blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] rounded-full bg-accent/20 blur-[80px] pointer-events-none" />

      <div className="relative text-center z-10">
        <img src="https://upload.wikimedia.org/wikipedia/commons/2/2d/Cane_corso_g%C5%82owa_profil_493o.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original" alt="Dog image" className="mt-4 mx-auto max-w-full h-auto rounded-lg" />
        <h1 className="text-4xl font-bold text-foreground">UnkoyPets</h1>
        <p className="mt-2 text-lg text-muted-foreground">Cuidado e amor para seu melhor amigo</p>
      </div>
    </div>
  );
};

export default Index;
