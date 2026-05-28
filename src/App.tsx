import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Playroom from '@/components/sections/Playroom';
import Workshops from '@/components/sections/Workshops';
import Additionals from '@/components/sections/Additionals';
import Quote from '@/components/sections/Quote';

/**
 * Componente raiz da aplicação.
 * Responsável apenas pela composição das seções da landing page.
 */
export default function App() {
  return (
    <div className="bg-gradient-to-b from-sky-100 to-sky-50">
      <Header />
      <main>
        <Hero />
        <About />
        <Playroom />
        <Workshops />
        <Additionals />
        <Quote />
      </main>
      <Footer />
    </div>
  );
}
