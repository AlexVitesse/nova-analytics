"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { TrendingUp, TrendingDown, Activity, DollarSign, Users, Eye, ArrowUpRight } from "lucide-react"
import { FadeIn, ScaleIn, Parallax } from "./motion"

const metrics = [
  { 
    icon: DollarSign,
    label: "Total Revenue", 
    value: "$128.4K", 
    change: "+12.5%", 
    trend: "up" as const,
  },
  { 
    icon: Users,
    label: "Active Users", 
    value: "8,942", 
    change: "+8.2%", 
    trend: "up" as const,
  },
  { 
    icon: Eye,
    label: "Page Views", 
    value: "234.5K", 
    change: "+24.1%", 
    trend: "up" as const,
  },
  { 
    icon: Activity,
    label: "Bounce Rate", 
    value: "18.3%", 
    change: "-3.2%", 
    trend: "down" as const,
  },
]

export function DashboardPreview() {
  return (
    <section className="relative py-24 sm:py-32">
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/50 via-background to-background" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              Dashboard
            </p>
            <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              See Nova Analytics in action
            </h2>
            <p className="mt-6 text-pretty text-lg text-muted-foreground">
              A powerful dashboard that puts all your data at your fingertips with beautiful visualizations.
            </p>
          </div>
        </FadeIn>

        {/* Dashboard Preview */}
        <Parallax speed={0.15}>
        <ScaleIn delay={0.2}>
        <div className="relative mt-16">
          {/* Glow Effect */}
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 opacity-50 blur-3xl" />
          
          <Card className="relative overflow-hidden rounded-2xl border-border/50 bg-card shadow-2xl">
            {/* Browser Chrome */}
            <div className="flex items-center justify-between border-b border-border bg-muted/30 px-4 py-3">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="size-3 rounded-full bg-red-500/80" />
                  <div className="size-3 rounded-full bg-yellow-500/80" />
                  <div className="size-3 rounded-full bg-green-500/80" />
                </div>
                <div className="hidden rounded-lg bg-background/50 px-4 py-1.5 text-xs text-muted-foreground sm:block">
                  app.novaanalytics.io/dashboard
                </div>
              </div>
              <Badge variant="outline" className="gap-1.5 border-green-500/30 bg-green-500/10 text-green-600 dark:text-green-400">
                <span className="size-1.5 animate-pulse rounded-full bg-green-500" />
                Live
              </Badge>
            </div>

            <div className="p-6 lg:p-8">
              {/* Dashboard Header */}
              <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-foreground">Analytics Overview</h3>
                  <p className="mt-1 text-sm text-muted-foreground">Real-time performance metrics</p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">Last 30 days</Button>
                  <Button size="sm">Export</Button>
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {metrics.map((metric) => (
                  <Card key={metric.label} className="group overflow-hidden border-border/50 p-5 transition-all duration-300 hover:border-primary/30 hover:shadow-lg">
                    <div className="flex items-start justify-between">
                      <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                        <metric.icon className="size-5" />
                      </div>
                      <span className={`flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium ${
                        metric.trend === "up" 
                          ? "bg-green-500/10 text-green-600 dark:text-green-400" 
                          : "bg-red-500/10 text-red-600 dark:text-red-400"
                      }`}>
                        {metric.trend === "up" ? (
                          <TrendingUp className="size-3" />
                        ) : (
                          <TrendingDown className="size-3" />
                        )}
                        {metric.change}
                      </span>
                    </div>
                    <div className="mt-4">
                      <p className="text-2xl font-bold tracking-tight text-foreground">{metric.value}</p>
                      <p className="mt-1 text-sm text-muted-foreground">{metric.label}</p>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Chart Section */}
              <div className="mt-8 grid gap-6 lg:grid-cols-5">
                {/* Main Chart */}
                <Card className="border-border/50 p-6 lg:col-span-3">
                  <div className="mb-6 flex items-center justify-between">
                    <h4 className="font-semibold text-foreground">Revenue Over Time</h4>
                    <Button variant="ghost" size="sm" className="gap-1 text-xs">
                      View Details
                      <ArrowUpRight className="size-3" />
                    </Button>
                  </div>
                  <div className="flex h-56 items-end justify-between gap-2">
                    {[35, 50, 40, 65, 55, 80, 70, 90, 75, 85, 95, 88].map((height, i) => (
                      <div key={i} className="group/bar flex flex-1 flex-col items-center gap-3">
                        <div className="relative w-full">
                          <div
                            className="w-full rounded-lg bg-primary/20 transition-all duration-500 group-hover/bar:bg-primary"
                            style={{ height: `${height * 2}px` }}
                          />
                        </div>
                        <span className="text-[10px] font-medium text-muted-foreground">
                          {["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"][i]}
                        </span>
                      </div>
                    ))}
                  </div>
                </Card>

                {/* Side Stats */}
                <Card className="border-border/50 p-6 lg:col-span-2">
                  <h4 className="mb-6 font-semibold text-foreground">Traffic Sources</h4>
                  <div className="space-y-5">
                    {[
                      { source: "Direct", value: 42, color: "bg-primary" },
                      { source: "Organic Search", value: 28, color: "bg-accent" },
                      { source: "Social Media", value: 18, color: "bg-emerald-500" },
                      { source: "Referral", value: 12, color: "bg-orange-500" },
                    ].map((item) => (
                      <div key={item.source} className="group">
                        <div className="mb-2 flex justify-between text-sm">
                          <span className="text-muted-foreground">{item.source}</span>
                          <span className="font-medium text-foreground">{item.value}%</span>
                        </div>
                        <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                          <div
                            className={`h-full rounded-full ${item.color} transition-all duration-500 group-hover:opacity-80`}
                            style={{ width: `${item.value}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </div>
          </Card>
        </div>
        </ScaleIn>
        </Parallax>
      </div>
    </section>
  )
}
