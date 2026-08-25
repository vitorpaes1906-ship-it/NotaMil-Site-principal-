import { CHECKOUT_URL } from '../config/constants'

export default function StickyMobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-ink-800 bg-ink-950/95 px-4 py-3 backdrop-blur-md lg:hidden">
      <a
        href={CHECKOUT_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-primary block w-full text-center"
      >
        Quero buscar minha nota 1000
      </a>
    </div>
  )
}
