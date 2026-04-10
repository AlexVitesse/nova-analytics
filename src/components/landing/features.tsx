"use client"

import { Card } from "@/components/ui/card"
import { BarChart3, TrendingUp, Shield, Users, Zap, Globe, ArrowRight } from "lucide-react"

const features = [
  {
    icon: BarChart3,
    title: "Real-time Analytics",
    description: "Track your metrics as they happen with live data streaming and instant updates across all dashboards.",
    gradient: "from-blue-500/20 to-cyan-500/20",
    iconColor: "text-blue-500",
  },
  {
    icon: TrendingUp,
    title: "Predictive Insights",
    description: "AI-powered forecasting helps you anticipate trends and make proactive business decisions.",
    gradient: "from-violet-500/20 to-purple-500/20",
    iconColor: "text-violet-500",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade encryption, SOC 2 compliance, and role-based access controls keep your data safe.",
    gradient: "from-emerald-500/20 to-green-500/20",
    iconColor: "text-emerald-500",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Share dashboards, annotate data, and collaborate with your team in real-time.",
    gradient: "from-orange-500/20 to-amber-500/20",
    iconColor: "text-orange-500",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Query billions of data points in milliseconds with our optimized analytics engine.",
    gradient: "from-yellow-500/20 to-orange-500/20",
    iconColor: "text-yellow-500",
  },
  {
    icon: Globe,
    title: "Global Scale",
    description: "Deploy across multiple regions for low-latency access anywhere in the world.",
    gradient: "from-pink-500/20 to-rose-500/20",
    iconColor: "text-pink-500",
  },
]

export function Features() {
  return (
    <section id="features" className="relative py-24 sm:py-32">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-muted/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Features
          </p>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Everything you need to understand your data
          </h2>
          <p className="mt-6 text-pretty text-lg text-muted-foreground">
            Powerful features designed to help you analyze, visualize, and act on your data with confidence.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card 
              key={feature.title}
              className="group relative overflow-hidden border-border/50 bg-card/50 p-8 backdrop-blur-sm transition-all duration-500 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />
              
              {/* Content */}
              <div className="relative">
                <div className={`mb-6 inline-flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.gradient} ${feature.iconColor}`}>
                  <feature.icon className="size-7" />
                </div>
                
                <h3 className="text-xl font-semibold text-foreground">
                  {feature.title}
                </h3>
                
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>

                <div className="mt-6 flex items-center gap-2 text-sm font-medium text-primary opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <span>Learn more</span>
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
