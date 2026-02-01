"use client";
import { useState, useEffect, useRef } from 'react';
import { X, Search, ChevronDown, ChevronRight, Home, BookOpen, FileText, Users, CreditCard, Package, Play, Menu, ArrowRight, Building } from 'lucide-react';
import Link from 'next/link';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

interface SubMenuItem {
  title: string;
  href: string;
  isNew?: boolean;
}

interface MenuItem {
  title: string;
  icon: React.ReactNode;
  href?: string;
  badge?: string;
  submenu?: SubMenuItem[];
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const sidebarRef = useRef<HTMLDivElement>(null);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const checkTablet = () => {
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };
    
    checkTablet();
    window.addEventListener('resize', checkTablet);
    return () => window.removeEventListener('resize', checkTablet);
  }, []);

  const menuItems: MenuItem[] = [
    {
      title: 'Home',
      icon: <Home size={20} />,
      href: '/',
    },
    {
      title: 'Artigos',
      icon: <FileText size={20} />,
      submenu: [
        { title: 'Direito Civil', href: '/artigos/direito-civil' },
        { title: 'Direito Trabalhista', href: '/artigos/direito-trabalhista' },
        { title: 'Direito Penal', href: '/artigos/direito-penal' },
        { title: 'Direito Empresarial', href: '/artigos/direito-empresarial' },
        { title: 'Direito de Família', href: '/artigos/direito-familia' },
        { title: 'Ver todos', href: '/artigos' },
      ]
    },
    {
      title: 'Conteúdos',
      icon: <BookOpen size={20} />,
      submenu: [
        { title: 'Cursos Online', href: '/conteudos/cursos', isNew: true },
        { title: 'Guias Práticos', href: '/conteudos/guias' },
        { title: 'E-books', href: '/conteudos/ebooks' },
        { title: 'Planilhas', href: '/conteudos/planilhas' },
        { title: 'Videoaulas', href: '/conteudos/videos', isNew: true },
      ]
    },
    {
      title: 'Materiais',
      icon: <Package size={20} />,
      submenu: [
        { title: 'Modelos de Documentos', href: '/materiais/modelos' },
        { title: 'Jurisprudências', href: '/materiais/jurisprudencias' },
        { title: 'Petições', href: '/materiais/peticoes' },
        { title: 'Contratos', href: '/materiais/contratos' },
      ]
    },
    {
      title: 'Planos',
      icon: <CreditCard size={20} />,
      href: '/planos',
      badge: 'Ofertas Ativas',
    },
    {
      title: 'A EasyJur',
      icon: <Building size={20} />,
      submenu: [
        { title: 'Sobre Nós', href: '/sobre-nos' },
        { title: 'Fale Conosco', href: '/contato' },
        { title: 'Trabalhe Conosco', href: '/trabalhe-conosco' },
        { title: 'Manifesto EasyJur', href: '/manifesto' },
        { title: 'Suporte', href: '/suporte' },
        { title: 'Central de Aprendizagem', href: '/aprendizagem' },
      ]
    },
    {
      title: 'Depoimentos',
      icon: <Play size={20} />,
      href: '/depoimentos',
    }
  ];

  const toggleSubmenu = (title: string) => {
    setExpandedItems(prev => 
      prev.includes(title) 
        ? prev.filter(item => item !== title)
        : [...prev, title]
    );
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log('Searching for:', searchQuery);
    }
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  return (
    <>
   
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-50 transition-opacity duration-300 lg:hidden ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      />

   
      <div
        ref={sidebarRef}
        className={`fixed top-0 right-0 h-full w-full max-w-sm md:max-w-md bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >

        <div className="bg-white border-b border-gray-100 p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <img 
                src="/brand/logo-easyjur.avif" 
                alt="EasyJur" 
                className="h-8 object-contain"
              />
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-easy-gray-primary"
              aria-label="Fechar menu"
            >
              <X size={24} />
            </button>
          </div>

   
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              placeholder="Buscar conteúdo..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 pl-12 text-sm text-easy-black placeholder-gray-400 focus:outline-none focus:border-easy-red focus:bg-white transition-colors"
            />
            <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-easy-red text-white p-1.5 rounded-md hover:bg-red-600 transition-colors"
            >
              <ArrowRight size={16} />
            </button>
          </form>
        </div>

  
        <nav className="flex-1 overflow-y-auto p-4 bg-white">
          <ul className="space-y-1">
            {menuItems.map((item, index) => (
              <li key={index}>
                {item.href ? (
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors group ${
                      item.badge ? 'justify-start' : ''
                    }`}
                  >
                    <span className="text-easy-gray-primary group-hover:text-easy-red transition-colors">
                      {item.icon}
                    </span>
                    <span className="font-medium text-easy-black group-hover:text-easy-red transition-colors">
                      {item.title}
                    </span>
                    {item.badge && (
                      <span className="bg-easy-red text-white text-xs px-2 py-1 rounded-full font-bold">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                ) : (
                  <button
                    onClick={() => toggleSubmenu(item.title)}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors group"
                  >
                    <span className="text-easy-gray-primary group-hover:text-easy-red transition-colors">
                      {item.icon}
                    </span>
                    <span className="flex-1 text-left font-medium text-easy-black group-hover:text-easy-red transition-colors">
                      {item.title}
                    </span>
                    {expandedItems.includes(item.title) ? (
                      <ChevronDown size={16} className="text-easy-gray-primary" />
                    ) : (
                      <ChevronRight size={16} className="text-easy-gray-primary" />
                    )}
                  </button>
                )}

               
                {item.submenu && expandedItems.includes(item.title) && (
                  <ul className="mt-1 ml-4 space-y-1">
                    {item.submenu.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <Link
                          href={subItem.href}
                          onClick={onClose}
                          className="flex items-center justify-between px-4 py-2 rounded-md hover:bg-gray-50 transition-colors group"
                        >
                          <span className="text-sm text-easy-gray-primary group-hover:text-easy-black transition-colors">
                            {subItem.title}
                          </span>
                          {subItem.isNew && (
                            <span className="bg-easy-green text-white text-xs px-2 py-0.5 rounded-full font-bold">
                              Novo
                            </span>
                          )}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="p-4 border-t border-gray-100">
          <div className="bg-easy-red from-easy-red to-red-600 rounded-xl p-4 text-white">
            <h3 className="font-bold text-lg mb-2">Teste Grátis</h3>
            <p className="text-sm opacity-90 mb-4">
              Acesso a todos os conteúdos por 7 dias sem compromisso.
            </p>
            <button className="w-full bg-white text-easy-red font-bold py-2.5 rounded-lg hover:bg-gray-50 transition-colors">
              Começar Teste
            </button>
          </div>
        </div>
      </div>
    </>
  );
}