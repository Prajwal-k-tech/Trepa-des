import { useEffect, useRef } from 'react'

const BackgroundEffects = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Enhanced particle system with multiple types
    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      life: number
      maxLife: number
      size: number
      type: 'dot' | 'line' | 'glow' | 'star' | 'drift'
      hue: number
      phase: number
      brightness: number
    }> = []

    const createParticle = (type: 'dot' | 'line' | 'glow' | 'star' | 'drift' = 'dot') => {
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * (type === 'drift' ? 0.3 : 0.8),
        vy: (Math.random() - 0.5) * (type === 'drift' ? 0.3 : 0.8),
        life: Math.random() * 400 + 300,
        maxLife: Math.random() * 400 + 300,
        size: type === 'glow' ? Math.random() * 5 + 3 : 
              type === 'star' ? Math.random() * 3 + 2 :
              type === 'drift' ? Math.random() * 1.5 + 0.5 :
              Math.random() * 2.5 + 1,
        type,
        hue: Math.random() * 80 + 100, // Expanded green to cyan range
        phase: Math.random() * Math.PI * 2,
        brightness: Math.random() * 0.4 + 0.6
      }
    }

    // Initialize diverse particle types for more visual interest
    for (let i = 0; i < 30; i++) {
      particles.push(createParticle('dot'))
    }
    for (let i = 0; i < 12; i++) {
      particles.push(createParticle('glow'))
    }
    for (let i = 0; i < 8; i++) {
      particles.push(createParticle('star'))
    }
    for (let i = 0; i < 15; i++) {
      particles.push(createParticle('drift'))
    }

    let time = 0

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      time += 0.01

      // Update and draw particles with enhanced movement
      particles.forEach((particle, index) => {
        // Enhanced movement patterns based on particle type
        const oscillation = Math.sin(time * 2 + particle.phase) * 0.5
        const driftFactor = particle.type === 'drift' ? 0.1 : 0.3
        
        particle.x += particle.vx + oscillation * driftFactor
        particle.y += particle.vy + Math.cos(time * 1.5 + particle.phase) * driftFactor
        particle.life--
        particle.phase += 0.02

        // Wrap around edges with smooth transitions
        if (particle.x < -30) particle.x = canvas.width + 30
        if (particle.x > canvas.width + 30) particle.x = -30
        if (particle.y < -30) particle.y = canvas.height + 30
        if (particle.y > canvas.height + 30) particle.y = -30

        const alpha = (particle.life / particle.maxLife) * particle.brightness
        const pulseEffect = Math.sin(time * 3 + particle.phase) * 0.2 + 0.8

        if (particle.type === 'glow') {
          // Enhanced glowing particles with pulsing effect
          const gradient = ctx.createRadialGradient(
            particle.x, particle.y, 0,
            particle.x, particle.y, particle.size * 5 * pulseEffect
          )
          gradient.addColorStop(0, `hsla(${particle.hue}, 70%, 65%, ${alpha * 0.7})`)
          gradient.addColorStop(0.2, `hsla(${particle.hue}, 60%, 55%, ${alpha * 0.4})`)
          gradient.addColorStop(0.6, `hsla(${particle.hue}, 50%, 45%, ${alpha * 0.1})`)
          gradient.addColorStop(1, `hsla(${particle.hue}, 40%, 35%, 0)`)
          
          ctx.fillStyle = gradient
          ctx.beginPath()
          ctx.arc(particle.x, particle.y, particle.size * 5 * pulseEffect, 0, Math.PI * 2)
          ctx.fill()
        } else if (particle.type === 'star') {
          // Star-like particles with twinkling effect
          const twinkle = Math.sin(time * 4 + particle.phase) * 0.5 + 0.5
          const starSize = particle.size * (0.8 + twinkle * 0.4)
          
          // Draw star shape
          ctx.save()
          ctx.translate(particle.x, particle.y)
          ctx.rotate(time * 0.5 + particle.phase)
          
          ctx.beginPath()
          for (let i = 0; i < 8; i++) {
            const angle = (i * Math.PI) / 4
            const radius = i % 2 === 0 ? starSize : starSize * 0.4
            const x = Math.cos(angle) * radius
            const y = Math.sin(angle) * radius
            if (i === 0) ctx.moveTo(x, y)
            else ctx.lineTo(x, y)
          }
          ctx.closePath()
          
          ctx.fillStyle = `hsla(${particle.hue}, 60%, 70%, ${alpha * 0.6 * twinkle})`
          ctx.fill()
          
          // Add star glow
          const starGlow = ctx.createRadialGradient(0, 0, 0, 0, 0, starSize * 3)
          starGlow.addColorStop(0, `hsla(${particle.hue}, 60%, 70%, ${alpha * 0.3})`)
          starGlow.addColorStop(1, `hsla(${particle.hue}, 60%, 70%, 0)`)
          ctx.fillStyle = starGlow
          ctx.beginPath()
          ctx.arc(0, 0, starSize * 3, 0, Math.PI * 2)
          ctx.fill()
          
          ctx.restore()
        } else if (particle.type === 'drift') {
          // Soft drifting particles
          const driftGlow = ctx.createRadialGradient(
            particle.x, particle.y, 0,
            particle.x, particle.y, particle.size * 8
          )
          driftGlow.addColorStop(0, `hsla(${particle.hue}, 40%, 50%, ${alpha * 0.3})`)
          driftGlow.addColorStop(0.5, `hsla(${particle.hue}, 40%, 50%, ${alpha * 0.1})`)
          driftGlow.addColorStop(1, `hsla(${particle.hue}, 40%, 50%, 0)`)
          
          ctx.fillStyle = driftGlow
          ctx.beginPath()
          ctx.arc(particle.x, particle.y, particle.size * 8, 0, Math.PI * 2)
          ctx.fill()
        } else {
          // Enhanced regular dot particles with improved glow
          ctx.beginPath()
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
          ctx.fillStyle = `hsla(${particle.hue}, 55%, 65%, ${alpha * 0.5})`
          ctx.fill()
          
          // Enhanced glow effect for dots
          const dotGlow = ctx.createRadialGradient(
            particle.x, particle.y, 0,
            particle.x, particle.y, particle.size * 3
          )
          dotGlow.addColorStop(0, `hsla(${particle.hue}, 55%, 65%, ${alpha * 0.3})`)
          dotGlow.addColorStop(0.7, `hsla(${particle.hue}, 50%, 55%, ${alpha * 0.1})`)
          dotGlow.addColorStop(1, `hsla(${particle.hue}, 45%, 45%, 0)`)
          ctx.fillStyle = dotGlow
          ctx.beginPath()
          ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2)
          ctx.fill()
        }

        // Enhanced dynamic connections with color blending
        particles.forEach((otherParticle, otherIndex) => {
          if (index !== otherIndex && index < otherIndex) { // Avoid duplicate lines
            const dx = particle.x - otherParticle.x
            const dy = particle.y - otherParticle.y
            const distance = Math.sqrt(dx * dx + dy * dy)

            if (distance < 140 && (particle.type === 'dot' || particle.type === 'glow') && 
                (otherParticle.type === 'dot' || otherParticle.type === 'glow')) {
              const connectionAlpha = (1 - distance / 140) * alpha * 0.15
              const midHue = (particle.hue + otherParticle.hue) / 2
              
              const gradient = ctx.createLinearGradient(
                particle.x, particle.y,
                otherParticle.x, otherParticle.y
              )
              gradient.addColorStop(0, `hsla(${particle.hue}, 50%, 60%, ${connectionAlpha})`)
              gradient.addColorStop(0.5, `hsla(${midHue}, 55%, 65%, ${connectionAlpha * 1.2})`)
              gradient.addColorStop(1, `hsla(${otherParticle.hue}, 50%, 60%, ${connectionAlpha})`)
              
              ctx.beginPath()
              ctx.moveTo(particle.x, particle.y)
              ctx.lineTo(otherParticle.x, otherParticle.y)
              ctx.strokeStyle = gradient
              ctx.lineWidth = 1
              ctx.stroke()
            }
          }
        })

        // Reset particle if life is over
        if (particle.life <= 0) {
          particles[index] = createParticle(particle.type)
        }
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Deep space-like background with multiple layers - Much darker */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-black to-slate-950" />
      
      {/* Multiple animated gradient layers for depth - Enhanced dynamics */}
      <div className="absolute inset-0">
        {/* Primary dynamic layer with breathing effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/8 via-transparent to-cyan-950/5" 
             style={{ 
               animationDuration: '15s',
               animation: 'breath 15s ease-in-out infinite'
             }} />
        
        {/* Secondary shifting layer with enhanced movement */}
        <div className="absolute inset-0"
             style={{ 
               background: 'radial-gradient(ellipse at 70% 30%, rgba(16, 185, 129, 0.04) 0%, transparent 70%), radial-gradient(ellipse at 30% 70%, rgba(6, 95, 70, 0.025) 0%, transparent 70%)',
               animation: 'gradient-shift 25s ease-in-out infinite, drift-horizontal 35s linear infinite'
             }} />
             
        {/* Third dynamic layer with spiral motion */}
        <div className="absolute inset-0"
             style={{ 
               background: 'conic-gradient(from 45deg at 80% 20%, rgba(34, 197, 94, 0.02) 0deg, transparent 160deg, rgba(20, 184, 166, 0.015) 280deg, transparent 360deg)',
               animation: 'spin 60s linear infinite'
             }} />
             
        {/* Fourth layer with opposing rotation */}
        <div className="absolute inset-0"
             style={{ 
               background: 'conic-gradient(from 180deg at 20% 80%, rgba(74, 222, 128, 0.015) 0deg, transparent 140deg, rgba(14, 116, 144, 0.01) 260deg, transparent 360deg)',
               animation: 'spin 80s linear infinite reverse'
             }} />
      </div>

      {/* Enhanced particle canvas with better visibility and blend mode */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 opacity-70"
        style={{ mixBlendMode: 'screen' }}
      />

      {/* Enhanced atmospheric orbs with dynamic movement */}
      <div className="absolute top-1/4 left-1/6 w-[1000px] h-[1000px] rounded-full opacity-18"
           style={{
             background: 'radial-gradient(circle, rgba(34, 197, 94, 0.12) 0%, rgba(34, 197, 94, 0.06) 30%, rgba(34, 197, 94, 0.02) 60%, transparent 85%)',
             filter: 'blur(140px)',
             animation: 'float 30s ease-in-out infinite, pulse-slow 20s ease-in-out infinite'
           }} />
           
      <div className="absolute top-1/2 right-1/4 w-[800px] h-[800px] rounded-full opacity-15"
           style={{
             background: 'radial-gradient(circle, rgba(20, 184, 166, 0.1) 0%, rgba(20, 184, 166, 0.04) 40%, rgba(20, 184, 166, 0.015) 70%, transparent 85%)',
             filter: 'blur(160px)',
             animation: 'float 35s ease-in-out infinite reverse, pulse-slow 25s ease-in-out infinite reverse'
           }} />
           
      <div className="absolute bottom-1/3 left-1/2 w-[700px] h-[700px] rounded-full opacity-12"
           style={{
             background: 'radial-gradient(circle, rgba(74, 222, 128, 0.08) 0%, rgba(74, 222, 128, 0.03) 50%, rgba(74, 222, 128, 0.01) 80%, transparent 90%)',
             filter: 'blur(120px)',
             animation: 'float 40s ease-in-out infinite, drift-vertical 50s linear infinite'
           }} />

      {/* Additional dynamic atmospheric elements */}
      <div className="absolute top-32 right-1/3 w-[500px] h-[500px] rounded-full opacity-10"
           style={{
             background: 'radial-gradient(circle, rgba(16, 185, 129, 0.06) 0%, rgba(16, 185, 129, 0.02) 60%, transparent 80%)',
             filter: 'blur(100px)',
             animation: 'float 25s ease-in-out infinite, orbit 45s linear infinite'
           }} />
           
      <div className="absolute bottom-32 left-1/4 w-[400px] h-[400px] rounded-full opacity-8"
           style={{
             background: 'radial-gradient(circle, rgba(6, 182, 212, 0.05) 0%, rgba(6, 182, 212, 0.02) 70%, transparent 85%)',
             filter: 'blur(110px)',
             animation: 'float 28s ease-in-out infinite reverse, orbit 55s linear infinite reverse'
           }} />
           
      {/* New flowing energy streams */}
      <div className="absolute top-1/3 left-0 w-full h-px opacity-8"
           style={{
             background: 'linear-gradient(90deg, transparent 0%, rgba(34, 197, 94, 0.3) 20%, rgba(34, 197, 94, 0.1) 50%, rgba(20, 184, 166, 0.3) 80%, transparent 100%)',
             filter: 'blur(8px)',
             animation: 'flow-horizontal 15s linear infinite'
           }} />
           
      <div className="absolute top-2/3 left-0 w-full h-px opacity-6"
           style={{
             background: 'linear-gradient(90deg, transparent 0%, rgba(20, 184, 166, 0.2) 30%, rgba(74, 222, 128, 0.1) 60%, rgba(16, 185, 129, 0.2) 90%, transparent 100%)',
             filter: 'blur(6px)',
             animation: 'flow-horizontal 20s linear infinite reverse'
           }} />

      {/* Enhanced noise texture for depth */}
      <div
        className="absolute inset-0 opacity-[0.02] mix-blend-soft-light"
        style={{
          backgroundImage: `
            radial-gradient(circle at 2px 2px, rgba(34, 197, 94, 0.15) 1px, transparent 0),
            radial-gradient(circle at 1px 1px, rgba(20, 184, 166, 0.1) 1px, transparent 0)
          `,
          backgroundSize: "50px 50px, 80px 80px",
          animation: 'noise-drift 30s linear infinite'
        }}
      />

      {/* Subtle light rays for movement */}
      <div className="absolute inset-0 opacity-5"
           style={{
             background: 'conic-gradient(from 0deg at 50% 50%, transparent 0deg, rgba(34, 197, 94, 0.06) 1deg, transparent 2deg, transparent 120deg, rgba(20, 184, 166, 0.04) 121deg, transparent 122deg)',
             animation: 'spin 80s linear infinite'
           }} />

      {/* Enhanced atmospheric fades for darker feel */}
      <div className="absolute top-0 left-0 right-0 h-80 bg-gradient-to-b from-black/90 via-black/60 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-80 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      <div className="absolute left-0 top-0 bottom-0 w-60 bg-gradient-to-r from-black/70 to-transparent" />
      <div className="absolute right-0 top-0 bottom-0 w-60 bg-gradient-to-l from-black/70 to-transparent" />
      
      {/* Center focus with stronger vignette */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/20 to-black/60" />
      
      {/* Remove dynamic light rays for cleaner dark look */}
    </div>
  );
};

export default BackgroundEffects;
