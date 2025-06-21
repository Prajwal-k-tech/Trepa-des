import Header from "@/components/Header"
import HeroSection from "@/components/HeroSection"
import FeaturesSection from "@/components/FeaturesSection"
import BetaSection from "@/components/BetaSection"
import Footer from "@/components/Footer"

const Index = () => {
  return (
    <div className="min-h-screen bg-trepa-background">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <BetaSection />
      </main>
      <Footer />
    </div>
  )
}

export { Index as default }
