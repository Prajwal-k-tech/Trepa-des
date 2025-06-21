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
import { useState } from "react";

const Index = () => {
  const [sliderValue, setSliderValue] = useState(5.0);

  // Calculate payout percentage based on accuracy
  const getPayoutPercentage = (prediction: number, actual: number = 5.0) => {
    const diff = Math.abs(prediction - actual);
    if (diff === 0) return 100;
    if (diff <= 0.1) return 90;
    if (diff <= 0.2) return 80;
    if (diff <= 0.5) return 60;
    if (diff <= 1.0) return 30;
    return 10;
  };

  const payoutPercentage = getPayoutPercentage(sliderValue);

  return (
    <div className="min-h-screen bg-black text-white relative">
      <BackgroundEffects />
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative z-10">
        <div className="max-w-7xl mx-auto text-center relative">
          <h1 className="text-5xl md:text-7xl font-bold font-heading leading-tight mb-8 relative">
            <span className="text-white drop-shadow-2xl">
              From predicting vibes to
            </span>
            <br />
            <span className="bg-gradient-to-r from-green-400 via-green-500 to-green-600 bg-clip-text text-transparent drop-shadow-lg">
              forecasting real-world numbers.
            </span>
          </h1>

          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed opacity-90">
            You enter a point forecast, the exact number you think will be
            right. After the result is out, rewards scale based on how close
            your forecast is to the real value. The closer you are, the more you
            win.
          </p>

          <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
            Flex your foresight. Get rewarded for accuracy. Experience the new
            Trepa in our upcoming beta launch. Real questions. Real forecasting.
            Real rewards.
          </p>

          <div className="relative inline-block">
            <Button className="bg-green-500 hover:bg-green-600 text-black px-8 py-4 rounded-full text-lg font-medium transition-all transform hover:scale-105 shadow-lg shadow-green-500/25 relative z-10">
              Join Beta Program
            </Button>
            {/* Glow effect */}
            <div className="absolute inset-0 bg-green-500 rounded-full blur-xl opacity-30 -z-10 scale-110"></div>
          </div>
        </div>
      </section>

      {/* Close Still Pays Section */}
      <section className="py-20 px-6 border-t border-gray-800/50 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
                <span className="text-white">Close </span>
                <span className="text-green-500">Still Pays</span>
              </h2>

              <p className="text-xl text-gray-300 leading-relaxed mb-6">
                Traditional prediction markets are binary—you're either right or
                wrong. But reality isn't binary. Your insights have value even
                when you're close.
              </p>

              <p className="text-gray-400 leading-relaxed mb-8">
                Our precision model rewards you based on accuracy. Miss by 0.1%?
                You still get most of the reward. Miss by 2%? You get something.
                Miss by 10%? Well, you learned something for next time.
              </p>

              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                  <div className="text-green-500 text-2xl font-bold">90%</div>
                  <div className="text-sm text-gray-400">0.1% off</div>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                  <div className="text-green-500 text-2xl font-bold">60%</div>
                  <div className="text-sm text-gray-400">0.5% off</div>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                  <div className="text-green-500 text-2xl font-bold">30%</div>
                  <div className="text-sm text-gray-400">1.0% off</div>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative">
                {/* Target Board Visualization */}
                <div className="w-80 h-80 relative">
                  {/* Outer rings */}
                  <div className="absolute inset-0 rounded-full border-4 border-gray-700 bg-gray-900/20"></div>
                  <div className="absolute inset-8 rounded-full border-4 border-gray-600 bg-gray-800/20"></div>
                  <div className="absolute inset-16 rounded-full border-4 border-gray-500 bg-gray-700/20"></div>
                  <div className="absolute inset-24 rounded-full border-4 border-green-500/50 bg-green-500/10"></div>
                  <div className="absolute inset-32 rounded-full border-4 border-green-500 bg-green-500/20"></div>

                  {/* Center bullseye */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-green-500"></div>

                  {/* Accuracy labels */}
                  <div className="absolute top-2 left-1/2 transform -translate-x-1/2 text-xs text-gray-500">
                    ±2%
                  </div>
                  <div className="absolute top-12 left-1/2 transform -translate-x-1/2 text-xs text-gray-400">
                    ±1%
                  </div>
                  <div className="absolute top-20 left-1/2 transform -translate-x-1/2 text-xs text-gray-300">
                    ±0.5%
                  </div>
                  <div className="absolute top-28 left-1/2 transform -translate-x-1/2 text-xs text-green-500">
                    ±0.1%
                  </div>
                  <div className="absolute top-36 left-1/2 transform -translate-x-1/2 text-xs text-green-500 font-bold">
                    Exact
                  </div>

                  {/* Animated pulse effect */}
                  <div className="absolute inset-32 rounded-full border-2 border-green-500 animate-ping opacity-75"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Slide and Stake Interactive Demo */}
      <section
        id="how-it-works"
        className="py-20 px-6 border-t border-gray-800/50 relative z-10"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
              <span className="text-white">Slide and </span>
              <span className="text-green-500">Stake</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Experience precision predictions in action
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="relative bg-gray-900/60 backdrop-blur-sm border border-gray-800/60 rounded-2xl p-8 shadow-2xl">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent rounded-2xl"></div>

              <div className="relative z-10">
                <h3 className="text-2xl font-semibold mb-8 text-center text-white">
                  Predict Next Month's US Inflation Rate
                </h3>

                {/* Current Prediction Display */}
                <div className="text-center mb-8">
                  <div className="text-sm text-gray-400 mb-2">
                    Your Prediction
                  </div>
                  <div className="text-4xl font-bold text-green-500">
                    {sliderValue.toFixed(1)}%
                  </div>
                </div>

                {/* Interactive Slider */}
                <div className="mb-8">
                  <div className="relative">
                    <input
                      type="range"
                      min="0"
                      max="10"
                      step="0.1"
                      value={sliderValue}
                      onChange={(e) =>
                        setSliderValue(parseFloat(e.target.value))
                      }
                      className="w-full h-3 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                      style={{
                        background: `linear-gradient(to right, #10b981 0%, #10b981 ${(sliderValue / 10) * 100}%, rgb(55, 65, 81) ${(sliderValue / 10) * 100}%, rgb(55, 65, 81) 100%)`,
                      }}
                    />
                    <div className="flex justify-between text-xs text-gray-400 mt-2">
                      <span>0%</span>
                      <span>2.5%</span>
                      <span>5%</span>
                      <span>7.5%</span>
                      <span>10%</span>
                    </div>
                  </div>
                </div>

                {/* Potential Payout Display */}
                <div className="mb-8 p-6 bg-gray-800/30 rounded-xl border border-gray-700">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-400">Potential Payout:</span>
                    <span className="text-xl font-bold text-green-500">
                      {payoutPercentage}%
                    </span>
                  </div>

                  {/* Visual payout bar */}
                  <div className="w-full bg-gray-700 rounded-full h-3 mb-4">
                    <div
                      className="bg-gradient-to-r from-green-500 to-green-600 h-3 rounded-full transition-all duration-300"
                      style={{ width: `${payoutPercentage}%` }}
                    ></div>
                  </div>

                  <div className="text-sm text-gray-400 text-center">
                    {sliderValue === 5.0
                      ? "Perfect prediction! Maximum payout if actual = 5.0%"
                      : `${Math.abs(sliderValue - 5.0).toFixed(1)}% off from example target (5.0%)`}
                  </div>
                </div>

                {/* Risk Information */}
                <div className="mb-8 space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Exact match (5.0%):</span>
                    <span className="text-green-500 font-semibold">
                      100% payout
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Within 0.1%:</span>
                    <span className="text-green-500">90% payout</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Within 0.5%:</span>
                    <span className="text-yellow-400">60% payout</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">More than 1% off:</span>
                    <span className="text-red-400">Low reward</span>
                  </div>
                </div>

                {/* Stake Button */}
                <Button className="w-full bg-green-500 hover:bg-green-600 text-black py-4 rounded-xl text-lg font-bold shadow-lg shadow-green-500/30 transition-all transform hover:scale-[1.02]">
                  Stake $100
                </Button>

                <p className="text-xs text-gray-500 text-center mt-4">
                  *Example for demonstration. Actual results determine final
                  payouts.
                </p>
              </div>
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
              <span className="text-green-500">Trepa?</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              The future of prediction markets is precision
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <Trophy className="w-6 h-6 text-green-500" />
                </div>
              }
              title="Skill Over Luck"
              description="Your analytical abilities matter. Get rewarded for being close, not just lucky. Precision predictions reward intelligence and research."
            />

            <FeatureCard
              icon={
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <Target className="w-6 h-6 text-primary" />
                </div>
              }
              title="Real-World Impact"
              description="Predict economic indicators, market movements, and events that matter. Your forecasts contribute to collective intelligence."
            />

            <FeatureCard
              icon={
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
              }
              title="Instant Clarity"
              description="See exactly how your payout is calculated before you stake. Our transparent precision model builds trust through clarity."
            />
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-6 border-t border-gray-800/50 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
            <span className="text-foreground">Ready to show your</span>
            <br />
            <span className="text-primary">precision?</span>
          </h2>

          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Join the beta and experience the future of prediction markets. Where
            being close counts, and accuracy pays.
          </p>

          <div className="relative inline-block">
            <Button className="bg-primary hover:bg-primary/80 text-primary-foreground px-12 py-4 rounded-full text-xl font-semibold transition-all transform hover:scale-105 shadow-xl shadow-primary/30">
              Join Beta
            </Button>
            <div className="absolute inset-0 bg-primary rounded-full blur-xl opacity-40 -z-10 scale-110 animate-pulse"></div>
          </div>

          <p className="text-sm text-muted-foreground mt-6">
            Limited beta access • Web-based platform • No downloads required
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
