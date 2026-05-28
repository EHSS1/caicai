interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  className?: string;
}

/**
 * Card reutilizável de destaque com ícone emoji, título e descrição.
 * Usado nas seções Brinquedoteca e Sobre Nós.
 */
export default function FeatureCard({ icon, title, description, className = '' }: FeatureCardProps) {
  return (
    <div
      className={`bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-sky-100 ${className}`}
    >
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}
