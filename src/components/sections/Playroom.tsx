import SectionImage from '@/components/ui/SectionImage';
import SectionHeader from '@/components/ui/SectionHeader';
import FeatureCard from '@/components/ui/FeatureCard';
import { PLAYROOM_CATEGORIES, PLAYROOM_FEATURES } from '@/constants/playroom';

/**
 * Seção Brinquedoteca — apresenta o espaço lúdico e seus diferenciais.
 */
export default function Playroom() {
  return (
    <section id="playroom" className="py-16 px-4 bg-gradient-to-b from-white to-amber-50">
      <div className="max-w-6xl mx-auto">
        <SectionImage src="/images/playroom-setup.png" alt="Brinquedoteca" />

        <SectionHeader title="Brinquedoteca">
          <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed mb-8">
            Um espaço lúdico montado com brinquedos de madeira selecionados, monitoria cuidadosa e
            estética impecável — pronto para encantar as crianças e trazer tranquilidade para o seu evento.
          </p>

          {/* Category buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {PLAYROOM_CATEGORIES.map((cat) => (
              <button
                key={cat.label}
                className="px-8 py-3 bg-amber-200 hover:bg-amber-300 text-sky-900 font-bold rounded-full button-hover transition-all"
              >
                {cat.label}
              </button>
            ))}
          </div>
        </SectionHeader>

        {/* Feature cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {PLAYROOM_FEATURES.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
