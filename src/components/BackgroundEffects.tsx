const BackgroundEffects = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Deep atmospheric background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-black to-gray-950" />

      {/* Radial atmospheric effects inspired by trepa.io */}
      <div className="absolute inset-0 bg-gradient-radial from-green-950/20 via-gray-950/50 to-black" />

      {/* Large atmospheric blurs */}
      <div className="absolute top-1/4 left-1/5 w-[800px] h-[800px] bg-trepa-green/8 rounded-full blur-[160px] animate-pulse" />
      <div className="absolute top-1/2 right-1/4 w-[700px] h-[700px] bg-emerald-600/6 rounded-full blur-[140px]" />
      <div className="absolute bottom-1/3 left-1/2 w-[600px] h-[600px] bg-trepa-green/10 rounded-full blur-[120px]" />

      {/* Center focus gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/60" />

      {/* Subtle noise texture */}
      <div
        className="absolute inset-0 opacity-[0.15] mix-blend-soft-light"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)`,
          backgroundSize: "24px 24px",
        }}
      />

      {/* Top atmospheric fade */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-black/40 to-transparent" />

      {/* Bottom atmospheric fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/30 to-transparent" />
    </div>
  );
};

export default BackgroundEffects;
