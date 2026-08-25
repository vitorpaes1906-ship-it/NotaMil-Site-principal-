# NotaMil — Landing Page

Landing page em React + TypeScript + Tailwind CSS + Vite para o NotaMil.

## Como rodar

```bash
npm install
npm run dev
```

Acesse http://localhost:5173

## Build de produção

```bash
npm run build
npm run preview
```

## Status

- ✅ Checkout (Cakto), preço (R$ 19,97) e contato (WhatsApp) já configurados
- ⚠️ Falta preencher a razão social/CNPJ em `src/pages/Termos.tsx` (marcado com comentário no código)
- ⚠️ `INSTAGRAM_URL` em `src/config/constants.ts` ainda não foi preenchido (não é exibido em nenhum lugar do site hoje — só preencha se for usar)
- ⚠️ Ainda não rodei `npm install && npm run build` (sem acesso à internet neste ambiente) — rode local antes de publicar

## O que editar antes de publicar

Tudo que muda com frequência está centralizado em `src/config/constants.ts`:

- `CHECKOUT_URL` — link oficial do checkout (Cakto). Já configurado.
- `PRODUCT_PRICE` e `OFFER_TEXT` — já preenchidos (R$ 19,97).
- `SUPPORT_WHATSAPP_DISPLAY` e `SUPPORT_WHATSAPP_URL` — já preenchidos.

Os textos e dados de exemplo (evolução, competências) ficam em
`src/data/landingPage.ts`.

Termos de Uso (`src/pages/Termos.tsx`) e Política de Privacidade
(`src/pages/Privacidade.tsx`) são páginas reais, acessíveis pelo rodapé via
`#/termos` e `#/privacidade` — revise o conteúdo e preencha a razão
social/CNPJ antes de publicar.

A logo oficial está em `public/logo-notamil.png`.

## Estrutura

```
src/
  components/   # uma seção por arquivo (Header, Hero, HowItWorks, etc.)
  data/         # landingPage.ts — todo o conteúdo textual/dados de exemplo
  config/       # constants.ts — checkout, preço, contatos
  hooks/        # useReveal.ts — animação de entrada ao rolar a página
```
