"use client";
import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown, Menu, X, ExternalLink, RefreshCw, Calendar, BookOpen, FileText, Book, File, Gavel, Clipboard } from 'lucide-react';

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [news, setNews] = useState<any[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [loading, setLoading] = useState(true);
    const [isPaused, setIsPaused] = useState(false);
    const navLinkStyle = "flex items-center gap-1 font-semibold text-easy-black hover:text-easy-red transition-colors py-7 cursor-pointer text-sm";

    // Ícones para cada categoria
    const categoryIcon = (cat: string) => {
        switch (cat) {
            case 'Cursos':
                return <BookOpen size={16} className="text-easy-red" />;
            case 'Guias Práticos':
                return <FileText size={16} className="text-easy-red" />;
            case 'E-books':
                return <Book size={16} className="text-easy-red" />;
            case 'Planilhas':
                return <File size={16} className="text-easy-red" />;
            case 'Jurisprudências':
                return <Gavel size={16} className="text-easy-red" />;
            case 'Modelos':
                return <Clipboard size={16} className="text-easy-red" />;
            default:
                return <Book size={16} className="text-easy-red" />;
        }
    };

    // Materiais em destaque (sempre exibir os 3 mais recentes - substitua pela fonte real quando disponível)
    const featuredMaterials = [
        { id: 1, type: 'E-book', title: 'Guia Prático de Petições', meta: 'Gratuito • Baixe agora', href: '#' },
        { id: 2, type: 'Curso', title: 'Curso Intensivo: Prática Cível', meta: '50% off para assinantes', href: '#' },
        { id: 3, type: 'Planilha', title: 'Planilha de Cálculos Trabalhistas', meta: 'Modelo editável • Baixe já', href: '#' },
    ];

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
        if (news.length === 0 || loading || isPaused) return;
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % news.length);
        }, 6000);
        return () => clearInterval(interval);
    }, [news, loading, isPaused]);

    // Ensure currentIndex is valid when news length changes
    useEffect(() => {
        if (currentIndex >= news.length) setCurrentIndex(0);
    }, [news, currentIndex]);

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
                                                        rel="noreferrer"
                                                        tabIndex={0}
                                                        aria-label={`Abrir notícia: ${item.title}`}
                                                        onMouseEnter={() => setIsPaused(true)}
                                                        onMouseLeave={() => setIsPaused(false)}
                                                        onFocus={() => setIsPaused(true)}
                                                        onBlur={() => setIsPaused(false)}
                                                        className={`absolute inset-0 p-4 flex gap-4 items-stretch transition-all duration-500 ease-in-out ${index === currentIndex ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
                                                            }`}
                                                    >
                                                        {/* Image / Placeholder */}
                                                        <div className="shrink-0 w-32 h-full rounded-lg overflow-hidden bg-easy-gray-secondary/10 border border-easy-gray-secondary/20">
                                                            {item.image ? (
                                                                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                                                            ) : (
                                                                <div className="flex h-full w-full flex-col items-center justify-center gap-2 p-3 bg-easy-gray-secondary/5">
                                                                    <svg width="36" height="28" viewBox="0 0 36 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden focusable="false">
                                                                        <rect width="36" height="28" rx="4" fill="#F3F4F6" />
                                                                        <path d="M6 20l5-6 4 5 6-8 6 9" stroke="#D1D5DB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                                    </svg>
                                                                    <span className="text-xs text-easy-gray-primary">Sem imagem</span>
                                                                </div>
                                                            )}
                                                        </div>

                                                        {/* Content */}
                                                        <div className="flex-1 flex flex-col justify-between">
                                                            <div>
                                                                <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-easy-red/10 text-easy-red uppercase">
                                                                    STJ • Oficial
                                                                </span>

                                                                <h4 className="font-bold text-easy-black text-sm leading-snug line-clamp-3 mt-2">
                                                                    {item.title}
                                                                </h4>

                                                                <p className="text-[13px] text-easy-gray-primary mt-2 line-clamp-2">
                                                                    {item.snippet || 'Sem descrição disponível.'}
                                                                </p>
                                                            </div>

                                                            <div className="flex items-center justify-between text-[11px] text-easy-gray-primary font-medium mt-3">
                                                                <div className="flex items-center gap-1">
                                                                    <Calendar size={12} />
                                                                    {item.pubDate ? new Date(item.pubDate).toLocaleDateString('pt-BR') : ''}
                                                                </div>
                                                                <div className="flex items-center gap-2 text-easy-red">
                                                                    <span className="text-xs font-bold">Ler</span>
                                                                    <ExternalLink size={12} />
                                                                </div>
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
                                <div className="p-8 grid grid-cols-12 gap-6 items-stretch">

                                    {/* Categories grid */}
                                    <div className="col-span-8 grid grid-cols-3 gap-4">
                                        {['Cursos', 'Guias Práticos', 'E-books', 'Planilhas', 'Jurisprudências', 'Modelos'].map((cat) => (
                                            <div key={cat} className="rounded-xl p-4 bg-easy-white border border-easy-gray-secondary/10 hover:shadow-md transition-shadow duration-200">
                                                <div className="flex items-start gap-3">
                                                    <div className="w-9 h-9 rounded-full bg-easy-gray-secondary/5 flex items-center justify-center text-easy-red font-bold text-sm">
                                                        {categoryIcon(cat)}
                                                    </div>
                                                    <div className="flex-1">
                                                        <h4 className="font-semibold text-sm text-easy-black">{cat}</h4>
                                                        <p className="text-xs text-easy-gray-primary mt-1">Recursos e guias práticos em {cat.toLowerCase()} para apoiar sua rotina jurídica.</p>
                                                    </div>
                                                </div>

                                                <ul className="mt-3 space-y-1 text-xs text-easy-gray-primary">
                                                    {[...Array(3)].map((_, i) => (
                                                        <li key={i} className="hover:text-easy-red transition-colors"><Link href="#">Material {i + 1} de {cat}</Link></li>
                                                    ))}
                                                </ul>

                                                <div className="mt-3">
                                                    <Link href="#" className="inline-flex items-center gap-1 text-easy-red text-xs font-bold hover:underline">Ver todos</Link>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Highlight panel */}
                                    <div className="col-span-4 h-full">
                                        <div className="rounded-xl p-6 bg-easy-red/5 border border-easy-red/10 h-full flex flex-col justify-between">
                                            <div>
                                                <h5 className="font-bold text-sm text-easy-black">Materiais em destaque</h5>
                                                <p className="text-sm text-easy-gray-primary mt-3">Acesse cursos, e-books e guias selecionados pelos nossos especialistas. Conteúdo atualizado semanalmente.</p>

                                                <div className="mt-4 grid grid-cols-1 gap-3">
                                                    {featuredMaterials.map((m) => (
                                                        <Link key={m.id} href={m.href} className="flex items-center gap-3 p-3 bg-easy-white rounded-md border border-easy-gray-secondary/20 hover:shadow-sm transition-shadow">
                                                            <div className="w-12 h-8 bg-easy-gray-secondary/10 rounded-md flex items-center justify-center text-xs text-easy-gray-primary">{m.type}</div>
                                                            <div className="text-xs">
                                                                <div className="font-medium text-easy-black">{m.title}</div>
                                                                <div className="text-xs text-easy-gray-primary">{m.meta}</div>
                                                            </div>
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="mt-4 flex gap-2">
                                                <Link href="#" className="px-3 py-2 bg-easy-red text-white text-xs font-bold rounded-md">Ver Materiais</Link>
                                                <Link href="#" className="px-3 py-2 border border-easy-gray-secondary/20 rounded-md text-xs">Ajuda</Link>
                                            </div>
                                        </div>
                                    </div>

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