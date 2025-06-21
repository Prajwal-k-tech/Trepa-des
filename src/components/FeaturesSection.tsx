import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Target, TrendingUp, Brain, Zap, DollarSign, Trophy } from "lucide-react"

export default function FeaturesSection() {
  const features = [
    {      icon: Target,
      title: "Precision Rewards",
      description: "Get paid based on how close you are, not just if you're right or wrong.",
      highlight: "4.9% vs 5.0% = 90% payout",
      color: "text-primary"
    },
    {
      icon: Brain,
      title: "Show Your IQ",
      description: "Demonstrate your analytical skills and financial expertise to the world.",
      highlight: "Accuracy leaderboards",
      color: "text-primary"
    },
    {
      icon: Zap,
      title: "Instant Payouts",
      description: "Receive your winnings immediately when predictions resolve.",
      highlight: "Real-time settlements",
      color: "text-primary"
    },
    {
      icon: TrendingUp,
      title: "Market Intelligence",
      description: "Access crowd-sourced predictions for better market insights.",
      highlight: "Wisdom of crowds",
      color: "text-primary"
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
      },
      trepa: {
        guess: "4.8%",
        result: "80% accurate",
        payout: "$120",
        color: "text-trepa-primary"
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
        color: "text-trepa-primary"
      }
    }
  ]
  return (    <section className="py-16 lg:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Features Grid */}
        <div className="mb-16 lg:mb-20">          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 lg:mb-16"
          >
            <h2 className="font-poppins text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 lg:mb-6">
              Why <span className="accuracy-highlight">Accuracy</span> Matters
            </h2>
            <p className="font-inter text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
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
                transition={{ delay: index * 0.1 }}
              >                <Card className="bg-card/50 border-border/50 backdrop-blur-sm p-4 sm:p-6 h-full hover:border-primary/30 hover:bg-card/70 transition-all duration-300 group gradient-blur">
                  <feature.icon className={`w-10 h-10 sm:w-12 sm:h-12 ${feature.color} mb-4 group-hover:scale-110 transition-transform`} />
                  <h3 className="font-poppins text-lg sm:text-xl font-bold text-card-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="font-inter text-sm sm:text-base text-muted-foreground mb-4">
                    {feature.description}
                  </p>
                  <div className={`font-inter text-xs sm:text-sm font-semibold ${feature.color} bg-primary/10 px-3 py-1 rounded-full inline-block`}>
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
            <h2 className="font-poppins text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 lg:mb-6">
              Traditional vs <span className="accuracy-highlight">Trepa</span>
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
              >
                <Card className="bg-trepa-muted border-trepa-muted-foreground/20 p-4 sm:p-6 lg:p-8">
                  <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 items-center">
                    {/* Scenario */}                    <div className="text-center lg:text-left">
                      <h3 className="font-poppins text-xl sm:text-2xl font-bold text-trepa-foreground mb-2">
                        {comparison.scenario}
                      </h3>
                      <p className="font-inter text-sm sm:text-base text-trepa-muted-foreground">
                        Actual Result: <span className="text-trepa-primary font-bold">{comparison.actual}</span>
                      </p>
                    </div>

                    {/* Traditional Market */}
                    <div className="text-center p-6 bg-trepa-background rounded-lg border border-red-500/20">
                      <h4 className="font-poppins text-lg font-bold text-trepa-foreground mb-4">
                        Traditional Market
                      </h4>
                      <div className="space-y-2">
                        <p className="font-inter text-sm text-trepa-muted-foreground">
                          Your Guess: {comparison.traditional.guess}
                        </p>
                        <p className={`font-inter font-bold ${comparison.traditional.color}`}>
                          {comparison.traditional.result}
                        </p>
                        <p className="font-poppins text-xl font-bold text-trepa-foreground">
                          {comparison.traditional.payout}
                        </p>
                      </div>
                    </div>

                    {/* Trepa */}
                    <div className="text-center p-6 bg-trepa-background rounded-lg border border-trepa-primary/50">
                      <h4 className="font-poppins text-lg font-bold text-trepa-foreground mb-4">
                        Trepa Platform
                      </h4>
                      <div className="space-y-2">
                        <p className="font-inter text-sm text-trepa-muted-foreground">
                          Your Guess: {comparison.trepa.guess}
                        </p>
                        <p className={`font-inter font-bold ${comparison.trepa.color}`}>
                          {comparison.trepa.result}
                        </p>
                        <p className="font-poppins text-xl font-bold text-trepa-primary">
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
            viewport={{ once: true }}
            className="text-center bg-gradient-to-r from-trepa-primary/10 to-pink-500/10 border border-trepa-primary/20 rounded-2xl p-12"
          >
            <Trophy className="w-16 h-16 text-trepa-primary mx-auto mb-6" />
            <h3 className="font-poppins text-3xl font-bold text-trepa-foreground mb-4">
              Ready to Show Your Precision?
            </h3>
            <p className="font-inter text-xl text-trepa-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of predictors who are already earning more with accuracy-based rewards.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-trepa-primary hover:bg-trepa-primary/90 text-white font-poppins font-bold text-xl px-12 py-4 rounded-full inline-flex items-center gap-3 group"
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
