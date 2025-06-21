import Header from "@/components/Header"
import HeroSection from "@/components/HeroSection"
import FeaturesSection from "@/components/FeaturesSection"
import SampleQuestionsSection from "@/components/SampleQuestionsSection"
import TrustSection from "@/components/TrustSection"
import BetaSection from "@/components/BetaSection"
import Footer from "@/components/Footer"
import BackgroundEffects from "@/components/BackgroundEffects"

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <BackgroundEffects />
      <div className="relative z-10">
        <Header />
        <main>
          <HeroSection />
          <FeaturesSection />
          <SampleQuestionsSection />
          <TrustSection />
          <BetaSection />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export { Index as default }
