import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Card } from "@/components/ui/card"
import { ArrowRight, TrendingUp, Zap, Sparkles, Star, Flame } from "lucide-react"

export default function HeroSection() {
  const [prediction, setPrediction] = useState([4.9])
  const [reduceMotion, setReduceMotion] = useState(false)
  
  useEffect(() => {
    // Check for reduced motion preference and mobile devices for performance
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const isMobile = window.innerWidth < 768
    setReduceMotion(prefersReducedMotion || isMobile)
  }, [])
  
  const actualValue = 5.0
  const difference = Math.abs(prediction[0] - actualValue)
  const accuracy = Math.max(0, 100 - (difference * 100))
  const payout = Math.max(10, accuracy)
  const getProgressBars = (percentage: number) => {
    const bars = 10
    const filledBars = Math.round((percentage / 100) * bars)
    return Array.from({ length: bars }, (_, i) => i < filledBars)
  }
    return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32">
      {/* Subtle background effects */}
      <div className="absolute inset-0 w-full h-full">
        {/* Very subtle floating dots */}
        <div className="absolute inset-0">
          {[...Array(reduceMotion ? 0 : 8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/10 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={reduceMotion ? {} : {
                y: [-20, 20, -20],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          {/* Clean hero content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 max-w-5xl mx-auto"
          >
            <p className="font-poppins text-lg md:text-xl font-semibold text-foreground">
              The closer you are, the more you win.
            </p>
            <h1 className="font-poppins text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-foreground">
              Flex your foresight. Get rewarded for <span className="accuracy-highlight">accuracy.</span>
            </h1>
            
            <p className="font-inter text-lg md:text-xl leading-relaxed text-muted-foreground max-w-3xl mx-auto">
              Trepa is a social predictions platform where you predict public sentiment on fun and thought provoking questions. It's like reading the room but with rewards! Think you know what the crowd really thinks? Prove it.
            </p>
          </motion.div>

          {/* Beta CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-12"
          >
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-16 py-6 text-xl font-semibold group font-poppins button-glow"
            >
              <span className="relative">Join Beta</span>
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform relative" />
            </Button>
          </motion.div>
        </div>

        {/* Interactive Demo Section - Commented out for now to match the new design focus */}\
        {/*
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="max-w-2xl mx-auto mt-20"
        >
          <Card className="frosted-glass p-4 sm:p-6 lg:p-8">
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-poppins text-xl sm:text-2xl font-bold text-foreground">
                  Predict Inflation Rate
                </h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="font-inter mb-3 block text-lg text-foreground">
                    Your Prediction: <span className="accuracy-highlight font-bold text-xl">{prediction[0].toFixed(1)}%</span>
                  </label>
                  <div className="px-2">
                    <Slider
                      value={prediction}
                      onValueChange={setPrediction}
                      max={10}
                      min={0}
                      step={0.1}
                      className="w-full slider"
                    />
                  </div>
                  <div className="flex justify-between text-sm text-muted-foreground mt-2">
                    <span>0%</span>
                    <span>10%</span>
                  </div>
                </div>
                <motion.div 
                  key={payout}
                  initial={{ scale: 0.95 }}
                  animate={{ scale: 1 }}
                  className="frosted-glass border border-primary/20 rounded-lg p-6"
                >
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="font-inter text-muted-foreground">Potential Payout:</span>
                      <span className="font-poppins text-primary font-bold text-2xl">{payout.toFixed(0)}%</span>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex gap-1">
                        {getProgressBars(payout).map((filled, i) => (
                          <motion.div
                            key={i}
                            initial={{ scaleY: 0 }}
                            animate={{ scaleY: 1 }}
                            transition={{ delay: i * 0.05 }}
                            className={`h-4 flex-1 rounded-sm ${
                              filled ? 'bg-gradient-to-r from-primary to-purple-500' : 'bg-muted/50'
                            }`}
                          />
                        ))}
                      </div>
                      <p className="text-sm font-inter">
                        <span className={`font-semibold ${
                          difference <= 0.5 ? 'text-green-400' : 
                          difference <= 1.0 ? 'text-yellow-400' : 'text-orange-400'
                        }`}>
                          {difference <= 0.5 ? 'High reward - very close!' : 
                           difference <= 1.0 ? 'Good reward - close enough' : 
                           'Low reward if >1% off'}
                        </span>
                      </p>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button 
                    size="lg"
                    className="w-full button-glow text-white font-poppins font-bold text-lg sm:text-xl py-4 sm:py-6 group relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/10 to-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    <Zap className="mr-2 w-5 h-5 sm:w-6 sm:h-6 relative text-yellow-300" />
                    <span className="relative">Stake Your Prediction</span>
                  </Button>
                </motion.div>
              </div>
            </div>
          </Card>
          <div className="text-center font-inter mt-4">
            <p className="text-sm text-muted-foreground">
              Actual result: <span className="text-primary font-semibold text-base">{actualValue}%</span> • 
              Your difference: <span className="accuracy-highlight font-semibold text-base">{difference.toFixed(1)}%</span>
            </p>
          </div>
        </motion.div>
        */}
      </div>
    </section>
  )
}
