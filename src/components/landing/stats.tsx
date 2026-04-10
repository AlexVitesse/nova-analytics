"use client"

import { Card } from "@/components/ui/card"
import { Users, Clock, Zap, Star } from "lucide-react"

const stats = [
  { 
    value: "10K+", 
    label: "Active Teams",
    description: "Companies trust us",
    icon: Users,
  },
  { 
    value: "99.9%", 
    label: "Uptime SLA",
    description: "Enterprise reliability",
    icon: Clock,
  },
  { 
    value: "50M+", 
    label: "Events/Day",
    description: "Processed in real-time",
    icon: Zap,
  },
  { 
    value: "4.9/5", 
    label: "Customer Rating",
    description: "From 2,000+ reviews",
    icon: Star,
  },
]

export function Stats() {
  return (
    <section className="relative py-24 sm:py-32">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-muted/20 to-background" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Card 
              key={stat.label}
              className="group relative overflow-hidden border-border/50 bg-card/50 p-8 text-center backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:shadow-xl"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                <stat.icon className="size-6" />
              </div>

              {/* Value */}
              <p className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl">
                {stat.value}
              </p>

              {/* Label */}
              <p className="mt-2 text-base font-semibold text-foreground">
                {stat.label}
              </p>

              {/* Description */}
              <p className="mt-1 text-sm text-muted-foreground">
                {stat.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
