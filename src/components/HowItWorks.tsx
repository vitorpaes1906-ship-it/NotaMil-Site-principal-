import { useReveal } from '../hooks/useReveal'
import { howItWorks } from '../data/landingPage'

export default function HowItWorks() {
  const headingRef = useReveal<HTMLDivElement>()

  return (
    <section id="como-funciona" className="py-20 sm:py-28">
      <div className="container-page">
        <div ref={headingRef} className="reveal max-w-xl">
          <p className="eyebrow mb-4">Como funciona</p>
          <h2 className="font-display text-3xl font-semibold leading-tight text-paper-100 sm:text-4xl">
            Um ciclo simples, repetido a cada redação.
          </h2>
        </div>

        <div className="relative mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* connecting line, desktop only */}
          <div
            aria-hidden
            className="absolute left-0 right-0 top-8 hidden h-px bg-ink-700 lg:block"
          />
          {howItWorks.map((step, i) => (
            <StepCard key={step.number} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function StepCard({
  step,
  index,
}: {
  step: { number: string; title: string; description: string }
  index: number
}) {
  const ref = useReveal<HTMLDivElement>()
  return (
    <div ref={ref} className="reveal relative" style={{ transitionDelay: `${index * 100}ms` }}>
      <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border border-ink-700 bg-ink-900 font-mono text-sm text-signal">
        {step.number}
      </div>
      <h3 className="mt-5 font-display text-lg font-semibold text-paper-100">{step.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-paper-400">{step.description}</p>
    </div>
  )
}
