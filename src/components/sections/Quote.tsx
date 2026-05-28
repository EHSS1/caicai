import { Send } from 'lucide-react';
import SectionImage from '@/components/ui/SectionImage';
import SectionHeader from '@/components/ui/SectionHeader';
import { useQuoteForm } from '@/hooks/useQuoteForm';

/**
 * Seção Orçamento — formulário de captação de leads integrado ao Supabase.
 * Toda a lógica de estado e envio está encapsulada em useQuoteForm.
 */
export default function Quote() {
  const { formData, loading, submitted, handleChange, handleSubmit } = useQuoteForm();

  return (
    <section id="quote" className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <SectionImage src="/images/quote-banner.webp" alt="Orçamento" />

        <SectionHeader title="Orçamento">
          <p className="text-xl text-gray-700">
            Estamos animadas para fazer parte da sua celebração! Solicite seu orçamento aqui!
          </p>
        </SectionHeader>

        {submitted && (
          <div className="mb-6 p-4 bg-green-100 border border-green-400 rounded-lg text-green-800 text-center">
            Obrigado! Receberemos seu pedido em breve e entraremos em contato.
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-gradient-to-br from-sky-50 to-amber-50 p-8 rounded-lg border border-sky-100"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Nome *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-sky-200 rounded-lg focus:ring-2 focus:ring-sky-300 focus:border-transparent outline-none transition"
                placeholder="Seu nome"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Telefone *</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-sky-200 rounded-lg focus:ring-2 focus:ring-sky-300 focus:border-transparent outline-none transition"
                placeholder="(XX) XXXXX-XXXX"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Local do Evento *</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-sky-200 rounded-lg focus:ring-2 focus:ring-sky-300 focus:border-transparent outline-none transition"
                placeholder="Endereço ou local"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Data do Evento *</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-sky-200 rounded-lg focus:ring-2 focus:ring-sky-300 focus:border-transparent outline-none transition"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Horário do Evento *</label>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-sky-200 rounded-lg focus:ring-2 focus:ring-sky-300 focus:border-transparent outline-none transition"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Quantidade de Crianças *
              </label>
              <input
                type="number"
                name="childrenCount"
                value={formData.childrenCount}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-sky-200 rounded-lg focus:ring-2 focus:ring-sky-300 focus:border-transparent outline-none transition"
                placeholder="Número de crianças"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Duração (horas) *</label>
              <input
                type="number"
                name="duration"
                value={formData.duration}
                onChange={handleChange}
                required
                step="0.5"
                className="w-full px-4 py-2 border border-sky-200 rounded-lg focus:ring-2 focus:ring-sky-300 focus:border-transparent outline-none transition"
                placeholder="Duração em horas"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Tipo de Evento *</label>
              <select
                name="eventType"
                value={formData.eventType}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-sky-200 rounded-lg focus:ring-2 focus:ring-sky-300 focus:border-transparent outline-none transition"
              >
                <option value="">Selecione um tipo</option>
                <option value="birthday">Aniversário</option>
                <option value="wedding">Casamento</option>
                <option value="baptism">Batizado</option>
                <option value="reunion">Confraternização</option>
                <option value="other">Outro</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-amber-200 hover:bg-amber-300 disabled:bg-gray-300 text-sky-900 font-bold rounded-lg button-hover transition-all flex items-center justify-center gap-2"
          >
            <Send size={20} />
            {loading ? 'Enviando...' : 'Enviar Solicitação'}
          </button>
        </form>

        <p className="text-center text-gray-600 text-sm mt-6">
          Preencha todos os campos e entraremos em contato para confirmar a disponibilidade e detalhar
          o orçamento.
        </p>
      </div>
    </section>
  );
}
