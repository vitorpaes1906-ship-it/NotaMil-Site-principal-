import { useReveal } from '../hooks/useReveal'
import { faq } from '../data/landingPage'
import Accordion from './Accordion'

export default function FAQ() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section id="faq" className="py-20 sm:py-28">
      <div className="container-page">
        <div ref={ref} className="reveal max-w-xl">
          <p className="eyebrow mb-4">FAQ</p>
          <h2 className="font-display text-3xl font-semibold leading-tight text-paper-100 sm:text-4xl">
            Perguntas frequentes.
          </h2>
        </div>

        <div className="mt-10 max-w-2xl">
          <Accordion items={faq} />
        </div>
      </div>
    </section>
  )
}
