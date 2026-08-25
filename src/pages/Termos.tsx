import { BRAND_NAME, SUPPORT_WHATSAPP_DISPLAY, SUPPORT_WHATSAPP_URL } from '../config/constants'

export default function Termos() {
  return (
    <div className="min-h-screen bg-ink-950 px-5 py-16 text-paper-200 sm:px-8">
      <div className="mx-auto max-w-2xl">
        <a href="#/" className="text-sm text-signal hover:underline">
          ← Voltar para o site
        </a>

        <h1 className="mt-6 font-display text-3xl font-semibold text-paper-100">Termos de Uso</h1>
        <p className="mt-2 text-sm text-paper-400">Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>

        <div className="mt-10 space-y-8 text-[15px] leading-relaxed text-paper-400">
          <section>
            <h2 className="mb-2 text-lg font-semibold text-paper-100">1. Sobre o {BRAND_NAME}</h2>
            <p>
              O {BRAND_NAME} é um produto digital que utiliza Inteligência Artificial para
              apoiar a correção e o estudo de redações no modelo do ENEM. Ao contratar o
              {' '}{BRAND_NAME}, você concorda com os termos descritos nesta página.
            </p>
            {/* Preencher com a razão social e CNPJ do responsável pelo produto antes de publicar */}
            <p className="mt-2 text-xs text-paper-400/70">
              [RAZÃO SOCIAL / CNPJ DO RESPONSÁVEL PELO PRODUTO — preencher antes de publicar]
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-semibold text-paper-100">2. Natureza do serviço</h2>
            <p>
              O {BRAND_NAME} oferece uma correção estimada de redações com apoio de IA,
              organizada segundo as 5 competências avaliadas na redação do ENEM, além de
              acompanhamento de evolução e um assistente de estudos (Professor {BRAND_NAME}).
              A nota e as observações apresentadas são uma estimativa e uma ferramenta de
              apoio ao estudo — não substituem a correção oficial do ENEM nem garantem
              qualquer nota ou resultado específico.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-semibold text-paper-100">3. Compra e acesso</h2>
            <p>
              A compra é processada por um checkout de pagamentos terceirizado (Cakto).
              Após a confirmação do pagamento, o acesso é enviado para o e-mail e o WhatsApp
              informados no momento da compra. É responsabilidade do comprador informar dados
              de contato corretos.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-semibold text-paper-100">4. Direito de arrependimento</h2>
            <p>
              Nos termos do Art. 49 do Código de Defesa do Consumidor, compras realizadas
              fora do estabelecimento comercial (como pela internet) podem ser canceladas em
              até 7 (sete) dias corridos a partir da confirmação da compra, com reembolso
              integral. Para solicitar, entre em contato pelo WhatsApp{' '}
              <a href={SUPPORT_WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-signal hover:underline">
                {SUPPORT_WHATSAPP_DISPLAY}
              </a>.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-semibold text-paper-100">5. Uso adequado</h2>
            <p>
              O acesso ao {BRAND_NAME} é pessoal e intransferível. Não é permitido compartilhar
              login, redistribuir o conteúdo da plataforma ou utilizar o serviço para fins
              diferentes do estudo pessoal.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-semibold text-paper-100">6. Alterações</h2>
            <p>
              Estes termos podem ser atualizados periodicamente. A versão vigente é sempre a
              publicada nesta página.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-semibold text-paper-100">7. Contato</h2>
            <p>
              Dúvidas sobre estes termos podem ser enviadas pelo WhatsApp{' '}
              <a href={SUPPORT_WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-signal hover:underline">
                {SUPPORT_WHATSAPP_DISPLAY}
              </a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
