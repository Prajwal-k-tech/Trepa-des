import { motion } from "framer-motion"
import { ArrowUpRight, BarChart3, CloudSun, TrendingUp, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { DEMO_MARKETS, type DemoMarket } from "@/lib/demo-market"

const categoryStyle: Record<string, string> = {
  Economics: "border-emerald-500/30 bg-emerald-500/10 text-emerald-300",
  Energy: "border-blue-500/30 bg-blue-500/10 text-blue-300",
  Climate: "border-orange-500/30 bg-orange-500/10 text-orange-300",
}

const icons = [TrendingUp, Zap, BarChart3, CloudSun]

type SampleQuestionsSectionProps = {
  onSelectMarket: (market: DemoMarket) => void
  selectedMarketId: string
}

export default function SampleQuestionsSection({ onSelectMarket, selectedMarketId }: SampleQuestionsSectionProps) {
  return (
    <section id="examples" aria-labelledby="examples-title" className="relative scroll-mt-20 overflow-hidden py-20">
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-primary">Pick a sample</p>
          <h2 id="examples-title" className="font-poppins text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            Forecast a <span className="accuracy-highlight">number</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            These fictional examples load into the practice market above. They have no live data, participants, prize pools, or real-world settlement.
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2">
          {DEMO_MARKETS.map((market, index) => {
            const Icon = icons[index]
            const isSelected = market.id === selectedMarketId
            return (
              <motion.div key={market.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }}>
                <Card className={`frosted-glass h-full p-5 transition-colors sm:p-6 ${isSelected ? "border-primary/50" : "border-border"}`}>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span className="rounded-xl border border-primary/20 bg-primary/10 p-3 text-primary">
                        <Icon aria-hidden="true" className="h-5 w-5" />
                      </span>
                      <div>
                        <span className={`inline-flex rounded-full border px-3 py-1 text-xs font-semibold ${categoryStyle[market.category]}`}>
                          {market.category}
                        </span>
                        <p className="mt-2 text-xs text-muted-foreground">Illustrative sample · 0–10%</p>
                      </div>
                    </div>
                    {isSelected && <span className="shrink-0 text-xs font-semibold text-primary">Selected</span>}
                  </div>
                  <h3 className="mt-5 font-poppins text-xl font-semibold leading-snug text-foreground">{market.question}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Practice your numeric estimate and see the demo scoring rule resolve against a fictional answer.
                  </p>
                  <Button
                    type="button"
                    variant={isSelected ? "default" : "outline"}
                    onClick={() => onSelectMarket(market)}
                    className="mt-5 w-full"
                    aria-label={`Try sample: ${market.title}`}
                  >
                    Try this sample <ArrowUpRight aria-hidden="true" className="ml-2 h-4 w-4" />
                  </Button>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
