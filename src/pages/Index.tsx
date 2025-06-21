import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FeatureCard from "@/components/FeatureCard";
import BackgroundEffects from "@/components/BackgroundEffects";
import { TrendingUp, Target, Brain } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white relative">
      <BackgroundEffects />
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative z-10">
        <div className="max-w-7xl mx-auto text-center relative">
          {/* Sophisticated brain illustration */}
          <div className="absolute -top-10 right-1/6 hidden xl:block">
            <div className="relative w-48 h-48">
              {/* Neural network connections */}
              <svg
                className="absolute inset-0 w-full h-full text-pink-500/20"
                viewBox="0 0 200 200"
              >
                <defs>
                  <linearGradient
                    id="connectionGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="rgb(236 72 153 / 0.3)" />
                    <stop offset="100%" stopColor="rgb(236 72 153 / 0.1)" />
                  </linearGradient>
                </defs>
                <path
                  d="M30,50 Q100,30 170,70"
                  stroke="url(#connectionGradient)"
                  strokeWidth="1"
                  fill="none"
                  className="animate-pulse"
                />
                <path
                  d="M40,120 Q100,80 160,130"
                  stroke="url(#connectionGradient)"
                  strokeWidth="1"
                  fill="none"
                  className="animate-pulse"
                  style={{ animationDelay: "1s" }}
                />
                <path
                  d="M60,160 Q120,140 180,160"
                  stroke="url(#connectionGradient)"
                  strokeWidth="1"
                  fill="none"
                  className="animate-pulse"
                  style={{ animationDelay: "2s" }}
                />
                <circle
                  cx="30"
                  cy="50"
                  r="3"
                  fill="rgb(236 72 153 / 0.4)"
                  className="animate-pulse"
                />
                <circle
                  cx="170"
                  cy="70"
                  r="3"
                  fill="rgb(236 72 153 / 0.4)"
                  className="animate-pulse"
                />
                <circle
                  cx="40"
                  cy="120"
                  r="3"
                  fill="rgb(236 72 153 / 0.4)"
                  className="animate-pulse"
                  style={{ animationDelay: "1s" }}
                />
                <circle
                  cx="160"
                  cy="130"
                  r="3"
                  fill="rgb(236 72 153 / 0.4)"
                  className="animate-pulse"
                  style={{ animationDelay: "1s" }}
                />
                <circle
                  cx="60"
                  cy="160"
                  r="3"
                  fill="rgb(236 72 153 / 0.4)"
                  className="animate-pulse"
                  style={{ animationDelay: "2s" }}
                />
                <circle
                  cx="180"
                  cy="160"
                  r="3"
                  fill="rgb(236 72 153 / 0.4)"
                  className="animate-pulse"
                  style={{ animationDelay: "2s" }}
                />
              </svg>

              {/* Brain outline */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <Brain className="w-20 h-20 text-pink-400/60 filter drop-shadow-lg" />
                  <div className="absolute inset-0 bg-pink-500/20 rounded-full blur-xl"></div>
                </div>
              </div>

              {/* Floating quote bubble */}
              <div className="absolute -left-16 top-8 bg-gray-900/80 backdrop-blur-sm border border-pink-500/20 rounded-lg px-3 py-2 text-xs text-pink-300">
                <div className="relative">
                  I analyze sentiment with my empathy and psyops skills.
                  <div className="absolute -right-1 top-3 w-2 h-2 bg-gray-900 border-r border-b border-pink-500/20 transform rotate-45"></div>
                </div>
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold font-heading leading-tight mb-8 relative">
            <span className="text-white drop-shadow-2xl">
              From predicting vibes to
            </span>
            <br />
            <span className="bg-gradient-to-r from-pink-500 via-pink-400 to-pink-600 bg-clip-text text-transparent drop-shadow-lg">
              forecasting real-world numbers.
            </span>
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed opacity-90">
            Flex your foresight. Get rewarded for accuracy. Experience the new
            Trepa in our upcoming beta launch. Real questions. Real forecasting.
            Real rewards.
          </p>

          <div className="relative inline-block">
            <Button className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-all transform hover:scale-105 shadow-lg shadow-pink-500/25 relative z-10">
              Join Beta Program
            </Button>
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full blur-xl opacity-30 -z-10 scale-110"></div>
          </div>
        </div>
      </section>

      {/* Precision Matters Section */}
      <section className="py-20 px-6 border-t border-gray-800/50 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
                <span className="text-white">Precision Matters,</span>
                <br />
                <span className="text-trepa-green">Proximity Rewarded</span>
              </h2>

              <p className="text-xl text-gray-300 leading-relaxed">
                With Trepa, you don't have to be exact to win. Our precision
                prediction model rewards you based on how close you are to the
                actual outcome. The nearer your forecast, the better your
                payout. It's about accuracy, not just hitting the bullseye.
              </p>
            </div>

            <div className="flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 rounded-full bg-gradient-to-br from-trepa-green/20 to-trepa-green/5 flex items-center justify-center">
                  <div className="w-48 h-48 rounded-full bg-gradient-to-br from-trepa-green/30 to-trepa-green/10 flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-trepa-green/40 to-trepa-green/20 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-trepa-green flex items-center justify-center">
                        <div className="w-8 h-8 rounded-full bg-pink-500"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Slide and Stake Section */}
      <section
        id="how-it-works"
        className="py-20 px-6 border-t border-gray-800/50 relative z-10"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
                <span className="text-white">Slide and Stake: </span>
                <span className="text-trepa-green">How It Works</span>
              </h2>

              <p className="text-xl text-gray-300 leading-relaxed">
                Trepa's innovative 'slide and stake' mechanism makes precision
                predictions intuitive and engaging. Simply adjust the slider to
                your predicted value for a given question. Your potential payout
                and risk are dynamically calculated based on how close your
                prediction is. Stake your confidence and see your foresight pay
                off.
              </p>
            </div>

            <div className="relative bg-gradient-to-br from-gray-900/60 to-gray-950/80 backdrop-blur-sm border border-gray-800/60 rounded-2xl p-8 shadow-2xl">
              {/* Subtle glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-transparent rounded-2xl"></div>
              <div className="relative z-10">
                <h3 className="text-lg font-semibold mb-6 text-white">
                  Predict Next Week's US Inflation Rate (%)
                </h3>

                <div className="mb-6">
                  <div className="text-sm text-gray-400 mb-2">
                    Your Prediction: 5.0%
                  </div>
                  <div className="relative bg-gray-800 rounded-full h-2 mb-4">
                    <div className="absolute left-0 top-0 h-full bg-gradient-to-r from-pink-500 to-pink-600 rounded-full w-1/2"></div>
                    <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-pink-500 rounded-full border-2 border-white"></div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-400">
                    <span>0%</span>
                    <span>10%</span>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="text-sm text-gray-400 mb-2">
                    Potential Payout: 90% if actual = 5.0%
                  </div>
                  <div className="text-xs text-gray-500">
                    Risk Level: Moderate (teens with prediction accuracy)
                  </div>
                </div>

                <Button className="w-full bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-lg font-medium shadow-lg shadow-pink-500/25">
                  Stake
                </Button>
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
              <span className="text-pink-500">Trepa?</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={
                <div className="w-12 h-12 bg-pink-500/20 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-pink-500" />
                </div>
              }
              title="Earn Rewards"
              description="Monetize your insights by making accurate predictions and getting rewarded for your foresight."
            />

            <FeatureCard
              icon={
                <div className="w-12 h-12 bg-pink-500/20 rounded-lg flex items-center justify-center">
                  <Target className="w-6 h-6 text-pink-500" />
                </div>
              }
              title="Sharpen Your Skills"
              description="Improve your forecasting abilities and gain a deeper understanding of market dynamics and event outcomes."
            />

            <FeatureCard
              icon={
                <div className="w-12 h-12 bg-pink-500/20 rounded-lg flex items-center justify-center">
                  <Brain className="w-6 h-6 text-pink-500" />
                </div>
              }
              title="Engage Your Mind"
              description="Participate in a stimulating platform that challenges your predictive instinct on diverse, real-world questions."
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
