import { Github, Mail } from "lucide-react"

const logoPath = import.meta.env.PROD
  ? "/Trepa-des/Trepa_logo_white.svg"
  : "/Trepa_logo_white.svg"

export default function Footer() {
  return (
    <footer className="border-t border-border bg-muted/50 backdrop-blur-sm">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div className="space-y-4 md:col-span-2">
          <a href="#top" aria-label="Trepa home" className="inline-flex items-center">
            <img src={logoPath} alt="Trepa" className="h-8 w-auto" />
          </a>
          <p className="max-w-md leading-relaxed text-muted-foreground">
            A precision-forecasting concept with a local, points-only practice demo. No live markets, wagers, or rewards are connected.
          </p>
          <div className="flex gap-3">
            <a href="https://github.com/Prajwal-k-tech/Trepa-des" target="_blank" rel="noreferrer" aria-label="Trepa source on GitHub" className="rounded-lg bg-background p-2.5 text-muted-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
              <Github aria-hidden="true" className="h-5 w-5" />
            </a>
            <a href="mailto:hello@trepa.io" aria-label="Email Trepa" className="rounded-lg bg-background p-2.5 text-muted-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
              <Mail aria-hidden="true" className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div>
          <h2 className="mb-4 font-poppins font-semibold text-foreground">Explore</h2>
          <ul className="space-y-3 text-muted-foreground">
            <li><a href="#demo" className="transition-colors hover:text-primary">Practice demo</a></li>
            <li><a href="#features" className="transition-colors hover:text-primary">How it works</a></li>
            <li><a href="#examples" className="transition-colors hover:text-primary">Sample markets</a></li>
            <li><a href="#beta" className="transition-colors hover:text-primary">Project scope</a></li>
          </ul>
        </div>

        <div>
          <h2 className="mb-4 font-poppins font-semibold text-foreground">Demo notes</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Practice points are stored in your browser. Use the demo's reset control to clear them. This page does not ask for your email or wallet.
          </p>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-sm text-muted-foreground sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>© {new Date().getFullYear()} Trepa concept demo</p>
          <p>Built as a front-end preview · no real transactions</p>
        </div>
      </div>
    </footer>
  )
}
