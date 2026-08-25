import { useEffect, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import ProblemSection from './components/ProblemSection'
import HowItWorks from './components/HowItWorks'
import ProductShowcase from './components/ProductShowcase'
import AISection from './components/AISection'
import EvolutionSection from './components/EvolutionSection'
import GoalsSection from './components/GoalsSection'
import PricingSection from './components/PricingSection'
import Objections from './components/Objections'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import StickyMobileCTA from './components/StickyMobileCTA'
import Termos from './pages/Termos'
import Privacidade from './pages/Privacidade'

function useHashRoute() {
  const [hash, setHash] = useState(() => window.location.hash)

  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash)
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  return hash
}

export default function App() {
  const hash = useHashRoute()

  if (hash === '#/termos') return <Termos />
  if (hash === '#/privacidade') return <Privacidade />

  return (
    <div className="min-h-screen bg-ink-950">
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <ProblemSection />
        <HowItWorks />
        <ProductShowcase />
        <AISection />
        <EvolutionSection />
        <GoalsSection />
        <PricingSection />
        <Objections />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <StickyMobileCTA />
      {/* espaço reservado para a barra fixa mobile não sobrepor o footer */}
      <div className="h-16 lg:hidden" aria-hidden />
    </div>
  )
}
