import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { getSortedPostsData } from '@/lib/posts';

export default function Home() {
  const posts = getSortedPostsData();

  return (
    <main className="min-h-screen bg-white">
      <Header />

      <Hero posts={posts.slice(0, 5)} />

      <div className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold text-zinc-700">Últimas publicações</h2>
        {/* Aqui você pode listar o restante dos posts em forma de feed */}
      </div>
    </main>
  );
}