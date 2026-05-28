import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '@/constants/navigation';

/**
 * Cabeçalho principal da aplicação com navegação responsiva.
 * Utiliza o estado de abertura do menu mobile para alternar entre ícones.
 */
export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-28 md:h-28">
          {/* Logo */}
          <div className="flex-shrink-0 h-full -mx-4 sm:-mx-6 lg:-mx-8">
            <a href="#home" className="flex items-center gap-4 h-full">
              <img
                src="/images/hero-logo.png"
                alt="Cai Cai Balão"
                className="h-full w-auto max-w-[220px] md:max-w-[260px] object-contain"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-3 items-center">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-4 py-3 text-base md:text-lg font-semibold text-gray-700 hover:text-sky-600 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
            aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-3">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-4 py-3 text-base font-medium text-gray-700 hover:text-sky-600 hover:bg-sky-50 rounded transition-colors"
                onClick={closeMobileMenu}
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
