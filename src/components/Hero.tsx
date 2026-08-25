import { CHECKOUT_URL } from '../config/constants'
import { heroMock } from '../data/landingPage'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pb-16 pt-12 sm:pb-20 sm:pt-16 lg:pb-24 lg:pt-20">
      <div className="container-page relative grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:gap-10">
        <div className="animate-fadeUp">
          <p className="eyebrow mb-5">Redação do ENEM · Correção com IA</p>

          <h1 className="font-display text-[2.6rem] font-semibold leading-[1.06] tracking-tight text-paper-100 sm:text-[3.5rem] lg:text-[4rem]">
            Transforme suas redações.
            <br />
            <span className="text-signal">Busque a nota 1000.</span>
          </h1>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-paper-400 sm:text-lg">
            Corrija sua redação com Inteligência Artificial, descubra exatamente onde
            você está perdendo pontos e receba orientações para evoluir a cada nova
            tentativa.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Quero buscar minha nota 1000
            </a>
            <a href="#como-funciona" className="btn-secondary">
              Ver como funciona
            </a>
          </div>
        </div>

        <div className="relative animate-fadeIn [animation-delay:200ms]">
          <ScoreCardMock />
        </div>
      </div>
    </section>
  )
}

function ScoreCardMock() {
  return (
    <div className="relative mx-auto max-w-[400px] animate-floatSlow">
      {/* glow scoped tightly behind the card itself, not the whole viewport */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-8 -top-6 bottom-10 rounded-3xl bg-signal/15 blur-[70px]"
      />

      <div className="card-surface shadow-card relative overflow-hidden">
        <div className="flex items-center justify-between border-b border-ink-700 px-5 py-4">
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-paper-400">
            Resultado da correção
          </span>
          <span className="h-2 w-2 rounded-full bg-signal" />
        </div>

        <div className="px-5 pb-5 pt-6">
          <div className="flex items-baseline gap-2">
            <span className="font-display text-5xl font-semibold text-paper-100">
              {heroMock.score}
            </span>
            <span className="font-mono text-sm text-paper-400">/ 1000</span>
          </div>
          <p className="mt-1 text-xs text-paper-400">Nota estimada · demonstração</p>

          <div className="mt-6 space-y-3">
            {heroMock.competencies.map((c) => (
              <div key={c.code}>
                <div className="mb-1.5 flex items-center justify-between">
                  <span className="font-mono text-[11px] text-paper-400">{c.code}</span>
                  <span className="font-mono text-[11px] text-paper-200">
                    {c.value}/{c.max}
                  </span>
                </div>
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-ink-700">
                  <div
                    className="h-full rounded-full bg-signal"
                    style={{ width: `${(c.value / c.max) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {heroMock.flags.map((flag) => (
              <span
                key={flag}
                className="rounded-full border border-ink-700 bg-ink-800 px-3 py-1.5 text-[11px] text-paper-400"
              >
                {flag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* floating accent chip */}
      <div className="card-surface shadow-card absolute -bottom-6 -left-6 hidden w-40 rounded-2xl px-4 py-3 sm:block">
        <p className="font-mono text-[10px] uppercase tracking-wide text-paper-400">Competência</p>
        <p className="mt-1 text-sm font-medium text-signal">C5 completa</p>
      </div>
    </div>
  )
}
