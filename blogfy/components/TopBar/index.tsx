import { ReactNode } from 'react';
import Link from 'next/link';

interface TopBarProps {
  title?: string;
  description?: string;
  buttonText?: string;
  backgroundColor?: string;
  buttonHref?: string;
  onButtonClick?: () => void;
  className?: string;
}

export default function TopBar({
  title = "Campanha Indique e Ganhe",
  description = "Indique a EasyJur para colegas e ganhe benefícios exclusivos como acesso premium e descontos.",
  buttonText = "Quero Indicar Agora",
  backgroundColor = "bg-easy-black",
  buttonHref,
  onButtonClick,
  className = ""
}: TopBarProps) {

  const isExternal = !!buttonHref && (
    buttonHref.startsWith('http') ||
    buttonHref.startsWith('//') ||
    buttonHref.startsWith('mailto:') ||
    buttonHref.startsWith('tel:')
  );

  return (
    <div className={`${backgroundColor} text-white py-2 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-center md:text-left">
          <h3 className="font-bold text-sm uppercase tracking-wider">{title}</h3>
          <p className="text-xs opacity-90 max-w-2xl">
            {description}
          </p>
        </div>
        {buttonHref ? (
          isExternal ? (
            <a
              href={buttonHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={buttonText}
              className="bg-white text-easy-red px-4 py-1.5 rounded-full text-xs font-bold hover:bg-opacity-90 transition-all whitespace-nowrap"
            >
              {buttonText}
            </a>
          ) : (
            <Link
              href={buttonHref}
              className="bg-white text-easy-red px-4 py-1.5 rounded-full text-xs font-bold hover:bg-opacity-90 transition-all whitespace-nowrap"
            >
              {buttonText}
            </Link>
          )
        ) : (
          <button
            type="button"
            onClick={onButtonClick}
            className="bg-white text-easy-red px-4 py-1.5 rounded-full text-xs font-bold hover:bg-opacity-90 transition-all whitespace-nowrap"
          >
            {buttonText}
          </button>
        )}
      </div>
    </div>
  );
}