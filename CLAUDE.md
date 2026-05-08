@AGENTS.md

# Site Institucional GRPM Web Marketing

Site institucional da GRPM Web Marketing — agência de criação de sites e presença digital.

## Projeto

- **Empresa**: GRPM Web Marketing
- **Tipo**: Site institucional / Landing page
- **Idioma**: Português do Brasil
- **Hospedagem**: Vercel
- **Contato WhatsApp**: +5535999222073

## Estrutura

```
├── app/
│   ├── page.tsx          # Landing page principal
│   ├── layout.tsx        # Layout global
│   └── globals.css       # Estilos globais
├── components/ui/        # Componentes reutilizáveis
│   ├── Gallery.tsx       # Galeria com lightbox
│   ├── Testimonials.tsx  # Carrossel de depoimentos
│   ├── FAQ.tsx           # Accordion perguntas frequentes
│   ├── StatsCounter.tsx  # Contador de números
│   ├── CookieBanner.tsx  # Banner LGPD
│   ├── FloatingWhatsApp.tsx # Botão fixo WhatsApp (+5535999222073)
│   ├── ContactForm.tsx   # Formulário com validação
│   ├── Map.tsx           # Google Maps embed
│   └── Partners.tsx      # Logos parceiros/clientes
├── public/
│   └── logo.svg          # Logo GRPM
└── package.json
```

## Seções da Landing Page

1. **Header**: Logo GRPM + Menu de navegação
2. **Hero**: Título, subtítulo, CTA
3. **Sobre**: Apresentação da GRPM Web Marketing
4. **Serviços**: Cards de serviços (criação de sites, presença digital)
5. **Depoimentos**: Cards de clientes
6. **Contato**: Botão WhatsApp + Formulário
7. **Footer**: Redes sociais + informações

## Design System

### Cores

- **Primária**: `#FF6B00` (laranja GRPM)
- **Fundo**: `#121212` (dark)
- **Texto**: `#FFFFFF` (branco) e tons de cinza
- **Acento**: Variações do laranja principal

Para editar: `app/globals.css`

### Tipografia

- Sans: Geist Sans
- Mono: Geist Mono

### Responsividade

Mobile-first com breakpoints:
- sm: 640px
- md: 768px
- lg: 1024px
- xl: 1280px

## Stack

- **Next.js 15** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS**

## Padrões de Desenvolvimento

1. **Server Components por padrão**: Usar React Server Components sempre que possível
2. **Client Components**: Apenas quando necessário ('use client' explícito)
3. **Mobile-first**: Design e desenvolvimento começam mobile
4. **Sem dependências desnecessárias**: Evitar adicionar libs sem necessidade real
5. **Idioma**: Todo conteúdo em português do Brasil
