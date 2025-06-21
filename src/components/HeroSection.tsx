import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Card } from "@/components/ui/card"
import { ArrowRight, TrendingUp, Target, Zap, Brain } from "lucide-react"

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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background/95 to-muted/30">
      {/* Animated background effects inspired by the reference image */}
      <div className="absolute inset-0 w-full h-full">{/* Neural network lines - optimized for performance */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(reduceMotion ? 8 : 20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-px bg-primary"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                height: `${Math.random() * 200 + 50}px`,
                transform: `rotate(${Math.random() * 360}deg)`,
              }}
              animate={reduceMotion ? {} : {
                opacity: [0.1, 0.3, 0.1],
                scaleY: [1, 1.2, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: reduceMotion ? 0 : Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
          {/* Floating particles - performance optimized */}
        <div className="absolute inset-0">
          {[...Array(reduceMotion ? 8 : 15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={reduceMotion ? {} : {
                y: [-20, 20, -20],
                x: [-10, 10, -10],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: reduceMotion ? 0 : Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>        {/* Large gradient orbs - responsive sizing */}
        <div className="absolute top-1/4 left-1/4 w-48 h-48 md:w-96 md:h-96 bg-primary/8 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 md:w-96 md:h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          {/* Brain illustration area */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="mb-8 flex justify-center"
          >
            <div className="relative">
              {/* Brain outline */}
              <motion.div
                className="w-48 h-32 border-2 border-primary/30 rounded-full relative"
                animate={{
                  borderColor: ["hsl(var(--primary) / 0.3)", "hsl(var(--primary) / 0.6)", "hsl(var(--primary) / 0.3)"],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                {/* Brain details */}
                <div className="absolute inset-2 border border-primary/20 rounded-full" />
                <div className="absolute top-4 left-4 w-8 h-8 border border-primary/25 rounded-full" />
                <div className="absolute bottom-4 right-4 w-6 h-6 border border-primary/25 rounded-full" />
                <div className="absolute top-6 right-6 w-4 h-4 border border-primary/25 rounded-full" />
                
                {/* Synapses */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-primary rounded-full"
                    style={{
                      left: `${20 + Math.random() * 60}%`,
                      top: `${20 + Math.random() * 60}%`,
                    }}
                    animate={{
                      opacity: [0.3, 1, 0.3],
                      scale: [1, 1.5, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.3,
                    }}
                  />
                ))}
              </motion.div>
              
              {/* Speech bubble */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute -left-32 top-0 bg-card border border-border rounded-lg p-3 max-w-48"
              >
                <p className="text-sm text-muted-foreground font-inter">
                  I analyze data with my intuition and analytical skills.
                </p>
                <div className="absolute right-[-8px] top-4 w-0 h-0 border-l-8 border-l-border border-t-4 border-t-transparent border-b-4 border-b-transparent" />
              </motion.div>
            </div>
          </motion.div>

          {/* Main headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6"
          >
            <h1 className="font-poppins text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
              Can You Read the Crowd?
            </h1>
            
            <p className="font-inter text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              From predicting vibes to forecasting real-world numbers.
            </p>
              <p className="font-inter text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              You enter a point forecast, the exact number you think will be right. After the result is out, rewards scale based on how close your forecast is to the real value.
            </p>
            
            <p className="font-poppins text-xl font-semibold text-foreground">
              The closer you are, the more you win with <span className="accuracy-highlight">precision rewards</span>.
            </p>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 space-y-4"
          >            <p className="font-inter text-lg text-foreground">
              Flex your foresight. Get rewarded for <span className="accuracy-highlight">accuracy</span>.
            </p>
            <p className="font-inter text-muted-foreground">
              Experience the new Trepa in our upcoming beta launch.
            </p>
            <div className="flex flex-col items-center space-y-2 text-sm text-muted-foreground">
              <span>Real questions.</span>
              <span>Real forecasting.</span>
              <span>Real rewards.</span>
            </div>
          </motion.div>

          {/* Beta CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-12"
          >            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-4 text-lg font-semibold group font-poppins relative overflow-hidden button-glow gradient-blur"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              <span className="relative">Join Beta</span>
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform relative" />
            </Button>
          </motion.div>
        </div>

        {/* Interactive Demo Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="max-w-2xl mx-auto mt-20"
        >          <Card className="bg-card/50 border-border backdrop-blur-sm p-4 sm:p-6 lg:p-8 gradient-blur">
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <Target className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                <h3 className="font-poppins text-xl sm:text-2xl font-bold text-card-foreground">
                  Predict Inflation Rate
                </h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="font-inter text-card-foreground mb-3 block text-lg">
                    Your Prediction: <span className="text-primary font-bold">{prediction[0].toFixed(1)}%</span>
                  </label>
                  <div className="px-2">
                    <Slider
                      value={prediction}
                      onValueChange={setPrediction}
                      max={10}
                      min={0}
                      step={0.1}
                      className="w-full"
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
                  className="bg-background border border-primary/30 rounded-lg p-6"
                >
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="font-inter text-muted-foreground">Potential Payout:</span>
                      <span className="font-poppins text-primary font-bold text-xl">{payout.toFixed(0)}%</span>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex gap-1">
                        {getProgressBars(payout).map((filled, i) => (
                          <motion.div
                            key={i}
                            initial={{ scaleY: 0 }}
                            animate={{ scaleY: 1 }}
                            transition={{ delay: i * 0.05 }}
                            className={`h-3 flex-1 rounded-sm ${
                              filled ? 'bg-primary' : 'bg-muted'
                            }`}
                          />
                        ))}
                      </div>
                      <p className="text-sm text-muted-foreground font-inter">
                        {difference <= 0.5 ? 'High reward - very close!' : 
                         difference <= 1.0 ? 'Good reward - close enough' : 
                         'Low reward if >1% off'}
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >                  <Button 
                    size="lg"
                    className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground font-poppins font-bold text-lg sm:text-xl py-4 sm:py-6 group relative overflow-hidden button-glow"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    <Zap className="mr-2 w-5 h-5 sm:w-6 sm:h-6 relative" />
                    <span className="relative">Stake Your Prediction</span>
                  </Button>
                </motion.div>
              </div>
            </div>
          </Card>

          <div className="text-center text-muted-foreground font-inter mt-4">
            <p className="text-sm">
              Actual result: <span className="text-primary font-semibold">{actualValue}%</span> • 
              Your difference: <span className="text-orange-400 font-semibold">{difference.toFixed(1)}%</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
