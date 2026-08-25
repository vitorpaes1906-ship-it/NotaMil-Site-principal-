import { useReveal } from '../hooks/useReveal'
import { aiChatExample } from '../data/landingPage'

export default function AISection() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section className="py-20 sm:py-28">
      <div className="container-page grid gap-14 lg:grid-cols-2 lg:items-center">
        <div ref={ref} className="reveal">
          <p className="eyebrow mb-4">Professor NotaMil</p>
          <h2 className="font-display text-3xl font-semibold leading-tight text-paper-100 sm:text-4xl">
            Seu novo professor de redação está disponível quando você precisar.
          </h2>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-paper-400">
            Uma ferramenta de apoio aos seus estudos — não um substituto para o seu
            professor.
          </p>

          <div className="mt-8 flex flex-wrap gap-2.5">
            {aiChatExample.helpTopics.map((topic) => (
              <span
                key={topic}
                className="rounded-full border border-ink-700 bg-ink-900 px-3.5 py-1.5 text-xs text-paper-400"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>

        <ChatMock />
      </div>
    </section>
  )
}

function ChatMock() {
  return (
    <div className="card-surface shadow-card mx-auto w-full max-w-md p-5 sm:p-6">
      <div className="mb-5 flex items-center gap-2 border-b border-ink-700 pb-4">
        <span className="h-2 w-2 rounded-full bg-signal" />
        <span className="font-mono text-[11px] uppercase tracking-wide text-paper-400">
          Professor NotaMil
        </span>
      </div>

      <div className="space-y-3">
        <div className="ml-auto max-w-[85%] rounded-2xl rounded-tr-sm bg-ink-800 px-4 py-3 text-sm text-paper-100">
          {aiChatExample.student}
        </div>
        <div className="max-w-[90%] rounded-2xl rounded-tl-sm border border-signal/25 bg-signal-soft px-4 py-3 text-sm leading-relaxed text-paper-100">
          {aiChatExample.teacher}
        </div>
      </div>
    </div>
  )
}
