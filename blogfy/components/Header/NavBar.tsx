"use client";
import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown, Menu, X, ExternalLink, RefreshCw, Calendar } from 'lucide-react';

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [news, setNews] = useState<any[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [loading, setLoading] = useState(true);
    const navLinkStyle = "flex items-center gap-1 font-semibold text-easy-black hover:text-easy-red transition-colors py-7 cursor-pointer text-sm";

    const loadNews = useCallback(async () => {
        setLoading(true);
        try {
            const response = await fetch('/api/rss');
            const data = await response.json();
            if (data.items) setNews(data.items);
        } catch (err) {
            console.error("Erro ao sincronizar:", err);
        } finally {
            setLoading(false);
        }
    }, []);


    useEffect(() => {
        loadNews();
    }, [loadNews]);


    useEffect(() => {
        if (news.length === 0 || loading) return;
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % news.length);
        }, 6000);
        return () => clearInterval(interval);
    }, [news, loading]);

    return (
        <nav className="sticky top-0 w-full bg-easy-white border-b border-easy-gray-secondary/20 shadow-sm z-40">

            <div className="max-w-7xl mx-auto px-4 md:px-6 relative">
                <div className="flex justify-between items-center h-20">


                    <Link href="/" className="flex items-center">
                        <Image
                            src="/brand/logo-easyjur.avif"
                            alt="EasyJur Logo"
                            width={180}
                            height={32}
                            priority
                            className="h-8 object-contain"
                        />
                    </Link>


                    <div className="hidden lg:flex items-center gap-6 h-full">
                        <Link href="/" className={navLinkStyle}>Home</Link>


                        <div className="group h-full flex items-center">
                            <div className={navLinkStyle}>
                                Artigos <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />
                            </div>


                            <div className="absolute top-20 inset-x-4 md:inset-x-6 bg-easy-white border border-easy-gray-secondary/20 shadow-2xl rounded-b-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                                <div className="p-12 grid grid-cols-12 gap-4 items-center">

                                    <div className="col-span-3 pr-10">
                                        <h3 className="text-[26px] font-bold text-easy-black leading-[1.1] mb-4">
                                            Navegue nos artigos por categorias
                                        </h3>
                                        <p className="text-easy-gray-primary text-sm leading-relaxed mb-6">
                                            Tudo o que você precisa saber para se manter atualizado no mercado jurídico.
                                        </p>
                                        <Link href="/artigos" className="group/link flex items-center gap-2 text-easy-red font-bold text-sm">
                                            Ver todos os artigos
                                            <ExternalLink size={14} className="group-hover:translate-x-1 transition-transform" />
                                        </Link>
                                    </div>


                                    <div className="col-span-9 grid grid-cols-3 gap-x-12 pt-2">
                                        <ul className="space-y-4 text-[15px] font-medium text-easy-gray-primary">
                                            <li><Link href="#" className="hover:text-easy-red transition-colors">Direito Ambiental</Link></li>
                                            <li><Link href="#" className="hover:text-easy-red transition-colors">Direito Administrativo</Link></li>
                                            <li><Link href="#" className="hover:text-easy-red transition-colors">Direito Civil</Link></li>
                                            <li><Link href="#" className="hover:text-easy-red transition-colors">Direito Contitucional</Link></li>
                                            <li><Link href="#" className="hover:text-easy-red transition-colors">Direito de Família</Link></li>
                                            <li><Link href="#" className="hover:text-easy-red transition-colors">Direito do Consumidor</Link></li>
                                            <li><Link href="#" className="hover:text-easy-red transition-colors">Direito Eleitoral</Link></li>
                                        </ul>
                                        <ul className="space-y-4 text-[15px] font-medium text-easy-gray-primary">
                                            <li><Link href="#" className="hover:text-easy-red transition-colors">Direito Empresarial</Link></li>
                                            <li><Link href="#" className="hover:text-easy-red transition-colors">Direito Imobiliário</Link></li>
                                            <li><Link href="#" className="hover:text-easy-red transition-colors">Direito Internacional</Link></li>
                                            <li><Link href="#" className="hover:text-easy-red transition-colors">Direito Médico</Link></li>
                                            <li><Link href="#" className="hover:text-easy-red transition-colors">Direito Penal</Link></li>
                                            <li><Link href="#" className="hover:text-easy-red transition-colors">Direito Previdenciário</Link></li>
                                            <li><Link href="#" className="hover:text-easy-red transition-colors">Processual Civil</Link></li>
                                        </ul>
                                        <ul className="space-y-4 text-[15px] font-medium text-easy-gray-primary">
                                            <li><Link href="#" className="hover:text-easy-red transition-colors">Direito Trabalhista</Link></li>
                                            <li><Link href="#" className="hover:text-easy-red transition-colors">Direito Tributário</Link></li>
                                            <li><Link href="#" className="hover:text-easy-red transition-colors">EasyJur</Link></li>
                                            <li><Link href="#" className="hover:text-easy-red transition-colors">Jurisprudência</Link></li>
                                            <li><Link href="#" className="hover:text-easy-red transition-colors">Ferramentas e Materiais</Link></li>
                                            <li><Link href="#" className="hover:text-easy-red transition-colors">Organização e Produtividade</Link></li>
                                            <li><Link href="#" className="hover:text-easy-red transition-colors">Direito Bancário</Link></li>
                                            <li><Link href="#" className="hover:text-easy-red transition-colors">Direito Social</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <Link href="/planos" className={navLinkStyle}>
                            Planos
                        </Link>


                        <div className="group h-full flex items-center">
                            <div className={navLinkStyle}>
                                Conteúdos <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />
                            </div>
                            <div className="absolute top-20 inset-x-4 md:inset-x-6 bg-easy-white border border-easy-gray-secondary/20 shadow-2xl rounded-b-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                                <div className="grid grid-cols-12">

                                    <div className="col-span-7 grid grid-cols-3 gap-8 p-10 border-r border-easy-gray-secondary/20">
                                        <div className="space-y-4">
                                            <h4 className="font-bold text-xs text-easy-red uppercase tracking-widest">Jurídico</h4>
                                            <ul className="space-y-3 text-sm text-easy-gray-primary">
                                                <li className="hover:translate-x-1 transition-transform"><Link href="#" className="hover:text-easy-red">Doutrina</Link></li>
                                                <li className="hover:translate-x-1 transition-transform"><Link href="#" className="hover:text-easy-red">Modelos</Link></li>
                                                <li className="hover:translate-x-1 transition-transform"><Link href="#" className="hover:text-easy-red">Prática Cível</Link></li>
                                            </ul>
                                        </div>
                                        <div className="space-y-4">
                                            <h4 className="font-bold text-xs text-easy-red uppercase tracking-widest">Gestão</h4>
                                            <ul className="space-y-3 text-sm text-easy-gray-primary">
                                                <li className="hover:translate-x-1 transition-transform"><Link href="#" className="hover:text-easy-red">Produtividade</Link></li>
                                                <li className="hover:translate-x-1 transition-transform"><Link href="#" className="hover:text-easy-red">Financeiro</Link></li>
                                                <li className="hover:translate-x-1 transition-transform"><Link href="#" className="hover:text-easy-red">Marketing</Link></li>
                                            </ul>
                                        </div>
                                        <div className="space-y-4">
                                            <h4 className="font-bold text-xs text-easy-red uppercase tracking-widest">Tecnologia</h4>
                                            <ul className="space-y-3 text-sm text-easy-gray-primary">
                                                <li className="hover:translate-x-1 transition-transform"><Link href="#" className="hover:text-easy-red">Inteligência Artificial</Link></li>
                                                <li className="hover:translate-x-1 transition-transform"><Link href="#" className="hover:text-easy-red">Software Jurídico</Link></li>
                                                <li className="hover:translate-x-1 transition-transform"><Link href="#" className="hover:text-easy-red">Segurança</Link></li>
                                            </ul>
                                        </div>
                                    </div>


                                    <div className="col-span-5 bg-easy-gray-secondary/5 p-10">
                                        <div className="flex items-center justify-between mb-6">
                                            <h3 className="font-bold text-easy-black text-lg">Notícias Mundo Jurídico</h3>
                                            <button
                                                onClick={loadNews}
                                                className="flex items-center gap-2 text-[10px] font-bold text-easy-gray-primary hover:text-easy-red transition-colors bg-easy-white px-3 py-1.5 rounded-full border border-easy-gray-secondary/20 shadow-sm"
                                            >
                                                {loading ? <RefreshCw size={12} className="animate-spin" /> : <RefreshCw size={12} />}
                                                SINCRONIZAR
                                            </button>
                                        </div>

                                        <div className="relative h-48 bg-easy-white rounded-2xl border border-easy-gray-secondary/20 shadow-sm overflow-hidden group/card">
                                            {news.length > 0 ? (
                                                news.map((item, index) => (
                                                    <a
                                                        key={index}
                                                        href={item.link}
                                                        target="_blank"
                                                        className={`absolute inset-0 p-6 flex flex-col justify-between transition-all duration-500 ease-in-out ${index === currentIndex ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
                                                            }`}
                                                    >
                                                        <div className="space-y-2">
                                                            <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-easy-red/10 text-easy-red uppercase">
                                                                STJ • Oficial
                                                            </span>
                                                            <h4 className="font-bold text-easy-black text-sm leading-snug line-clamp-3 group-hover/card:text-easy-red transition-colors">
                                                                {item.title}
                                                            </h4>
                                                        </div>

                                                        <div className="flex items-center justify-between text-[11px] text-easy-gray-primary font-medium">
                                                            <div className="flex items-center gap-1">
                                                                <Calendar size={12} />
                                                                {new Date(item.pubDate).toLocaleDateString('pt-BR')}
                                                            </div>
                                                            <div className="flex items-center gap-1 text-easy-red">
                                                                Ler notícia <ExternalLink size={10} />
                                                            </div>
                                                        </div>
                                                    </a>
                                                ))
                                            ) : (
                                                <div className="flex items-center justify-center h-full text-easy-gray-primary text-sm">
                                                    {loading ? "Buscando dados no STJ..." : "Nenhuma notícia encontrada."}
                                                </div>
                                            )}
                                        </div>


                                        <div className="flex gap-2 mt-4 justify-center">
                                            {news.map((_, i) => (
                                                <button
                                                    key={i}
                                                    onClick={() => setCurrentIndex(i)}
                                                    className={`h-1.5 transition-all rounded-full ${i === currentIndex ? "w-6 bg-easy-red" : "w-2 bg-easy-gray-secondary/30"}`}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="group h-full flex items-center">
                            <div className={navLinkStyle}>
                                Materiais <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />
                            </div>
                            <div className="absolute top-20 inset-x-4 md:inset-x-6 bg-easy-white border border-easy-gray-secondary/20 shadow-2xl rounded-b-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                                <div className="p-10 grid grid-cols-6 gap-6">
                                    {['Cursos', 'Guias Práticos', 'E-books', 'Planilhas', 'Jurisprudências', 'Modelos'].map((cat) => (
                                        <div key={cat}>
                                            <h4 className="font-bold text-sm text-easy-black border-b border-easy-red pb-2 mb-3">{cat}</h4>
                                            <ul className="space-y-1 text-xs text-easy-gray-primary">
                                                {[...Array(5)].map((_, i) => (
                                                    <li key={i} className="hover:text-easy-red transition-all"><Link href="#">Link Material {i + 1}</Link></li>
                                                ))}
                                                <li className="pt-1 font-bold text-easy-red italic hover:underline"><Link href="#">Ver todos</Link></li>
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>


                        <div className="group h-full flex items-center">
                            <div className={navLinkStyle}>
                                A EasyJur <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />
                            </div>
                            <div className="absolute top-20 inset-x-4 md:inset-x-6 bg-easy-white border border-easy-gray-secondary/20 shadow-2xl rounded-b-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                                <div className="p-10 grid grid-cols-12 gap-8">
                                    <div className="col-span-4 flex flex-col gap-2 border-r border-easy-gray-secondary/20 pr-8">
                                        {['Trabalhe Conosco', 'Manifesto EasyJur', 'Fale Conosco', 'Suporte', 'Central de Aprendizagem'].map(link => (
                                            <Link key={link} href="#" className="text-sm font-medium text-easy-gray-primary hover:text-easy-red transition-colors py-1">
                                                {link}
                                            </Link>
                                        ))}
                                    </div>
                                    <div className="col-span-4">
                                        <h4 className="font-bold text-sm mb-4 text-easy-gray-primary">O que falam de nós</h4>
                                        <div className="aspect-video bg-easy-gray-secondary/10 rounded-xl flex items-center justify-center text-xs text-easy-gray-primary border border-easy-gray-secondary/20">
                                            [Slider Depoimentos Vídeo]
                                        </div>
                                    </div>
                                    <div className="col-span-4">
                                        <h4 className="font-bold text-sm mb-4 text-easy-gray-primary">Depoimentos</h4>
                                        <div className="p-6 bg-easy-white rounded-xl border border-easy-red/20 italic text-sm text-easy-black shadow-sm">
                                            "A EasyJur mudou nossa rotina jurídica..."
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <button className="lg:hidden p-2 text-easy-black" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Abrir Menu">
                        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>


            {isMobileMenuOpen && (
                <div className="lg:hidden bg-easy-white border-t border-easy-gray-secondary/20 p-6 space-y-4 shadow-xl">
                    <Link href="/" className="block font-bold text-easy-black" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
                    <Link href="/planos" className="block font-bold text-easy-red border-b border-easy-gray-secondary/20 pb-2" onClick={() => setIsMobileMenuOpen(false)}>Planos</Link>
                    <div className="font-bold text-easy-red border-b border-easy-gray-secondary/20 pb-2">Artigos</div>
                    <div className="font-bold text-easy-red border-b border-easy-gray-secondary/20 pb-2">Materiais</div>
                </div>
            )}
        </nav>
    );
}