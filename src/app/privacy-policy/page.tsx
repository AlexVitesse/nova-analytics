import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Nova Analytics',
  robots: {
    index: false
  }
};

export default function PrivacyPolicyPage() {
  return (
    <div className='min-h-screen px-4 py-12 sm:px-6 lg:px-8'>
      <div className='mx-auto max-w-3xl space-y-8'>
        <h1 className='text-foreground text-3xl font-bold'>Privacy Policy</h1>

        <section>
          <h2 className='text-foreground mb-3 text-xl font-semibold'>Introduction</h2>
          <p className='text-muted-foreground text-base leading-relaxed'>
            This Privacy Policy explains how Nova Analytics handles your personal information
            when you use our platform. We are committed to protecting your privacy and ensuring
            transparency about our data practices.
          </p>
        </section>

        <section>
          <h2 className='text-foreground mb-3 text-xl font-semibold'>Data Collection</h2>
          <p className='text-muted-foreground text-base leading-relaxed'>
            Nova Analytics collects minimal data necessary for authentication and service delivery.
            When you sign in, we receive basic profile information such as your email address.
            This data is used solely to identify you within the application and provide
            personalized access to features.
          </p>
        </section>

        <section>
          <h2 className='text-foreground mb-3 text-xl font-semibold'>Authentication & Security</h2>
          <p className='text-muted-foreground text-base leading-relaxed'>
            Nova Analytics uses industry-standard authentication with encrypted credentials
            and secure session management. All authentication processes, including sign-up,
            sign-in, and password management, are handled securely with JWT-based tokens.
          </p>
        </section>

        <section>
          <h2 className='text-foreground mb-3 text-xl font-semibold'>No Data Misuse</h2>
          <p className='text-muted-foreground text-base leading-relaxed'>
            Your personal data is never sold, rented, or shared with third parties for marketing
            or commercial purposes. Your information is used exclusively for the intended
            functionality of Nova Analytics.
          </p>
        </section>

        <section>
          <h2 className='text-foreground mb-3 text-xl font-semibold'>Contact Us</h2>
          <p className='text-muted-foreground text-base leading-relaxed'>
            If you have any questions about this Privacy Policy, please contact us at{' '}
            <a
              href='mailto:admin@novaanalytics.io'
              className='text-primary font-medium hover:underline'
            >
              admin@novaanalytics.io
            </a>
            .
          </p>
        </section>

        <div className='border-border border-t pt-4'>
          <p className='text-muted-foreground text-sm'>
            &copy; {new Date().getFullYear()} Nova Analytics. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
