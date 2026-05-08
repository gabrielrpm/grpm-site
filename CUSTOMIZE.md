# Guia de Customização - Landing Page Template

Este guia ensina como adaptar o template para cada cliente em poucos passos.

---

## 1. Informações Básicas

### Nome da Empresa
Substitua `[NOME DA EMPRESA]` em todo o arquivo `app/page.tsx`

**Como fazer:**
1. Abra `app/page.tsx`
2. Use Ctrl+F (ou Cmd+F no Mac) para buscar `[NOME DA EMPRESA]`
3. Substitua por: `Restaurante Sabor & Cia` (exemplo)

### Logo
Substitua o texto `[LOGO]` por uma logo real

**Como fazer:**
1. Coloque a logo do cliente em `public/logo.svg` ou `public/logo.png`
2. Em `app/page.tsx`, linha 10, substitua:
```tsx
<div className="text-xl font-bold text-zinc-900">[LOGO]</div>
```
Por:
```tsx
<Image src="/logo.svg" alt="Logo" width={120} height={40} />
```

---

## 2. Conteúdo

### Hero (Topo da Página)
**Localização:** `app/page.tsx` - linhas 28-42

Edite:
- **Título**: linha 29-30
- **Subtítulo**: linha 32-34
- **Texto do botão**: linha 36-42

**Exemplo:**
```tsx
<h1 className="...">
  Sabor Autêntico<br />da Culinária Italiana
</h1>
<p className="...">
  Venha experimentar os melhores pratos da Toscana no coração de São Paulo
</p>
```

### Sobre
**Localização:** linhas 46-60

Edite o parágrafo (linhas 54-58) com a história do cliente.

### Serviços
**Localização:** linhas 63-109

Para cada serviço (3 cards), edite:
- **Título**: `<h3>` - exemplo: linha 77
- **Descrição**: `<p>` - exemplo: linha 78-81

**Exemplo:**
```tsx
<h3 className="...">Delivery Rápido</h3>
<p className="...">
  Entregamos em até 40 minutos na região. Comida quentinha na sua casa.
</p>
```

### Depoimentos
**Localização:** linhas 112-155

Para cada depoimento (2 cards), edite:
- **Texto**: `<p>` - linhas 120-122 e 135-137
- **Nome**: linhas 126 e 141
- **Cargo/Empresa**: linhas 127 e 142

### Contato - WhatsApp
**Localização:** linha 168

**Substitua o número:**
```tsx
href="https://wa.me/5511999999999?text=..."
```
Por:
```tsx
href="https://wa.me/5511987654321?text=Olá!%20Gostaria%20de%20fazer%20um%20pedido."
```

**Formato:** `55` (BR) + `11` (DDD) + `987654321`

### Footer - Informações
**Localização:** linhas 232-256

Edite:
- **Telefone**: linha 242
- **E-mail**: linha 246
- **Endereço**: linha 250

---

## 3. Cores

As cores são definidas em classes Tailwind. Para trocar a cor principal:

### Opção 1: Trocar apenas a cor principal
Em `app/page.tsx`, substitua todas as ocorrências de:
- `bg-zinc-900` → `bg-blue-600` (azul)
- `text-zinc-900` → `text-blue-600`
- `hover:bg-zinc-800` → `hover:bg-blue-700`

**Cores disponíveis no Tailwind:**
- `blue` (azul)
- `green` (verde)
- `red` (vermelho)
- `purple` (roxo)
- `orange` (laranja)
- `pink` (rosa)

### Opção 2: Cores personalizadas
Se o cliente tem cores específicas, adicione no arquivo `tailwind.config.js`:

```js
module.exports = {
  theme: {
    extend: {
      colors: {
        'primaria': '#FF6B35',  // Laranja customizado
        'secundaria': '#004E89', // Azul customizado
      }
    }
  }
}
```

Depois use no código:
```tsx
className="bg-primaria hover:bg-primaria/90"
```

---

## 4. Redes Sociais

**Localização:** `app/page.tsx` - linhas 261-271

Substitua os `href="#"` pelos links reais:

```tsx
<a href="https://instagram.com/seucliente" className="...">
  <Instagram className="w-5 h-5" />
</a>
<a href="https://facebook.com/seucliente" className="...">
  <Facebook className="w-5 h-5" />
</a>
<a href="https://linkedin.com/company/seucliente" className="...">
  <Linkedin className="w-5 h-5" />
</a>
```

---

## 5. Metadata (SEO)

**Localização:** `app/layout.tsx` - linhas 15-18

Edite título e descrição:
```tsx
export const metadata: Metadata = {
  title: "Restaurante Sabor & Cia | Culinária Italiana em SP",
  description: "Os melhores pratos italianos da Toscana no coração de São Paulo. Delivery rápido e ambiente aconchegante.",
};
```

---

## 6. Formulário de Contato

O formulário está pronto mas **NÃO envia dados automaticamente**.

### Para conectar a um backend:

**Opção A: Usar serviço de formulário**
- [Formspree](https://formspree.io)
- [Google Forms](https://forms.google.com)
- [Typeform](https://typeform.com)

**Opção B: Criar API Route**
Crie `app/api/contact/route.ts`:
```typescript
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const data = await request.json();
  
  // Enviar email usando serviço (ex: Resend, SendGrid)
  
  return NextResponse.json({ success: true });
}
```

---

## Checklist Rápido

Antes de entregar para o cliente, verifique:

- [ ] Nome da empresa substituído
- [ ] Logo adicionada
- [ ] Textos do Hero editados
- [ ] Seção Sobre personalizada
- [ ] 3 serviços preenchidos
- [ ] 2 depoimentos preenchidos
- [ ] WhatsApp com número correto
- [ ] E-mail, telefone e endereço no footer
- [ ] Links de redes sociais
- [ ] Cores da marca aplicadas
- [ ] Metadata (título e descrição)

---

## Dúvidas?

Este template usa:
- **Next.js 15** (React framework)
- **Tailwind CSS** (estilos)
- **TypeScript**

Para rodar localmente:
```bash
npm install
npm run dev
```

Acesse: `http://localhost:3000`
