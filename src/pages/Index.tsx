import { useState } from "react"
import Header from "@/components/Header"
import HeroSection from "@/components/HeroSection"
import FeaturesSection from "@/components/FeaturesSection"
import SampleQuestionsSection from "@/components/SampleQuestionsSection"
import TrustSection from "@/components/TrustSection"
import BetaSection from "@/components/BetaSection"
import Footer from "@/components/Footer"
import BackgroundEffects from "@/components/BackgroundEffects"
import { DEMO_MARKETS, type DemoMarket } from "@/lib/demo-market"

const Index = () => {
  const [selectedMarket, setSelectedMarket] = useState(DEMO_MARKETS[0])

  const handleSelectMarket = (market: DemoMarket) => {
    setSelectedMarket(market)
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    document.getElementById("demo")?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" })
  }

  return (
    <div id="top" className="min-h-screen bg-background relative">
      <BackgroundEffects />
      <div className="relative z-10">
        <a className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-background focus:p-3 focus:text-foreground" href="#main-content">
          Skip to content
        </a>
        <p className="px-4 py-3 text-center text-sm bg-muted text-foreground" role="note">
          Demo only · sample outcomes and practice points · no live data, real money, wallets, or rewards
        </p>
        <Header />
        <main id="main-content">
          <HeroSection market={selectedMarket} />
          <FeaturesSection />
          <SampleQuestionsSection onSelectMarket={handleSelectMarket} selectedMarketId={selectedMarket.id} />
          <TrustSection />
          <BetaSection />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export { Index as default }
