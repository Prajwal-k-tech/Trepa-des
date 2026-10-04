import { ArrowRight, Mail, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function BetaSection() {
  return (
    <section id="beta" aria-labelledby="beta-title" className="relative scroll-mt-20 overflow-hidden py-20 lg:py-24">
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-purple-500/10" />
      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Card className="frosted-glass border-primary/20 p-6 text-center sm:p-10 lg:p-14">
          <Sparkles aria-hidden="true" className="mx-auto mb-5 h-10 w-10 text-primary" />
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-primary">What's next</p>
          <h2 id="beta-title" className="font-poppins text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            A concept preview, not a live beta
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            This site has no waitlist or user accounts. A real market product would still need verified data sources, a published settlement policy, market odds, wallet and payment systems, and jurisdiction-specific review.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="bg-primary font-semibold text-primary-foreground button-glow">
              <a href="mailto:hello@trepa.io?subject=Trepa%20demo%20feedback">
                <Mail aria-hidden="true" className="mr-2 h-5 w-5" /> Contact by email
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#demo">Try the practice demo <ArrowRight aria-hidden="true" className="ml-2 h-4 w-4" /></a>
            </Button>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">Email opens your mail app; nothing is sent by this page.</p>
        </Card>
      </div>
    </section>
  )
}
