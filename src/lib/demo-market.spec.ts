import { describe, expect, it } from "vitest"
import { scoreForecast } from "./demo-market"

describe("scoreForecast", () => {
  it("returns the maximum demo score for an exact estimate", () => {
    expect(scoreForecast(5, 5)).toEqual({ error: 0, score: 100, multiplier: 2 })
  })

  it("reduces the score linearly as an estimate moves away", () => {
    expect(scoreForecast(4.5, 5)).toEqual({ error: 0.5, score: 90, multiplier: 1.8 })
  })

  it("floors the score and return at zero after five points of error", () => {
    expect(scoreForecast(0, 5)).toEqual({ error: 5, score: 0, multiplier: 0 })
  })
})
