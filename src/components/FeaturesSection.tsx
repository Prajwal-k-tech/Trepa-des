import { motion } from "framer-motion"
import { BarChart3, Gauge, History, ShieldAlert } from "lucide-react"
import { Card } from "@/components/ui/card"

const features = [
  {
    icon: Gauge,
    title: "Closeness earns a higher score",
    description: "The practice market uses a visible, fixed formula so you can see how distance changes the result.",
    detail: "0–100 demo score",
  },
  {
    icon: ShieldAlert,
    title: "Risk is shown up front",
    description: "Choose a practice stake and see its maximum loss and maximum return before submitting.",
    detail: "Practice points only",
  },
  {
    icon: History,
    title: "Keep a local history",
    description: "Your practice balance and recent resolved examples stay in this browser until you reset them.",
    detail: "Stored on this device",
  },
  {
    icon: BarChart3,
    title: "Try different topics",
    description: "Load economics, energy, and climate examples into the same forecast interaction.",
    detail: "Four fictional samples",
  },
]

export default function FeaturesSection() {
  return (
    <section id="features" aria-labelledby="features-title" className="relative scroll-mt-20 overflow-hidden py-20 lg:py-24">
      <div aria-hidden="true" className="absolute left-1/4 top-8 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-primary">How this preview works</p>
          <h2 id="features-title" className="font-poppins text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            A clear look at <span className="accuracy-highlight">precision scoring</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            The working parts of this page are a local practice simulator. Each example settles immediately against its made-up answer using the same published formula.
          </p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div key={feature.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }}>
              <Card className="frosted-glass group h-full border-border p-5 transition-colors hover:border-primary/40 sm:p-6">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary transition-transform group-hover:scale-105">
                  <feature.icon aria-hidden="true" className="h-6 w-6" />
                </div>
                <h3 className="font-poppins text-lg font-bold text-foreground">{feature.title}</h3>
                <p className="mt-3 min-h-20 text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
                <p className="mt-5 inline-flex rounded-full bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary">{feature.detail}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="#examples" className="inline-flex items-center rounded-full border border-primary/40 px-6 py-3 font-semibold text-foreground transition-colors hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
            Explore the sample markets
          </a>
        </div>
      </div>
    </section>
  )
}
