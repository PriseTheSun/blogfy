import Image from 'next/image';

type Post = {
    slug: string;
    title: string;
    description?: string;
    date?: string;
    category?: string;
    author?: string;
    thumbnail?: string;
};

function formatDate(date?: string) {
    if (!date) return '';
    try {
        return new Date(date).toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' });
    } catch (e) {
        return date;
    }
}

export default function Hero({ posts }: { posts: Post[] }) {
    const main = posts[0];
    const others = posts.slice(1, 5);
    const topRight = others[0];
    const bottom = others.slice(1, 3);

    return (
        <section className="max-w-7xl mx-auto px-6 py-16">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                <article className="relative rounded-2xl overflow-hidden group col-span-1 md:col-span-6 h-80 md:h-140 bg-gray-200 transform-gpu transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                    {main?.thumbnail && (
                        <Image src={main.thumbnail} alt={main.title} fill className="object-cover" />
                    )}

                    <div className="absolute inset-0 bg-linear-to-t from-black/90 to-transparent p-6 md:p-8 flex flex-col justify-end transition-all duration-300 group-hover:from-black/95">
                        <span className="bg-easy-red text-white text-[11px] font-medium inline-flex w-auto max-w-max whitespace-nowrap px-2 py-0.5 rounded-full mb-3 border border-easy-red/20">{main?.category ?? 'Direito'}</span>
                        <h2 className="text-2xl md:text-4xl text-white font-semibold leading-tight">{main?.title}</h2>
                        <p className="text-white/90 mt-3 max-w-2xl text-sm sm:text-base">{main?.description}</p>

                        <div className="mt-6 flex items-center gap-3 text-white/90 text-sm">
                            <Image src={main?.thumbnail ?? '/images/CEO_Vinicius_Maques.avif'} alt={main?.author ?? 'Autor'} width={40} height={40} className="rounded-full object-cover" />
                            <div>
                                <div className="font-medium">{main?.author}</div>
                                <div className="text-xs">{formatDate(main?.date)}</div>
                            </div>
                        </div>
                    </div>
                </article>

                <div className="col-span-1 md:col-span-6 flex flex-col gap-6 md:h-140">
                    {topRight && (
                        <article className="relative rounded-xl overflow-hidden group h-80 md:h-70 bg-gray-200 transform-gpu transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                            {topRight.thumbnail && <Image src={topRight.thumbnail} alt={topRight.title} fill className="object-cover" />}
                            <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent p-4 md:p-6 flex flex-col justify-end transition-all duration-300 group-hover:from-black/95">
                                <span className="bg-easy-red text-white text-[11px] font-medium inline-flex w-auto max-w-max whitespace-nowrap px-2 py-0.5 rounded-full mb-2 border border-easy-red/20">{topRight.category}</span>
                                <h3 className="text-white font-semibold text-base md:text-lg leading-tight">{topRight.title}</h3>
                                <p className="text-white/80 text-sm mt-2 line-clamp-2">{topRight.description}</p>
                                <div className="text-white/80 text-xs mt-2 flex items-center justify-between">
                                    <div>{topRight.author}</div>
                                    <div>{formatDate(topRight.date)}</div>
                                </div>
                            </div>
                        </article>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:h-65">
                        {bottom.map((post) => (
                            <article key={post.slug} className="relative rounded-xl overflow-hidden group h-80 md:h-full bg-gray-200 transform-gpu transition-transform duration-300 hover:scale-105 hover:shadow-md">
                                {post.thumbnail && <Image src={post.thumbnail} alt={post.title} fill className="object-cover" />}
                                <div className="absolute inset-0 bg-black/70 p-4 sm:p-3 flex flex-col justify-end transition-all duration-300 group-hover:bg-black/80">
                                    <span className="bg-easy-red text-white text-[11px] font-medium inline-flex w-auto max-w-max whitespace-nowrap px-2 py-0.5 rounded-full mb-2 border border-easy-red/20">{post.category}</span>
                                    <h3 className="text-white font-semibold text-sm sm:text-sm leading-tight">{post.title}</h3>
                                    <div className="text-white/80 text-xs mt-2 flex items-center justify-between">
                                        <div>{post.author}</div>
                                        <div>{formatDate(post.date)}</div>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
