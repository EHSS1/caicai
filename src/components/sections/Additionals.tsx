import SectionImage from '@/components/ui/SectionImage';
import SectionHeader from '@/components/ui/SectionHeader';
import { ADDITIONAL_ITEMS } from '@/constants/additionals';

/**
 * Seção Adicionais — apresenta os itens extras disponíveis para contratação.
 */
export default function Additionals() {
  return (
    <section id="additionals" className="py-16 px-4 bg-gradient-to-b from-white to-sky-50">
      <div className="max-w-6xl mx-auto">
        <SectionImage src="/images/additionals-scene.png" alt="Adicionais" />

        <SectionHeader title="Adicionais">
          <div className="space-y-4 text-gray-700 max-w-3xl mx-auto mb-12">
            <p className="text-lg leading-relaxed">
              Nossos adicionais enriquecem a festa com mais possibilidades de brincar e interagir.
            </p>
            <p className="text-lg leading-relaxed">
              Complementam a brinquedoteca e criam um cenário ainda mais completo, bonito e acolhedor
              para as crianças.
            </p>
          </div>
        </SectionHeader>

        {/* Additionals grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {ADDITIONAL_ITEMS.map((item) => (
            <div
              key={item.name}
              className="bg-white p-6 rounded-lg border-2 border-sky-100 hover:border-sky-300 hover:shadow-md transition-all group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                {item.emoji}
              </div>
              <h3 className="font-bold text-gray-800 group-hover:text-sky-600 transition-colors">
                {item.name}
              </h3>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-700 mb-6 text-lg">
            Combine os adicionais para criar a festa perfeita para sua celebração!
          </p>
          <a
            href="#quote"
            className="inline-block px-8 py-4 bg-amber-200 hover:bg-amber-300 text-sky-900 font-bold rounded-full button-hover shadow-md"
          >
            Solicitar Orçamento
          </a>
        </div>
      </div>
    </section>
  );
}
