# Guia de Imagens - Landing Page Template

Este guia explica como organizar e otimizar as imagens do projeto.

---

## Estrutura de Pastas

```
public/images/
├── hero/         # Imagens da seção Hero (topo)
├── servicos/     # Imagens dos cards de serviços
├── sobre/        # Imagens da seção Sobre
└── logo/         # Logo da empresa
```

---

## Regras de Nomenclatura

### ✅ CORRETO
```
logo-empresa.png
hero-background.jpg
servico-delivery.webp
sobre-equipe.png
icone-whatsapp.svg
```

### ❌ ERRADO
```
Logo Empresa.png          ❌ tem espaço
Hero Background.JPG       ❌ tem espaço e maiúsculas
serviço-delivery.webp     ❌ tem acento
Sobre_Equipe.png          ❌ tem maiúsculas
ícone whatsapp.svg        ❌ tem acento e espaço
```

### Regras:
- **Sempre em minúsculo**: `logo.png` ✅ (não `Logo.PNG` ❌)
- **Sem espaços**: use hífen `-` no lugar
- **Sem acentos**: `servico` ✅ (não `serviço` ❌)
- **Descritivo**: `hero-restaurante.jpg` é melhor que `foto1.jpg`

---

## Formatos Recomendados

| Tipo de Imagem | Formato | Observação |
|----------------|---------|------------|
| Fotos grandes (hero, sobre) | `.jpg` ou `.webp` | WebP tem melhor compressão |
| Logo | `.svg` ou `.png` | SVG é vetorial (escalável) |
| Ícones | `.svg` | Sempre use SVG para ícones |
| Screenshots | `.png` | Mantém qualidade de texto |

---

## Otimização ANTES de Adicionar

**SEMPRE comprima as imagens antes de colocar no projeto!**

### Ferramenta Recomendada: Squoosh
🔗 **https://squoosh.app**

#### Como usar:
1. Acesse [squoosh.app](https://squoosh.app)
2. Arraste sua imagem para a tela
3. Escolha o formato de saída (WebP ou AVIF para melhor compressão)
4. Ajuste a qualidade (70-85% é ideal)
5. Compare visual antes/depois
6. Clique em "Download" no canto inferior direito

#### Tamanhos Recomendados:

| Uso | Largura Máxima | Qualidade |
|-----|----------------|-----------|
| Hero (fundo) | 1920px | 80% |
| Serviços (cards) | 800px | 75% |
| Logo | Original | 100% (se SVG) |
| Depoimentos (fotos) | 400px | 70% |

---

## Como Usar Imagens no Código

### Importar o componente Image
```tsx
import Image from "next/image";
```

### Exemplo 1: Logo no Header
```tsx
<Image
  src="/images/logo/logo-empresa.svg"
  alt="Logo da Empresa"
  width={120}
  height={40}
  priority
/>
```

### Exemplo 2: Imagem Hero (background)
```tsx
<div className="relative w-full h-[600px]">
  <Image
    src="/images/hero/hero-background.jpg"
    alt="Hero background"
    fill
    className="object-cover"
    priority
  />
</div>
```

### Exemplo 3: Card de Serviço
```tsx
<Image
  src="/images/servicos/servico-delivery.jpg"
  alt="Serviço de Delivery"
  width={400}
  height={300}
  className="rounded-lg"
/>
```

### Exemplo 4: Foto no Sobre
```tsx
<Image
  src="/images/sobre/equipe.jpg"
  alt="Nossa equipe"
  width={600}
  height={400}
  className="rounded-2xl"
/>
```

---

## Propriedades do Componente Image

### Obrigatórias:
- **src**: caminho da imagem (sempre começando com `/`)
- **alt**: descrição da imagem (importante para acessibilidade)
- **width** e **height**: dimensões (ou use `fill` para preencher container)

### Opcionais úteis:
- **priority**: carrega a imagem com prioridade (use para imagens acima da dobra)
- **fill**: faz a imagem preencher todo o container pai
- **className**: classes Tailwind para estilizar
- **quality**: qualidade (1-100, padrão é 75)
- **placeholder**: "blur" para efeito de loading suave

### Exemplo com placeholder blur:
```tsx
<Image
  src="/images/hero/hero.jpg"
  alt="Hero"
  width={1920}
  height={1080}
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRg..." // gerar com tools
/>
```

---

## Otimização Automática do Next.js

O Next.js já otimiza suas imagens automaticamente:

✅ Converte para WebP/AVIF (navegadores modernos)  
✅ Carrega apenas o tamanho necessário (responsivo)  
✅ Lazy loading (carrega quando visível)  
✅ Redimensionamento automático  

**Configurado em:** `next.config.ts`

---

## Checklist para Cada Imagem

Antes de adicionar uma imagem ao projeto:

- [ ] Comprimiu usando Squoosh ou similar?
- [ ] Nome em minúsculo, sem espaços e sem acentos?
- [ ] Colocou na pasta correta?
- [ ] Usou o componente `Image` do Next.js (não `<img>`)?
- [ ] Definiu `alt` descritivo?
- [ ] Usou `priority` se for imagem acima da dobra?

---

## Erros Comuns

### ❌ Erro: "Invalid src prop"
```tsx
<Image src="logo.png" ... />  ❌ faltou a barra inicial
```
**Solução:**
```tsx
<Image src="/images/logo/logo.png" ... />  ✅
```

### ❌ Erro: "Image is missing required width/height"
```tsx
<Image src="/hero.jpg" alt="Hero" />  ❌ faltou width e height
```
**Solução:**
```tsx
<Image src="/hero.jpg" alt="Hero" width={1920} height={1080} />  ✅
```

### ❌ Imagem não aparece
- Verifique se o caminho está correto
- Confirme que a imagem está em `public/images/`
- Reinicie o servidor (`npm run dev`)

---

## Ferramentas Úteis

| Ferramenta | Uso | Link |
|------------|-----|------|
| Squoosh | Comprimir imagens | https://squoosh.app |
| TinyPNG | Comprimir PNG/JPG | https://tinypng.com |
| SVGOMG | Otimizar SVG | https://jakearchibald.github.io/svgomg/ |
| Remove.bg | Remover fundo | https://remove.bg |

---

## Exemplo Completo: Substituir Logo

1. **Comprima a logo** usando Squoosh
2. **Renomeie** para `logo-cliente.svg`
3. **Coloque** em `public/images/logo/`
4. **Edite** `app/page.tsx`, linha 10:

```tsx
// Antes
<div className="text-xl font-bold text-zinc-900">[LOGO]</div>

// Depois
<Image 
  src="/images/logo/logo-cliente.svg" 
  alt="Logo Cliente" 
  width={120} 
  height={40}
  priority
/>
```

5. **Reinicie** o servidor se necessário
