"use client"

const companies = [
  { name: "Vercel", logo: "V" },
  { name: "Stripe", logo: "S" },
  { name: "Notion", logo: "N" },
  { name: "Linear", logo: "L" },
  { name: "Figma", logo: "F" },
  { name: "Raycast", logo: "R" },
]

export function TrustBar() {
  return (
    <section className="border-y border-border/50 bg-muted/20 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium uppercase tracking-wider text-muted-foreground">
          Trusted by industry leaders
        </p>
        <div className="mt-10 grid grid-cols-3 items-center gap-8 sm:grid-cols-6">
          {companies.map((company) => (
            <div
              key={company.name}
              className="group flex flex-col items-center justify-center"
            >
              <div className="flex size-12 items-center justify-center rounded-xl bg-foreground/5 text-xl font-bold text-muted-foreground transition-all duration-300 group-hover:bg-primary/10 group-hover:text-primary">
                {company.logo}
              </div>
              <span className="mt-2 text-sm font-medium text-muted-foreground/70 transition-colors group-hover:text-muted-foreground">
                {company.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
