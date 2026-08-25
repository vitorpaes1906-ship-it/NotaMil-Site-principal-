import { useReveal } from '../hooks/useReveal'
import { evolutionExample } from '../data/landingPage'

export default function EvolutionSection() {
  const ref = useReveal<HTMLDivElement>()
  const first = evolutionExample[0].value
  const last = evolutionExample[evolutionExample.length - 1].value
  const diff = last - first
  const max = Math.max(...evolutionExample.map((e) => e.value))

  return (
    <section id="evolucao" className="py-20 sm:py-28">
      <div className="container-page">
        <div ref={ref} className="reveal grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="eyebrow mb-4">Evolução</p>
            <h2 className="font-display text-3xl font-semibold leading-tight text-paper-100 sm:text-4xl">
              Não olhe apenas para sua nota.
              <br />
              Olhe para sua evolução.
            </h2>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-paper-400">
              Com o histórico das suas correções, você consegue enxergar sua evolução
              ao longo da preparação.
            </p>
          </div>

          <div className="card-surface shadow-card p-6 sm:p-8">
            <div className="mb-6 flex items-center justify-between">
              <span className="font-mono text-[11px] uppercase tracking-wide text-paper-400">
                Exemplo demonstrativo
              </span>
              <span className="rounded-full bg-signal-soft px-3 py-1 font-mono text-[11px] text-signal">
                +{diff} pontos
              </span>
            </div>

            <div className="flex h-48 items-end gap-3 sm:gap-4">
              {evolutionExample.map((e) => (
                <div key={e.label} className="flex flex-1 flex-col items-center gap-2">
                  <span className="font-mono text-xs text-paper-200">{e.value}</span>
                  <div className="flex h-full w-full items-end rounded-lg bg-ink-800">
                    <div
                      className="w-full rounded-lg bg-gradient-to-t from-signal/60 to-signal"
                      style={{ height: `${(e.value / max) * 100}%` }}
                    />
                  </div>
                  <span className="font-mono text-[10px] text-paper-400">{e.label}</span>
                </div>
              ))}
            </div>

            <p className="mt-6 text-xs text-paper-400">
              Os números acima são apenas uma demonstração visual e não representam
              resultados reais de usuários.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
