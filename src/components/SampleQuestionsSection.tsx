import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TrendingUp, DollarSign, Thermometer, Users, BarChart3, Calendar } from "lucide-react"

export default function SampleQuestionsSection() {
  const sampleQuestions = [
    {
      icon: TrendingUp,
      category: "Economics",
      question: "What will the US inflation rate be in December 2025?",
      currentPrediction: "3.2%",
      participants: 1247,
      prize: "$2,500",
      timeLeft: "6 months",
      difficulty: "Medium"
    },
    {
      icon: BarChart3,
      category: "Markets",
      question: "What will be the closing price of Bitcoin on New Year's Eve?",
      currentPrediction: "$98,450",
      participants: 2103,
      prize: "$5,000",
      timeLeft: "5 months",
      difficulty: "Hard"
    },
    {
      icon: Thermometer,
      category: "Climate",
      question: "What will be the global average temperature anomaly this year?",
      currentPrediction: "+1.34°C",
      participants: 892,
      prize: "$1,800",
      timeLeft: "4 months",
      difficulty: "Expert"
    },
    {
      icon: Users,
      category: "Demographics",
      question: "How many new users will join major social platforms in Q3?",
      currentPrediction: "47.2M",
      participants: 1567,
      prize: "$3,200",
      timeLeft: "2 months",
      difficulty: "Easy"
    }
  ]

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Economics": return {
        bg: "from-emerald-500/10 to-green-600/5",
        border: "border-emerald-500/20",
        icon: "text-emerald-400",
        badge: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
      }
      case "Markets": return {
        bg: "from-blue-500/10 to-cyan-600/5", 
        border: "border-blue-500/20",
        icon: "text-blue-400",
        badge: "bg-blue-500/10 text-blue-400 border-blue-500/20"
      }
      case "Climate": return {
        bg: "from-orange-500/10 to-red-600/5",
        border: "border-orange-500/20", 
        icon: "text-orange-400",
        badge: "bg-orange-500/10 text-orange-400 border-orange-500/20"
      }
      case "Demographics": return {
        bg: "from-purple-500/10 to-pink-600/5",
        border: "border-purple-500/20",
        icon: "text-purple-400", 
        badge: "bg-purple-500/10 text-purple-400 border-purple-500/20"
      }
      default: return {
        bg: "from-gray-500/10 to-gray-600/5",
        border: "border-gray-500/20",
        icon: "text-gray-400",
        badge: "bg-gray-500/10 text-gray-400 border-gray-500/20"
      }
    }
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy": return "text-green-400"
      case "Medium": return "text-yellow-400"
      case "Hard": return "text-orange-400"
      case "Expert": return "text-red-400"
      default: return "text-muted-foreground"
    }
  }

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Darker, more subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
      
      {/* Very subtle floating decorative elements */}
      <div className="absolute top-20 left-20 w-1 h-1 bg-emerald-400/20 rounded-full floating-particle" />
      <div className="absolute top-1/2 right-32 w-0.5 h-0.5 bg-blue-400/15 rounded-full floating-particle" style={{ animationDelay: '3s' }} />
      <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-purple-400/10 rounded-full floating-particle" style={{ animationDelay: '6s' }} />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-poppins text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Real Questions, Real <span className="accuracy-highlight">Precision</span>
          </h2>
          <p className="font-inter text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Join thousands making <span className="accuracy-highlight">accurate</span> predictions on topics that matter. 
            Every forecast is a chance to prove your analytical skills.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {sampleQuestions.map((question, index) => {
            const categoryColors = getCategoryColor(question.category)
            return (
              <motion.div
                key={question.question}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className={`frosted-glass-light hover:bg-gradient-to-br hover:${categoryColors.bg} transition-all duration-500 group border-2 ${categoryColors.border} backdrop-blur-xl relative overflow-hidden`}>
                  {/* Glassmorphism overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${categoryColors.bg} opacity-30 pointer-events-none`} />
                  
                  <div className="relative z-10 p-6 space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`p-3 rounded-xl bg-gradient-to-br ${categoryColors.bg} backdrop-blur-sm border ${categoryColors.border} shadow-lg`}>
                          <question.icon className={`w-5 h-5 ${categoryColors.icon}`} />
                        </div>
                        <div>
                          <span className={`text-xs font-medium px-3 py-1.5 rounded-full border ${categoryColors.badge}`}>
                            {question.category}
                          </span>
                          <span className={`ml-2 text-xs font-medium px-2 py-1 rounded-full ${getDifficultyColor(question.difficulty)} bg-current/10 border border-current/20`}>
                            {question.difficulty}
                          </span>
                        </div>
                      </div>
                    </div>

                    <h3 className="font-poppins text-lg font-semibold text-card-foreground leading-tight group-hover:text-white transition-colors duration-300">
                      {question.question}
                    </h3>

                    <div className="grid grid-cols-2 gap-4 py-4 border-t border-border/30">
                      <div className="space-y-1">
                        <p className="text-xs text-muted-foreground">Crowd Prediction</p>
                        <p className={`font-bold text-lg ${categoryColors.icon}`}>{question.currentPrediction}</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-xs text-muted-foreground">Prize Pool</p>
                        <p className="font-bold text-emerald-400 text-lg">{question.prize}</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          {question.participants.toLocaleString()}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {question.timeLeft}
                        </span>
                      </div>
                    </div>

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button 
                        className={`w-full bg-gradient-to-r ${categoryColors.bg} hover:bg-gradient-to-br hover:${categoryColors.bg} text-white font-medium border ${categoryColors.border} backdrop-blur-sm transition-all duration-300 shadow-lg hover:shadow-xl`}
                        variant="outline"
                      >
                        Make Your Prediction
                      </Button>
                    </motion.div>
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="font-inter text-muted-foreground mb-6">
            Want to see more questions? <span className="accuracy-highlight">Precision</span> matters in every prediction.
          </p>
          <Button 
            size="lg"
            className="bg-secondary hover:bg-secondary/80 text-secondary-foreground font-poppins font-semibold button-glow gradient-blur"
          >
            <BarChart3 className="mr-2 w-5 h-5" />
            Explore All Markets
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
