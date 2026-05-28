interface SectionImageProps {
  src: string;
  alt: string;
  className?: string;
}

/**
 * Imagem de destaque padronizada usada no topo das seções de conteúdo.
 * Garante altura e proporção consistentes em toda a landing page.
 */
export default function SectionImage({ src, alt, className = '' }: SectionImageProps) {
  return (
    <div className={`rounded-lg overflow-hidden mb-12 h-96 ${className}`}>
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    </div>
  );
}
