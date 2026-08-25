import { BRAND_NAME, SUPPORT_WHATSAPP_DISPLAY, SUPPORT_WHATSAPP_URL } from '../config/constants'

export default function Privacidade() {
  return (
    <div className="min-h-screen bg-ink-950 px-5 py-16 text-paper-200 sm:px-8">
      <div className="mx-auto max-w-2xl">
        <a href="#/" className="text-sm text-signal hover:underline">
          ← Voltar para o site
        </a>

        <h1 className="mt-6 font-display text-3xl font-semibold text-paper-100">
          Política de Privacidade
        </h1>
        <p className="mt-2 text-sm text-paper-400">Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>

        <div className="mt-10 space-y-8 text-[15px] leading-relaxed text-paper-400">
          <section>
            <p>
              Esta Política de Privacidade explica como o {BRAND_NAME} coleta, usa e protege
              os dados pessoais dos usuários, em conformidade com a Lei Geral de Proteção de
              Dados (LGPD — Lei nº 13.709/2018).
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-semibold text-paper-100">1. Dados que coletamos</h2>
            <ul className="ml-5 list-disc space-y-1">
              <li>Nome, e-mail e telefone/WhatsApp informados na compra ou no cadastro.</li>
              <li>Dados de pagamento, processados diretamente pelo checkout (Cakto) — o {BRAND_NAME} não armazena dados de cartão.</li>
              <li>Conteúdo das redações enviadas para correção, usado exclusivamente para gerar a análise e o histórico do aluno.</li>
              <li>Dados de uso da plataforma (acessos, interações), para melhorar o serviço.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-semibold text-paper-100">2. Como usamos os dados</h2>
            <p>
              Os dados são usados para: liberar e manter seu acesso à plataforma, enviar
              instruções e comunicações sobre o produto (por e-mail e WhatsApp), gerar as
              correções e o histórico de evolução, e dar suporte quando solicitado.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-semibold text-paper-100">3. Compartilhamento</h2>
            <p>
              Não vendemos dados pessoais. Dados de pagamento são compartilhados apenas com o
              processador de pagamentos (Cakto) para viabilizar a compra. Serviços de
              infraestrutura e de IA utilizados para gerar as correções podem processar o
              conteúdo das redações estritamente para essa finalidade.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-semibold text-paper-100">4. Seus direitos</h2>
            <p>
              Você pode solicitar, a qualquer momento, a confirmação de quais dados temos
              sobre você, a correção de dados incorretos, ou a exclusão da sua conta e dos
              dados associados, entrando em contato pelo WhatsApp{' '}
              <a href={SUPPORT_WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-signal hover:underline">
                {SUPPORT_WHATSAPP_DISPLAY}
              </a>.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-semibold text-paper-100">5. Armazenamento e segurança</h2>
            <p>
              Adotamos medidas técnicas razoáveis para proteger os dados armazenados contra
              acesso não autorizado, perda ou alteração indevida.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-semibold text-paper-100">6. Alterações desta política</h2>
            <p>
              Esta política pode ser atualizada periodicamente. A versão vigente é sempre a
              publicada nesta página.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-semibold text-paper-100">7. Contato</h2>
            <p>
              Para qualquer solicitação relacionada aos seus dados, fale conosco pelo WhatsApp{' '}
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
