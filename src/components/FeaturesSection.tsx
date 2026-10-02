import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Target, TrendingUp, Sparkles, Zap, DollarSign, Trophy, Star, Flame } from "lucide-react"

export default function FeaturesSection() {  const features = [
    {
      icon: Target,
      title: "Precision Rewards",
      description: "Get paid based on how close you are, not just if you're right or wrong.",
      highlight: "4.9% vs 5.0% = 90% payout",
      color: "text-primary",
      bgColor: "from-primary/10 to-purple-500/10"
    },
    {
      icon: Sparkles,
      title: "Show Your IQ", 
      description: "Demonstrate your analytical skills and financial expertise to the world.",
      highlight: "Accuracy leaderboards",
      color: "text-accent-green",
      bgColor: "from-purple-500/10 to-primary/10"
    },
    {
      icon: Zap,
      title: "Instant Payouts",
      description: "Receive your winnings immediately when predictions resolve.",
      highlight: "Real-time settlements",
      color: "text-primary",
      bgColor: "from-yellow-400/10 to-primary/10"
    },
    {
      icon: TrendingUp,
      title: "Market Intelligence",
      description: "Access crowd-sourced predictions for better market insights.",
      highlight: "Wisdom of crowds",
      color: "text-accent-green",
      bgColor: "from-primary/10 to-purple-500/10"
    }
  ]

  const comparisonData = [
    {
      scenario: "Inflation Rate Prediction",
      actual: "5.0%",
      traditional: {
        guess: "4.8%",
        result: "Wrong",
        payout: "$0",
        color: "text-red-400"
      },      trepa: {
        guess: "4.8%",
        result: "80% accurate",
        payout: "$120",
        color: "text-primary"
      }
    },
    {
      scenario: "GDP Growth Forecast",
      actual: "2.5%",
      traditional: {
        guess: "2.7%",
        result: "Wrong",
        payout: "$0",
        color: "text-red-400"
      },
      trepa: {
        guess: "2.7%",
        result: "92% accurate",
        payout: "$184",
        color: "text-accent-green"
      }}
  ]
  
  return (
    <section className="py-16 lg:py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Features Grid */}
        <div className="mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 lg:mb-16"
          >
            <h2 className="font-poppins text-3xl sm:text-4xl md:text-5xl font-bold mb-4 lg:mb-6">
              Why <span className="accuracy-highlight">Accuracy</span> Matters
            </h2>            <p className="font-inter text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
              Traditional prediction markets only care about right vs wrong. We believe <span className="accuracy-highlight">precision</span> should be rewarded.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}              >                <Card className={`frosted-glass border border-border ${feature.bgColor ? `bg-gradient-to-br ${feature.bgColor}` : ''} p-4 sm:p-6 h-full hover:border-primary/30 transition-all duration-300 group`}>
                  <div className={`w-12 h-12 bg-gradient-to-br ${feature.bgColor} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className={`font-poppins text-lg sm:text-xl font-bold mb-3 ${feature.color}`}>
                    {feature.title}
                  </h3>
                  <p className="font-inter text-sm sm:text-base text-muted-foreground mb-4">
                    {feature.description}
                  </p>
                  <div className={`font-inter text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-primary to-purple-500 px-3 py-1 rounded-full inline-block`}>
                    {feature.highlight}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Comparison Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-16"
        >          <div className="text-center">
            <h2 className="font-poppins text-3xl sm:text-4xl md:text-5xl font-bold mb-4 lg:mb-6">
              <span className="text-primary">Traditional</span> vs <span className="accuracy-highlight">Trepa</span>
            </h2>
            <p className="font-inter text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
              See how the same predictions perform in traditional binary markets versus our <span className="accuracy-highlight">precision-based</span> platform.
            </p>
          </div><div className="space-y-6 lg:space-y-8">
            {comparisonData.map((comparison, index) => (
              <motion.div
                key={comparison.scenario}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >                <Card className="frosted-glass border border-border p-4 sm:p-6 lg:p-8">
                  <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 items-center">
                    {/* Scenario */}
                    <div className="text-center lg:text-left">
                      <h3 className="font-poppins text-xl sm:text-2xl font-bold text-foreground mb-2">
                        {comparison.scenario}
                      </h3>                      <p className="font-inter text-sm sm:text-base text-muted-foreground">
                        Actual Result: <span className="text-primary font-bold">{comparison.actual}</span>
                      </p>
                    </div>

                    {/* Traditional Market */}
                    <div className="text-center p-6 bg-background rounded-lg border border-red-500/20">
                      <h4 className="font-poppins text-lg font-bold text-foreground mb-4">
                        Traditional Market
                      </h4>
                      <div className="space-y-2">
                        <p className="font-inter text-sm text-muted-foreground">
                          Your Guess: {comparison.traditional.guess}
                        </p>
                        <p className={`font-inter font-bold ${comparison.traditional.color}`}>
                          {comparison.traditional.result}
                        </p>
                        <p className="font-poppins text-xl font-bold text-foreground">
                          {comparison.traditional.payout}
                        </p>
                      </div>
                    </div>

                    {/* Trepa */}
                    <div className="text-center p-6 bg-background rounded-lg border border-primary/50">
                      <h4 className="font-poppins text-lg font-bold text-foreground mb-4">
                        Trepa Platform
                      </h4>
                      <div className="space-y-2">
                        <p className="font-inter text-sm text-muted-foreground">
                          Your Guess: {comparison.trepa.guess}
                        </p>
                        <p className={`font-inter font-bold ${comparison.trepa.color}`}>
                          {comparison.trepa.result}
                        </p>
                        <p className="font-poppins text-xl font-bold text-primary">
                          {comparison.trepa.payout}
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}            className="text-center bg-gradient-to-r from-primary/10 to-purple-500/10 border border-primary/20 rounded-2xl p-12"
          >
            <Trophy className="w-16 h-16 text-primary mx-auto mb-6" />
            <h3 className="font-poppins text-3xl font-bold text-foreground mb-4">
              Ready to Show Your Precision?
            </h3>
            <p className="font-inter text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Explore the precision-based prediction-market concept.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="button-glow text-white font-poppins font-bold text-xl px-12 py-4 rounded-full inline-flex items-center gap-3 group"
            >
              <DollarSign className="w-6 h-6" />
              Start Predicting
              <motion.div
                className="w-2 h-2 bg-white rounded-full"
                animate={{ x: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
