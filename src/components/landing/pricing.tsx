"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight } from "lucide-react"
import { FadeIn, StaggerContainer, StaggerItem } from "./motion"
import { Badge } from "@/components/ui/badge"

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "For individuals getting started",
    features: [
      "Up to 1,000 events/day",
      "1 dashboard",
      "Community support",
      "7-day data retention",
      "Basic charts",
    ],
    cta: "Get Started",
    href: "/auth/sign-up",
    popular: false,
  },
  {
    name: "Pro",
    price: "$49",
    description: "For growing teams",
    features: [
      "Unlimited events",
      "10 dashboards",
      "Priority support",
      "90-day data retention",
      "API access",
      "Advanced analytics",
      "Team collaboration",
    ],
    cta: "Start Free Trial",
    href: "/auth/sign-up",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations",
    features: [
      "Everything in Pro",
      "Unlimited dashboards",
      "Dedicated support",
      "Unlimited data retention",
      "SSO & SAML",
      "Custom integrations",
      "SLA guarantee",
      "On-premise option",
    ],
    cta: "Contact Sales",
    href: "/auth/sign-up",
    popular: false,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-muted/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              Pricing
            </p>
            <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Simple, transparent pricing
            </h2>
            <p className="mt-6 text-pretty text-lg text-muted-foreground">
              Start free and scale as you grow. No hidden fees, no surprises.
            </p>
          </div>
        </FadeIn>

        {/* Pricing Grid */}
        <StaggerContainer className="mt-20 grid gap-8 lg:grid-cols-3" staggerDelay={0.15}>
          {plans.map((plan) => (
            <StaggerItem key={plan.name}>
            <Card
              className={`group relative flex flex-col overflow-hidden border-border/50 bg-card/50 p-8 backdrop-blur-sm transition-all duration-300 hover:shadow-xl ${
                plan.popular
                  ? "border-primary/50 shadow-lg shadow-primary/10 ring-1 ring-primary/20"
                  : "hover:border-primary/30"
              }`}
            >
              {plan.popular && (
                <Badge className="absolute top-6 right-6 bg-primary text-primary-foreground">
                  Most Popular
                </Badge>
              )}

              {/* Plan name */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-foreground">{plan.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{plan.description}</p>
              </div>

              {/* Price */}
              <div className="mb-8">
                <span className="text-4xl font-bold tracking-tight text-foreground">
                  {plan.price}
                </span>
                {plan.price !== "Custom" && (
                  <span className="text-muted-foreground">/month</span>
                )}
              </div>

              {/* Features */}
              <ul className="mb-8 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Check className="size-4 shrink-0 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a href={plan.href}>
                <Button
                  className="w-full gap-2"
                  variant={plan.popular ? "default" : "outline"}
                  size="lg"
                >
                  {plan.cta}
                  <ArrowRight className="size-4" />
                </Button>
              </a>
            </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Bottom note */}
        <p className="mt-12 text-center text-sm text-muted-foreground">
          All plans include HTTPS, 99.9% uptime SLA, and GDPR compliance.
          <br />
          Need a custom plan?{" "}
          <a href="mailto:admin@novaanalytics.io" className="font-medium text-primary hover:underline">
            Contact us
          </a>
        </p>
      </div>
    </section>
  )
}
