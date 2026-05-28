/**
 * Dados do formulário de orçamento preenchidos pelo usuário.
 * Mantém os valores como strings para compatibilidade com inputs HTML.
 */
export interface QuoteFormData {
  name: string;
  phone: string;
  location: string;
  date: string;
  time: string;
  childrenCount: string;
  duration: string;
  eventType: string;
}

/** Valor inicial vazio do formulário de orçamento. */
export const QUOTE_FORM_INITIAL_STATE: QuoteFormData = {
  name: '',
  phone: '',
  location: '',
  date: '',
  time: '',
  childrenCount: '',
  duration: '',
  eventType: '',
};
