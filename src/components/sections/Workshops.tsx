import SectionImage from '@/components/ui/SectionImage';
import SectionHeader from '@/components/ui/SectionHeader';
import { WORKSHOP_TYPES } from '@/constants/workshops';

/**
 * Seção Oficinas Criativas — apresenta os tipos de oficinas disponíveis.
 */
export default function Workshops() {
  return (
    <section id="workshops" className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <SectionImage src="/images/workshops-activity.png" alt="Oficinas Criativas" />

        <SectionHeader title="Oficinas Criativas">
          <div className="space-y-4 text-gray-700 max-w-3xl mx-auto mb-8">
            <p className="text-lg leading-relaxed">
              Nossas oficinas criativas levam ainda mais encanto para a festa. Levamos toda a estrutura
              necessária e trabalhamos com materiais selecionados e organização cuidadosa, criando um
              momento de calma, expressão e imaginação — onde cada criança produz algo único.
            </p>
            <p className="text-lg leading-relaxed">
              Além de viver a experiência, ela leva para casa a sua própria criação: uma lembrança
              afetiva, autoral e cheia de significado do dia.
            </p>
          </div>

          <a
            href="#quote"
            className="inline-block px-8 py-4 bg-amber-200 hover:bg-amber-300 text-sky-900 font-bold rounded-full button-hover shadow-md"
          >
            Catálogo
          </a>
        </SectionHeader>

        {/* Workshop types grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {WORKSHOP_TYPES.map((workshop) => (
            <div
              key={workshop.name}
              className="bg-gradient-to-br from-sky-50 to-amber-50 p-8 rounded-lg hover:shadow-md transition-all border border-sky-100"
            >
              <div className="text-4xl mb-4">{workshop.icon}</div>
              <h3 className="font-bold text-gray-800 mb-2 text-lg">{workshop.name}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{workshop.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
