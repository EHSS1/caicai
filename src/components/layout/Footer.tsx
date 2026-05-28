import { Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { NAV_ITEMS } from '@/constants/navigation';

/**
 * Rodapé da aplicação com informações de contato, links rápidos e redes sociais.
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-sky-900 to-sky-950 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-amber-200 rounded-full flex items-center justify-center">
                <span className="text-xl">🎈</span>
              </div>
              <h3 className="font-bold text-lg">Cai Cai Balão</h3>
            </div>
            <p className="text-sky-100 text-sm leading-relaxed">
              Brinquedotecas criativas e experiências inesquecíveis para celebrações especiais em Brasília.
            </p>
          </div>

          {/* Quick Links — gerados a partir da mesma fonte do Header */}
          <div>
            <h3 className="font-bold text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-sky-100">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="hover:text-amber-200 transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contato</h3>
            <div className="space-y-3 text-sky-100 text-sm">
              <div className="flex items-center gap-2">
                <Phone size={18} />
                <span>+55 (61) XXXX-XXXX</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={18} />
                <span>contato@caicaibalao.com.br</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={18} />
                <span>Brasília, DF</span>
              </div>
              <div className="flex items-center gap-2 mt-4">
                <a
                  href="https://instagram.com/caicaibalao_festas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-200 transition-colors"
                  aria-label="Instagram da Cai Cai Balão"
                >
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-sky-700 pt-8">
          <p className="text-center text-sky-200 text-sm">
            © {currentYear} Cai Cai Balão. Todos os direitos reservados. Desenvolvido com ❤️ para a infância.
          </p>
        </div>
      </div>
    </footer>
  );
}
