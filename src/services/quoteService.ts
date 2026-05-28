import type { QuoteFormData } from '@/types/quote';

/**
 * Envia a solicitação de orçamento para a Edge Function do Supabase.
 * Isola toda a lógica de comunicação com a API do componente de UI.
 *
 * @throws {Error} Se a resposta da API não for bem-sucedida
 */
export async function submitQuoteRequest(formData: QuoteFormData): Promise<void> {
  const apiUrl = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-quote-request`;

  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(`Falha ao enviar orçamento: ${errorBody}`);
  }
}
