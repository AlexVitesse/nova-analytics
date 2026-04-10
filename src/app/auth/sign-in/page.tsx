import { Metadata } from 'next';
import SignInViewPage from '@/features/auth/components/sign-in-view';

export const metadata: Metadata = {
  title: 'Nova Analytics | Sign In',
  description: 'Sign in to your Nova Analytics dashboard.'
};

export default function Page() {
  return <SignInViewPage />;
}
