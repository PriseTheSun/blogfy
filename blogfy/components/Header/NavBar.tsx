"use client";
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown, Menu, X, ExternalLink } from 'lucide-react';

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Estilo padrão para os links
    const navLinkStyle = "flex items-center gap-1 font-semibold text-easy-black hover:text-easy-red transition-colors py-7 cursor-pointer text-sm";

    return (
        <nav className="sticky top-0 w-full bg-easy-white border-b border-easy-gray-secondary/20 shadow-sm z-40">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <div className="flex justify-between items-center h-20">

                    {/* Logo */}
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

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center gap-6 h-full">
                        <Link href="/" className={navLinkStyle}>Home</Link>

                        {/* 1. ARTIGOS (Megamenu) */}
                        <div className="group static h-full flex items-center">
                            <div className={navLinkStyle}>
                                Artigos <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />
                            </div>
                            <div className="absolute top-20 left-0 w-full bg-easy-white border-t border-easy-gray-secondary/20 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                                <div className="max-w-7xl mx-auto p-10 grid grid-cols-12 gap-8">
                                    <div className="col-span-9 grid grid-cols-3 gap-6">
                                        {[1, 2, 3].map((col) => (
                                            <div key={col} className="flex flex-col gap-3">
                                                <h4 className="font-bold text-easy-black border-b border-easy-red pb-2">Categoria Jurídica {col}</h4>
                                                <ul className="space-y-2 text-sm text-easy-gray-primary">
                                                    {[...Array(6)].map((_, i) => (
                                                        <li key={i}><Link href="#" className="hover:text-easy-red transition-all">Artigo sobre Direito {i + 1}</Link></li>
                                                    ))}
                                                    <li><Link href="#" className="font-bold text-easy-red hover:underline">Ver todos</Link></li>
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="col-span-3 bg-easy-gray-secondary/5 p-6 rounded-xl border border-easy-gray-secondary/20">
                                        <h4 className="font-bold text-sm text-easy-gray-primary uppercase mb-4">Recomendados</h4>
                                        <div className="h-40 flex items-center justify-center border-2 border-dashed border-easy-gray-secondary rounded-lg text-xs text-easy-gray-primary">
                                            [Slider Recomendados]
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 2. PLANOS (Link Direto - Sem Megamenu) */}
                        <Link href="/planos" className={navLinkStyle}>
                            Planos
                        </Link>

                        {/* 3. CONTEÚDOS (Integração RSS) */}
                        <div className="group static h-full flex items-center">
                            <div className={navLinkStyle}>
                                Conteúdos <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />
                            </div>
                            <div className="absolute top-20 left-0 w-full bg-easy-white border-t border-easy-gray-secondary/20 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                                <div className="max-w-7xl mx-auto p-10 grid grid-cols-12 gap-8">
                                    <div className="col-span-8">
                                        <h4 className="font-bold text-easy-black mb-4 flex items-center gap-2">
                                            Notícias: Gazeta do Povo <ExternalLink size={14} className="text-easy-red" />
                                        </h4>
                                        <div className="grid grid-cols-2 gap-4">
                                            {[1, 2, 3, 4].map(i => (
                                                <div key={i} className="p-4 bg-easy-gray-secondary/5 rounded-lg text-sm hover:bg-easy-gray-secondary/10 transition-colors border border-transparent hover:border-easy-red/20">
                                                    <span className="text-[10px] font-bold text-easy-red uppercase">Gazeta do Povo</span>
                                                    <p className="font-medium text-easy-black mt-1 line-clamp-1">Título da notícia jurídica integrada via RSS...</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="col-span-4 bg-easy-black text-easy-white p-6 rounded-2xl border-l-4 border-easy-red">
                                        <h4 className="font-bold mb-4">Destaques EasyJur</h4>
                                        <div className="h-32 bg-easy-white/10 rounded-lg flex items-center justify-center text-xs border border-easy-white/10">
                                            [Slider Notícias EasyJur]
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 4. MATERIAIS GRATUITOS */}
                        <div className="group static h-full flex items-center">
                            <div className={navLinkStyle}>
                                Materiais <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />
                            </div>
                            <div className="absolute top-20 left-0 w-full bg-easy-white border-t border-easy-gray-secondary/20 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                                <div className="max-w-7xl mx-auto p-10 grid grid-cols-6 gap-6">
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

                        {/* 5. A EASYJUR (Institucional) */}
                        <div className="group static h-full flex items-center">
                            <div className={navLinkStyle}>
                                A EasyJur <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />
                            </div>
                            <div className="absolute top-20 left-0 w-full bg-easy-white border-t border-easy-gray-secondary/20 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                                <div className="max-w-7xl mx-auto p-10 grid grid-cols-12 gap-8">
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

                    {/* Mobile Toggle */}
                    <button className="lg:hidden p-2 text-easy-black" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Abrir Menu">
                        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
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