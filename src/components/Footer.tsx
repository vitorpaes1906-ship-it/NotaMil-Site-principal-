import { LOGO_SRC, BRAND_NAME, SUPPORT_WHATSAPP_DISPLAY, SUPPORT_WHATSAPP_URL } from '../config/constants'
import { footerLinks } from '../data/landingPage'

export default function Footer() {
  return (
    <footer className="border-t border-ink-800 py-12">
      <div className="container-page flex flex-col items-center gap-8 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex flex-col items-center gap-3 sm:items-start">
          <img src={LOGO_SRC} alt={BRAND_NAME} className="h-7 w-auto" />
          <a
            href={SUPPORT_WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-paper-400 transition-colors hover:text-paper-100"
          >
            Suporte via WhatsApp: {SUPPORT_WHATSAPP_DISPLAY}
          </a>
        </div>

        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-3 sm:justify-end">
          {footerLinks.map((link) => {
            const isExternal = link.href.startsWith('http')
            return (
              <a
                key={link.label}
                href={link.href}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noopener noreferrer' : undefined}
                className="text-xs text-paper-400 transition-colors hover:text-paper-100"
              >
                {link.label}
              </a>
            )
          })}
        </nav>
      </div>

      <div className="container-page mt-10 border-t border-ink-800 pt-6">
        <p className="text-center text-xs text-paper-400/70 sm:text-left">
          © {new Date().getFullYear()} {BRAND_NAME}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
