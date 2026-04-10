# Nova Analytics

Intelligent analytics dashboard for modern teams. Built as a whitelabeled solution for Nova Analytics, featuring a responsive landing page, secure authentication, and a full-featured dashboard.

**Live Demo:** [https://nova-analytics-nu.vercel.app](https://nova-analytics-nu.vercel.app)

**Test Credentials:**
- Email: `reviewer@novaanalytics.io`
- Password: `reviewer123!`

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
