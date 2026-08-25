import { useReveal } from '../hooks/useReveal'
import { CHECKOUT_URL } from '../config/constants'

export default function FinalCTA() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section className="py-20 sm:py-28">
      <div className="container-page">
        <div
          ref={ref}
          className="reveal relative overflow-hidden rounded-3xl border border-ink-700 bg-ink-900 px-6 py-16 text-center sm:px-12 sm:py-20"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-0 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-signal/10 blur-[100px]"
          />

          <h2 className="relative font-display text-3xl font-semibold leading-tight text-paper-100 sm:text-4xl lg:text-[2.6rem]">
            Uma nota não define seu potencial.
            <br />
            Mas cada redação pode te deixar mais perto da sua meta.
          </h2>
          <p className="relative mx-auto mt-5 max-w-md text-[15px] leading-relaxed text-paper-400">
            Escreva sua próxima redação com um objetivo claro: entender, corrigir e
            evoluir.
          </p>

          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary relative mt-9 inline-flex"
          >
            Quero buscar minha nota 1000
          </a>
        </div>
      </div>
    </section>
  )
}
