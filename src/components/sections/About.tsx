import SectionImage from '@/components/ui/SectionImage';
import SectionHeader from '@/components/ui/SectionHeader';

const values = [
  {
    icon: '🌱',
    title: 'Sustentabilidade',
    description: 'Brinquedos de madeira e ferro, longe dos eletrônicos e infláveis tradicionais.',
  },
  {
    icon: '👧',
    title: 'Protagonismo da Criança',
    description: 'Estimulamos a autonomia e o livre brincar com responsabilidade.',
  },
  {
    icon: '✨',
    title: 'Estética e Afeto',
    description: 'Ambientes belamente montados com monitoria especializada e acolhedora.',
  },
];

/**
 * Seção Sobre Nós — apresenta a identidade e valores da empresa.
 */
export default function About() {
  return (
    <section id="about" className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <SectionImage src="/images/about-children.png" alt="Crianças brincando" />

        <SectionHeader title="Sobre nós">
          <div className="space-y-6 text-gray-700 max-w-3xl mx-auto">
            <p className="text-lg leading-relaxed">
              A Cai Cai Balão cria espaços onde a infância acontece com leveza, beleza e imaginação.
              Somos pioneiras em Brasília no aluguel de brinquedos de madeira e transformamos eventos
              em ambientes seguros, estéticos e cheios de afeto.
            </p>
            <p className="text-lg leading-relaxed">
              Além da brinquedoteca, oferecemos oficinas criativas que envolvem, acalmam e despertam
              a curiosidade e criatividade das crianças.
            </p>
            <p className="text-lg leading-relaxed">
              Com cuidado no detalhe e monitoria especializada e acolhedora, proporcionamos experiências
              memoráveis para os pequenos e tranquilidade para os adultos.
            </p>
          </div>
        </SectionHeader>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {values.map((value) => (
            <div
              key={value.title}
              className="text-center p-8 rounded-lg bg-sky-50 hover:bg-sky-100 transition-colors"
            >
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="font-bold text-sky-900 mb-3 text-lg">{value.title}</h3>
              <p className="text-gray-700 text-sm leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
