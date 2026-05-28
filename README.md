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

---

## Guia de Alterações

Referência rápida de **onde mexer** para cada tipo de mudança comum no projeto.

### 🔤 Textos e Conteúdo das Seções

| O que mudar | Arquivo |
|---|---|
| Links e nomes do menu de navegação | `src/constants/navigation.ts` → array `NAV_ITEMS` |
| Textos da seção Hero (slogan, botões) | `src/components/sections/Hero.tsx` |
| Textos da seção Sobre Nós | `src/components/sections/About.tsx` |
| Valores da empresa (ícones, títulos, descrições) | `src/components/sections/About.tsx` → array `values` |
| Texto e descrição da Brinquedoteca | `src/components/sections/Playroom.tsx` |
| Categorias da Brinquedoteca (botões) | `src/constants/playroom.ts` → `PLAYROOM_CATEGORIES` |
| Cards de features da Brinquedoteca | `src/constants/playroom.ts` → `PLAYROOM_FEATURES` |
| Texto e descrição das Oficinas | `src/components/sections/Workshops.tsx` |
| Tipos de oficinas (ícone, nome, descrição) | `src/constants/workshops.ts` → `WORKSHOP_TYPES` |
| Texto e descrição dos Adicionais | `src/components/sections/Additionals.tsx` |
| Lista de itens adicionais | `src/constants/additionals.ts` → `ADDITIONAL_ITEMS` |
| Texto do formulário de orçamento | `src/components/sections/Quote.tsx` |

---

### 🖼️ Imagens

Todas as imagens ficam em `public/images/`. Para trocar uma imagem:
1. Coloque o novo arquivo em `public/images/`
2. Atualize o caminho no componente correspondente:

| Imagem | Componente que a usa |
|---|---|
| `hero-logo.png` | `src/components/sections/Hero.tsx` e `src/components/layout/Header.tsx` |
| `about-children.png` | `src/components/sections/About.tsx` |
| `playroom-setup.png` | `src/components/sections/Playroom.tsx` |
| `workshops-activity.png` | `src/components/sections/Workshops.tsx` |
| `additionals-scene.png` | `src/components/sections/Additionals.tsx` |
| `quote-banner.webp` | `src/components/sections/Quote.tsx` |
| `favicon.png` | `index.html` → tag `<link rel="icon">` |

---

### 📞 Informações de Contato e Redes Sociais

Tudo no rodapé está em `src/components/layout/Footer.tsx`:

- **Telefone** → linha com `<Phone />` e o número em `<span>`
- **E-mail** → linha com `<Mail />` e o endereço em `<span>`
- **Endereço** → linha com `<MapPin />` e o local em `<span>`
- **Link do Instagram** → atributo `href` na tag `<a>` com `<Instagram />`

---

### 🎨 Cores, Fontes e Estilos Visuais

| O que mudar | Arquivo |
|---|---|
| Cores principais do sistema de design | `tailwind.config.js` → `theme.extend.colors.brand` |
| Fonte do corpo (parágrafo) | `tailwind.config.js` → `theme.extend.fontFamily.sans` |
| Fonte dos títulos (display) | `tailwind.config.js` → `theme.extend.fontFamily.display` |
| Gradiente do fundo do Hero | `src/index.css` → `.gradient-sky` |
| Animação de flutuação das nuvens | `src/index.css` → `@keyframes float` e `.cloud-animation` |
| Animação de entrada do conteúdo | `src/index.css` → `@keyframes fadeInUp` e `.fade-in-up` |
| Efeito hover dos botões | `src/index.css` → `.button-hover` |
| Cor de fundo geral da página | `src/App.tsx` → classe na `<div>` raiz |

---

### 📋 Formulário de Orçamento

| O que mudar | Arquivo |
|---|---|
| Adicionar/remover campos do formulário | `src/types/quote.ts` → interface `QuoteFormData` + `src/components/sections/Quote.tsx` |
| Opções do select "Tipo de Evento" | `src/components/sections/Quote.tsx` → elementos `<option>` |
| Lógica de envio / tratamento de erro | `src/hooks/useQuoteForm.ts` → função `handleSubmit` |
| URL ou cabeçalhos da requisição ao Supabase | `src/services/quoteService.ts` → função `submitQuoteRequest` |
| Mensagem de sucesso após envio | `src/components/sections/Quote.tsx` → bloco `{submitted && ...}` |
| Duração da mensagem de sucesso (padrão: 5s) | `src/hooks/useQuoteForm.ts` → `setTimeout(..., 5000)` |

---

### 🔑 Credenciais e Ambiente

Todas as chaves ficam no arquivo `.env` na raiz (nunca commitado):

```env
VITE_SUPABASE_URL=https://seu-projeto.supabase.co
VITE_SUPABASE_ANON_KEY=sua-anon-key
```

Para obter esses valores: acesse o [Supabase Dashboard](https://supabase.com/dashboard) → seu projeto → **Settings → API**.

---

### ➕ Adicionar uma Nova Seção

1. Crie `src/components/sections/NomeDaSecao.tsx`
2. Se a seção tiver dados estáticos, crie `src/constants/nomeDaSecao.ts`
3. Importe e adicione o componente em `src/App.tsx` dentro de `<main>`
4. Adicione o link de navegação em `src/constants/navigation.ts`

---

### 🗄️ Banco de Dados (Supabase)

| O que mudar | Arquivo |
|---|---|
| Schema da tabela `quote_requests` | `supabase/functions/send-quote-request/migrations/*.sql` |
| Lógica de inserção no banco | `supabase/functions/send-quote-request/index.ts` |
| Validação dos dados recebidos | `supabase/functions/send-quote-request/index.ts` → bloco de validação |