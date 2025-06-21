import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FeatureCard from "@/components/FeatureCard";
import BackgroundEffects from "@/components/BackgroundEffects";
import {
  TrendingUp,
  Target,
  Lightbulb,
  Zap,
  Shield,
  Trophy,
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white relative">
      <BackgroundEffects />
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative z-10">
        <div className="max-w-7xl mx-auto text-center relative">
          <h1 className="text-5xl md:text-7xl font-bold font-heading leading-tight mb-8 relative">
            <span className="text-white drop-shadow-2xl">
              Don't just be right.
            </span>
            <br />
            <span className="bg-gradient-to-r from-trepa-green via-trepa-green-light to-trepa-green bg-clip-text text-transparent drop-shadow-lg">
              Be accurate.
            </span>
          </h1>

          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed opacity-90">
            Trepa is the world's first precision predictions platform. Get
            rewarded for how close you are to the actual outcome—not just lucky
            guesses. Slide, stake, and show off your financial foresight.
          </p>

          <div className="relative inline-block">
            <Button className="bg-gradient-to-r from-trepa-green to-trepa-green-dark hover:from-trepa-green-dark hover:to-trepa-green text-black px-8 py-4 rounded-full text-lg font-medium transition-all transform hover:scale-105 shadow-lg shadow-trepa-green/25 relative z-10">
              Join Beta Program
            </Button>
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-trepa-green to-trepa-green-dark rounded-full blur-xl opacity-30 -z-10 scale-110"></div>
          </div>
        </div>
      </section>

      {/* Problem Statement Section */}
      <section className="py-20 px-6 border-t border-gray-800/50 relative z-10">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-8 text-white">
            Traditional prediction markets are broken
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="text-left">
              <div className="bg-red-900/20 border border-red-500/30 rounded-2xl p-8 mb-6">
                <h3 className="text-xl font-semibold text-red-400 mb-4">
                  The Old Way
                </h3>
                <p className="text-gray-300 mb-4">
                  "Will job numbers be over 100,000 next month?"
                </p>
                <p className="text-gray-400 text-sm">
                  If actual = 100,001 but you guess 99,999, you lose
                  completely—same as someone who guessed 50,000.
                </p>
              </div>
            </div>
            <div className="text-left">
              <div className="bg-trepa-green/10 border border-trepa-green/30 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-trepa-green mb-4">
                  The Trepa Way
                </h3>
                <p className="text-gray-300 mb-4">
                  "What will the inflation rate be next month?"
                </p>
                <p className="text-gray-400 text-sm">
                  Guess 4.9% when actual is 5.0%? Get rewarded for your
                  accuracy. The closer you are, the bigger your payout.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - Slide and Stake */}
      <section
        id="how-it-works"
        className="py-20 px-6 border-t border-gray-800/50 relative z-10"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
              <span className="text-white">Slide, Stake, </span>
              <span className="text-trepa-green">Succeed</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our intuitive interface makes precision predictions simple and
              engaging
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-trepa-green rounded-full flex items-center justify-center flex-shrink-0 text-black font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Choose a Question
                    </h3>
                    <p className="text-gray-400">
                      Pick from real-world economic indicators, market
                      movements, or event outcomes.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-trepa-green rounded-full flex items-center justify-center flex-shrink-0 text-black font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Slide Your Prediction
                    </h3>
                    <p className="text-gray-400">
                      Use our intuitive slider to set your precise prediction
                      value.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-trepa-green rounded-full flex items-center justify-center flex-shrink-0 text-black font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Stake Your Confidence
                    </h3>
                    <p className="text-gray-400">
                      Put your money where your prediction is. Higher stakes,
                      higher rewards.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-trepa-green rounded-full flex items-center justify-center flex-shrink-0 text-black font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Get Rewarded for Accuracy
                    </h3>
                    <p className="text-gray-400">
                      Earn based on how close you are to the actual outcome—not
                      just lucky guesses.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative bg-gradient-to-br from-gray-900/60 to-gray-950/80 backdrop-blur-sm border border-gray-800/60 rounded-2xl p-8 shadow-2xl">
              {/* Subtle glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-trepa-green/5 to-transparent rounded-2xl"></div>
              <div className="relative z-10">
                <h3 className="text-lg font-semibold mb-6 text-white">
                  Predict Next Week's US Inflation Rate (%)
                </h3>

                <div className="mb-6">
                  <div className="text-sm text-gray-400 mb-2">
                    Your Prediction:{" "}
                    <span className="text-trepa-green font-semibold">3.2%</span>
                  </div>
                  <div className="relative bg-gray-800 rounded-full h-3 mb-4">
                    <div className="absolute left-0 top-0 h-full bg-gradient-to-r from-trepa-green to-trepa-green-dark rounded-full w-[32%]"></div>
                    <div className="absolute left-[32%] top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-trepa-green rounded-full border-2 border-white shadow-lg"></div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-400">
                    <span>0%</span>
                    <span>5%</span>
                    <span>10%</span>
                  </div>
                </div>

                <div className="mb-6 p-4 bg-gray-800/50 rounded-lg">
                  <div className="text-sm text-gray-400 mb-1">
                    Potential Payout:
                  </div>
                  <div className="text-trepa-green font-semibold text-lg">
                    $127 if actual = 3.2%
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    Payout decreases as distance from actual increases
                  </div>
                </div>

                <Button className="w-full bg-trepa-green hover:bg-trepa-green-dark text-black py-3 rounded-lg font-medium shadow-lg shadow-trepa-green/25">
                  Stake $50
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Precision Matters Section */}
      <section className="py-20 px-6 border-t border-gray-800/50 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <div className="relative">
                {/* Accuracy visualization */}
                <div className="bg-gradient-to-br from-gray-900/60 to-gray-950/80 backdrop-blur-sm border border-gray-800/60 rounded-2xl p-8">
                  <h3 className="text-xl font-semibold text-white mb-6">
                    Accuracy Rewards
                  </h3>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-trepa-green/20 rounded-lg border border-trepa-green/30">
                      <span className="text-white">Your prediction: 5.0%</span>
                      <span className="text-trepa-green font-bold">$200</span>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-trepa-green/10 rounded-lg">
                      <span className="text-gray-300">0.1% off: 4.9%</span>
                      <span className="text-trepa-green-light font-bold">
                        $180
                      </span>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-gray-800/30 rounded-lg">
                      <span className="text-gray-400">0.5% off: 4.5%</span>
                      <span className="text-gray-300">$120</span>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-red-900/20 rounded-lg">
                      <span className="text-gray-500">2% off: 3.0%</span>
                      <span className="text-red-400">$20</span>
                    </div>
                  </div>

                  <div className="mt-4 text-xs text-gray-500 text-center">
                    Actual result: 5.0%
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
                <span className="text-white">Precision Matters,</span>
                <br />
                <span className="text-trepa-green">Proximity Pays</span>
              </h2>

              <p className="text-xl text-gray-300 leading-relaxed mb-6">
                Traditional prediction markets reward luck. Trepa rewards skill
                and accuracy. The closer your prediction to reality, the bigger
                your payout.
              </p>

              <p className="text-gray-400 leading-relaxed">
                Our precision model means being 0.1% off gets you almost the
                full reward, while wild guesses get you almost nothing. It's not
                about being lucky—it's about being smart.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Trepa Section */}
      <section
        id="why-trepa"
        className="py-20 px-6 border-t border-gray-800/50 relative z-10"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
              <span className="text-white">Why </span>
              <span className="text-trepa-green">Trepa?</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Join the next evolution of prediction markets
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={
                <div className="w-12 h-12 bg-trepa-green/20 rounded-lg flex items-center justify-center">
                  <Trophy className="w-6 h-6 text-trepa-green" />
                </div>
              }
              title="Skill Over Luck"
              description="Get rewarded for your analytical skills and market insights, not random chance. Precision predictions level the playing field."
            />

            <FeatureCard
              icon={
                <div className="w-12 h-12 bg-trepa-green/20 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-trepa-green" />
                </div>
              }
              title="Real-Time Rewards"
              description="See your potential payouts adjust in real-time as you refine your predictions. The interface is as precise as your forecasts."
            />

            <FeatureCard
              icon={
                <div className="w-12 h-12 bg-trepa-green/20 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-trepa-green" />
                </div>
              }
              title="Fair & Transparent"
              description="Our precision model is completely transparent. You always know exactly how your payout is calculated before you stake."
            />
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-6 border-t border-gray-800/50 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
            <span className="text-white">Ready to flex your</span>
            <br />
            <span className="text-trepa-green">financial foresight?</span>
          </h2>

          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join our beta and be among the first to experience precision
            predictions. Show the world how accurate you really are.
          </p>

          <div className="relative inline-block">
            <Button className="bg-gradient-to-r from-trepa-green to-trepa-green-dark hover:from-trepa-green-dark hover:to-trepa-green text-black px-12 py-4 rounded-full text-xl font-semibold transition-all transform hover:scale-105 shadow-xl shadow-trepa-green/30">
              Join Beta Program
            </Button>
            <div className="absolute inset-0 bg-gradient-to-r from-trepa-green to-trepa-green-dark rounded-full blur-xl opacity-40 -z-10 scale-110 animate-pulse"></div>
          </div>

          <p className="text-sm text-gray-500 mt-6">
            Limited beta spots available • No installation required
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
