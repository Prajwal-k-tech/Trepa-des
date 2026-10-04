export default function BackgroundEffects() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-black to-slate-950" />
      <div className="absolute -left-48 top-1/4 h-[38rem] w-[38rem] rounded-full bg-primary/[0.06] blur-[120px]" />
      <div className="absolute -right-48 bottom-0 h-[34rem] w-[34rem] rounded-full bg-emerald-500/[0.04] blur-[120px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
    </div>
  )
}
