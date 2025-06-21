import Header from "@/components/Header"
import HeroSection from "@/components/HeroSection"
import FeaturesSection from "@/components/FeaturesSection"
import SampleQuestionsSection from "@/components/SampleQuestionsSection"
import BetaSection from "@/components/BetaSection"
import Footer from "@/components/Footer"

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <SampleQuestionsSection />
        <BetaSection />
      </main>
      <Footer />
    </div>
  )
}

export { Index as default }
