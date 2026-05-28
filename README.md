# Cai Cai Balão — Documentação Técnica

Landing page de marketing e captação de leads para a **Cai Cai Balão**, empresa especializada em brinquedotecas itinerantes, oficinas criativas e experiências lúdicas para eventos infantis em Brasília, DF.

---

## Stack Tecnológica

| Tecnologia | Versão | Papel |
|---|---|---|
| React | 18 | UI e gerenciamento de estado |
| TypeScript | 5 | Tipagem estática |
| Vite | 5 | Build tool e dev server |
| Tailwind CSS | 3 | Estilização utility-first |
| Supabase | 2 | Backend-as-a-Service (BaaS) |
| Supabase Edge Functions | — | API serverless (Deno) |
| Lucide React | — | Ícones SVG |

---

## Estrutura de Pastas

```
caicai/
├── index.html               # Entry point HTML com SEO e meta tags
├── vite.config.ts           # Alias @/ configurado
├── tailwind.config.js       # Tokens de design (cores, fontes)
├── tsconfig.app.json        # Paths @/ para TypeScript
│
├── public/
│   ├── favicon.png          # Ícone da aba do navegador
│   └── images/              # Todas as imagens com nomes semânticos
│       ├── hero-logo.png
│       ├── about-children.png
│       ├── playroom-setup.png
│       ├── workshops-activity.png
│       ├── additionals-scene.png
│       └── quote-banner.webp
│
├── supabase/
│   └── functions/
│       └── send-quote-request/
│           └── index.ts     # Edge Function (Deno) para salvar orçamentos
│
└── src/
    ├── main.tsx             # Ponto de entrada React
    ├── App.tsx              # Orquestrador de seções
    ├── index.css            # Estilos globais e animações
    │
    ├── types/               # Contratos TypeScript compartilhados
    │   └── quote.ts         # QuoteFormData, QUOTE_FORM_INITIAL_STATE
    │
    ├── constants/           # Dados estáticos separados da UI
    │   ├── navigation.ts    # NAV_ITEMS (Header + Footer compartilham)
    │   ├── workshops.ts     # WORKSHOP_TYPES
    │   ├── additionals.ts   # ADDITIONAL_ITEMS
    │   └── playroom.ts      # PLAYROOM_CATEGORIES, PLAYROOM_FEATURES
    │
    ├── services/            # Integração com APIs externas
    │   └── quoteService.ts  # submitQuoteRequest() → Supabase Edge Function
    │
    ├── hooks/               # Lógica com estado reutilizável
    │   └── useQuoteForm.ts  # Estado, handlers e submissão do formulário
    │
    └── components/
        ├── layout/          # Componentes estruturais (persistem entre seções)
        │   ├── Header.tsx
        │   └── Footer.tsx
        │
        ├── ui/              # Componentes atômicos reutilizáveis (sem lógica)
        │   ├── SectionImage.tsx
        │   ├── SectionHeader.tsx
        │   └── FeatureCard.tsx
        │
        └── sections/        # Seções da landing page (compostas de ui/)
            ├── Hero.tsx
            ├── About.tsx
            ├── Playroom.tsx
            ├── Workshops.tsx
            ├── Additionals.tsx
            └── Quote.tsx
```

---

## Arquitetura em Camadas

```
[index.html]
     ↓
[main.tsx]          → Inicializa o React com StrictMode
     ↓
[App.tsx]           → Compõe as seções da página
     ↓
[components/layout] → Header, Footer (estruturais)
[components/sections] → Seções de conteúdo da landing page
     ↓
[components/ui]     → Componentes atômicos (SectionImage, SectionHeader, FeatureCard)
[constants/]        → Dados estáticos (navigation, workshops, additionals, playroom)
     ↓
[hooks/]            → useQuoteForm (estado e lógica do formulário)
     ↓
[services/]         → quoteService.ts (chamada HTTP para Supabase)
     ↓
[types/]            → QuoteFormData (contrato de dados compartilhado)
```

---

## Princípios Aplicados

### SOLID

| Princípio | Implementação |
|---|---|
| **Single Responsibility** | `Quote.tsx` = só UI. `useQuoteForm` = só estado. `quoteService` = só HTTP |
| **Open/Closed** | `FeatureCard`, `SectionImage` extensíveis via props sem modificação |
| **Dependency Inversion** | `Quote.tsx` depende da abstração `submitQuoteRequest`, não de `fetch` direto |

### Design Patterns

- **Container/Presenter**: hooks são containers, componentes são presenters
- **Composition**: `App.tsx` compõe seções, seções compõem `ui/`
- **Data separation**: dados em `constants/`, lógica em `hooks/`, HTTP em `services/`

---

## Variáveis de Ambiente

Crie um arquivo `.env` na raiz com:

```env
VITE_SUPABASE_URL=https://seu-projeto.supabase.co
VITE_SUPABASE_ANON_KEY=sua-anon-key
```

> ⚠️ Nunca comite o `.env` com credenciais reais. O `.gitignore` já o exclui.

---

## Comandos

```bash
# Instalar dependências
npm install

# Servidor de desenvolvimento
npm run dev

# Verificação de tipos TypeScript
npm run typecheck

# Lint
npm run lint

# Build de produção
npm run build

# Preview do build
npm run preview
```

---

## Fluxo do Formulário de Orçamento

```
Usuário preenche → Quote.tsx (apresentação)
                        ↓
              useQuoteForm (estado, validação)
                        ↓
           submitQuoteRequest (quoteService.ts)
                        ↓
     POST /functions/v1/send-quote-request (Supabase Edge Function)
                        ↓
              INSERT em quote_requests (Supabase DB)
```

---

## Seções da Landing Page

| ID | Componente | Descrição |
|---|---|---|
| `#home` | `Hero` | Logo, fundo animado com nuvens e CTAs |
| `#about` | `About` | Identidade e valores da empresa |
| `#playroom` | `Playroom` | Brinquedoteca itinerante |
| `#workshops` | `Workshops` | Oficinas criativas disponíveis |
| `#additionals` | `Additionals` | Itens extras para contratação |
| `#quote` | `Quote` | Formulário de solicitação de orçamento |

---

## Convenções de Código

- **Componentes**: PascalCase (`FeatureCard.tsx`)
- **Hooks**: camelCase prefixado com `use` (`useQuoteForm.ts`)
- **Constants**: SCREAMING_SNAKE_CASE (`NAV_ITEMS`, `WORKSHOP_TYPES`)
- **Types/Interfaces**: PascalCase (`QuoteFormData`)
- **Imports**: sempre via alias `@/` (ex: `@/components/ui/FeatureCard`)
- **Exports**: default export por arquivo de componente; named exports em constants e types
