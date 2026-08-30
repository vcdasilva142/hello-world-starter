const Index = () => {
  return (
    <div className="relative flex min-h-screen items-center justify-center bg-background overflow-hidden">
      {/* Glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-primary/15 blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] rounded-full bg-accent/20 blur-[80px] pointer-events-none" />

      <div className="relative text-center z-10">
        <h1 className="text-4xl font-bold text-foreground">Teste</h1>
      </div>
    </div>
  );
};

export default Index;
