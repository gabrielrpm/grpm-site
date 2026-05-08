# Componentes UI

Todos os componentes estão em `components/ui/` e podem ser importados via:

```tsx
import { Gallery, Testimonials, FAQ, ... } from "@/components/ui";
```

---

## Gallery

Galeria de fotos responsiva com lightbox.

```tsx
<Gallery 
  images={[
    { src: "https://images.unsplash.com/...", alt: "Descrição" },
    { src: "https://images.unsplash.com/...", alt: "Descrição" }
  ]} 
/>
```

---

## Testimonials

Carrossel de depoimentos com navegação.

```tsx
<Testimonials 
  testimonials={[
    {
      name: "João Silva",
      role: "CEO",
      company: "Empresa X",
      text: "Excelente atendimento!",
      photo: "https://images.unsplash.com/..."
    }
  ]} 
/>
```

---

## FAQ

Accordion de perguntas e respostas.

```tsx
<FAQ 
  items={[
    {
      question: "Como funciona o serviço?",
      answer: "Nosso serviço funciona de forma simples..."
    }
  ]} 
/>
```

---

## StatsCounter

Contador de números com animação ao scroll.

```tsx
<StatsCounter 
  stats={[
    { number: "500", label: "Clientes Atendidos", suffix: "+" },
    { number: "10", label: "Anos de Experiência", suffix: "+" }
  ]} 
/>
```

---

## CookieBanner

Banner LGPD que aparece na primeira visita. Adicionar no `layout.tsx`:

```tsx
import { CookieBanner } from "@/components/ui";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
```

---

## FloatingWhatsApp

Botão fixo de WhatsApp no canto inferior direito. Adicionar no `layout.tsx`:

```tsx
<FloatingWhatsApp 
  phone="5511999999999" 
  message="Olá! Gostaria de mais informações." 
/>
```

---

## ContactForm

Formulário com validação de campos.

```tsx
<ContactForm 
  onSubmit={(data) => {
    console.log(data); // { name, email, phone, message }
    // Enviar para API, email, etc.
  }} 
/>
```

---

## Map

Google Maps embed. Para obter URL:
1. Acesse Google Maps
2. Clique em "Compartilhar" > "Incorporar mapa"
3. Copie apenas a URL do `src` do iframe

```tsx
<Map embedUrl="https://www.google.com/maps/embed?pb=..." />
```

---

## Partners

Logos de parceiros/clientes em grid.

```tsx
<Partners 
  title="Nossos Parceiros"
  logos={[
    { src: "/logos/empresa1.png", alt: "Empresa 1" },
    { src: "/logos/empresa2.png", alt: "Empresa 2" }
  ]} 
/>
```
