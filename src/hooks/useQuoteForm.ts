import { useState } from 'react';
import { QuoteFormData, QUOTE_FORM_INITIAL_STATE } from '@/types/quote';
import { submitQuoteRequest } from '@/services/quoteService';

interface UseQuoteFormReturn {
  formData: QuoteFormData;
  loading: boolean;
  submitted: boolean;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  handleSubmit: (e: React.FormEvent) => Promise<void>;
}

/**
 * Encapsula toda a lógica de estado e submissão do formulário de orçamento.
 * O componente Quote.tsx fica responsável apenas pela apresentação visual.
 */
export function useQuoteForm(): UseQuoteFormReturn {
  const [formData, setFormData] = useState<QuoteFormData>(QUOTE_FORM_INITIAL_STATE);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await submitQuoteRequest(formData);
      setSubmitted(true);
      setFormData(QUOTE_FORM_INITIAL_STATE);
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error('Erro ao enviar orçamento:', error);
    } finally {
      setLoading(false);
    }
  };

  return { formData, loading, submitted, handleChange, handleSubmit };
}
