import { useEffect, useState } from "react"
import { motion, useReducedMotion } from "framer-motion"
import { ArrowDown, RotateCcw, Sparkles, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import {
  loadPracticeAccount,
  PRACTICE_STORAGE_KEY,
  scoreForecast,
  STARTING_PRACTICE_POINTS,
  type DemoMarket,
  type PracticeAccount,
  type SettledForecast,
} from "@/lib/demo-market"

type HeroSectionProps = { market: DemoMarket }

export default function HeroSection({ market }: HeroSectionProps) {
  const reduceMotion = useReducedMotion()
  const [estimate, setEstimate] = useState("4.9")
  const [stake, setStake] = useState("25")
  const [error, setError] = useState("")
  const [account, setAccount] = useState<PracticeAccount>(loadPracticeAccount)
  const numericEstimate = Number(estimate)
  const validEstimate = estimate !== "" && Number.isFinite(numericEstimate) && numericEstimate >= 0 && numericEstimate <= 10
  const numericStake = Number(stake)
  const validStake = Number.isInteger(numericStake) && numericStake >= 1 && numericStake <= account.balance
  const positiveStake = Number.isInteger(numericStake) && numericStake >= 1 ? numericStake : 0
  const lastForecast = account.forecasts[0]

  useEffect(() => {
    setEstimate((market.answer - 0.6).toFixed(1))
    setError("")
  }, [market.id, market.answer])

  useEffect(() => {
    try {
      window.localStorage.setItem(PRACTICE_STORAGE_KEY, JSON.stringify(account))
    } catch {
      setError("Browser storage is unavailable. Your practice balance will reset when you leave this page.")
    }
  }, [account])

  const updateEstimate = (value: number) => {
    const clamped = Math.min(10, Math.max(0, value))
    setEstimate(clamped.toFixed(1))
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!validEstimate) {
      setError("Choose an estimate from 0% to 10%.")
      return
    }
    if (!validStake) {
      setError(`Choose a whole-number stake from 1 to ${account.balance} practice points.`)
      return
    }

    const { score, multiplier } = scoreForecast(numericEstimate, market.answer)
    const returned = Number((numericStake * multiplier).toFixed(2))
    const forecast: SettledForecast = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      marketId: market.id,
      marketTitle: market.title,
      estimate: numericEstimate,
      answer: market.answer,
      stake: numericStake,
      score,
      multiplier,
      returned,
      settledAt: new Date().toISOString(),
    }

    setAccount((current) => ({
      balance: current.balance - numericStake + returned,
      forecasts: [forecast, ...current.forecasts].slice(0, 10),
    }))
    setError("")
  }

  const resetAccount = () => {
    setAccount({ balance: STARTING_PRACTICE_POINTS, forecasts: [] })
    setStake("25")
    setError("")
  }

  return (
    <section id="demo" aria-labelledby="hero-title" className="relative scroll-mt-20 overflow-hidden px-4 pb-20 pt-16 sm:px-6 sm:pt-24 lg:pb-28 lg:pt-28">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-12 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -right-40 top-56 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />
        {!reduceMotion && (
          <motion.div
            className="absolute left-1/2 top-28 h-2 w-2 rounded-full bg-primary/50"
            animate={{ y: [0, 18, 0], opacity: [0.35, 0.8, 0.35] }}
            transition={{ duration: 6, repeat: Infinity }}
          />
        )}
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mx-auto mb-14 max-w-6xl text-center">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
              <Sparkles aria-hidden="true" className="h-4 w-4" />
              A precision-forecasting concept
            </p>
            <h1 id="hero-title" className="mx-auto max-w-5xl font-poppins text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-7xl">
              Make every forecast count. <span className="accuracy-highlight">Reward precision.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
              Trepa explores a prediction-market design where closer estimates earn a larger share of a defined reward. Try the practice market below: it uses made-up outcomes and points that have no cash value.
            </p>
            <a href="#demo-card" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 font-semibold text-primary-foreground button-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background">
              Try the practice market <ArrowDown aria-hidden="true" className="h-4 w-4" />
            </a>
          </motion.div>
        </div>

        <Card id="demo-card" className="frosted-glass mx-auto max-w-3xl scroll-mt-24 overflow-hidden border-primary/20 p-5 sm:p-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-primary">Local practice market</p>
              <h2 className="font-poppins text-2xl font-bold text-foreground sm:text-3xl">{market.title}</h2>
              <p className="mt-2 text-muted-foreground">{market.question}</p>
            </div>
            <div className="shrink-0 rounded-xl border border-primary/20 bg-primary/10 px-4 py-3 text-left sm:text-right">
              <p className="text-xs uppercase tracking-wide text-muted-foreground">Practice balance</p>
              <p className="font-poppins text-2xl font-bold text-primary"><span data-testid="practice-balance">{account.balance}</span> pts</p>
            </div>
          </div>

          <div className="my-5 flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wide">
            <span className="rounded-full border border-border bg-muted px-3 py-1.5 text-foreground">{market.category}</span>
            <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 text-primary">No cash value</span>
            <span className="rounded-full border border-border bg-muted px-3 py-1.5 text-muted-foreground">Settles instantly against sample answer</span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-3">
              <div className="flex flex-wrap items-end justify-between gap-2">
                <label htmlFor="estimate-input" className="font-semibold text-foreground">Your estimate</label>
                <span className="font-poppins text-3xl font-bold text-primary">{validEstimate ? `${numericEstimate.toFixed(1)}%` : "—"}</span>
              </div>
              <Slider
                value={[validEstimate ? numericEstimate : 0]}
                onValueChange={([value]) => updateEstimate(value)}
                min={0}
                max={10}
                step={0.1}
                aria-label="Forecast estimate from 0 to 10 percent"
                className="w-full py-2"
              />
              <div className="flex items-center justify-between gap-4 text-sm text-muted-foreground">
                <span>0%</span>
                <Input
                  id="estimate-input"
                  type="number"
                  min="0"
                  max="10"
                  step="0.1"
                  value={estimate}
                  onChange={(event) => setEstimate(event.target.value)}
                  className="w-28 text-center text-foreground"
                  required
                />
                <span>10%</span>
              </div>
            </div>

            <div className="grid gap-4 rounded-xl border border-border bg-background/60 p-4 sm:grid-cols-2">
              <div>
                <label htmlFor="stake-input" className="mb-2 block text-sm font-semibold text-foreground">Practice points at risk</label>
                <Input
                  id="stake-input"
                  type="number"
                  min="1"
                  max={account.balance}
                  step="1"
                  value={stake}
                  onChange={(event) => setStake(event.target.value)}
                  className="text-foreground"
                  required
                />
              </div>
              <div className="flex flex-col justify-center gap-1 text-sm text-muted-foreground">
                <p>Maximum loss: <strong className="text-foreground">{positiveStake} practice points</strong></p>
                <p>Maximum return: <strong className="text-foreground">{positiveStake * 2} points (2× stake)</strong></p>
                <p>Real market odds: <strong className="text-foreground">not available</strong></p>
              </div>
            </div>

            <p id="demo-rule" className="text-sm leading-relaxed text-muted-foreground">
              Demo rule: score = max(0, 100 − 20 × distance in percentage points); return = stake × score ÷ 50. A zero score loses the full practice stake. This fixed example is not a real price, odds, or payout model.
            </p>
            {error && <p role="alert" className="rounded-md border border-destructive/40 bg-destructive/10 px-3 py-2 text-sm text-destructive">{error}</p>}
            <Button type="submit" disabled={account.balance < 1} className="w-full bg-primary py-6 text-base font-bold text-primary-foreground button-glow sm:text-lg">
              Place practice forecast
            </Button>
          </form>

          {lastForecast?.marketId === market.id && (
            <div role="status" aria-live="polite" className="mt-6 rounded-xl border border-primary/30 bg-primary/10 p-4 sm:p-5">
              <h3 className="font-poppins text-lg font-bold text-foreground">Practice result</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Sample answer: <strong className="text-foreground">{lastForecast.answer.toFixed(1)}%</strong> · Your estimate: {lastForecast.estimate.toFixed(1)}% · Distance: {Math.abs(lastForecast.estimate - lastForecast.answer).toFixed(1)} points
              </p>
              <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                <ResultValue label="Closeness score" value={`${lastForecast.score.toFixed(0)}%`} />
                <ResultValue label="Demo multiplier" value={`${lastForecast.multiplier.toFixed(2)}×`} />
                <ResultValue label="Points returned" value={lastForecast.returned.toFixed(2)} />
                <ResultValue label="Net result" value={`${lastForecast.returned - lastForecast.stake >= 0 ? "+" : ""}${(lastForecast.returned - lastForecast.stake).toFixed(2)}`} />
              </div>
              <p className="mt-3 text-xs text-muted-foreground">Sample result only. No trade, external feed, or payment occurred.</p>
            </div>
          )}

          <div className="mt-6 border-t border-border pt-5">
            <div className="mb-3 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="font-poppins font-semibold text-foreground">Recent practice forecasts</h3>
                <p className="text-xs text-muted-foreground">Saved in this browser only.</p>
              </div>
              <Button type="button" variant="outline" size="sm" onClick={resetAccount} className="shrink-0">
                <RotateCcw aria-hidden="true" className="mr-2 h-4 w-4" /> Reset points
              </Button>
            </div>
            {account.forecasts.length ? (
              <ul className="divide-y divide-border">
                {account.forecasts.slice(0, 3).map((forecast) => (
                  <li key={forecast.id} className="flex flex-wrap items-center justify-between gap-2 py-3 text-sm">
                    <span className="text-foreground">{forecast.marketTitle}<span className="text-muted-foreground"> · {forecast.estimate.toFixed(1)}% → {forecast.answer.toFixed(1)}%</span></span>
                    <span className="text-muted-foreground">Risked {forecast.stake} · returned {forecast.returned.toFixed(2)} pts</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="rounded-md bg-background/60 px-3 py-3 text-sm text-muted-foreground">No forecasts yet. Choose an estimate and practice stake to get started.</p>
            )}
          </div>
        </Card>
      </div>
    </section>
  )
}

function ResultValue({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg bg-background/70 p-3">
      <p className="text-xs text-muted-foreground">{label}</p>
      <p className="mt-1 font-poppins font-bold text-primary">{value}</p>
    </div>
  )
}
