import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import { goals } from '../data/landingPage'
import { CHECKOUT_URL } from '../config/constants'

export default function GoalsSection() {
  const ref = useReveal<HTMLDivElement>()
  const [selected, setSelected] = useState(goals[goals.length - 1])

  return (
    <section className="py-20 sm:py-28">
      <div className="container-page">
        <div ref={ref} className="reveal text-center">
          <p className="eyebrow mb-4">Sua meta</p>
          <h2 className="font-display text-3xl font-semibold leading-tight text-paper-100 sm:text-4xl">
            Qual é a sua meta?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-[15px] leading-relaxed text-paper-400">
            Toque na nota que você quer alcançar e use cada redação como mais um
            passo nessa direção.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-3xl grid-cols-3 gap-3 sm:grid-cols-5 sm:gap-4">
          {goals.map((goal) => {
            const isSelected = goal === selected
            return (
              <button
                key={goal}
                type="button"
                onClick={() => setSelected(goal)}
                aria-pressed={isSelected}
                className={`rounded-2xl border px-4 py-6 text-center font-display text-lg font-semibold transition-all duration-200 sm:text-xl ${
                  isSelected
                    ? 'border-signal bg-signal-soft text-signal shadow-glow scale-[1.03]'
                    : 'border-ink-700 bg-ink-900 text-paper-200 hover:border-paper-400'
                }`}
              >
                {goal}
              </button>
            )
          })}
        </div>

        <div className="mt-10 text-center">
          <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Quero buscar a nota {selected}
          </a>
        </div>
      </div>
    </section>
  )
}
