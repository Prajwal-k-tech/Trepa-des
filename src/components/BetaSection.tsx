import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { ArrowRight, CheckCircle, Mail, Users, Rocket } from "lucide-react"

export default function BetaSection() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle beta signup logic here
    setIsSubmitted(true)
  }

  const benefits = [
    "Early access to all prediction markets",
    "Zero platform fees during beta",
    "Exclusive beta user rewards",
    "Direct feedback channel to our team"
  ]

  const stats = [
    { number: "2,500+", label: "Beta Signups" },
    { number: "15", label: "Markets Ready" },
    { number: "$50K", label: "Prize Pool" }
  ]
  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="font-poppins text-3xl sm:text-4xl md:text-6xl font-bold text-foreground mb-4 lg:mb-6">
            Join the <span className="accuracy-highlight">Beta</span>
          </h2>
          <p className="font-inter text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Be among the first to experience <span className="accuracy-highlight">precision predictions</span>. Limited spots available for our public beta launch.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Beta Signup Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >            <Card className="bg-card/50 border-primary/20 backdrop-blur-sm p-8 gradient-blur">
              {!isSubmitted ? (
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="font-poppins text-2xl font-bold text-foreground">
                      Get Early Access
                    </h3>
                    <p className="font-inter text-muted-foreground">
                      Try the signup interface. No email is sent or stored.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input
                        aria-label="Email address for signup preview"
                        type="email"
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="pl-12 bg-background border-border text-foreground placeholder:text-muted-foreground focus:border-primary gradient-blur"
                        required
                      />
                    </div>
                    <Button 
                      type="submit"
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-poppins font-bold text-lg py-3 group button-glow"
                    >
                      <Rocket className="mr-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
                      Preview signup
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </form>                  <div className="space-y-3">
                    <h4 className="font-poppins font-semibold text-foreground">
                      Beta Benefits:
                    </h4>
                    <ul className="space-y-2">
                      {benefits.map((benefit, index) => (
                        <motion.li
                          key={benefit}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center gap-3 font-inter text-muted-foreground"
                        >
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                          {benefit}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center space-y-6 py-8"
                >                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  >
                    <CheckCircle className="w-16 h-16 text-primary mx-auto" />
                  </motion.div>
                  <div>
                    <h3 className="font-poppins text-2xl font-bold text-foreground mb-2">
                      Preview complete
                    </h3>
                    <p className="font-inter text-muted-foreground">
                      This demo does not save your email or register you for a beta.
                    </p>
                  </div>
                </motion.div>
              )}
            </Card>
          </motion.div>

          {/* Stats and Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <p className="text-sm text-muted-foreground">Sample figures for the landing-page concept.</p>
            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <Card className="bg-trepa-background border-trepa-primary/20 p-4">
                    <div className="font-poppins text-2xl md:text-3xl font-bold text-trepa-primary">
                      {stat.number}
                    </div>
                    <div className="font-inter text-sm text-trepa-muted-foreground mt-1">
                      {stat.label}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Illustrative Beta Timeline */}
            <Card className="bg-trepa-background border-trepa-primary/20 p-6">
              <h4 className="font-poppins text-xl font-bold text-trepa-foreground mb-4 flex items-center gap-2">
                <Users className="w-5 h-5 text-trepa-primary" />
                Illustrative Beta Timeline
              </h4>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-trepa-primary rounded-full"></div>
                  <div>
                    <div className="font-inter font-semibold text-trepa-foreground">Q1 2025</div>
                    <div className="font-inter text-sm text-trepa-muted-foreground">Private Beta Launch</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-trepa-primary/50 rounded-full"></div>
                  <div>
                    <div className="font-inter font-semibold text-trepa-foreground">Q2 2025</div>
                    <div className="font-inter text-sm text-trepa-muted-foreground">Public Beta + Mobile App</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-trepa-muted-foreground rounded-full"></div>
                  <div>
                    <div className="font-inter font-semibold text-trepa-foreground">Q3 2025</div>
                    <div className="font-inter text-sm text-trepa-muted-foreground">Full Platform Launch</div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Social Proof */}
            <div className="text-center">
              <p className="font-inter text-trepa-muted-foreground mb-4">
                Join prediction experts from:
              </p>
              <div className="flex justify-center items-center gap-8 opacity-60">
                <div className="font-poppins font-bold text-trepa-foreground">Goldman Sachs</div>
                <div className="font-poppins font-bold text-trepa-foreground">McKinsey</div>
                <div className="font-poppins font-bold text-trepa-foreground">Citadel</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
