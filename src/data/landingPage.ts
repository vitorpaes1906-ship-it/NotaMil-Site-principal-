// ============================================================
// CONTEÚDO DA LANDING PAGE
// Textos, dados de exemplo e estrutura de seções.
// ============================================================

export const navLinks = [
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Recursos', href: '#produto' },
  { label: 'Evolução', href: '#evolucao' },
  { label: 'FAQ', href: '#faq' },
]

export const heroMock = {
  score: 880,
  competencies: [
    { code: 'C1', label: 'Domínio da norma culta', value: 160, max: 200 },
    { code: 'C2', label: 'Compreensão da proposta', value: 180, max: 200 },
    { code: 'C3', label: 'Argumentação', value: 160, max: 200 },
    { code: 'C4', label: 'Coesão textual', value: 180, max: 200 },
    { code: 'C5', label: 'Proposta de intervenção', value: 200, max: 200 },
  ],
  flags: ['Principal ponto de atenção', 'Argumentação', 'Coesão', 'Proposta de intervenção'],
}

export const trustBar = [
  { label: 'Correção com IA' },
  { label: 'Análise por competência' },
  { label: 'Acompanhamento da evolução' },
  { label: 'Professor IA disponível' },
]

export const problems = [
  'Você escreve uma redação e recebe uma nota, mas continua sem saber exatamente o que melhorar.',
  'Você sabe que precisa melhorar a argumentação, mas não sabe como.',
  'Você repete os mesmos erros porque ninguém acompanha sua evolução.',
  'Você estuda redação, mas sente que está treinando no escuro.',
]

export const howItWorks = [
  {
    number: '01',
    title: 'Escreva',
    description: 'Escolha um tema e escreva sua redação.',
  },
  {
    number: '02',
    title: 'Corrija',
    description: 'Envie para análise do NotaMil.',
  },
  {
    number: '03',
    title: 'Entenda',
    description: 'Veja sua nota, competências, erros e pontos de atenção.',
  },
  {
    number: '04',
    title: 'Evolua',
    description: 'Use o feedback para melhorar sua próxima redação.',
  },
]

export const productShowcase = [
  {
    eyebrow: 'Competências',
    title: 'Não receba apenas uma nota.',
    description:
      'Veja exatamente como seu desempenho foi distribuído entre as 5 competências do ENEM.',
  },
  {
    eyebrow: 'Diagnóstico',
    title: 'Transforme erro em aprendizado.',
    description:
      'Entenda o que prejudicou sua pontuação e o que você pode fazer diferente na próxima redação.',
  },
  {
    eyebrow: 'Histórico',
    title: 'Veja sua evolução.',
    description:
      'Acompanhe suas redações e entenda como seu desempenho muda ao longo da preparação.',
  },
]

export const aiChatExample = {
  student: 'Como posso melhorar minha argumentação?',
  teacher:
    'Seu argumento apresenta uma ideia pertinente, mas pode ganhar força se você explicar melhor a relação de causa e consequência. Tente...',
  helpTopics: [
    'Introdução',
    'Tese',
    'Desenvolvimento',
    'Argumentação',
    'Repertório',
    'Conectivos',
    'Conclusão',
    'Proposta de intervenção',
  ],
}

// Dados de demonstração visual — não representam resultados reais.
export const evolutionExample = [
  { label: 'Redação 1', value: 640 },
  { label: 'Redação 2', value: 700 },
  { label: 'Redação 3', value: 760 },
  { label: 'Redação 4', value: 820 },
  { label: 'Redação 5', value: 880 },
]

export const goals = ['600+', '700+', '800+', '900+', '1000']

export const offerFeatures = [
  'Correção de redações com IA',
  'Análise das 5 competências',
  'Feedback personalizado',
  'Professor NotaMil',
  'Histórico de redações',
  'Acompanhamento da evolução',
]

export const objections = [
  {
    question: 'Preciso saber escrever bem para usar o NotaMil?',
    answer:
      'Não. O NotaMil foi feito justamente para quem quer melhorar. A correção mostra onde você está e o que fazer para evoluir, independente do seu nível atual.',
  },
  {
    question: 'Posso usar mesmo começando agora?',
    answer:
      'Sim. Você pode enviar sua primeira redação a qualquer momento e já recebe uma correção completa por competência.',
  },
  {
    question: 'A IA analisa todas as competências?',
    answer: 'Sim. A análise cobre as 5 competências avaliadas na redação do ENEM: C1 a C5.',
  },
  {
    question: 'Posso acompanhar minhas redações anteriores?',
    answer:
      'Sim. Todas as suas correções ficam salvas no seu histórico, para você comparar sua evolução ao longo da preparação.',
  },
  {
    question: 'Posso usar o Professor NotaMil para tirar dúvidas?',
    answer:
      'Sim. O Professor NotaMil está disponível para ajudar com dúvidas sobre estrutura, argumentação, repertório e outros pontos da redação.',
  },
]

export const faq = [
  {
    question: 'O que é o NotaMil?',
    answer:
      'O NotaMil é uma plataforma que usa Inteligência Artificial para corrigir redações do ENEM, mostrando sua nota estimada, o desempenho por competência e orientações de melhoria.',
  },
  {
    question: 'Como funciona a correção?',
    answer:
      'Você envia sua redação e recebe uma análise detalhada, com nota estimada, avaliação por competência e pontos específicos de atenção.',
  },
  {
    question: 'A correção é baseada nas competências do ENEM?',
    answer: 'Sim. A análise segue as 5 competências oficiais avaliadas na redação do ENEM.',
  },
  {
    question: 'Como funciona o Professor NotaMil?',
    answer:
      'É um assistente de IA disponível para tirar dúvidas sobre redação — desde estrutura até argumentação e proposta de intervenção. Ele é um apoio aos seus estudos, não substitui um professor humano.',
  },
  {
    question: 'Consigo acompanhar minha evolução?',
    answer:
      'Sim. Seu histórico de correções fica salvo, permitindo visualizar como seu desempenho muda a cada redação enviada.',
  },
  {
    question: 'Posso corrigir várias redações?',
    answer: 'Sim, você pode enviar quantas redações quiser para acompanhar sua evolução.',
  },
  {
    question: 'Como recebo acesso?',
    answer:
      'Após a confirmação do pagamento, você recebe as instruções de acesso por e-mail e também pelo WhatsApp.',
  },
]

export const footerLinks = [
  { label: 'Início', href: '#top' },
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Recursos', href: '#produto' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Termos de uso', href: '#/termos' },
  { label: 'Política de privacidade', href: '#/privacidade' },
  { label: 'Contato', href: 'https://wa.me/5574988380549' },
]
