import { motion } from "framer-motion"
import { Database, Info, LockKeyhole, WalletCards } from "lucide-react"
import { Card } from "@/components/ui/card"

const boundaries = [
  { icon: Database, title: "No live market data", description: "Market names and sample answers are hard-coded examples, not current forecasts." },
  { icon: WalletCards, title: "No wallet or trading", description: "The practice balance is fictional browser data. No account, trade, or payment is created." },
  { icon: LockKeyhole, title: "Local storage only", description: "Your practice history stays in this browser. It is not sent to a server." },
  { icon: Info, title: "No real odds or returns", description: "The displayed multiplier is only the fixed formula shown in the practice market." },
]

export default function TrustSection() {
  return (
    <section aria-labelledby="boundaries-title" className="relative overflow-hidden py-20">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-primary">Scope of this build</p>
          <h2 id="boundaries-title" className="font-poppins text-3xl font-bold text-foreground sm:text-4xl">
            Know what the <span className="accuracy-highlight">demo does</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">The product idea is broader than this front-end preview. Here is what is—and is not—connected today.</p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2">
          {boundaries.map((item, index) => (
            <motion.div key={item.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }}>
              <Card className="frosted-glass flex h-full gap-4 border-border p-5 sm:p-6">
                <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <item.icon aria-hidden="true" className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-poppins font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
