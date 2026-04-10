import { Suspense } from 'react';
import { Navbar } from '@/components/landing/navbar';
import { Hero } from '@/components/landing/hero';
import { TrustBar } from '@/components/landing/trust-bar';
import { Features } from '@/components/landing/features';
import { DashboardPreview } from '@/components/landing/dashboard-preview';
import { Stats } from '@/components/landing/stats';
import { CTA } from '@/components/landing/cta';
import { Footer } from '@/components/landing/footer';
import { Skeleton } from '@/components/ui/skeleton';

function SectionSkeleton() {
  return (
    <div className='py-24'>
      <div className='mx-auto max-w-7xl space-y-8 px-4'>
        <Skeleton className='mx-auto h-8 w-48' />
        <Skeleton className='mx-auto h-12 w-96' />
        <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
          <Skeleton className='h-48 rounded-xl' />
          <Skeleton className='h-48 rounded-xl' />
          <Skeleton className='h-48 rounded-xl' />
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className='min-h-screen'>
      <Navbar />
      <Hero />
      <Suspense fallback={<SectionSkeleton />}>
        <TrustBar />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <Features />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <DashboardPreview />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <Stats />
      </Suspense>
      <CTA />
      <Footer />
    </main>
  );
}
