import { useReveal } from '../hooks/useReveal'
import { CHECKOUT_URL, PRODUCT_PRICE, OFFER_TEXT } from '../config/constants'
import { offerFeatures } from '../data/landingPage'

export default function PricingSection() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section className="py-20 sm:py-28">
      <div className="container-page">
        <div
          ref={ref}
          className="reveal card-surface shadow-card mx-auto max-w-3xl overflow-hidden"
        >
          <div className="grid gap-10 p-8 sm:p-12 lg:grid-cols-2 lg:gap-14">
            <div>
              <p className="eyebrow mb-4">Oferta</p>
              <h2 className="font-display text-2xl font-semibold leading-tight text-paper-100 sm:text-3xl">
                Comece a levar sua redação a sério.
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-paper-400">
                Tenha uma ferramenta para corrigir, entender e acompanhar sua evolução
                durante sua preparação.
              </p>

              {/* Preço editável — preencher antes de publicar */}
              <div className="mt-6 flex items-baseline gap-2">
                <span className="font-display text-3xl font-semibold text-paper-100">
                  {PRODUCT_PRICE}
                </span>
              </div>
              <p className="mt-1 text-xs text-paper-400">{OFFER_TEXT}</p>
            </div>

            <div>
              <ul className="space-y-3">
                {offerFeatures.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-signal-soft text-signal">
                      <svg viewBox="0 0 16 16" fill="none" className="h-3 w-3">
                        <path
                          d="M13 4 6 11 3 8"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className="text-sm text-paper-200">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-8 w-full"
              >
                Quero começar agora
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
