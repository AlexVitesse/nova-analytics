# Nova Analytics

<p align="center">
  <img src="./hero-banner.png" alt="Nova Analytics Hero Banner" width="100%">
</p>

<p align="center">
  <a href="https://nextjs.org/">
    <img src="https://img.shields.io/badge/Next.js-16-black?logo=next.js" alt="Next.js">
  </a>
  <a href="https://tailwindcss.com/">
    <img src="https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?logo=tailwind-css" alt="Tailwind CSS">
  </a>
  <a href="https://supabase.com/">
    <img src="https://img.shields.io/badge/Supabase-Auth-3ECF8E?logo=supabase" alt="Supabase">
  </a>
  <a href="https://tanstack.com/">
    <img src="https://img.shields.io/badge/TanStack-Query-FF4154?logo=react-query" alt="TanStack Query">
  </a>
  <a href="LICENSE">
    <img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="License: MIT">
  </a>
</p>

<p align="center">
  <strong>Live Demo:</strong> <a href="https://nova-analytics-nu.vercel.app">https://nova-analytics-nu.vercel.app</a> |
  <strong>Test Email:</strong> reviewer@novaanalytics.io | 
  <strong>Password:</strong> reviewer123!
</p>

---

Intelligent analytics dashboard for modern teams. Built as a whitelabeled solution for Nova Analytics, featuring a responsive landing page, secure authentication, and a full-featured dashboard.

> [!TIP]
> Nova Analytics now supports an advanced multi-theme system. You can switch between "Midnight", "Ethereal", and "Neon" themes directly from the dashboard settings or via the command palette (Cmd+K).

> [!IMPORTANT]
> **Beta Release Notes:**
> *   Current version uses mock data for the dashboard. To connect your real database, update the services in `src/features/*/api/service.ts`.
> *   Email confirmation is currently disabled in Supabase Auth settings to facilitate faster review.
> *   Ensure you have configured your `.env.local` with valid Supabase credentials before running `npm run dev`.

## Tech Stack

| Category | Technology |
|----------|-----------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| UI Components | shadcn/ui + Radix UI |
| Authentication | Supabase Auth (JWT) |
| State Management | Zustand, TanStack React Query |
| Data Tables | TanStack React Table |
| Charts | Recharts |
| Forms | TanStack Form + Zod |
| Deployment | Vercel |

## Features

- Responsive landing page with hero, features, dashboard preview, and CTA sections
- Secure login/signup with email and password authentication
- Full analytics dashboard with charts, metrics, and data tables
- Product management with CRUD operations
- User management
- Kanban board with drag-and-drop
- Chat interface
- Theme system with light/dark mode and multiple color themes
- Command palette (Cmd+K)
- Notification center
- Mobile-responsive design

## Getting Started

### Prerequisites

- Node.js 18+
- npm or bun

### Installation

```bash
# Clone the repository
git clone https://github.com/AlexVitesse/nova-analytics.git
cd nova-analytics

# Install dependencies
npm install

# Set up environment variables
cp env.example.txt .env.local
# Edit .env.local with your Supabase credentials
```

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL | Yes |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anonymous/public key | Yes |
| `NEXT_PUBLIC_SENTRY_DISABLED` | Set to `true` to disable Sentry | No |

### Run Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the landing page.

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx            # Landing page
│   ├── auth/               # Authentication pages
│   │   ├── sign-in/
│   │   └── sign-up/
│   ├── dashboard/          # Dashboard pages (protected)
│   │   ├── overview/
│   │   ├── product/
│   │   ├── users/
│   │   ├── kanban/
│   │   ├── chat/
│   │   └── ...
│   ├── about/
│   ├── privacy-policy/
│   └── terms-of-service/
├── components/
│   ├── landing/            # Landing page components
│   ├── layout/             # Dashboard layout (sidebar, header)
│   ├── ui/                 # shadcn/ui components
│   └── themes/             # Theme system
├── features/               # Feature modules
│   ├── auth/
│   ├── overview/
│   ├── products/
│   ├── users/
│   └── ...
├── hooks/                  # Custom React hooks
├── lib/
│   └── supabase/           # Supabase client utilities
├── config/                 # Navigation and app config
└── middleware.ts            # Auth route protection
```

## Authentication Flow

1. User visits the landing page at `/`
2. Clicks "Get Started" or "Log in"
3. Signs up or signs in via Supabase Auth
4. Redirected to `/dashboard/overview` on success
5. Middleware protects all `/dashboard/*` routes
6. Sign out redirects back to `/auth/sign-in`

## Submission Notes

### Known Limitations

- Organization/team features are placeholder (single workspace)
- Billing page shows static pricing cards (no payment processing)
- Email confirmation is disabled for ease of review
- Profile editing is view-only

### Tradeoffs

- **Monolithic Next.js app** over separated frontend/backend for faster delivery and simpler deployment
- **Supabase free tier** for authentication — production would use a dedicated auth service
- **Static demo data** instead of a real database for dashboard content

### What I Would Improve With More Time

- Separate backend API service for scalability
- End-to-end tests with Playwright
- CI/CD pipeline with GitHub Actions
- Real database integration for dashboard data
- Email confirmation flow for production
- OAuth providers (Google, GitHub)
- Role-based access control
- Real-time data updates via Supabase Realtime

## License

MIT
