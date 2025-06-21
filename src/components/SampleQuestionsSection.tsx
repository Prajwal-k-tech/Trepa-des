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
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background"></div>
      
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
          {sampleQuestions.map((question, index) => (
            <motion.div
              key={question.question}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="bg-card/50 border-border/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-300 group gradient-blur">
                <div className="p-6 space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                        <question.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                          {question.category}
                        </span>
                        <span className={`ml-2 text-xs font-medium px-2 py-1 rounded-full ${getDifficultyColor(question.difficulty)} bg-current/10`}>
                          {question.difficulty}
                        </span>
                      </div>
                    </div>
                  </div>

                  <h3 className="font-poppins text-lg font-semibold text-card-foreground leading-tight">
                    {question.question}
                  </h3>

                  <div className="grid grid-cols-2 gap-4 py-4 border-t border-border/30">
                    <div>
                      <p className="text-xs text-muted-foreground">Crowd Prediction</p>
                      <p className="font-bold text-primary text-lg">{question.currentPrediction}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Prize Pool</p>
                      <p className="font-bold text-foreground text-lg">{question.prize}</p>
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
                      className="w-full bg-gradient-to-r from-primary/80 to-primary hover:from-primary hover:to-primary/90 text-primary-foreground font-medium button-glow"
                      variant="default"
                    >
                      Make Your Prediction
                    </Button>
                  </motion.div>
                </div>
              </Card>
            </motion.div>
          ))}
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
