import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Nova Analytics'
};

export default function AboutPage() {
  return (
    <div className='min-h-screen px-4 py-12 sm:px-6 lg:px-8'>
      <div className='mx-auto max-w-3xl'>
        <div className='mb-12 text-center'>
          <h1 className='text-foreground text-3xl font-bold tracking-tight sm:text-4xl'>About Nova Analytics</h1>
          <p className='text-muted-foreground mt-4 text-lg'>Intelligent analytics for modern teams</p>
        </div>

        <div className='space-y-8'>
          <section className='bg-card rounded-2xl border p-8 shadow-sm'>
            <h2 className='text-foreground mb-4 text-xl font-semibold'>Our Mission</h2>
            <p className='text-muted-foreground text-lg leading-relaxed'>
              Nova Analytics empowers teams to transform raw data into actionable insights.
              Our platform combines real-time analytics, AI-powered predictions, and seamless
              collaboration tools to help organizations make smarter decisions faster.
            </p>
          </section>

          <section className='bg-card rounded-2xl border p-8 shadow-sm'>
            <h2 className='text-foreground mb-4 text-xl font-semibold'>The Platform</h2>
            <p className='text-muted-foreground text-lg leading-relaxed'>
              Built with modern web technologies, Nova Analytics provides a powerful dashboard
              experience with customizable widgets, real-time data streaming, and enterprise-grade
              security. Our platform scales with your needs, from startups to large organizations.
            </p>
          </section>

          <section className='bg-card rounded-2xl border p-8 shadow-sm'>
            <h2 className='text-foreground mb-4 text-xl font-semibold'>Security & Privacy</h2>
            <p className='text-muted-foreground text-lg leading-relaxed'>
              We take your data security seriously. Nova Analytics uses industry-standard
              encryption, secure authentication, and role-based access controls to protect
              your information. No personal data is shared or sold to third parties.
            </p>
          </section>
        </div>

        <div className='mt-12 text-center'>
          <p className='text-muted-foreground text-sm'>
            &copy; {new Date().getFullYear()} Nova Analytics. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
