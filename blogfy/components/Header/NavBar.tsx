"use client";
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown, Menu, X, ExternalLink } from 'lucide-react';

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Estilo padrão para os links do menu principal
    const navLinkStyle = "flex items-center gap-1 font-medium text-zinc-700 hover:text-easyjur-blue-light transition-colors py-7 cursor-pointer";

    return (
        <nav className="sticky top-0 w-full bg-white border-b border-zinc-100 shadow-sm z-40">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <div className="flex justify-between items-center h-20">

                    {/* Logo */}
                    <Link href="/" className="flex items-center">
                        <Image
                            src="/brand/logo-easyjur.avif"
                            alt="EasyJur Logo"
                            width={150}
                            height={40}
                            priority
                            className="object-contain"
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
                            <div className="absolute top-20 left-0 w-full bg-white border-t border-zinc-100 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                                <div className="max-w-7xl mx-auto p-10 grid grid-cols-12 gap-8">
                                    <div className="col-span-9 grid grid-cols-3 gap-6">
                                        {[1, 2, 3].map((col) => (
                                            <div key={col} className="flex flex-col gap-3">
                                                <h4 className="font-bold text-easyjur-blue-dark border-b pb-2">Categoria Jurídica {col}</h4>
                                                <ul className="space-y-2 text-sm text-zinc-600">
                                                    {[...Array(6)].map((_, i) => (
                                                        <li key={i}><Link href="#" className="hover:text-easyjur-blue-light transition-all">Artigo sobre Direito {i + 1}</Link></li>
                                                    ))}
                                                    <li><Link href="#" className="font-bold text-easyjur-blue-light hover:underline">Ver todos</Link></li>
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="col-span-3 bg-easyjur-gray-50 p-6 rounded-xl border border-zinc-100">
                                        <h4 className="font-bold text-sm text-zinc-400 uppercase mb-4">Recomendados</h4>
                                        <div className="h-40 flex items-center justify-center border-2 border-dashed border-zinc-200 rounded-lg text-xs text-zinc-400">
                                            [Slider Recomendados]
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 2. PLANOS */}
                        <div className="group static h-full flex items-center">
                            <div className={navLinkStyle}>
                                Planos <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />
                            </div>
                            <div className="absolute top-20 left-0 w-full bg-white border-t border-zinc-100 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                                <div className="max-w-7xl mx-auto p-10 grid grid-cols-4 gap-6">
                                    {['Standard', 'Growth', 'Growth Plus', 'Premium'].map((plano) => (
                                        <Link href="/planos" key={plano} className="p-6 border border-zinc-100 rounded-2xl hover:border-easyjur-blue-light hover:shadow-lg transition-all bg-white">
                                            <h4 className="font-bold text-xl text-easyjur-blue-dark mb-2">{plano}</h4>
                                            <p className="text-sm text-zinc-500 mb-4">Ideal para escritórios em fase de expansão.</p>
                                            <span className="text-easyjur-blue-light font-bold text-sm">Ver detalhes →</span>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* 3. CONTEÚDOS (Integração RSS) */}
                        <div className="group static h-full flex items-center">
                            <div className={navLinkStyle}>
                                Conteúdos <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />
                            </div>
                            <div className="absolute top-20 left-0 w-full bg-white border-t border-zinc-100 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                                <div className="max-w-7xl mx-auto p-10 grid grid-cols-12 gap-8">
                                    <div className="col-span-8">
                                        <h4 className="font-bold text-easyjur-blue-dark mb-4 flex items-center gap-2">
                                            Notícias: Gazeta do Povo <ExternalLink size={14} />
                                        </h4>
                                        <div className="grid grid-cols-2 gap-4">
                                            {[1, 2, 3, 4].map(i => (
                                                <div key={i} className="p-4 bg-easyjur-gray-50 rounded-lg text-sm hover:bg-zinc-100 transition-colors">
                                                    <span className="text-[10px] font-bold text-easyjur-blue-light uppercase">Gazeta do Povo</span>
                                                    <p className="font-medium text-zinc-800 mt-1 line-clamp-1">Título da notícia jurídica integrada via RSS...</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="col-span-4 bg-easyjur-blue-dark text-white p-6 rounded-2xl">
                                        <h4 className="font-bold mb-4">Destaques EasyJur</h4>
                                        <div className="h-32 bg-white/10 rounded-lg flex items-center justify-center text-xs border border-white/10">
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
                            <div className="absolute top-20 left-0 w-full bg-white border-t border-zinc-100 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                                <div className="max-w-7xl mx-auto p-10 grid grid-cols-6 gap-6">
                                    {['Cursos', 'Guias Práticos', 'E-books', 'Planilhas', 'Jurisprudências', 'Modelos'].map((cat) => (
                                        <div key={cat}>
                                            <h4 className="font-bold text-sm text-easyjur-blue-dark border-b pb-2 mb-3">{cat}</h4>
                                            <ul className="space-y-1 text-xs text-zinc-500">
                                                {[...Array(5)].map((_, i) => (
                                                    <li key={i} className="hover:text-easyjur-blue-light transition-all"><Link href="#">Link Material {i + 1}</Link></li>
                                                ))}
                                                <li className="pt-1 font-bold text-easyjur-blue-light italic hover:underline"><Link href="#">Ver todos</Link></li>
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* 5. A EASYJUR (Institucional) */}
                        <div className="group static h-full flex items-center">
                            <div className={navLinkStyle}>
                                Institucional <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />
                            </div>
                            <div className="absolute top-20 left-0 w-full bg-white border-t border-zinc-100 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                                <div className="max-w-7xl mx-auto p-10 grid grid-cols-12 gap-8">
                                    <div className="col-span-4 flex flex-col gap-2 border-r border-zinc-100 pr-8">
                                        {['Trabalhe Conosco', 'Manifesto EasyJur', 'Fale Conosco', 'Suporte', 'Central de Aprendizagem'].map(link => (
                                            <Link key={link} href="#" className="text-sm font-medium text-zinc-600 hover:text-easyjur-blue-light transition-colors py-1">
                                                {link}
                                            </Link>
                                        ))}
                                    </div>
                                    <div className="col-span-4">
                                        <h4 className="font-bold text-sm mb-4 text-zinc-400">O que falam de nós</h4>
                                        <div className="aspect-video bg-zinc-100 rounded-xl flex items-center justify-center text-xs text-zinc-400 border border-zinc-200">
                                            [Slider Depoimentos Vídeo]
                                        </div>
                                    </div>
                                    <div className="col-span-4">
                                        <h4 className="font-bold text-sm mb-4 text-zinc-400">Depoimentos</h4>
                                        <div className="p-6 bg-blue-50 rounded-xl border border-blue-100 italic text-sm text-easyjur-blue-dark">
                                            "A EasyJur mudou nossa rotina jurídica..."
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Toggle */}
                    <button className="lg:hidden p-2 text-zinc-600" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Abrir Menu">
                        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="lg:hidden bg-white border-t border-zinc-100 p-6 space-y-4 shadow-xl">
                    <Link href="/" className="block font-bold" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
                    <div className="font-bold text-easyjur-blue-light border-b pb-2">Planos</div>
                    <div className="font-bold text-easyjur-blue-light border-b pb-2">Artigos</div>
                    <div className="font-bold text-easyjur-blue-light border-b pb-2">Materiais</div>
                </div>
            )}
        </nav>
    );
}