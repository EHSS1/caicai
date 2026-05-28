interface SectionHeaderProps {
  title: string;
  children?: React.ReactNode;
  className?: string;
}

/**
 * Cabeçalho padronizado de seção com título em display font e slot para subtítulo/descrição.
 */
export default function SectionHeader({ title, children, className = '' }: SectionHeaderProps) {
  return (
    <div className={`text-center mb-12 ${className}`}>
      <h2 className="font-display text-4xl md:text-5xl text-sky-900 mb-6 italic">{title}</h2>
      {children}
    </div>
  );
}
