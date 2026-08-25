import { useReveal } from '../hooks/useReveal'
import { objections } from '../data/landingPage'
import Accordion from './Accordion'

export default function Objections() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section className="py-20 sm:py-28">
      <div className="container-page">
        <div ref={ref} className="reveal max-w-xl">
          <p className="eyebrow mb-4">Antes de começar</p>
          <h2 className="font-display text-3xl font-semibold leading-tight text-paper-100 sm:text-4xl">
            Antes de começar, talvez você esteja pensando...
          </h2>
        </div>

        <div className="mt-10 max-w-2xl">
          <Accordion items={objections} />
        </div>
      </div>
    </section>
  )
}
