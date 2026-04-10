import { Navbar } from '@/components/landing/navbar';
import { Hero } from '@/components/landing/hero';
import { TrustBar } from '@/components/landing/trust-bar';
import { Features } from '@/components/landing/features';
import { DashboardPreview } from '@/components/landing/dashboard-preview';
import { Stats } from '@/components/landing/stats';
import { CTA } from '@/components/landing/cta';
import { Footer } from '@/components/landing/footer';

export default function Home() {
  return (
    <main className='min-h-screen'>
      <Navbar />
      <Hero />
      <TrustBar />
      <Features />
      <DashboardPreview />
      <Stats />
      <CTA />
      <Footer />
    </main>
  );
}
