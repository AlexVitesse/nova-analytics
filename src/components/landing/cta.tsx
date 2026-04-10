"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export function CTA() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-primary" />
      
      {/* Pattern Overlay */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.1),transparent_50%)]" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
            <Sparkles className="size-4 text-white" />
            <span className="text-sm font-medium text-white">Start your free trial today</span>
          </div>

          {/* Headline */}
          <h2 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Ready to unlock your data&apos;s potential?
          </h2>

          {/* Description */}
          <p className="mt-6 text-pretty text-lg text-white/80">
            Join thousands of teams already using Nova Analytics to make better, 
            data-driven decisions. Get started in minutes.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a href="/auth/sign-up">
              <Button
                size="lg"
                className="group gap-2 bg-white px-8 text-primary hover:bg-white/90"
              >
                Start Free Trial
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>
            <a href="/auth/sign-in">
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 bg-transparent px-8 text-white hover:bg-white/10"
              >
                Sign In
              </Button>
            </a>
          </div>

          {/* Trust Line */}
          <p className="mt-8 text-sm text-white/60">
            No credit card required &bull; Setup in 5 minutes &bull; Cancel anytime
          </p>
        </div>
      </div>
    </section>
  )
}
