/** Links de navegação usados no Header e Footer. */
export const NAV_ITEMS = [
  { label: 'Início', href: '#home' },
  { label: 'Sobre Nós', href: '#about' },
  { label: 'Brinquedoteca', href: '#playroom' },
  { label: 'Oficinas Criativas', href: '#workshops' },
  { label: 'Adicionais', href: '#additionals' },
  { label: 'Orçamento', href: '#quote' },
] as const;

export type NavItem = (typeof NAV_ITEMS)[number];
