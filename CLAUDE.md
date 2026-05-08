@AGENTS.md

# Template Landing Page

Template profissional e neutro para agências web. Adaptável para qualquer segmento.

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
│   ├── FloatingWhatsApp.tsx # Botão fixo WhatsApp
│   ├── ContactForm.tsx   # Formulário com validação
│   ├── Map.tsx           # Google Maps embed
│   └── Partners.tsx      # Logos parceiros/clientes
├── public/
│   └── logo.svg          # Logo placeholder
├── CUSTOMIZE.md          # Guia de customização
└── package.json
```

## Seções da Landing Page

1. **Header**: Logo + Menu de navegação
2. **Hero**: Título, subtítulo, CTA
3. **Sobre**: Apresentação da empresa
4. **Serviços**: 3 cards de serviços
5. **Depoimentos**: 2 cards de clientes
6. **Contato**: Botão WhatsApp + Formulário
7. **Footer**: Redes sociais + endereço

## Customização

Todas as instruções de customização estão em `CUSTOMIZE.md`.

### Imagens do Unsplash

**INSTRUÇÃO PARA CLAUDE**: Ao customizar este template para um novo cliente:
1. Buscar imagens relevantes no Unsplash de acordo com o segmento/nicho do cliente
2. Substituir automaticamente a URL da imagem no Hero Section (app/page.tsx)
3. Usar sempre next/image com os domínios já configurados no next.config.ts
4. As imagens devem ter resolução mínima de 1920px de largura
5. Priorizar imagens profissionais, neutras e de alta qualidade

### Cores

Paleta neutra padrão:
- Primária: `#000000` (preto)
- Secundária: `#FFFFFF` (branco)
- Cinza: `#71717A` (zinc-500)
- Fundo: `#FAFAFA` (zinc-50)

Para trocar: editar variáveis em `app/globals.css`

### Tipografia

- Sans: Geist Sans (Google Fonts)
- Mono: Geist Mono (Google Fonts)

### Responsividade

Mobile-first com breakpoints:
- sm: 640px
- md: 768px
- lg: 1024px
- xl: 1280px

## Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
