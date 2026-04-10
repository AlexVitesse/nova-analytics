"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Play, Sparkles } from "lucide-react"
import { FadeIn, ScaleIn } from "./motion"

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const particles: { x: number; y: number; vx: number; vy: number; size: number; opacity: number }[] = []
    const particleCount = 50

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.1,
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        particle.x += particle.vx
        particle.y += particle.vy

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(99, 102, 241, ${particle.opacity})`
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => window.removeEventListener("resize", resizeCanvas)
  }, [])

  return (
    <section className="relative min-h-[90vh] overflow-hidden">
      {/* Animated Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 -z-10 opacity-40 dark:opacity-20"
      />
      
      {/* Gradient Orbs */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute -bottom-40 -right-40 h-[400px] w-[400px] rounded-full bg-accent/20 blur-[120px]" />
        <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[100px]" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:80px_80px] opacity-30 [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      <div className="mx-auto flex max-w-7xl flex-col items-center px-4 pb-24 pt-32 sm:px-6 sm:pt-40 lg:px-8 lg:pt-48">
        {/* Announcement Badge */}
        <FadeIn delay={0.1}>
          <Badge
            variant="outline"
            className="mb-8 gap-2 border-primary/30 bg-primary/5 px-4 py-2 text-sm font-medium backdrop-blur-sm"
          >
            <Sparkles className="size-4 text-primary" />
            <span>Introducing AI-Powered Insights</span>
            <ArrowRight className="size-3.5 text-muted-foreground" />
          </Badge>
        </FadeIn>

        {/* Headline */}
        <FadeIn delay={0.2}>
          <h1 className="text-balance text-center text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="block">Transform your data</span>
            <span className="mt-2 block text-primary">
              into decisions
            </span>
          </h1>
        </FadeIn>

        {/* Subheadline */}
        <FadeIn delay={0.35}>
          <p className="mt-6 max-w-2xl text-pretty text-center text-lg text-muted-foreground sm:text-xl">
            Real-time analytics, seamless team collaboration, and AI-powered insights
            to help you make smarter business decisions faster.
          </p>
        </FadeIn>

        {/* CTA Buttons */}
        <ScaleIn delay={0.5}>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a href="/auth/sign-up">
            <Button size="lg" className="group gap-2 px-8 text-base">
              Start Free Trial
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </a>
          <a href="/auth/sign-in">
            <Button size="lg" variant="outline" className="gap-2 px-8 text-base">
              <Play className="size-4" />
              View Dashboard
            </Button>
          </a>
        </div>

        </ScaleIn>

        {/* Trust Indicators */}
        <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:gap-8">
          <div className="flex -space-x-3">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="flex size-10 items-center justify-center rounded-full border-2 border-background bg-gradient-to-br from-muted to-muted/80 text-xs font-medium text-muted-foreground"
              >
                {String.fromCharCode(64 + i)}
              </div>
            ))}
          </div>
          <div className="flex flex-col items-center sm:items-start">
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <svg key={i} className="size-4 fill-yellow-400 text-yellow-400" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">4.9/5</span> from 2,000+ reviews
            </p>
          </div>
        </div>

        {/* No credit card badge */}
        <p className="mt-8 text-sm text-muted-foreground">
          No credit card required &bull; 14-day free trial &bull; Cancel anytime
        </p>
      </div>
    </section>
  )
}
