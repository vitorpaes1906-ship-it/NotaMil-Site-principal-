import { useReveal } from '../hooks/useReveal'
import { problems } from '../data/landingPage'

export default function ProblemSection() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section className="py-20 sm:py-28">
      <div className="container-page">
        <div ref={ref} className="reveal max-w-2xl">
          <p className="eyebrow mb-4">O problema</p>
          <h2 className="font-display text-3xl font-semibold leading-tight text-paper-100 sm:text-4xl">
            Você sabe sua nota.
            <br />
            Mas sabe por que ela não aumenta?
          </h2>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {problems.map((p, i) => (
            <ProblemCard key={p} text={p} index={i} />
          ))}
        </div>

        <RevealText />
      </div>
    </section>
  )
}

function ProblemCard({ text, index }: { text: string; index: number }) {
  const ref = useReveal<HTMLDivElement>()
  return (
    <div
      ref={ref}
      className="reveal card-surface p-6"
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <p className="text-[15px] leading-relaxed text-paper-400">{text}</p>
    </div>
  )
}

function RevealText() {
  const ref = useReveal<HTMLParagraphElement>()
  return (
    <p ref={ref} className="reveal mt-12 text-lg font-medium text-paper-100">
      O NotaMil transforma esse processo em um ciclo de evolução.
    </p>
  )
}
