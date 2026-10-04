export type DemoMarket = {
  id: string
  category: string
  title: string
  question: string
  answer: number
}

export type SettledForecast = {
  id: string
  marketId: string
  marketTitle: string
  estimate: number
  answer: number
  stake: number
  score: number
  multiplier: number
  returned: number
  settledAt: string
}

export type PracticeAccount = {
  balance: number
  forecasts: SettledForecast[]
}

export const STARTING_PRACTICE_POINTS = 500
export const PRACTICE_STORAGE_KEY = "trepa-practice-v1"

export const DEMO_MARKETS: DemoMarket[] = [
  {
    id: "inflation",
    category: "Economics",
    title: "Sample inflation reading",
    question: "What will the sample annual inflation reading be?",
    answer: 5.0,
  },
  {
    id: "energy",
    category: "Energy",
    title: "Sample energy price change",
    question: "What will the sample energy price change be?",
    answer: 3.5,
  },
  {
    id: "employment",
    category: "Economics",
    title: "Sample employment growth",
    question: "What will the sample employment growth rate be?",
    answer: 4.2,
  },
  {
    id: "climate",
    category: "Climate",
    title: "Sample rainfall change",
    question: "What will the sample rainfall change be?",
    answer: 6.1,
  },
]

export function scoreForecast(estimate: number, answer: number) {
  const error = Math.abs(estimate - answer)
  const score = Math.max(0, 100 - error * 20)
  const multiplier = score / 50

  return { error, score, multiplier }
}

export function loadPracticeAccount(): PracticeAccount {
  try {
    const stored = window.localStorage.getItem(PRACTICE_STORAGE_KEY)
    if (!stored) throw new Error("No saved practice account")

    const parsed: unknown = JSON.parse(stored)
    if (
      typeof parsed === "object" &&
      parsed !== null &&
      "balance" in parsed &&
      typeof parsed.balance === "number" &&
      Number.isFinite(parsed.balance) &&
      parsed.balance >= 0 &&
      "forecasts" in parsed &&
      Array.isArray(parsed.forecasts)
    ) {
      return {
        balance: parsed.balance,
        forecasts: parsed.forecasts.filter(isSettledForecast).slice(0, 10),
      }
    }
  } catch {
    // Start a fresh local practice account if storage is empty or unavailable.
  }

  return { balance: STARTING_PRACTICE_POINTS, forecasts: [] }
}

function isSettledForecast(value: unknown): value is SettledForecast {
  if (typeof value !== "object" || value === null) return false
  const forecast = value as Record<string, unknown>
  return (
    typeof forecast.id === "string" &&
    typeof forecast.marketId === "string" &&
    typeof forecast.marketTitle === "string" &&
    typeof forecast.estimate === "number" &&
    typeof forecast.answer === "number" &&
    typeof forecast.stake === "number" &&
    typeof forecast.score === "number" &&
    typeof forecast.multiplier === "number" &&
    typeof forecast.returned === "number" &&
    typeof forecast.settledAt === "string"
  )
}
