import { useReveal } from '../hooks/useReveal'
import { productShowcase, heroMock } from '../data/landingPage'

export default function ProductShowcase() {
  return (
    <section id="produto" className="py-20 sm:py-28">
      <div className="container-page space-y-24">
        {productShowcase.map((block, i) => (
          <ShowcaseBlock key={block.title} block={block} index={i} />
        ))}
      </div>
    </section>
  )
}

function ShowcaseBlock({
  block,
  index,
}: {
  block: { eyebrow: string; title: string; description: string }
  index: number
}) {
  const ref = useReveal<HTMLDivElement>()
  const reversed = index % 2 === 1

  return (
    <div
      ref={ref}
      className={`reveal grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
        reversed ? 'lg:[&>*:first-child]:order-2' : ''
      }`}
    >
      <div>
        <p className="eyebrow mb-4">{block.eyebrow}</p>
        <h3 className="font-display text-2xl font-semibold leading-tight text-paper-100 sm:text-3xl">
          {block.title}
        </h3>
        <p className="mt-4 max-w-md text-[15px] leading-relaxed text-paper-400">
          {block.description}
        </p>
      </div>
      <div>
        <ShowcaseMock variant={index} />
      </div>
    </div>
  )
}

function ShowcaseMock({ variant }: { variant: number }) {
  if (variant === 0) {
    return (
      <div className="card-surface shadow-card mx-auto max-w-sm p-6">
        <p className="font-mono text-[11px] uppercase tracking-wide text-paper-400">
          Desempenho por competência
        </p>
        <div className="mt-5 flex items-end gap-3">
          {heroMock.competencies.map((c) => (
            <div key={c.code} className="flex flex-1 flex-col items-center gap-2">
              <div className="flex h-28 w-full items-end rounded-lg bg-ink-800">
                <div
                  className="w-full rounded-lg bg-signal"
                  style={{ height: `${(c.value / c.max) * 100}%` }}
                />
              </div>
              <span className="font-mono text-[10px] text-paper-400">{c.code}</span>
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (variant === 1) {
    return (
      <div className="card-surface shadow-card mx-auto max-w-sm p-6">
        <p className="font-mono text-[11px] uppercase tracking-wide text-paper-400">
          Pontos de atenção
        </p>
        <div className="mt-5 space-y-3">
          {['Argumentação pouco desenvolvida', 'Repertório sociocultural limitado', 'Conectivos repetidos'].map(
            (item) => (
              <div key={item} className="flex items-start gap-3 rounded-xl border border-ink-700 bg-ink-800/60 p-3.5">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-signal" />
                <span className="text-sm text-paper-400">{item}</span>
              </div>
            ),
          )}
        </div>
      </div>
    )
  }

  return (
    <div className="card-surface shadow-card mx-auto max-w-sm p-6">
      <p className="font-mono text-[11px] uppercase tracking-wide text-paper-400">
        Histórico de redações
      </p>
      <div className="mt-5 flex h-32 items-end gap-2.5">
        {[640, 700, 760, 820, 880].map((v, i) => (
          <div key={i} className="flex flex-1 flex-col items-center gap-2">
            <div className="flex h-full w-full items-end rounded-md bg-ink-800">
              <div
                className="w-full rounded-md bg-signal/80"
                style={{ height: `${(v / 1000) * 100}%` }}
              />
            </div>
            <span className="font-mono text-[9px] text-paper-400">{v}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
