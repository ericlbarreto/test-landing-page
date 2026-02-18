# Tractian Landing Page — Plant Manager

Reprodução pixel-perfect da página [tractian.com/en/who-we-serve/plant-manager](https://tractian.com/en/who-we-serve/plant-manager).

## Stack

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS 4**
- **next-intl** (i18n: EN, PT, ES)
- **React Hook Form + Zod** (formulário)

## Como rodar local

```bash
# 1. Instalar dependências
npm install

# 2. Rodar servidor de desenvolvimento
npm run dev

# 3. Abrir no navegador
# http://localhost:3000/en/who-we-serve/plant-manager
```

## Trocar idioma

- Via URL: `/en/...`, `/pt/...`, `/es/...`
- Via Language Switcher no header (ícone de globo)

## Deploy na Vercel

```bash
# Opção 1: via Vercel CLI
npm i -g vercel
vercel

# Opção 2: conectar repo no vercel.com
# Push para GitHub → import no Vercel → deploy automático
```

## Estrutura de pastas

```
├── app/
│   └── [locale]/
│       ├── layout.tsx              # Layout com i18n provider
│       ├── page.tsx                # Redirect para plant-manager
│       └── who-we-serve/
│           └── plant-manager/
│               ├── page.tsx        # Server page
│               └── PlantManagerPage.tsx  # Client page
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── LanguageSwitcher.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── WhyChoose.tsx
│   │   ├── ValueProps.tsx
│   │   ├── Testimonials.tsx
│   │   ├── TrustedBy.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── Features.tsx
│   │   ├── CtaBanner.tsx
│   │   ├── Faq.tsx
│   │   └── DemoForm.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── Container.tsx
│       ├── Modal.tsx
│       ├── Section.tsx
│       └── TractianLogo.tsx
├── i18n/
│   ├── navigation.ts
│   ├── request.ts
│   └── routing.ts
├── messages/
│   ├── en.json
│   ├── pt.json
│   └── es.json
├── types/
│   └── index.ts
└── middleware.ts
```

## Checklist

- [x] Next.js 16 + TypeScript + Tailwind CSS 4
- [x] i18n com next-intl (EN, PT, ES)
- [x] Language Switcher
- [x] Rota: `/[locale]/who-we-serve/plant-manager`
- [x] Header/Nav (responsivo, mobile menu)
- [x] Hero section (headline, CTA, testimonial overlay)
- [x] Why Choose Tractian (accordion com checkboxes)
- [x] Value Propositions (3 cards com ícones)
- [x] Testimonials (scroll horizontal mobile, grid desktop)
- [x] Trusted By logos
- [x] How It Works (4 steps numerados)
- [x] Features tabs (4 tabs com conteúdo)
- [x] CTA Banner (full-width, dark background)
- [x] FAQ Accordion (17 itens, acessível)
- [x] Demo Form Modal (React Hook Form + Zod)
  - [x] Validação de campos
  - [x] Estados: idle, loading, success, error
  - [x] Submission simulada
  - [x] Labels e aria attributes
- [x] Footer com colunas de navegação
- [x] Responsivo (mobile-first: 390px / 768px / 1280px)
- [x] Acessibilidade (aria-expanded, aria-modal, focus trap, roles)
- [x] Tipagem forte (TypeScript strict)
- [x] Componentização limpa e reutilizável
