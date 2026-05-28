/**
 * Seção Hero — ponto de entrada visual da landing page.
 * Exibe o fundo animado com nuvens, logo central e chamadas para ação.
 */
export default function Hero() {
  const clouds = [
    { top: '5%', left: '5%', size: '7xl', opacity: 70, delay: '0s' },
    { top: '15%', left: '15%', size: '5xl', opacity: 60, delay: '0.5s' },
    { top: '8%', left: '30%', size: '8xl', opacity: 55, delay: '1.2s' },
    { top: '25%', left: '45%', size: '4xl', opacity: 65, delay: '0.3s' },
    { top: '12%', left: '70%', size: '6xl', opacity: 75, delay: '1.8s' },
    { top: '20%', left: '85%', size: '5xl', opacity: 60, delay: '0.7s' },
    { top: '40%', left: '2%', size: '6xl', opacity: 65, delay: '2.1s' },
    { top: '45%', left: '20%', size: '8xl', opacity: 50, delay: '0.9s' },
    { top: '50%', left: '55%', size: '5xl', opacity: 70, delay: '1.5s' },
    { top: '38%', left: '75%', size: '7xl', opacity: 60, delay: '2.4s' },
    { top: '55%', left: '88%', size: '4xl', opacity: 55, delay: '0.4s' },
    { top: '65%', left: '8%', size: '7xl', opacity: 60, delay: '1.1s' },
    { top: '70%', left: '25%', size: '5xl', opacity: 55, delay: '2.7s' },
    { top: '75%', left: '42%', size: '6xl', opacity: 70, delay: '0.8s' },
    { top: '80%', left: '60%', size: '8xl', opacity: 50, delay: '1.9s' },
    { top: '68%', left: '78%', size: '5xl', opacity: 65, delay: '3s' },
    { top: '88%', left: '12%', size: '6xl', opacity: 60, delay: '0.6s' },
    { top: '92%', left: '35%', size: '4xl', opacity: 50, delay: '2.2s' },
    { top: '85%', left: '50%', size: '7xl', opacity: 55, delay: '1.4s' },
    { top: '90%', left: '72%', size: '5xl', opacity: 60, delay: '0.2s' },
    { top: '87%', left: '90%', size: '6xl', opacity: 50, delay: '2.9s' },
  ];

  return (
    <section id="home" className="relative overflow-hidden">
      {/* Sky background with animated clouds */}
      <div className="gradient-sky min-h-96 relative overflow-hidden">
        {clouds.map((cloud, index) => (
          <div
            key={index}
            className={`absolute text-${cloud.size} opacity-${cloud.opacity} cloud-animation`}
            style={{ top: cloud.top, left: cloud.left, animationDelay: cloud.delay }}
          >
            ☁️
          </div>
        ))}

        {/* Logo center */}
        <div className="flex justify-center items-center pt-12 pb-8">
          <img
            src="/images/hero-logo.png"
            alt="Cai Cai Balão"
            className="w-72 h-72 md:w-80 md:h-80 object-contain"
          />
        </div>
      </div>

      {/* Content section */}
      <div className="bg-gradient-to-b from-amber-50 to-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center fade-in-up">
          <h1 className="font-display text-4xl md:text-5xl text-sky-900 mb-6 italic">
            Brincar com propósito, liberdade e imaginação.
          </h1>

          <div className="space-y-4 mb-12 text-gray-700">
            <p className="text-lg leading-relaxed">
              Montagens completas com brinquedos de madeira, oficinas criativas e monitoria afetuosa.
            </p>
            <p className="text-lg leading-relaxed">
              Criamos momentos inesquecíveis em qualquer celebração.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#quote"
              className="px-8 py-4 bg-amber-200 hover:bg-amber-300 text-sky-900 font-bold rounded-full button-hover shadow-md"
            >
              Solicitar orçamento
            </a>
            <a
              href="#playroom"
              className="px-8 py-4 bg-amber-200 hover:bg-amber-300 text-sky-900 font-bold rounded-full button-hover shadow-md"
            >
              Brinquedos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
