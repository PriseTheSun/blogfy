import Header from "@/components/Header";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* O Header precisa ser chamado aqui */}
      <Header />

      {/* Conteúdo da página (vazio por enquanto) */}
      <div className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h1 className="text-2xl text-zinc-400">Conteúdo da Home começará aqui.</h1>
      </div>
    </main>
  );
}