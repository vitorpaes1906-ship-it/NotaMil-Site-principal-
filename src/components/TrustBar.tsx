import { trustBar } from '../data/landingPage'

const icons = [
  // correção IA
  <path key="1" strokeLinecap="round" strokeLinejoin="round" d="M12 3v3m0 12v3m9-9h-3M6 12H3m14.5-6.5-2.1 2.1M8.6 15.4l-2.1 2.1m0-11 2.1 2.1m8.8 8.8 2.1 2.1M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z" />,
  // competências
  <path key="2" strokeLinecap="round" strokeLinejoin="round" d="M4 19V10m6 9V5m6 14v-7" />,
  // evolução
  <path key="3" strokeLinecap="round" strokeLinejoin="round" d="m3 17 6-6 4 4 8-8m0 0h-5m5 0v5" />,
  // professor ia
  <path key="4" strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8-1.06 0-2.077-.163-3.02-.463L3 21l1.395-3.72C3.512 15.947 3 14.02 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8Z" />,
]

export default function TrustBar() {
  return (
    <section className="border-y border-ink-800/70 bg-ink-900/40">
      <div className="container-page grid grid-cols-2 gap-6 py-8 sm:grid-cols-4 sm:gap-4">
        {trustBar.map((item, i) => (
          <div key={item.label} className="flex items-center gap-3">
            <svg
              className="h-5 w-5 shrink-0 text-signal"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
            >
              {icons[i]}
            </svg>
            <span className="text-sm text-paper-400">{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
