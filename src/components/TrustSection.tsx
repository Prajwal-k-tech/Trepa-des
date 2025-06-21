import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Star, Users, Shield, TrendingUp, Award, CheckCircle } from "lucide-react"

export default function TrustSection() {
  const stats = [
    { number: "5,000+", label: "Beta Users", icon: Users },
    { number: "95%", label: "Accuracy Rate", icon: TrendingUp },
    { number: "$250K", label: "Paid Out", icon: Award },
    { number: "100%", label: "Secure", icon: Shield }
  ]

  const testimonials = [
    {
      name: "Sarah Chen",
      title: "Financial Analyst",
      content: "Finally, a platform that rewards precision. I made $500 last month just by being accurate with my economic predictions.",
      rating: 5
    },
    {
      name: "Marcus Rodriguez", 
      title: "Economics Student",
      content: "Traditional prediction markets felt like gambling. Trepa feels like showcasing actual skills and knowledge.",
      rating: 5
    },
    {
      name: "Dr. Amanda Kim",
      title: "Market Researcher", 
      content: "The closer you get, the more you earn. This incentive structure makes so much more sense than binary betting.",
      rating: 5
    }
  ]

  const features = [
    "Transparent algorithm - see exactly how payouts are calculated",
    "Real-time data feeds from trusted financial sources", 
    "Secure, instant payouts with full transaction history",
    "Community-driven with accuracy leaderboards"
  ]

  return (
    <section className="py-16 lg:py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/6 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/6 w-80 h-80 bg-purple-400/5 rounded-full blur-3xl" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-poppins text-3xl sm:text-4xl font-bold mb-8">
            Trusted by <span className="accuracy-highlight">Thousands</span>
          </h2>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="frosted-glass p-6 text-center hover:border-primary/20 transition-colors">
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="font-poppins text-3xl font-bold text-foreground mb-1">
                    {stat.number}
                  </div>
                  <div className="font-inter text-muted-foreground">
                    {stat.label}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="font-poppins text-2xl sm:text-3xl font-bold text-center mb-12">
            What Our Users Say
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="frosted-glass p-6 h-full">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="font-inter text-muted-foreground mb-4 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <div className="font-poppins font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="font-inter text-sm text-muted-foreground">
                      {testimonial.title}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trust Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card className="frosted-glass p-8">
            <h3 className="font-poppins text-2xl font-bold text-center mb-8">
              Why You Can Trust Trepa
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="font-inter text-muted-foreground leading-relaxed">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
