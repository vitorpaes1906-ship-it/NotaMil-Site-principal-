import { useState } from 'react'
import { CHECKOUT_URL, LOGO_SRC, BRAND_NAME } from '../config/constants'
import { navLinks } from '../data/landingPage'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header
      id="top"
      className="sticky top-0 z-50 border-b border-ink-800/80 bg-ink-950/80 backdrop-blur-md"
    >
      <div className="container-page flex h-16 items-center justify-between sm:h-20">
        <a href="#top" className="flex items-center gap-2">
          <img src={LOGO_SRC} alt={BRAND_NAME} className="h-9 w-auto sm:h-11" />
        </a>

        <nav className="hidden items-center gap-9 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-paper-400 transition-colors hover:text-paper-100"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={CHECKOUT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary hidden !px-5 !py-2.5 lg:inline-flex"
        >
          Começar agora
        </a>

        <button
          type="button"
          aria-label="Abrir menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-700 text-paper-100 lg:hidden"
        >
          <span className="relative block h-3.5 w-4">
            <span
              className={`absolute left-0 top-0 h-[1.5px] w-full bg-current transition-transform duration-300 ${open ? 'translate-y-[7px] rotate-45' : ''}`}
            />
            <span
              className={`absolute left-0 top-1/2 h-[1.5px] w-full -translate-y-1/2 bg-current transition-opacity duration-300 ${open ? 'opacity-0' : 'opacity-100'}`}
            />
            <span
              className={`absolute bottom-0 left-0 h-[1.5px] w-full bg-current transition-transform duration-300 ${open ? '-translate-y-[7px] -rotate-45' : ''}`}
            />
          </span>
        </button>
      </div>

      {open && (
        <div className="border-t border-ink-800 bg-ink-950 px-5 pb-6 pt-2 lg:hidden">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-3 text-base text-paper-200 transition-colors hover:bg-ink-800"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-3">
            <a
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full"
            >
              Começar agora
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
